/* eslint-disable @next/next/no-img-element */
import React from "react";
import svg from "./Logo.svg";
import Image from "next/image";

type LogoProps = {
  size: "sm" | "md" | "lg" | "xl"; // Tamaños disponibles para el logo
};

const Logo: React.FC<LogoProps> = ({ size }) => {
  let width = 0;
  let height = 0;

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

  return (
    <div style={{ width, height }} className="px-2 py-1">
      <Image src={svg} alt="logo" className="h-full w-full aspect-auto" />
    </div>
  );
};

export default Logo;
