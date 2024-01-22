/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import wsp from "@/public/assets/logowsp.png";

function FeedBack() {
  return (
    <div className="flex flex-col px-24 w-screen items-center text-white py-24 gap-20 bg-[#0a2530] relative ">
      <div className=" flex flex-col gap-8">
        {" "}
        <h2 className="text-center text-2xl tracking-[10px] uppercase text-[#0099ff] animate-fadeInUp">
          Experiencias
        </h2>
        <span className="text-xl tracking-wider animate-fadeInDown">
          Conoce las opiniones de quienes nos eligen
        </span>
      </div>

      <div className="flex md:w-full gap-4 md:gap-20 flex-col md:flex-row justify-center animate-fadeOpacity">
        <figure className="flex flex-col items-center md:w-96 w-64  justify-center p-8 text-center   border-gray-200   bg-white dark:border-gray-700 border  rounded-xl shadow-xl shadow-black/20 relative">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-800 lg:mb-8 ">
            <p className="my-4 italic">
              "¡Experiencia increíble con RentHouse! Se ocuparon de todo, desde las fotos hasta las
              reservas."
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3 absolute bottom-4">
            <div className="space-y-0.5 font-medium text-black text-left">
              <div>Carlos de Buenos Aires</div>
            </div>
            <Image
              height={0}
              width={0}
              className="rounded-full w-16 h-auto"
              src={wsp}
              alt="profile picture"
            />
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center md:w-96  justify-center p-8 text-center   border-gray-200   bg-white dark:border-gray-700 border  rounded-xl shadow-xl shadow-black/20 relative">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-800 lg:mb-8 ">
            <p className="my-4 italic">
              {" "}
              "Su equipo de limpieza y mantenimiento es excepcional. Recomendado 100%."
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3 absolute bottom-4">
            <div className="space-y-0.5 font-medium text-black text-left">
              <div>María de Rosario</div>
            </div>
            <Image
              height={0}
              width={0}
              className="rounded-full w-16 h-auto"
              src={wsp}
              alt="profile picture"
            />
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center md:w-96  justify-center p-8 text-center   border-gray-200   bg-white dark:border-gray-700 border  rounded-xl shadow-xl shadow-black/20 relative">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-800 lg:mb-8 ">
            <p className="my-4 italic">
              "Elegir RentHouse fue la mejor decisión. Mi casa siempre está impecable y los ingresos
              superaron mis expectativas. ¡Son los mejores en el mercado de alquiler temporario!"
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3 absolute bottom-4">
            <div className="space-y-0.5 font-medium text-black text-left  ">
              <div>Sofía de Funes</div>
            </div>
            <Image
              height={0}
              width={0}
              className="rounded-full w-16 h-auto"
              src={wsp}
              alt="profile picture"
            />
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default FeedBack;
