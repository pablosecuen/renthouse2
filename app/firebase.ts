// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'; // Agrega la importación para Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app); // Obtenemos la instancia de Firestore

export { firestore }; // Exportamos la instancia de Firestore


// Lógica para manejar la autenticación
function handleLogin(email:string, password:string) {
  const auth = getAuth(app); // Pasa la instancia de la app a getAuth
  return signInWithEmailAndPassword(auth, email, password);
}

export { handleLogin };


// Lógica para manejar el logout (cierre de sesión)
function handleLogout() {
  const auth = getAuth(); // Obtén la instancia de autenticación

  // Realiza el logout
  return signOut(auth);
}

export { handleLogout };