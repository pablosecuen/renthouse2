"use client";
import React, { useRef } from "react";
import "./image-carousel.css";
import { carouselObject } from "@/utils";
import SearchForm from "./search-form";
import Image from "next/image";
import Logo from "@/public/assets/logo";

const ImageCarousel: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sliderRef = useRef<any>(null);

  const activate = (e: React.MouseEvent<HTMLElement>) => {
    const items = Array.from(document.querySelectorAll(".item"));
    if (!sliderRef.current) return;

    const target = e.target as HTMLElement;

    if (target.matches(".next")) {
      sliderRef.current.append(items[0]);
    } else if (target.matches(".prev")) {
      sliderRef.current.prepend(items[items.length - 1]);
    }
  };

  return (
    <article className="">
      <main className=" min-h-screen w-screen relative ">
        <div className="relative  w-full h-full md:hidden">
          <div className="w-full h-full absolute top-0 left-0 bg-black/60 z-30 md:hidden">
            <div className="flex flex-col justify-center items-center w-full h-full gap-2">
              <Logo size="xl" color="blanco" />
              <span className="text-white/70 uppercase tracking-widest text-xs">
                expertos en experiencias
              </span>
            </div>
          </div>
          <video autoPlay loop muted className="w-full h-full object-cover absolute ">
            <source src="/assets/DESPEDITE.mp4" type="video/mp4" />
          </video>
        </div>
        <video autoPlay loop muted className="w-full h-full object-cover absolute hidden lg:block">
          <source src="/assets/DESPEDITE.mp4" type="video/mp4" />
        </video>
        <div className="separador absolute z-40">
          {" "}
          <div className="md:w-full flex flex-col gap-8">
            <div className="flex flex-col md:text-5xl text-xl pt-16 font-semibold animate-fadeInUp">
              <h1>
                Reserva una propiedad
                <br />
                para tu alquiler temporario
                <br />
                en Rosario
              </h1>

              <span className="text-base text-gray-500 opacity-60 pt-4 animate-fadeInRight">
                descubri que propiedades tenemos disponibles
              </span>
            </div>
            <div className="flex gap-4 animate-fadeInDown">
              <SearchForm />
            </div>
          </div>
        </div>
        <div className="hidden md:flex" ref={sliderRef}>
          {carouselObject.map((item) => (
            <div key={item.title} className={`item `}>
              <Image
                src={item.bgImage}
                alt={item.title}
                width={0}
                height={0}
                className="h-full w-full object-cover"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
          <nav className="nav">
            <span className="btn prev text-2xl font-bold" onClick={activate}>
              {"<"}
            </span>
            <span className="btn next text-2xl font-bold" onClick={activate}>
              {">"}
            </span>
          </nav>
        </div>
      </main>
    </article>
  );
};

export default ImageCarousel;
