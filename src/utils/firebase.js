// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUAk7MnZSTbPYpqmZnIa1REOrLcTNr0M0",
  authDomain: "netflix-gpt-eecf8.firebaseapp.com",
  projectId: "netflix-gpt-eecf8",
  storageBucket: "netflix-gpt-eecf8.appspot.com",
  messagingSenderId: "168613814025",
  appId: "1:168613814025:web:d87b0716ffb43ea61cfdd8",
  measurementId: "G-QTLHNE766B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
