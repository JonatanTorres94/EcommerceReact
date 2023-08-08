// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKUYcB9GzZklTXxE1jphTgoPrdgkWBKjU",
  authDomain: "store-it-33724.firebaseapp.com",
  projectId: "store-it-33724",
  storageBucket: "store-it-33724.appspot.com",
  messagingSenderId: "676560620478",
  appId: "1:676560620478:web:806bccd0b11e1f0606c7ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)