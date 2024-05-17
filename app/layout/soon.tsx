"use client";
import React from "react";
import CardContainer from "../components/card/card-container";
import usePropiedades from "@/app/hooks/usePropiedades";
function Soon() {
  const propiedades = usePropiedades();
  return (
    <div className="flex flex-col w-screen items-center text-black md:py-24 py-10 px-10 md:px-0 md:gap-20  bg-[#f0f2f2] relative">
      <div className=" absolute bottom-0 right-0 w-full opacity-10 ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0099ff" fillOpacity="1" d="M0,224L1440,64L1440,320L0,320Z"></path>
        </svg>
      </div>
      <h2 className="text-center tracking-widest text-3xl">Disponible en fechas proximas</h2>
      <div className="w-full flex justify-center py-10 max-w-screen-2xl ">
        <CardContainer propiedades={propiedades} />
      </div>
    </div>
  );
}

export default Soon;
