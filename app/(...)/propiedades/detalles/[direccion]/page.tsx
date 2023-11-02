import React from "react";
import { propiedades } from "@/utils";
import DetailsCarousel from "@/app/components/carousel/details-carousel";
import Link from "next/link";
import SizeDescription from "@/app/components/card/size-description";
import BookingForm from "@/app/components/form/booking-form";

function Detalles({ params }: { params: { direccion: string } }) {
  // Decodificar la dirección URL (eliminar los códigos de escape)
  const decodedDireccion = decodeURIComponent(params.direccion);

  // Convertir ambas direcciones a minúsculas para la comparación
  const direccionMinusculas = decodedDireccion.toLowerCase();

  // Filtrar propiedades basadas en la dirección
  const propiedadEspecifica = propiedades.filter((propiedad) => {
    // Convertir la dirección de la propiedad a minúsculas para la comparación
    return propiedad.direccion.toLowerCase() === direccionMinusculas;
  });

  const { caracteristicas } = propiedadEspecifica[0];

  const caracteristicasVerdaderas = Object.entries(caracteristicas)
    .filter(([_, valor]) => valor === true)
    .map(([caracteristica, _]) => caracteristica);

  return (
    <div className="min-h-screen pt-20 uppercase ">
      <DetailsCarousel images={propiedadEspecifica[0].imagenes} />
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
        <div className="w-full flex gap-4">
          <article className="my-10 flex flex-col gap-4 w-2/3">
            <h3 className="text-3xl tracking-widest">{propiedadEspecifica[0].direccion}</h3>
            <span className="flex items-center">
              <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="none"
                  stroke="#000"
                  strokeWidth="1.1"
                  d="M17.5,3.71 L17.5,7.72 C17.5,7.96 17.4,8.2 17.21,8.39 L8.39,17.2 C7.99,17.6 7.33,17.6 6.93,17.2 L2.8,13.07 C2.4,12.67 2.4,12.01 2.8,11.61 L11.61,2.8 C11.81,2.6 12.08,2.5 12.34,2.5 L16.19,2.5 C16.52,2.5 16.86,2.63 17.11,2.88 C17.35,3.11 17.48,3.4 17.5,3.71 L17.5,3.71 Z"
                ></path>
                <circle cx="14" cy="6" r="1"></circle>
              </svg>
              {propiedadEspecifica[0].tipo}
            </span>
            <p className="uppercase text-2xl font-extralight pb-10">
              {propiedadEspecifica[0].descripcion}
            </p>
            <SizeDescription propiedad={propiedadEspecifica[0]} size="2xl" />
            <div className="w-full overflow-hidden py-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3349.5547132269194!2d-60.76588570390425!3d-32.909939508332506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1698937243863!5m2!1ses!2sar"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
            <h4 className="relative bg-white">
              {" "}
              caracteristicas y comodidades
              <span className="absolute left-72 right-0 bottom-2 -translate-y-1/2 transform border-b border-gray-300"></span>
            </h4>
            <div className="justify-evenly items-center p-8 gap-4 w-full   flex flex-wrap ">
              {caracteristicasVerdaderas.map((caracteristica) => (
                <div key={caracteristica} className=" w-auto  flex  items-center ">
                  <span className="flex gap-2 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="20"
                      height="20"
                    >
                      <path d="M243.8 339.8c-10.9 10.9-28.7 10.9-39.6 0l-64-64c-10.9-10.9-10.9-28.7 0-39.6 10.9-10.9 28.7-10.9 39.6 0l44.2 44.2 108.2-108.2c10.9-10.9 28.7-10.9 39.6 0 10.9 10.9 10.9 28.7 0 39.6l-128 128zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"></path>
                    </svg>
                    {caracteristica}
                  </span>
                </div>
              ))}
            </div>

            <h4 className="relative bg-white">
              {" "}
              tarifa y disponibilidad
              <span className="absolute left-72 right-0 bottom-2 -translate-y-1/2 transform border-b border-gray-300"></span>
            </h4>
          </article>
          <aside
            className="w-1/3 
           "
          >
            <div className="sticky top-20 h-full overflow-y-auto">
              {" "}
              <div className="w-full  bg-white border p-4   justify-center flex flex-col">
                <h5>booking instantaneo</h5>
                <BookingForm />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Detalles;
