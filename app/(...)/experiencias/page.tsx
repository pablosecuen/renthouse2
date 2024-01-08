/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import rosario from "@/public/assets/rosario-turismo.webp";
import wsp from "@/public/assets/logowsp.png";

function page() {
  return (
    <div className="min-h-screen h-full pt-24 flex-col gap-8 flex justify-start items-center ">
      <div className="w-screen h-full border relative -p-8 -mt-28 z-20 animate-fadeIn">
        {/*        <div className="w-screen h-full bg-black/40 z-30 absolute"></div> */}
        <Image
          width={0}
          height={0}
          src={rosario}
          alt="Rosario"
          className="w-screen h-[700px] object-cover -p-8 -mt-28 z-20 brightness-100 fadeIn"
        />
      </div>

      <div className="md:max-w-7xl p-4 xs:mx-10 lg:mx-0 flex flex-col gap-8 animate-fadeInUp">
        <h2 className="text-2xl font-bold">Experiencias Rent-house</h2>
        <p className="uppercase tracking-wider text-xs md:text-base">
          Rosario, conocida como 'La Perla del Paraná', es una ciudad vibrante que encierra en cada
          rincón una riqueza cultural y una historia fascinante. Es un crisol de experiencias que
          van desde su imponente arquitectura hasta su rica vida nocturna. Esta ciudad ha florecido
          desde sus inicios como un pequeño pueblo a orillas del río Paraná hasta convertirse en un
          epicentro cultural y social.
          <br /> Su arquitectura combina la majestuosidad de edificios históricos con modernas
          estructuras, y sus calles cuentan historias de un pasado rico en influencias inmigrantes.
          Los rosarinos viven entre cafés acogedores y una amplia variedad de restaurantes que
          ofrecen desde platos tradicionales hasta gastronomía innovadora. Además, la escena teatral
          de Rosario es vibrante, con una cantidad significativa de teatros que ofrecen espectáculos
          diversos y opciones culturales para todos los gustos.
          <br /> La ciudad respira historia en cada esquina, con monumentos que narran sus raíces y
          su evolución. Nuestros guías locales están listos para llevarlo a descubrir los secretos y
          la esencia de esta tierra, desde sus primeros días hasta su crecimiento actual. Rosario no
          se detiene: nuevos barrios emergen con tiendas exclusivas y bares que combinan lo moderno
          con lo clásico, ofreciendo experiencias únicas a quienes la visitan. Y por las noches, la
          ciudad cobra vida con una emocionante vida nocturna que incluye clubes reconocidos y
          artistas de renombre que ocasionalmente tocan sus acordes por aquí. Ven y descubre
          Rosario, una ciudad que crece sin perder sus raíces, un lugar donde la diversidad cultural
          y la historia se entrelazan en cada paso que das.
        </p>
      </div>

      <div className="  md:w-full max-w-7xl grid md:grid-cols-2 md:py-20 py-10 md:mx-10 gap-4 md:gap-4  place-content-center place-items-center md:flex-row justify-center items-center w-full flex-wrap md:pb-20">
        <figure className="animate-fadeInRight flex flex-col items-center md:w-96 h-80 w-11/12  justify-center p-8 text-center   border-gray-200   bg-white dark:border-gray-700 border  rounded-xl shadow-xl shadow-black/20">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-800 lg:mb-8 ">
            <h3 className="md:text-lg font-semibold capitalize">fútbol</h3>
            <p className="mt-4 italic md:text-base text-xs">
              "Vive la emoción del fútbol en Rosario asistiendo a un apasionante partido de Rosario
              Central o Newell's Old Boys. Siente la energía de la multitud y la pasión del deporte
              más amado de Argentina en un ambiente vibrante y emocionante."
            </p>
          </blockquote>
          <div className="w-full  flex justify-end">
            {" "}
            <Image
              height={0}
              width={0}
              className="rounded-full w-16 h-auto"
              src={wsp}
              alt="profile picture mr-auto"
            />
          </div>
        </figure>{" "}
        <figure className="animate-fadeInDown flex flex-col items-center md:w-96 h-80  w-11/12  justify-center p-8 text-center   border-gray-200   bg-white dark:border-gray-700 border  rounded-xl shadow-xl shadow-black/20">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-800 lg:mb-8 ">
            <h3 className="md:text-lg font-semibold capitalize">Gastronomía</h3>
            <p className="mt-4 italic md:text-base text-xs">
              " Embárcate en una aventura gastronómica nocturna por Rosario. Visita los tres mejores
              restaurantes de la ciudad, cada uno ofreciendo una experiencia culinaria única y
              exquisita, donde los sabores locales e internacionales se fusionan para deleitar tu
              paladar."
            </p>
          </blockquote>
          <div className="w-full  flex justify-end">
            {" "}
            <Image
              height={0}
              width={0}
              className="rounded-full w-16 h-auto"
              src={wsp}
              alt="profile picture mr-auto"
            />
          </div>
        </figure>{" "}
        <figure className="animate-fadeInLeft flex flex-col items-center md:w-96 h-80 w-11/12  justify-center p-8 text-center   border-gray-200   bg-white dark:border-gray-700 border  rounded-xl shadow-xl shadow-black/20">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-800 lg:mb-8 ">
            <h3 className="md:text-lg font-semibold capitalize">Naturaleza</h3>
            <p className="mt-4 italic md:text-base text-xs">
              "Descubre la serenidad y la belleza natural en una escapada All Inclusive a la Isla.
              Relájate y disfruta del confort y la comodidad con un servicio completo, desde el
              traslado hasta la gastronomía, en un entorno tranquilo y encantador."
            </p>
          </blockquote>
          <div className="w-full  flex justify-end">
            {" "}
            <Image
              height={0}
              width={0}
              className="rounded-full w-16 h-auto"
              src={wsp}
              alt="profile picture mr-auto"
            />
          </div>
        </figure>{" "}
        <figure className="animate-fadeInUp flex flex-col items-center md:w-96 h-80 w-11/12  justify-center p-8 text-center   border-gray-200   bg-white dark:border-gray-700 border  rounded-xl shadow-xl shadow-black/20">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-800 lg:mb-8 ">
            <h3 className="md:text-lg font-semibold capitalize">Vida Nocturna</h3>
            <p className="mt-4 italic md:text-base text-xs">
              " Experimenta la mejor vida nocturna de Rosario con una salida VIP a los boliches más
              exclusivos. Disfruta de una noche inolvidable con atención de primera clase, música
              vibrante y un ambiente elegante y emocionante."
            </p>
          </blockquote>
          <div className="w-full  flex justify-end">
            {" "}
            <Image
              height={0}
              width={0}
              className="rounded-full w-16 h-auto"
              src={wsp}
              alt="profile picture mr-auto"
            />
          </div>
        </figure>
      </div>
    </div>
  );
}

export default page;
