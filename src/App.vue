<script setup>
import Login from './components/Login.vue'
import LanguageSwitcher from './components/LanguageSwitcher.vue'
import Menu from './components/Menu.vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const menuOptions = [
  { label: 'Home', key: '/', to: '/' },
  { label: 'Shop', key: '/shop', to: '/shop' },
  { label: 'Login', key: '/login', to: '/login' }
]
</script>

<template>
  <n-message-provider>
    <n-layout>
        <n-layout-header bordered>
          <Menu />
        </n-layout-header>

        <n-layout-content style="min-height:100vh;padding:24px">
          <router-view />
        </n-layout-content>
      </n-layout>

    <LanguageSwitcher />
  </n-message-provider>
</template>

<style src="./assets/styles/app.css"></style>
<style src="./assets/styles/lang-switch.css"></style>