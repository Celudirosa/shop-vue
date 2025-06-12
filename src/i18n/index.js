import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    login: 'Login',
    register: 'Register',
    email: 'Email',
    password: 'Password',
  },
  es: {
    login: 'Iniciar sesión',
    register: 'Registrarse',
    email: 'Correo electrónico',
    password: 'Contraseña',
  }
}

const i18n = createI18n({
  legacy: false,
  locale: 'es',
  fallbackLocale: 'en',
  messages
})

export default i18n
