import Image from "next/image";
import Link from "next/link";
import React from "react";
import { propiedades } from "@/utils";
import SizeDescription from "./size-description";

function Card({ propiedad }: any) {
  return (
    <article>
      <div className="md:w-[420px] flex flex-col w-96 bg-white border border-gray-200 rounded-lg shadow-2xl shadow-black/20 scale-75 md:scale-100">
        <div className="max-h-72 rounded-b-3xl overflow-hidden">
          <Image
            width={0}
            height={0}
            className="rounded-t-lg w-full h-96 max-h-96"
            objectFit="cover"
            src={propiedad.imagenes[0]}
            alt=""
          />
        </div>

        <div className="p-5 h-60 relative">
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {propiedad.direccion}
          </h3>

          <span className="mb-3 font-normal text-sm opacity-80 text-gray-700 dark:text-gray-400">
            {propiedad.distanciadelcentro} km del Centro
          </span>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {propiedad.descripcion.slice(0, 100)}...
          </p>
          <div className="inline-flex absolute bottom-0 items-center px-3 py-2 text-sm font-medium text-center text-black/80 bg-[#a1d1cf] rounded-lg hover:bg-blue-300 transition duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#a1d1cf]dark:hover:bg-blue-700 dark:focus:ring-blue-500">
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
          </div>
        </div>
        <SizeDescription propiedad={propiedad} size="md" />
      </div>
    </article>
  );
}

export default Card;
