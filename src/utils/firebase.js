// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9UfZpBxVj8XzhKeI_8qcQPwMsQxga31w",
  authDomain: "netflixgpt-2e7bd.firebaseapp.com",
  projectId: "netflixgpt-2e7bd",
  storageBucket: "netflixgpt-2e7bd.firebasestorage.app",
  messagingSenderId: "104618836381",
  appId: "1:104618836381:web:29980f5c230cb7e29d2f74",
  measurementId: "G-MVJKWZTDGK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();