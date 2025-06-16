<script setup>
import Login from './components/Login.vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

function toggleLang() {
  locale.value = locale.value === 'es' ? 'en' : 'es'
}
</script>

<template>
  <router-view />
  <Login />

  <div class="lang-switch" @click="toggleLang">
    <span :class="{ active: locale === 'es' }">🇪🇸</span>
    <span> / </span>
    <span :class="{ active: locale === 'en' }">🇬🇧</span>
  </div>
</template>

<style src="./assets/styles/app.css"></style>
<style src="./assets/styles/lang-switch.css"></style>