// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'; // Agrega la importación para Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDISk7kCK08GvEcayPyINzQKdyZXj7BfQo",
  authDomain: "rent-house-873b2.firebaseapp.com",
  projectId: "rent-house-873b2",
  storageBucket: "rent-house-873b2.appspot.com",
  messagingSenderId: "331152682033",
  appId: "1:331152682033:web:5652a9b1679d35e3c03910",
  measurementId: "G-GNNWD1EF17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app); // Obtenemos la instancia de Firestore

export { firestore }; // Exportamos la instancia de Firestore
