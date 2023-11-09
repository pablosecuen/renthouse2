/* eslint-disable @typescript-eslint/no-explicit-any */
import { Reserva } from "@/app/types/types";
import React, { useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { firestore } from "@/app/firebase";
import DatePicker from "react-datepicker";
import { Toaster, toast } from "sonner";

function AddReservation({ selectedProperty }: any) {
  const [fromDate, setFromDate] = useState<Date>(new Date());
  const [toDate, setToDate] = useState<Date>(new Date());
  const handleDateChange = (date: Date | null, type: string) => {
    if (date !== null) {
      if (type === "from") {
        setFromDate(date);
      } else {
        setToDate(date);
      }
    }
  };

  const addReservation = async () => {
    if (!selectedProperty) return;

    const newReservation: Reserva = {
      start: {
        seconds: Math.floor(fromDate.setHours(0, 0, 0, 0) / 1000),
        nanoseconds: 0,
      },
      end: {
        seconds: Math.floor(toDate.setHours(0, 0, 0, 0) / 1000),
        nanoseconds: 0,
      },
      title: "Ocupado",
    };

    const updateReservasEnFirestore = async (propiedadId: string, newReservation: Reserva) => {
      const propertyDoc = doc(firestore, "propiedades", propiedadId);
      try {
        const propertySnapshot = await getDoc(propertyDoc);
        if (propertySnapshot.exists()) {
          const propertyData = propertySnapshot.data();
          const currentReservas = propertyData.reservas;

          // Verificar si la nueva reserva se superpone con reservas existentes
          const hasOverlappingReservations = currentReservas.some((reserva: Reserva) => {
            const reservaStart = reserva.start.seconds * 1000;
            const reservaEnd = reserva.end.seconds * 1000;
            const newReservationStart = fromDate.getTime();
            const newReservationEnd = toDate.getTime();

            const isStartInside =
              reservaStart <= newReservationStart && newReservationStart <= reservaEnd;
            const isEndInside =
              reservaStart <= newReservationEnd && newReservationEnd <= reservaEnd;
            const isEncompassed =
              newReservationStart <= reservaStart && newReservationEnd >= reservaEnd;

            return isStartInside || isEndInside || isEncompassed;
          });

          if (hasOverlappingReservations) {
            toast.error("La propiedad ya está reservada para estas fechas");
            return;
          }

          await updateDoc(propertyDoc, {
            reservas: [...currentReservas, newReservation],
          });
          toast.success("Reserva realizada correctamente");
        } else {
          toast.error("El documento no existe en Firestore.");
        }
      } catch (error) {
        toast.error("Error al actualizar reservas en Firestore");
      }
    };

    const propiedadId = selectedProperty?.id;

    updateReservasEnFirestore(propiedadId, newReservation);
  };
  return (
    <div className="flex flex-col gap-8 border">
      <Toaster position="top-center" expand={true} richColors />
      <h2 className="text-center font-bold uppercase tracking-widest">Agregar Reserva</h2>
      <span className="text-center">Seleccionar fechas</span>
      <div className="border-2">
        <label htmlFor="fromDate">Desde: </label>
        <DatePicker
          id="fromDate"
          selected={fromDate}
          onChange={(date) => handleDateChange(date, "from")}
        />
      </div>
      <div className="border-2">
        <label htmlFor="toDate">Hasta: </label>
        <DatePicker
          id="toDate"
          selected={toDate}
          onChange={(date) => handleDateChange(date, "to")}
        />
      </div>
      <button onClick={addReservation} className="bg-gray-600 py-1 text-white">
        Agregar Reserva
      </button>
    </div>
  );
}

export default AddReservation;
