import React from "react";
import SearchForm from "../components/form/search-form";
import Image from "next/legacy/image";
import foto from "@/public/assets/Rectangle 7.png";
import LanginCarousel from "../components/carousel/landing-carousel";

function Landing() {
  return (
    <div className="h-[90vh] bg-white  w-full flex flex-col md:flex-row justify-center items-center  ">
      <div className="md:w-1/2 flex flex-col gap-8">
        <div className="flex flex-col md:text-5xl text-xl pt-16 font-semibold ">
          <h1>
            Reserva una propiedad
            <br />
            para tu alquiler temporal
            <br />
            en Rosario
          </h1>

          <span className="text-base text-gray-500 opacity-60 pt-4">
            descubri que propiedades tenemos disponibles
          </span>
        </div>
        <div className="flex gap-4">
          <SearchForm />
        </div>
      </div>
      <div className="w-1/2 ">
        <LanginCarousel />
      </div>
    </div>
  );
}

export default Landing;
