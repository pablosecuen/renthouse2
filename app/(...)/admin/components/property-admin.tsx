/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Propiedad } from "@/app/types/types";

const PropertyAdmin = ({ property }: { property: Propiedad }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formatReservas = (reservas: any) => {
    return reservas?.map((reserva: any) => {
      const start = new Date(reserva.start.seconds * 1000);
      const end = new Date(reserva.end.seconds * 1000);
      return {
        title: reserva.title || "Ocupado",
        start: start.toISOString(),
        end: end.toISOString(),
      };
    });
  };

  const events = formatReservas(property?.reservas);

  return (
    <div>
      <h2>Administrar Fechas Ocupadas para {property?.direccion}</h2>
      <div>
        <FullCalendar
          plugins={[dayGridPlugin]}
          locale={"es"}
          initialView="dayGridMonth"
          events={events}
        />
      </div>
    </div>
  );
};

export default PropertyAdmin;
