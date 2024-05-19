// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const FirebaseConfig = {
  apiKey: "AIzaSyCx0dKsdMmB29C70wk8F1v1T6IM_q8Q_68",
  authDomain: "renagain-3c9be.firebaseapp.com",
  databaseURL: "https://renagain-3c9be-default-rtdb.firebaseio.com",
  projectId: "renagain-3c9be",
  storageBucket: "renagain-3c9be.appspot.com",
  messagingSenderId: "297233521558",
  appId: "1:297233521558:web:c48adc101e0c07b07f9bb7"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(FirebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getDatabase(FIREBASE_APP);