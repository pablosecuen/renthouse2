// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'; // Agrega la importación para Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASEAPIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASEAUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASEPROYECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASESTORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASEMESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASEAPPID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASEMEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app); // Obtenemos la instancia de Firestore

export { firestore }; // Exportamos la instancia de Firestore


// Lógica para manejar la autenticación
function handleLogin(email:string, password:string) {
  const auth = getAuth(app); // Pasa la instancia de la app a getAuth
  return signInWithEmailAndPassword(auth, email, password); // Devuelve la promesa de inicio de sesión
}

export { handleLogin };