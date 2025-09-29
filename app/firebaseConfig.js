// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Configuración de tu proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC2GBcY8Y4kHtooHiM80T275crA9lGdu-0",
  authDomain: "authetication2-7eb2b.firebaseapp.com",
  projectId: "authetication2-7eb2b",
  storageBucket: "authetication2-7eb2b.appspot.com", // ← corregido
  messagingSenderId: "1025710055586",
  appId: "1:1025710055586:android:7d40f873c228aeb32637fb"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
