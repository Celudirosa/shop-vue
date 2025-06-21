<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '../config/firebase'
import { useMessage } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { signInWithEmailAndPassword } from 'firebase/auth'

const router = useRouter()
const message = useMessage()
const { t } = useI18n()

// Reactive form model with all inputs
const model = reactive({
  email: '',
  password: ''
})

// Validation rules for each field
const rules = {
  email: [
    { required: true, message: () => t('login.emailRequired'), trigger: 'blur' },
    { type: 'email', message: () => t('login.emailInvalid'), trigger: 'blur' }
  ],
  password: [
    { required: true, message: () => t('login.pwdRequired'), trigger: 'blur' }
  ]
}

const loginFormRef = ref(null)

async function login () {
  const valid = await loginFormRef.value?.validate()
  if (!valid) return

  try {
    const res = await signInWithEmailAndPassword(auth, email.value, password.value)
    router.push('/')
    message.success(t('login.logged', { email: res.user.email }))
  } catch (err) {
    if (err.code === 'auth/user-not-found') {
      message.error(t('login.errorUserNotFound') || 'User not found')
    } else if (err.code === 'auth/wrong-password') {
      message.error(t('login.errorWrongPassword') || 'Incorrect password')
    } else {
      message.error(t('login.errorGeneral') || 'Login failed')
    }
    console.error(err)
  }
}

function goToRegistrer() {
  router.push('/register')
}
</script>

<template>
  <div class="login-container">
    <n-card :title="t('login.title')" class="login-card">
      <n-form
        ref="loginFormRef"
        :model="model"
        :rules="rules"
        label-placement="left"
        size="medium"
      >
        <!-- Email Input -->
        <n-form-item path="email" label="">
          <n-input
            v-model:value="model.email"
            type="text"
            :placeholder="t('login.email')"
            clearable
          />
        </n-form-item>

        <!-- Password Input -->
        <n-form-item path="password" label="">
          <n-input 
            v-model:value="model.password"
            type="password"
            :placeholder="t('login.password')"
            show-password-on="mousedown"
            class="login-input"
          />
        </n-form-item>

        <n-space justify="space-between" class="login-buttons">
          <n-button type="primary" @click="login">
            {{ t('login.btnLogin') }}
          </n-button>
          <n-button @click="goToRegistrer">
            {{ t('login.btnRegister') }}
          </n-button>
        </n-space>
      </n-form>
    </n-card>
  </div>
</template>

<style src="../assets/styles/login.css"></style>
