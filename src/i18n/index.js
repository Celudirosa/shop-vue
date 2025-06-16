import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    login: {
      title: 'Login',
      email: 'Email',
      password: 'Password',
      btnLogin: 'Sign In',
      btnRegister: 'Register',
      logged: 'Logged in as: {email}'
    }
  },
  es: {
    login: {
      title: 'Iniciar sesión',
      email: 'Correo electrónico',
      password: 'Contraseña',
      btnLogin: 'Iniciar sesión',
      btnRegister: 'Registrarse',
      logged: 'Sesión iniciada como: {email}'
    }
  }
}

const i18n = createI18n({
  legacy: false,
  locale: 'es',
  fallbackLocale: 'en',
  messages
})

export default i18n
