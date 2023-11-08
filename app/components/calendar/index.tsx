/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const PropertyCalendar = ({ property }: any) => {
  const [events, setEvents] = useState<any[]>([]);
  useEffect(() => {
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

    if (property && property.reservas) {
      const formattedReservas = formatReservas(property.reservas);
      setEvents(formattedReservas);
    }
  }, [property]);

  if (!property) {
    return <div>No hay datos de propiedad</div>;
  }



  return (
    <div>
      <div style={{ height: 800 }}>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          events={events}
          locale={"es"}
        />
      </div>
    </div>
  );
};

export default PropertyCalendar;
