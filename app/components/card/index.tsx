import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";

import SizeDescription from "./size-description";
import { Propiedad } from "@/app/types/types";

interface CardProps {
  propiedad: Propiedad;
}

function Card({ propiedad }: CardProps) {


  return (
    <article className="border  h-auto md:w-96 md:h-[600px] bg-white shadow-black/20 shadow-md hover:-translate-y-[3px] transition duration-300 hover:shadow-2xl">
      <div>
        <div className="">
          <Image
            width={500}
            height={400}
            className=" w-full h-full rounded-b-3xl hover:scale-105 transition duration-300"
            objectFit="cover"
            src={propiedad.imagenes[0]}
            alt=""
          />
        </div>

        <div className="p-5 h-full  ">
          <h3 className="mb-2 md:text-2xl font-bold tracking-tight text-gray-900 ">
            {propiedad.direccion}
          </h3>

          <span className="mb-3 font-normal text-sm opacity-80 text-gray-700 dark:text-gray-400">
            {propiedad.distanciadelcentro} km del Centro
          </span>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {propiedad.descripcion.slice(0, 100)}...
          </p>
          <Link href={`/propiedades/detalles/${propiedad.direccion.toLowerCase()}`} className="">
            <button className="inline-flex cursor-pointer items-center px-3 py-2 mt-2 text-sm font-medium text-center text-black/80 bg-[#a1d1cf] rounded-lg hover:bg-blue-300 transition duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#a1d1cf]dark:hover:bg-blue-700 dark:focus:ring-blue-500">
              Consultar
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </Link>
        </div>
        <SizeDescription propiedad={propiedad} size="lg" />
      </div>
    </article>
  );
}

export default Card;
