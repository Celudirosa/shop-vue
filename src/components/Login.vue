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
        <n-button @click="goToRegistrer">
          {{ t('login.btnRegister') }}
        </n-button>
      </n-space>
    </n-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '../config/firebase'
import { useI18n } from 'vue-i18n'
import {
  signInWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth'

const router = useRouter()

const email = ref('')
const password = ref('')
const user = ref(null)
const { t } = useI18n()

const login = async () => {
  try {
    const res = await signInWithEmailAndPassword(auth, email.value, password.value)
    user.value = res.user
    router.push('/dashboard')
  } catch (err) {
    console.error(err)
  }
}

function goToRegistrer() {
  router.push('/registrer')
}

onMounted(() => {
  onAuthStateChanged(auth, (u) => {
    user.value = u
  })
})
</script>

<style src="../assets/styles/login.css"></style>
