/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Propiedad } from "@/app/types/types";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Toaster, toast } from "sonner";
import { sanitize } from "dompurify";


function BookingForm({ propiedad }: { propiedad: Propiedad }) {
  const [formData, setFormData] = useState({
    propiedad: propiedad.direccion,
    checkInDate: "",
    checkOutDate: "",
    huespedes: 1,
    email: "",
    name: "",
    isBookingInstant: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Por favor, completa todos los campos obligatorios.");
      return;
    }

    const emailJsParams = {
      serviceId: "service_nqjiqvn",
      templateId: "template_u4q8tfd",
      userId: "CYXPQCplILNR43XNO",
    };
    const bookingInstantValue = formData.isBookingInstant ? "Sí" : "No";
    emailjs
      .send(
        emailJsParams.serviceId,
        emailJsParams.templateId,
        {
          direccion: sanitize(propiedad?.direccion || ""),
          checkInDate: sanitize(formData.checkInDate),
          checkOutDate: sanitize(formData.checkOutDate),
          huespedes: sanitize(formData.huespedes.toString()),
          email: sanitize(formData.email),
          name: sanitize(formData.name),
          isBookingInstant: bookingInstantValue,
        },
        emailJsParams.userId
      )
      .then(() => {
        toast.success("Solicitud de Booking enviada correctamente");
      })
      .catch((error) => {
        toast.error("Error al enviar solicitud");
        console.log(error.message);
      });
  };

  const validateForm = () => {
    return (
      formData.checkInDate &&
      formData.checkOutDate &&
      formData.huespedes > 0 &&
      formData.email &&
      formData.name
    );
  };

  return (
    <div className="sticky flex flex-col gap-4">
      <Toaster position="top-center" expand={true} richColors />
      <div>
        <p>${propiedad?.precio} X NOCHE</p>
        <p>ESTADIA MINIMA: 1 DIA</p>
      </div>

      <form className="flex flex-col gap-2 h-full w-full" onSubmit={handleSubmit}>
        <div className="border rounded-xl flex justify-between p-2 gap-4">
          <label htmlFor="checkInDate" className="w-1/2">
            *CHECK-IN
          </label>
          <input
            type="date"
            id="checkInDate"
            name="checkInDate"
            className="w-1/2 text-right"
            value={formData.checkInDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="border rounded-xl flex justify-between p-2 gap-4">
          <label htmlFor="checkOutDate" className="w-1/2">
            *CHECK-OUT
          </label>
          <input
            className="w-1/2 text-right"
            type="date"
            id="checkOutDate"
            name="checkOutDate"
            value={formData.checkOutDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="border rounded-xl flex justify-between p-2 gap-4">
          <label htmlFor="huespedes" className="w-1/2">
            Huespedes
          </label>
          <input
            className="w-1/2 text-right"
            type="number"
            id="huespedes"
            value={formData.huespedes}
            name="huespedes"
            placeholder="1"
            onChange={handleInputChange}
          />
        </div>
        <div className="border rounded-xl flex justify-between p-2 gap-4">
          <label htmlFor="email" className="w-1/2">
            EMAIL
          </label>
          <input
            className="w-1/2 text-right"
            value={formData.email}
            name="email"
            id="email"
            type="email"
            placeholder="Ingresa tu mail"
            onChange={handleInputChange}
          />
        </div>
        <div className="border rounded-xl flex justify-between p-2 gap-4">
          <label htmlFor="email" className="w-1/2">
            NOMBRE
          </label>
          <input
            name="name"
            id="name"
            value={formData.name}
            className="w-1/2 text-right"
            type="text"
            placeholder="Tu nombre"
            onChange={handleInputChange}
          />
        </div>
        <div className="border rounded-xl flex justify-between p-2 gap-4">
          <label htmlFor="isBookingInstant" className="w-1/2">
            BOOKING INSTANTANEO
          </label>
          <input
            id="isBookingInstant"
            type="checkbox"
            checked={formData.isBookingInstant}
            onChange={handleInputChange}
            name="isBookingInstant"
          />
        </div>

        <button type="submit" className="bg-slate-700 text-white rounded-xl px-2 py-2">
          Book Now
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
