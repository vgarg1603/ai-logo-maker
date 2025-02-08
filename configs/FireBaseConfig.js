// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "vfile-8dcfa.firebaseapp.com",
  databaseURL: "https://vfile-8dcfa-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vfile-8dcfa",
  storageBucket: "vfile-8dcfa.firebasestorage.app",
  messagingSenderId: "228049500143",
  appId: "1:228049500143:web:12c16171fdbab2cc5f281a",
  measurementId: "G-X3JQ1WX0T2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);