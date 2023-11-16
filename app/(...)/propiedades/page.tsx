"use client";
import CardContainer from "@/app/components/card/card-container";
import Filters from "@/app/components/form/filters";
import SearchForm from "@/app/components/form/search-form";
import usePropiedades from "@/app/hooks/usePropiedades";
import { Propiedad } from "@/app/types/types";
import React, { useState } from "react";

function Propiedades() {
  const [selectedPropiedad, setSelectedPropiedad] = useState<Propiedad>();
  const [showmap, setShowMap] = useState(true);
  console.log(selectedPropiedad);

  const propiedades = usePropiedades();

  const handleShowMap = () => {
    setShowMap(!showmap);
  };

  return (
    <div className="min-h-screen h-full pt-24 flex-col flex justify-center px-8">
      <h2 className="tracking-widest py-8 text-3xl font-semibold ">PROPIEDADES</h2>
      <div className="flex flex-col md:flex-row md:gap-4">
        {" "}
        <div
          className={
            showmap
              ? "md:w-1/2 flex flex-wrap pb-10 "
              : "md:w-full flex flex-wrap justify-evenly pb-10 "
          }
        >
          <nav className="flex flex-col w-full">
            <SearchForm />
            <div className="w-full">
              <Filters handleShowMap={handleShowMap} />
            </div>
          </nav>
          <div className="py-10">
            {" "}
            <CardContainer propiedades={propiedades} setSelectedPropiedad={setSelectedPropiedad} />
          </div>
        </div>
        {showmap && (
          <aside className="md:w-1/2 md:flex items-center justify-center hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3349.5547132269194!2d-60.76588570390425!3d-32.909939508332506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1698937243863!5m2!1ses!2sar"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full pb-20"
            ></iframe>
          </aside>
        )}
      </div>
    </div>
  );
}

export default Propiedades;
