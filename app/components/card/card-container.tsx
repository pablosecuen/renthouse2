/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import React from "react";
import Card from ".";
import { Propiedad } from "@/app/types/types";

interface CardContainerProps {
  propiedades: Propiedad[];
  setSelectedPropiedad?: (propiedad: Propiedad) => void;
}

function CardContainer({ propiedades, setSelectedPropiedad }: CardContainerProps) {
  return (
    <div className="flex md:gap-4 z-20 w-full h-full gap-8  md:justify-evenly flex-wrap">
      {propiedades?.map((propiedad: Propiedad, index: number) => (
        <div
          key={index}
          className="flex justify-center"
          onMouseEnter={() => setSelectedPropiedad && setSelectedPropiedad(propiedad)}
        >
          <Card propiedad={propiedad} />
        </div>
      ))}
    </div>
  );
}

export default CardContainer;
