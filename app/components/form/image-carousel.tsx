"use client";
import React, { useRef } from "react";
import "./image-carousel.css";
import { carouselObject } from "@/utils";
import SearchForm from "./search-form";
import Image from "next/image";

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
      <main className=" min-h-screen w-screen">
        <div className="separador ">
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
        <div className="slider" ref={sliderRef}>
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
        </div>
        <nav className="nav">
          <span className="btn prev text-2xl font-bold" onClick={activate}>
            {"<"}
          </span>
          <span className="btn next text-2xl font-bold" onClick={activate}>
            {">"}
          </span>
        </nav>
      </main>
    </article>
  );
};

export default ImageCarousel;
