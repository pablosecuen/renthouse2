"use client";
import React, { useRef } from "react";
import "./image-carousel.css";
import { carouselObject } from "@/utils";


const ImageCarousel: React.FC = () => {
  const sliderRef = useRef<HTMLUListElement>(null);

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
        <div className="separador "></div>{" "}
        <ul className="slider" ref={sliderRef}>
          {carouselObject.map((item) => (
            <li key={item.title} className={`item  ${item.bgImage}`}></li>
          ))}
          
        </ul>
        <nav className="nav">
          <span className="btn prev " onClick={activate}>
            prev
          </span>
          <span className="btn next " onClick={activate}>
            next
          </span>
        </nav>
      </main>
    </article>
  );
};

export default ImageCarousel;
