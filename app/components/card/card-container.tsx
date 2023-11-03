import React from "react";
import Card from ".";
import { propiedades } from "@/utils";
import SizeDescription from "./size-description";
import Link from "next/link";
function CardContainer({ scale }: any) {
  return (
    <div className="flex gap-4 w-full  justify-evenly flex-wrap">
      {propiedades.map((propiedad, index) => (
        <Link
          key={index}
          href={`/propiedades/detalles/${propiedad.direccion.toLowerCase()}`}
          className="w-auto "
        >
          <Card propiedad={propiedad} scale={scale} />
        </Link>
      ))}
    </div>
  );
}

export default CardContainer;
