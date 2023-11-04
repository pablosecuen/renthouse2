/* eslint-disable @next/next/no-img-element */
import React from "react";
import Card from "../components/card";
import CardContainer from "../components/card/card-container";
function Soon() {
  return (
    <div className="flex flex-col w-screen items-center text-black md:py-24 py-10 md:gap-20  bg-[#f0f2f2] relative">
      <div className=" absolute bottom-0 right-0 w-full opacity-10 ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0099ff" fillOpacity="1" d="M0,224L1440,64L1440,320L0,320Z"></path>
        </svg>
      </div>
      <h2 className="text-center tracking-widest text-3xl">Disponible en fechas proximas</h2>

      <CardContainer scale={90} />
    </div>
  );
}

export default Soon;
