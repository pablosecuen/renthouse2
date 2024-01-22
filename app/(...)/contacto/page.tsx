"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "sonner";


function Contacto() {
  const [formData, setFormData] = useState({
    email: "",
    floating_first_name: "",
    floating_last_name: "",
    floating_phone: "",
    message: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí debes reemplazar con tus propias credenciales de EmailJS
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_PUBLICATUCASA_ID as string;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    emailjs
      .sendForm(serviceID, templateID, e.target as HTMLFormElement, userID)
      .then(() => {
        toast.success("Email enviado con éxito");
      })
      .catch((error) => {
        toast.error("Error al enviar solicitud");
        console.log(error.message);
      });
  };

  return (
    <div className=" max-w-5xl flex flex-col items-center md:py-32 py-20 mx-auto p-10 md:p-0">
      <div id="nosotros">
        <h3 className="uppercase tracking-widest py-4 text-2xl font-semibold">SOBRE NOSOTROS</h3>
        <p className="pb-20">
          Especializados en el alquiler temporario, Rent House ofrece 12 años de experiencia y
          gestiona más de 30 locaciones en Rosario y Buenos Aires. Nos enfocamos en maximizar tus
          ingresos a través de un servicio integral: equipamiento de vanguardia, anuncios trilingües
          en portales de alquiler temporario, fotografía profesional, respuesta rápida a reservas,
          limpieza y mantenimiento 24/7, y coordinación eficiente de check-in/check-out. Gestionamos
          inventarios y reclamos, y proporcionamos variadas opciones de pago para rentas. Agrega tu
          propiedad hoy y disfruta de una gestión sin complicaciones.
        </p>
      </div>

      <h3 className="uppercase tracking-widest py-4 text-2xl font-semibold">
        FORMULARIO DE CONTACTO
      </h3>
      <form id="contact" className="w-full text-black" onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
              placeholder=" "
              required
              value={formData.floating_first_name}
              onChange={handleChange}
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nombre
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
              placeholder=" "
              required
              value={formData.floating_last_name}
              onChange={handleChange}
            />
            <label
              htmlFor="floating_last_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              apellido
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="tel"
              name="floating_phone"
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
              placeholder=" "
              required
              value={formData.floating_phone}
              onChange={handleChange}
            />
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Telefono (123-456-7890)
            </label>
          </div>
        </div>
        <div className="">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">
            Tu mensaje
          </label>
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-500 "
            placeholder="Escribe tu mensaje..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-white mt-10 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contacto;
