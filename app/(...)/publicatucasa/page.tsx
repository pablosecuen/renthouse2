import Image from "next/image";
import React from "react";
import house from "@/public/assets/argentino/DPD - BV ARGENTINO-66.webp";
import { cardsInfo } from "@/utils";
import PublishForm from "./form/publica-tu-casa-form";
import { Toaster } from "sonner";

const parseSVG = (svgText: string) => {
  return <div dangerouslySetInnerHTML={{ __html: svgText }} />;
};

const Publica = () => {
  return (
    <div className="min-h-screen h-full  xl:p-24 xl:px-8 pt-12 flex flex-col justify-center items-center gap-10">
      <Toaster position="top-center" expand={true} richColors />
      <div className="grid xl:grid-cols-2 xl:px-24 gap-8">
        <div className="mb-6 sm:mb-0">
          <Image
            src={house}
            alt=""
            width={0}
            height={0}
            className="w-full  h-64 sm:h-screen object-cover brightness-110 animate-fadeInRight"
          />
        </div>
        <div className="grid xl:grid-cols-2 mx-auto">
          {/* cards beneficios */}
          {cardsInfo.map((card, index) => (
            <figure key={index} className="flex gap-2 h-auto pt-8 px-2 animate-fadeInDown">
              {parseSVG(card.icon)}
              <figcaption className="flex flex-col gap-2 lg:gap-8 xl:gap-2 pb-4 xl:pb-0 border-b xl:border-b-0 xl:border-r text-xs xl:text-base ">
                <span className="text-md xl:text-lg w-auto font-semibold uppercase tracking-wider">
                  {card.title}
                </span>
                <p className=" pr-4"> {card.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center lg:w-1/2 w-full p-8 lg:p-0 border lg:border-0 ">
        <PublishForm />
      </div>
    </div>
  );
};

export default Publica;
