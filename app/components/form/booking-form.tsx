import { Propiedad } from "@/app/types/types";
import React from "react";

function BookingForm({ propiedad }: { propiedad: Propiedad }) {
  return (
    <div className="sticky flex flex-col gap-4">
      <div>
        <p>${propiedad?.precio} X NOCHE</p>
        <p>ESTADIA MINIMA: 1 DIA</p>
      </div>

      <form className="flex flex-col gap-2 h-full w-full">
        <div className="border rounded-xl flex justify-between p-2 gap-4">
          <label className="w-1/2">*CHECK-IN</label>
          <input type="date" id="checkInDate" name="checkInDate" className="w-1/2 text-right" />
        </div>
        <div className="border rounded-xl flex justify-between p-2 gap-4">
          <label className="w-1/2">*CHECK-OUT</label>
          <input className="w-1/2 text-right" type="date" id="checkOutDate" name="checkOutDate" />
        </div>
        <div className="border rounded-xl flex justify-between p-2 gap-4">
          <label className="w-1/2">Invitados</label>
          <input
            className="w-1/2 text-right"
            type="number"
            id="guests"
            name="guests"
            placeholder="1"
          />
        </div>
        <div className="border rounded-xl flex justify-between p-2 gap-4">
          <label className="w-1/2">EMAIL</label>
          <input className="w-1/2 text-right" type="email" placeholder="Ingresa tu mail" />
        </div>
        <div className="border rounded-xl flex justify-between p-2 gap-4">
          <label className="w-1/2">NOMBRE</label>
          <input className="w-1/2 text-right" type="text" placeholder="Tu nombre" />
        </div>
        <div className="border rounded-xl flex justify-between p-2 gap-4">
          <label className="w-1/2">BOOKING INSTANTANEO</label>
          <input type="checkbox" />
        </div>

        <button type="submit" className="bg-slate-700 text-white rounded-xl px-2 py-2">
          Book Now
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
