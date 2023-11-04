import React from "react";
import Card from ".";
import { propiedades } from "@/utils";
import SizeDescription from "./size-description";
import Link from "next/link";
function CardContainer({ scale }: any) {
  return (
    <div className="flex md:gap-4  w-full  justify-evenly flex-wrap">
      {propiedades.map((propiedad, index) => (
        <div key={index}>
          <Card propiedad={propiedad} scale={scale} />
        </div>
      ))}
    </div>
  );
}

export default CardContainer;
