/* eslint-disable @next/next/no-img-element */
import React from "react";
import foto from "@/public/assets/Rectangle 7.png";
import Image from "next/image";
import Link from "next/link";
import Card from "../components/card";
function Soon() {
  return (
    <div className="flex flex-col w-screen items-center text-black py-24 gap-20 bg-[#f0f2f2] relative">
      <div className=" absolute bottom-0 right-0 w-full opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0099ff" fillOpacity="1" d="M0,224L1440,64L1440,320L0,320Z"></path>
        </svg>
      </div>
      <h2 className="text-center tracking-widest text-3xl">Disponible en fechas proximas</h2>
      <div className="flex gap-8 z-20">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Soon;
