/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { handleLogin, handleLogout } from "@/app/firebase";
import { Toaster, toast } from "sonner";
import Logo from "@/public/assets/logo";

function Admin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logoutSuccess, setLogoutSuccess] = useState(false);

  const handleLoginClick = async () => {
    try {
      await handleLogin(email, password)
        .then(() => {
          toast.success("Bienvenido admin");
        })
        .catch((error) => {
          toast.error(`Error al iniciar sesión: ${error.message}`);
        });
      router.push("/admin/administrador-reservas");
    } catch (error: any) {
      console.error("Error de inicio de sesión:", error);
      if (error.code === "auth/wrong-password") {
        toast.error("Contraseña incorrecta");
      } else if (error.code === "auth/user-not-found") {
        toast.error("Usuario no encontrado");
      } else {
        toast.error("Error de inicio de sesión: " + error.message);
      }
    }
  };

  const logout = () => {
    handleLogout()
      .then(() => {
        // El cierre de sesión fue exitoso
        setLogoutSuccess(true);
        alert("Cierre de sesión exitoso");
      })
      .catch((error) => {
        // Manejo de errores en caso de fallo en el cierre de sesión
        setLogoutSuccess(false);
        alert(`Error al cerrar sesión: ${error.message}`);
      });
  };

  return (
    <div className="min-h-screen text-black flex flex-col justify-center items-center border gap-4">
      <Toaster position="top-center" expand={true} richColors />
      <Logo size="xl" />
      <div className="flex-col flex border-2 p-4 gap-4 md:w-96 w-full">
        <label>Usuario</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Usuario"
          className="-mt-2"
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          className="-mt-2"
        />
        <button onClick={handleLoginClick} className="py-1 px-4 bg-gray-600 text-white rounded-md">
          Iniciar sesión
        </button>
        <button onClick={logout} className="py-1 px-4 bg-gray-600 text-white rounded-md">
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}

export default Admin;
