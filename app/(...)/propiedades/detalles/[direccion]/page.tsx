"use client";
import React, { useEffect, useState } from "react";
import DetailsCarousel from "@/app/components/carousel/details-carousel";
import Link from "next/link";
import SizeDescription from "@/app/components/card/size-description";
import BookingForm from "@/app/components/form/booking-form";
import PropertyCalendar from "@/app/components/calendar";
import usePropiedades from "@/app/hooks/usePropiedades";
import { Propiedad } from "@/app/types/types";
import FotosModal from "@/app/components/modals/fotos-modal";

function Detalles({ params }: { params: { direccion: string } }) {
  const propiedades = usePropiedades();
  const [propiedadEspecifica, setPropiedadEspecifica] = useState<Propiedad | null>(null);
  const [modalFotos, setModalFotos] = useState(false);

  const decodedDireccion = decodeURIComponent(params.direccion);
  const direccionMinusculas = decodedDireccion;

  useEffect(() => {
    const propiedadActualizada = propiedades.find(
      (propiedad) => propiedad.direccion.toLowerCase() === direccionMinusculas
    );

    setPropiedadEspecifica(propiedadActualizada || null);
  }, [propiedades, direccionMinusculas]);

  const caracteristicas = propiedadEspecifica?.caracteristicas;

  const handleModalFotos = () => {
    setModalFotos(!modalFotos);
  };

  return (
    <div className="min-h-screen pt-20  ">
      <DetailsCarousel
        images={propiedadEspecifica?.imagenes || []}
        handleModalFotos={handleModalFotos}
      />
      {modalFotos && (
        <FotosModal
          images={propiedadEspecifica?.imagenes || []}
          handleModalFotos={handleModalFotos}
        />
      )}
      <div className=" max-w-7xl mx-auto mt-4 flex flex-col">
        <nav>
          <Link href="/propiedades" className="flex uppercase tracking-widest items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <polyline fill="none" stroke="#000" points="10 14 5 9.5 10 5"></polyline>
              <line fill="none" stroke="#000" x1="16" y1="9.5" x2="5" y2="9.52"></line>
            </svg>
            TODAS LAS PROPIEDADES
          </Link>
        </nav>
        <div className="w-full flex flex-col md:flex-row gap-4">
          <article className="my-10 flex flex-col gap-4 md:w-2/3 w-full">
            <h3 className="text-3xl tracking-widest px-4 md:px-0">
              {propiedadEspecifica?.direccion}
            </h3>
            <span className="flex items-center px-4 md:px-0">
              <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="none"
                  stroke="#000"
                  strokeWidth="1.1"
                  d="M17.5,3.71 L17.5,7.72 C17.5,7.96 17.4,8.2 17.21,8.39 L8.39,17.2 C7.99,17.6 7.33,17.6 6.93,17.2 L2.8,13.07 C2.4,12.67 2.4,12.01 2.8,11.61 L11.61,2.8 C11.81,2.6 12.08,2.5 12.34,2.5 L16.19,2.5 C16.52,2.5 16.86,2.63 17.11,2.88 C17.35,3.11 17.48,3.4 17.5,3.71 L17.5,3.71 Z"
                ></path>
                <circle cx="14" cy="6" r="1"></circle>
              </svg>
              {propiedadEspecifica?.tipo}
            </span>

            <p className=" md:text-2xl font-extralight   pb-10 p-4 md:p-0">
              {propiedadEspecifica?.descripcion}
            </p>
            {propiedadEspecifica && <SizeDescription propiedad={propiedadEspecifica} size="2xl" />}

            <div className="w-full  overflow-x-hidden">
              {propiedadEspecifica?.video && propiedadEspecifica?.video.length > 1 && (
                <iframe
                  width="800"
                  height="450"
                  className="top-0 left-0 w-full h-52 md:h-[450px]"
                  src={propiedadEspecifica.video}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
            <div className="w-full overflow-hidden py-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3349.5547132269194!2d-60.76588570390425!3d-32.909939508332506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1698937243863!5m2!1ses!2sar"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full "
              ></iframe>
            </div>
            <h4 className="relative bg-white px-4">
              {" "}
              caracteristicas y comodidades
              <span className="absolute left-72 right-0 bottom-2 -translate-y-1/2 transform border-b border-gray-300"></span>
            </h4>
            <div className="justify-start items-center p-8 gap-4 w-full   flex flex-wrap ">
              {caracteristicas &&
                Object.entries(caracteristicas).map(([caracteristica, valor]) => {
                  if (typeof valor === "boolean" && valor) {
                    return (
                      <div key={caracteristica} className="min-w-min flex items-center">
                        <span className="flex gap-2 items-center justify-center px-4 py-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            width="20"
                            height="20"
                          >
                            <path d="M243.8 339.8c-10.9 10.9-28.7 10.9-39.6 0l-64-64c-10.9-10.9-10.9-28.7 0-39.6 10.9-10.9 28.7-10.9 39.6 0l44.2 44.2 108.2-108.2c10.9-10.9 28.7-10.9 39.6 0 10.9 10.9 10.9 28.7 0 39.6l-128 128zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"></path>
                          </svg>
                        </span>
                        {caracteristica}
                      </div>
                    );
                  }
                  return null;
                })}
            </div>

            <h4 className="relative bg-white  px-4">
              {" "}
              tarifa y disponibilidad
              <span className="absolute left-72 right-0 bottom-2 -translate-y-1/2 transform border-b border-gray-300"></span>
            </h4>
            {<PropertyCalendar property={propiedadEspecifica} />}
          </article>
          <aside
            className="md:w-1/3 pb-10 md:pb-0
           "
          >
            <div className="sticky top-20 h-full overflow-y-auto">
              {" "}
              <div className="w-full  bg-white border p-4   justify-center flex flex-col">
                <h5>booking instantaneo</h5>
                {propiedadEspecifica && <BookingForm propiedad={propiedadEspecifica} />}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Detalles;
