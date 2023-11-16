// Carousel.js

"use client";
import Image from "next/legacy/image";
import React, { useEffect, useRef, useState } from "react";

interface CarouselProps {
  images: string[];
  handleModalFotos: () => void;
}

const Carousel: React.FC<CarouselProps> = ({ images, handleModalFotos }) => {
  const [index, setIndex] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);
  const imageCount = images?.length;

  useEffect(() => {
    const handleResize = () => {
      const carouselWidth = carouselRef.current?.getBoundingClientRect().width;
      const imagesInView = carouselWidth ? Math.floor(carouselWidth / 300) : 1; // Ancho deseado por imagen: 300px
      setImagesInView(imagesInView);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [imageCount]);

  const [imagesInView, setImagesInView] = useState(1);
  const goPrevious = () => {
    setIndex((index - 1 + imageCount) % imageCount);
  };

  const goNext = () => {
    setIndex((index + 1) % imageCount);
  };

  return (
    <div className="relative w-full mx-auto h-80 " ref={carouselRef}>
      <button
        className="absolute left-10 bottom-4 z-50 bg-gray-800 text-white/80 rounded-lg py-1  px-2"
        onClick={handleModalFotos}
      >
        Todas las fotos
      </button>
      <div
        className="overflow-x-auto md:overflow-hidden rounded-lg"
        style={{
          touchAction: "pan-x",
          scrollbarWidth: "none",
        }}
      >
        <div
          className="flex transition-transform ease-in-out duration-500 gap-4"
          style={{
            transform: `translateX(-${index * (1000 / imageCount)}%)`,
            width: `${imageCount * (100 / imageCount)}%`,
          }}
        >
          {images?.map((image: string, idx: number) => (
            <div
              key={idx}
              style={{ width: `${150 / imagesInView}%` }}
              className="flex-shrink-0  h-80 flex border  z-50"
            >
              <Image
                width={600}
                height={400}
                src={image}
                alt={`slide ${idx}`}
                className="w-full h-auto !object-cover object-center contrast-90 brightness-95 mix-blend-color"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={goPrevious}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 h-10 w-10 flex items-center justify-center pl-4"
      >
        <svg width="17" height="30" viewBox="0 0 17 30" xmlns="http://www.w3.org/2000/svg">
          <polyline fill="none" stroke="#fff" strokeWidth="2" points="15,2 2,15 15,28"></polyline>
        </svg>
      </button>
      <button
        onClick={goNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2  text-white flex items-center justify-center pr-4"
      >
        <svg width="17" height="30" viewBox="0 0 17 30" xmlns="http://www.w3.org/2000/svg">
          <polyline fill="none" stroke="#ffffff" strokeWidth="2" points="2,28 15,15 2,2"></polyline>
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
