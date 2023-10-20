// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7NBR4hWtQNQSeLkIUmxob4fN4xk34lWg",
  authDomain: "university-app-bc343.firebaseapp.com",
  databaseURL: "https://university-app-bc343-default-rtdb.firebaseio.com",
  projectId: "university-app-bc343",
  storageBucket: "university-app-bc343.appspot.com",
  messagingSenderId: "81391851594",
  appId: "1:81391851594:web:0241706479af483a0d2eb3",
  measurementId: "G-7EDE0FHY20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export default db;