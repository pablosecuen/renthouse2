import React from "react";
import logo from "./Logo.svg";
import logoblanco from "./Logo_Blanco.png";
import Image from "next/legacy/image";

type LogoProps = {
  size: "sm" | "md" | "lg" | "xl"; // Tamaños disponibles para el logo
  color?: string;
};

const Logo: React.FC<LogoProps> = ({ size, color }) => {
  let width = 0;
  let height = 0;
  let logoSrc = logo;

  // Asignar ancho y alto basado en el tamaño proporcionado
  switch (size) {
    case "sm":
      width = 50;
      height = 30;
      break;
    case "md":
      width = 80;
      height = 50;
      break;
    case "lg":
      width = 120;
      height = 70;
      break;
    case "xl":
      width = 180;
      height = 100;
      break;
    default:
      break;
  }

  // Verificar si se debe cambiar el logo por el logo blanco
  if (color && color.toLowerCase() === "blanco") {
    logoSrc = logoblanco; // Cambiar el logo a la versión blanca
  }

  return (
    <div style={{ width, height }} className="px-2 py-1 animate-fadeInRight">
      <Image src={logoSrc} alt="logo" className="h-full w-full aspect-auto brightness-200" />
    </div>
  );
};

export default Logo;
