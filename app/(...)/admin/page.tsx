/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore } from "@/app/firebase";
import { v4 as uuidv4 } from "uuid";
import { refreshToken } from "@/app/middleware/refreshToken";

function Admin() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Realizar la consulta a Firestore para verificar las credenciales
    const adminsCollection = collection(firestore, "admin");
    const q = query(
      adminsCollection,
      where("usuario", "==", username),
      where("password", "==", password)
    );

    try {
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        // Credenciales válidas, generar y guardar el token
        const token = uuidv4(); // Genera un token único (aquí se usa la librería uuid)
        localStorage.setItem("adminToken", token); // Almacena el token en localStorage

        // Redirige a la página de administración
        router.push("/admin/administrador-reservas");
      } else {
        alert("Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error al verificar las credenciales:", error);
      alert("Error al verificar las credenciales");
    }
  };

  useEffect(() => {
    const tokenRenewalTimer = refreshToken();
    // Limpiar el temporizador al desmontar el componente
    return () => {
      clearInterval(tokenRenewalTimer);
    };
  }, []);

  return (
    <div className="min-h-screen text-black flex flex-col justify-center items-center border gap-4">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Usuario"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Contraseña"
      />
      <button onClick={handleLogin} className="py-1 px-4 bg-gray-600 text-white rounded-md">
        Iniciar sesión
      </button>
    </div>
  );
}

export default Admin;
