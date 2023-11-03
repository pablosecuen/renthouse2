"use client";
import Image from "next/legacy/image";
import React, { useEffect, useRef, useState } from "react";

import foto from "@/public/assets/Rectangle 7.png";

import Link from "next/link";

function BestSellers() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollAmount, setScrollAmount] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      // Calcular el ancho de un elemento en el contenedor
      const firstItem = containerRef.current.querySelector(".product-item");
      if (firstItem) {
        setScrollAmount(firstItem.clientWidth);
      }
    }
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= scrollAmount;
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="relative  text-black mt-16 -z-0 ">
      <div className="flex justify-between items-center  ">
        <button
          onClick={scrollLeft}
          className="scroll-button px-8 left hidden md:block left-4 text-3xl  w-8 h-8 rounded-full bg-transparent"
        >
          {"<"}
        </button>
        <button
          onClick={scrollRight}
          className="scroll-button px-8 left hidden md:block left-4  text-3xl  w-8 h-8 rounded-full bg-transparent order-last"
        >
          {">"}
        </button>
        <div
          className="custom-scrollbar relative h-full flex gap-4  items-center  overflow-x-auto md:overflow-x-hidden  md:max-w-screen w-full mt-4 scroll-smooth"
          ref={containerRef}
        >
          <Link
            className=" flex  justify-center  items-center aspect-square h-full w-full product-item "
            href={`/propiedades`}
          >
            <div className="rounded-md min-w-[280px] md:min-w-[450px] lg:min-w-[600px] px-2 md:px-0  pb-6 ">
              <Image src={foto} alt="foto" className="w-full h-auto mb-1 " priority={true} />
            </div>
          </Link>
          <Link
            className=" flex  justify-center  items-center aspect-square h-full w-full product-item "
            href={`/propiedades`}
          >
            <div className="rounded-md min-w-[280px] md:min-w-[450px] lg:min-w-[600px] px-2 md:px-0  pb-6 ">
              <Image src={foto} alt="foto" className="w-full h-auto mb-1 " priority={true} />
            </div>
          </Link>
          <Link
            className=" flex  justify-center  items-center aspect-square h-full w-full product-item "
            href={`/propiedades`}
          >
            <div className="rounded-md min-w-[280px] md:min-w-[450px] lg:min-w-[600px] px-2 md:px-0  pb-6 ">
              <Image src={foto} alt="foto" className="w-full h-auto mb-1 " priority={true} />
            </div>
          </Link>
          <Link
            className=" flex  justify-center  items-center aspect-square h-full w-full product-item "
            href={`/propiedades`}
          >
            <div className="rounded-md min-w-[280px] md:min-w-[450px] lg:min-w-[600px] px-2 md:px-0  pb-6 ">
              <Image src={foto} alt="foto" className="w-full h-auto mb-1 " priority={true} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BestSellers;
