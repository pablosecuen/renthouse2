"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "sonner";

function PublishForm() {
  const [formValues, setFormValues] = useState({
    nombreCompleto: "",
    telefono: "",
    direccion: "",
    habitaciones: "",
    metrosCuadrados: "",
    amenidades: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
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

  const inputStyle =
    "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer";
  const labelStyle =
    "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";

  return (
    <form onSubmit={handleSubmit} className="lg:p-24  rounded-2xl w-full flex flex-col gap-8">
      <h2 className="uppercase tracking-widest py-4 text-2xl font-semibold">Publica tu casa</h2>
      <div className="relative">
        <input
          type="text"
          name="nombreCompleto"
          id="nombreCompleto"
          value={formValues.nombreCompleto}
          onChange={handleChange}
          placeholder=" "
          className={inputStyle}
          required
        />
        <label htmlFor="nombreCompleto" className={labelStyle}>
          Nombre completo
        </label>
      </div>
      <div className="relative">
        <input
          type="tel"
          name="telefono"
          id="telefono"
          placeholder=" "
          value={formValues.telefono}
          onChange={handleChange}
          className={inputStyle}
          required
        />
        <label htmlFor="telefono" className={labelStyle}>
          Teléfono
        </label>
      </div>
      <div className="relative">
        <input
          type="text"
          name="direccion"
          id="direccion"
          placeholder=" "
          value={formValues.direccion}
          onChange={handleChange}
          className={inputStyle}
          required
        />
        <label htmlFor="direccion" className={labelStyle}>
          Dirección
        </label>
      </div>
      <div className="relative">
        <input
          type="number"
          name="habitaciones"
          id="habitaciones"
          placeholder=" "
          value={formValues.habitaciones}
          onChange={handleChange}
          required
          className={inputStyle}
        />
        <label htmlFor="habitaciones" className={labelStyle}>
          Habitaciones
        </label>
      </div>
      <div className="relative">
        <input
          type="number"
          name="metrosCuadrados"
          id="metrosCuadrados"
          placeholder=" "
          value={formValues.metrosCuadrados}
          onChange={handleChange}
          required
          className={inputStyle}
        />
        <label htmlFor="metrosCuadrados" className={labelStyle}>
          Metros Cuadrados
        </label>
      </div>
      <div className="relative">
        <textarea
          name="amenidades"
          id="amenidades"
          placeholder=" "
          value={formValues.amenidades}
          onChange={handleChange}
          required
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-500 "
        ></textarea>
        <label htmlFor="amenidades" className="block mb-2 text-sm font-medium text-gray-900 pt-2">
          Amenidades de la propiedad
        </label>
      </div>
      <button
        type="submit"
        className="text-white mt-10 w-20 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center "
      >
        Enviar
      </button>
    </form>
  );
}

export default PublishForm;
