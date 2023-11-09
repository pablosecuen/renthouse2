/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { handleLogin } from "@/app/firebase";

function Admin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = async () => {
    try {
      await handleLogin(email, password);
      router.push("/admin/administrador-reservas");
    } catch (error: any) {
      console.error("Error de inicio de sesión:", error);
      if (error.code === "auth/wrong-password") {
        alert("Contraseña incorrecta");
      } else if (error.code === "auth/user-not-found") {
        alert("Usuario no encontrado");
      } else {
        alert("Error de inicio de sesión: " + error.message);
      }
    }
  };

  return (
    <div className="min-h-screen text-black flex flex-col justify-center items-center border gap-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Usuario"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Contraseña"
      />
      <button onClick={handleLoginClick} className="py-1 px-4 bg-gray-600 text-white rounded-md">
        Iniciar sesión
      </button>
    </div>
  );
}

export default Admin;
