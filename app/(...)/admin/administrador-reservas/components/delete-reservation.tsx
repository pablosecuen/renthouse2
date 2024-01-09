/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { firestore } from "@/app/firebase";
import { Propiedad, Reserva } from "@/app/types/types";
import { Toaster, toast } from "sonner";

function DeleteReservation({ selectedProperty, propiedades, setPropiedades }: any) {
  const [selectedReserva, setSelectedReserva] = useState<any>(null);
  const deleteReservation = async () => {
    if (!selectedProperty || !selectedReserva) return;

    const propertyDoc = doc(firestore, "propiedades", selectedProperty.id);
    try {
      const propertySnapshot = await getDoc(propertyDoc);
      if (propertySnapshot.exists()) {
        const propertyData = propertySnapshot.data();
        const currentReservas = propertyData?.reservas || [];

        const updatedReservas = currentReservas.filter(
          (reserva: Reserva) => reserva.start.seconds !== selectedReserva.start.seconds
        );

        if (updatedReservas.length === 0) {
          await updateDoc(propertyDoc, { reservas: [] });
          const updatedSnapshot = await getDoc(propertyDoc);
          const updatedData = updatedSnapshot.data();
          const updatedReservasData = updatedData?.reservas || [];
          if (updatedReservasData.length !== 0) {
            toast.error("Error al eliminar la reserva");
            return;
          }
        } else {
          // Si hay más de una reserva
          await updateDoc(propertyDoc, { reservas: updatedReservas });
        }

        toast.success("Reserva eliminada correctamente");

        const updatedProperties = propiedades.map((property: Propiedad) =>
          property.id === selectedProperty.id
            ? { ...property, reservas: updatedReservas }
            : property
        );
        setPropiedades(updatedProperties);
      } else {
        toast.error("El documento no existe en Firestore.");
      }
    } catch (error) {
      console.error("Error al actualizar reservas en Firestore:", error);
      toast.error("No se pudo eliminar la reserva");
    }
  };

  const handleReservaSelection = (selectedTimestamp: number) => {
    const selectedReserva =
      selectedProperty && Array.isArray(selectedProperty.reservas)
        ? selectedProperty.reservas.find(
            (reserva: any) => reserva.start.seconds === selectedTimestamp
          )
        : null;
    if (selectedReserva) {
      setSelectedReserva(selectedReserva);
    } else {
      setSelectedReserva(null);
    }
  };
  return (
    <div className="flex flex-col gap-8 border mt-4">
      <Toaster position="top-center" expand={true} richColors />
      <h2 className="text-center font-bold uppercase tracking-widest">Eliminar Reserva</h2>
      <div className="flex flex-col">
        <label htmlFor="selectReserva" className="text-center pb-4">
          Seleccionar Reserva:{" "}
        </label>
        <select
          id="selectReserva"
          onChange={(event) => {
            const selectedTimestamp = Number(event.target.value);
            handleReservaSelection(selectedTimestamp);
          }}
        >
          <option>Elegir la reserva</option>
          {selectedProperty?.reservas.map((reserva: any, index: number) => {
            const startDate =
              reserva.start && reserva.start.seconds
                ? reserva.start.seconds // Usar start.seconds en lugar de startDate.getTime()
                : null;
            const endDate =
              reserva.end && reserva.end.seconds
                ? reserva.end.seconds // Usar end.seconds en lugar de endDate.getTime()
                : null;

            if (startDate && endDate) {
              return (
                <option
                  key={index}
                  value={startDate}
                  selected={selectedReserva?.start.seconds === startDate}
                >
                  Start:{" "}
                  {`${new Date(startDate * 1000).getMonth() + 1}/
            ${new Date(startDate * 1000).getDate()}/
            ${new Date(startDate * 1000).getFullYear()}`}{" "}
                  - End:{" "}
                  {`${new Date(endDate * 1000).getMonth() + 1}/
            ${new Date(endDate * 1000).getDate()}/
            ${new Date(endDate * 1000).getFullYear()}`}
                </option>
              );
            }
            return null;
          })}
        </select>
      </div>
      <button onClick={deleteReservation} className="bg-gray-600 py-1 text-white">
        Eliminar Reserva
      </button>
    </div>
  );
}

export default DeleteReservation;
