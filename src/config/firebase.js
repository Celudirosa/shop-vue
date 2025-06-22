// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFztfpZbxnN9J3Sro9pOaW7UNaRQeL0cU",
  authDomain: "test-vue-2f9d5.firebaseapp.com",
  projectId: "test-vue-2f9d5",
  storageBucket: "test-vue-2f9d5.firebasestorage.app",
  messagingSenderId: "269620134277",
  appId: "1:269620134277:web:c4b3f358e9538893b584ec",
  measurementId: "G-48TKMTGXJD",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth };
