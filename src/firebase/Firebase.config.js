// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbJAFinkKGquL4fRxHsyEq-kW34YxrXFE",
  authDomain: "lingo-bingo-auth-54bf9.firebaseapp.com",
  projectId: "lingo-bingo-auth-54bf9",
  storageBucket: "lingo-bingo-auth-54bf9.firebasestorage.app",
  messagingSenderId: "968168381188",
  appId: "1:968168381188:web:931345980b11e33eacce51",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;