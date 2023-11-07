"use client";
import React from "react";
import Card from ".";

import usePropiedades from "@/app/hooks/usePropiedades";

function CardContainer({ scale }: any) {
  const propiedades = usePropiedades();


  return (
    <div className="flex md:gap-4 z-20 w-full h-full gap-8  md:justify-evenly flex-wrap">
      {propiedades.map((propiedad, index) => (
        <div key={index} className="flex justify-center">
          <Card propiedad={propiedad} scale={scale} />
        </div>
      ))}
    </div>
  );
}

export default CardContainer;
