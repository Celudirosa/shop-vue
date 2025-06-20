<script setup>
import { reactive }   from 'vue'
import { useRouter }  from 'vue-router'
import { useI18n }    from 'vue-i18n'
import { useMessage } from 'naive-ui'
import {
  createUserWithEmailAndPassword
} from 'firebase/auth'
import { auth } from '../config/firebase'

const router  = useRouter()
const { t }   = useI18n()
const message = useMessage()

const model = reactive({
  email: '',
  password: ''
})

const rules = {
  email: [
    { required: true,  message: t('login.emailRequired'),  trigger: 'blur' },
    { type: 'email',   message: t('login.emailInvalid'),   trigger: 'blur' }
  ],
  password: [
    { required: true,  message: t('login.pwdRequired'),    trigger: 'blur' },
    { min: 6,          message: t('login.pwdMin'),         trigger: 'blur' }
  ]
}

async function onSubmit () {
  try {
    await createUserWithEmailAndPassword(auth, model.email, model.password)
    message.success(t('login.regSuccess'))
    router.push('/dashboard')           // o a donde quieras redirigir
  } catch (err) {
    message.error(t('login.regError'))
    console.error(err)
  }
}
</script>

<template>
  <div class="register-container">
    <n-card :title="t('login.registerTitle')" class="register-card">
      <n-form 
        size="medium"
        :model="model"
        :rules="rules"
        label-placement="top"
      >
        <n-form-item
          path="email"
          label=""
        >
          <n-input
            v-model:value="model.email"
            type="text"
            :placeholder="t('login.email')"
            clearable
          />
        </n-form-item>

        <n-form-item
          path="password"
          label=""
        >
          <n-input 
            v-model:value="model.password"
            type="password"
            :placeholder="t('login.password')"
            show-password-on="mousedown"
          />
        </n-form-item>

        <n-button
          type="primary"
          block
          @click="onSubmit"
        >
          {{ t('login.btnRegister') }}
        </n-button>

        <n-button
          tertiary
          block
          style="margin-top: 12px"
          @click="router.push('/login')"
        >
          {{ t('login.backToLogin') }}
        </n-button>
      </n-form>
    </n-card>
  </div>
</template>

<style src="../assets/styles/register.css"></style>
