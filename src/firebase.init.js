// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYtFaUiHSEn5vqaOEPROSHkr7kszayF9w",
  authDomain: "private-route-6a710.firebaseapp.com",
  projectId: "private-route-6a710",
  storageBucket: "private-route-6a710.firebasestorage.app",
  messagingSenderId: "373136971761",
  appId: "1:373136971761:web:f5dda5e9491e8f65ecd650"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);