// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
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
initializeApp(firebaseConfig);

export const auth = getAuth();