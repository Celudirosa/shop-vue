import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import naive from 'naive-ui'
import i18n from './i18n/login'

createApp(App).use(naive).use(i18n).mount('#app')
