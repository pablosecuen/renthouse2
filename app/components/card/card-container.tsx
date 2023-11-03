import React from "react";
import Card from ".";
import { propiedades } from "@/utils";
import SizeDescription from "./size-description";
import Link from "next/link";
function CardContainer() {
  return (
    <div className="flex gap-8 z-20 w-full justify-evenly flex-wrap">
      {propiedades.map((propiedad, index) => (
        <Link
          key={index}
          href={`/propiedades/detalles/${propiedad.direccion.toLowerCase()}`}
          className=""
        >
          <Card propiedad={propiedad} />
        </Link>
      ))}
    </div>
  );
}

export default CardContainer;
