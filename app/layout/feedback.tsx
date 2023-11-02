/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

function FeedBack() {
  return (
    <div className="flex flex-col px-24 w-screen items-center text-white py-24 gap-20 bg-[#0a2530] relative ">
      <div className=" flex flex-col gap-8">
        {" "}
        <h2 className="text-center text-2xl tracking-[10px] uppercase text-[#0099ff]">
          Experiencias
        </h2>
        <span className="text-xl tracking-wider">Conoce las opiniones de quienes nos eligen</span>
      </div>

      <div className="flex w-full gap-20 justify-center">
        <figure className="flex flex-col items-center w-96  justify-center p-8 text-center   border-gray-200   bg-white dark:border-gray-700 border  rounded-xl shadow-xl shadow-black/20">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-800 lg:mb-8 ">
            <h3 className="text-lg font-semibold ">Palabra clave</h3>
            <p className="my-4">"Breve descripcion"</p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <img
              className="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium text-black text-left">
              <div>Bonnie Green</div>
              <div className="text-sm text-gray-800 ">Developer de Open AI</div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center w-96  justify-center p-8 text-center   border-gray-200   bg-white dark:border-gray-700 border  rounded-xl shadow-xl shadow-black/20">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-800 lg:mb-8 ">
            <h3 className="text-lg font-semibold ">Palabra clave</h3>
            <p className="my-4">"Breve descripcion"</p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <img
              className="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium text-black text-left">
              <div>Bonnie Green</div>
              <div className="text-sm text-gray-800 ">Developer de Open AI</div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center w-96  justify-center p-8 text-center   border-gray-200   bg-white dark:border-gray-700 border  rounded-xl shadow-xl shadow-black/20">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-800 lg:mb-8 ">
            <h3 className="text-lg font-semibold ">Palabra clave</h3>
            <p className="my-4">"Breve descripcion"</p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <img
              className="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium text-black text-left">
              <div>Bonnie Green</div>
              <div className="text-sm text-gray-800 ">Developer de Open AI</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default FeedBack;
