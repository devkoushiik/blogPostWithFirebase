import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-K-ZaeJ2PDGqKnWBB9CzB4sCvysXBZ-o",
  authDomain: "blogpost-5d781.firebaseapp.com",
  projectId: "blogpost-5d781",
  storageBucket: "blogpost-5d781.appspot.com",
  messagingSenderId: "103427150406",
  appId: "1:103427150406:web:85a5214fa84454b727f047",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
