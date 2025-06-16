<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const toggleLang = () => {
  locale.value = locale.value === 'es' ? 'en' : 'es'
}
</script>

<template>
  <div class="lang-switch" @click="toggleLang">
    <span :class="{ active: locale === 'es' }">🇪🇸</span> /
    <span :class="{ active: locale === 'en' }">🇬🇧</span>
  </div>
</template>

<style src="../assets/styles/lang-switch.css"></style>