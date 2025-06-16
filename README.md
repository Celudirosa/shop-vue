# 🛍️ Mini Tienda en Vue

Este es un proyecto de práctica construido con **Vue 3**, **Firebase Authentication** y **Vue Router**, que simula una pequeña tienda con sistema de login, internacionalización y rutas protegidas.

---

## 🚀 Características

- 🧑‍💻 Login y registro de usuarios con Firebase Auth  
- 🌐 Soporte multilenguaje (español/inglés) con `vue-i18n`  
- 🔒 Rutas protegidas según estado de autenticación  
- 🧭 Navegación sencilla con Vue Router  
- ✨ Diseño responsive y simple con Naive UI  

---

## 📦 Instalación

1. Clona el repositorio:

```
git clone https://github.com/tu-usuario/vue-tienda.git
cd vue-tienda
```

2. Instala las dependencias:

```
npm install
```

3. Configura Firebase:

- Crea un proyecto en [Firebase Console](https://console.firebase.google.com/)
- Habilita **Email/Password** en Authentication
- Crea un archivo `src/config/firebase.js` con tu configuración de Firebase:

```js
// src/config/firebase.js
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_DOMINIO.firebaseapp.com",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_BUCKET",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
```

---

## 🧪 Scripts de desarrollo

- Compilar y levantar en local:

```
npm run dev
```

- Compilar para producción:

```
npm run build
```

---

## 📁 Estructura del proyecto

```
src/
├── assets/              # Estilos CSS y recursos
├── components/          # Componentes como Login.vue
├── config/              # Configuración de Firebase
├── locales/             # Archivos de traducción (es.json, en.json)
├── router/              # Rutas protegidas
├── views/               # Vistas como Dashboard.vue, Home.vue
├── App.vue              # App principal
└── main.js              # Punto de entrada
```

---

## 🌍 Traducción

Se usa `vue-i18n`. El selector de idioma se encuentra abajo a la izquierda. Puedes cambiar entre español 🇪🇸 e inglés 🇬🇧 haciendo clic en el botón.  
Los textos están definidos en los archivos `src/locales/es.json` y `src/locales/en.json`.

---

## 🔐 Autenticación

Al iniciar sesión, el usuario es redirigido a `/dashboard`.  
Si no está autenticado, no podrá acceder a rutas protegidas (por ejemplo, `/dashboard`, `/profile`, etc.).

---

## 📌 Posibles mejoras

- 🔥 Añadir Firestore para productos o roles de usuario  
- 🧾 Carrito de compra simple  
- ⚠️ Control de errores más detallado en login/registro  
- 🎨 Mejoras visuales y adaptación a móviles  

---

## 🧑‍💻 Autor

Creado por Celia, aka Celudirosa – proyecto de práctica para aprender Vue 3 + Firebase.
