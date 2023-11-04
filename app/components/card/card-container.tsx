import React from "react";
import Card from ".";
import { propiedades } from "@/utils";
import SizeDescription from "./size-description";
import Link from "next/link";
function CardContainer({ scale }: any) {
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
