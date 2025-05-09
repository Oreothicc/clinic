// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyFZmLFUjNgVUoV4-WfGKHO4jXecbkFL4",
  authDomain: "clinicmanagementsoftware-a6f78.firebaseapp.com",
  databaseURL: "https://clinicmanagementsoftware-a6f78-default-rtdb.firebaseio.com",
  projectId: "clinicmanagementsoftware-a6f78",
  storageBucket: "clinicmanagementsoftware-a6f78.firebasestorage.app",
  messagingSenderId: "528340716469",
  appId: "1:528340716469:web:5894f26e0162a0d47627fc",
  measurementId: "G-W6EZQVKJTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const db=getFirestore(app);
export default app;