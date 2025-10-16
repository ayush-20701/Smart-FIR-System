// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBV3-id1cbQ-2Qwmkv013pcJtWmKxE9Xiw",
  authDomain: "smart-fir-system.firebaseapp.com",
  projectId: "smart-fir-system",
  storageBucket: "smart-fir-system.firebasestorage.app",
  messagingSenderId: "366422770753",
  appId: "1:366422770753:web:dc522e97170fc6787f72c0",
  measurementId: "G-1RQZXZLDCB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);