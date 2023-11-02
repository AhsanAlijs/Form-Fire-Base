import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA0asL3eKhMlZkbK3qcuSxJd22pWFXL2Fk",
    authDomain: "login-signup-form-9c329.firebaseapp.com",
    projectId: "login-signup-form-9c329",
    storageBucket: "login-signup-form-9c329.appspot.com",
    messagingSenderId: "1050920258265",
    appId: "1:1050920258265:web:e0ebf3423cd12e195f8cc8",
    measurementId: "G-DKYV6LYP9F"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);