"use client";
import React, { useEffect } from "react";
import ImageCarousel from "../components/form/image-carousel";
import ReactPlayer from "react-player/lazy";
/* import logo from "@/public/assets/logo/Logo.svg";
import Image from "next/image"; */

function Landing() {
  const playerRef = React.useRef<ReactPlayer | null>(null);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.seekTo(0);
      playerRef.current.getInternalPlayer()?.play();
    }
  }, []);
  return (
    <>
      {/*    <div className="relative w-screen h-screen overflow-hidden z-40">
        <Image
          src={logo}
          alt="logo"
          width={500}
          height={500}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 animate-fadeIn z-40 brightness-200"
        />{" "}
        <h1 className="text-white uppercase text-4xl brightness-200  z-40 animate-fadeIn absolute top-2/3 left-1/2 -translate-x-1/2 tracking-[10px] w-full text-center ">
          Expertos en experiencias, expertos en propiedades
        </h1>
        <div className="brightness-[0.25]">
          <ReactPlayer
            ref={playerRef as React.MutableRefObject<ReactPlayer>}
            url={require("../../public/assets/DESPEDITE.mp4")}
            loop
            volume={1}
            width={1920}
            height={1040}
            playing={true}
          />
        </div>
      </div> */}
      <ImageCarousel />
      <div className="h-[90vh] bg-transparent absolute z-40 pl-20 pr-40 w-full flex flex-col md:flex-row justify-center items-center  ">
        <div className="w-1/2 "></div>
      </div>
    </>
  );
}

export default Landing;
