<template>
  <div class="login-container">
    <n-card :title="t('login.title')" class="login-card">
      <n-input
        v-model:value="email"
        :placeholder="t('login.email')"
        type="text"
        clearable
      />
      <n-input
        v-model:value="password"
        :placeholder="t('login.password')"
        type="password"
        show-password-on="mousedown"
        class="login-input"
      />
      <n-space justify="space-between" class="login-buttons">
        <n-button type="primary" @click="login">
          {{ t('login.btnLogin') }}
        </n-button>
        <n-button @click="register">
          {{ t('login.btnRegister') }}
        </n-button>
      </n-space>
      <n-divider />
      <p v-if="user">
        {{ t('login.logged', { email: user.email }) }}
      </p>
    </n-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { auth } from '../config/firebase'
import { useI18n } from 'vue-i18n'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth'

const email = ref('')
const password = ref('')
const user = ref(null)
const { t } = useI18n()

const login = async () => {
  try {
    const res = await signInWithEmailAndPassword(auth, email.value, password.value)
    user.value = res.user
  } catch (err) {
    console.error(err)
  }
}

const register = async () => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email.value, password.value)
    user.value = res.user
  } catch (err) {
    console.error(err)
  }
}

onMounted(() => {
  onAuthStateChanged(auth, (u) => {
    user.value = u
  })
})
</script>

<style src="../assets/styles/login.css"></style>
