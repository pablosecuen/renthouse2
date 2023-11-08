/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { firestore } from "@/app/firebase";
import { Propiedad, Reserva } from "@/app/types/types";
import usePropiedades from "@/app/hooks/usePropiedades";
import PropertyAdmin from "./components/property-admin";
import withAuth from "@/app/HOC/withAuth";
import moment from "moment";

function ReservationAdministrator() {
  const arrProperties = usePropiedades();
  const [propiedades, setPropiedades] = useState<Propiedad[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<Propiedad>(propiedades[0]);
  const [fromDate, setFromDate] = useState<Date>(new Date());
  const [toDate, setToDate] = useState<Date>(new Date());
  const [selectedReserva, setSelectedReserva] = useState<any>(null);

  useEffect(() => {
    if (arrProperties && arrProperties.length > 0) {
      setPropiedades(arrProperties);

      const storedSelectedProperty = localStorage.getItem("selectedProperty");
      if (storedSelectedProperty) {
        const selected = arrProperties.find(
          (property) => property.direccion === storedSelectedProperty
        );
        if (selected) {
          setSelectedProperty(selected);
        }
      } else {
        setSelectedProperty(arrProperties[0]);
      }
    }
  }, [arrProperties, propiedades]);

  const handlePropertyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = propiedades.find((property) => property.direccion === event.target.value);
    if (selected) {
      setSelectedProperty(selected);
      localStorage.setItem("selectedProperty", selected.direccion);
    }
  };

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
        seconds: Math.floor(fromDate.getTime() / 1000),
        nanoseconds: 0,
      },
      end: {
        seconds: Math.floor(toDate.getTime() / 1000),
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

          // Verificar superposición con reservas existentes
          const hasOverlappingReservations = currentReservas.some((reserva: Reserva) => {
            const reservaStart = reserva.start.seconds * 1000;
            const reservaEnd = reserva.end.seconds * 1000;
            const newReservationStart = fromDate.getTime();
            const newReservationEnd = toDate.getTime();
            return (
              (newReservationStart >= reservaStart && newReservationStart < reservaEnd) ||
              (newReservationEnd > reservaStart && newReservationEnd <= reservaEnd)
            );
          });

          if (hasOverlappingReservations) {
            alert("La propiedad ya está reservada para estas fechas");
            return;
          }

          await updateDoc(propertyDoc, {
            reservas: [...currentReservas, newReservation],
          });
          alert("Reserva realizada correctamente");
        } else {
          console.error("El documento no existe en Firestore.");
        }
      } catch (error) {
        alert("Error al actualizar reservas en Firestore");
        console.error(error);
      }
    };

    const propiedadId = selectedProperty?.id;

    updateReservasEnFirestore(propiedadId, newReservation);
  };

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

        await updateDoc(propertyDoc, { reservas: updatedReservas });
        alert("Reserva eliminada correctamente");

        // Actualizar el estado de propiedades después de eliminar la reserva
        const updatedProperties = propiedades.map((property) =>
          property.id === selectedProperty.id
            ? { ...property, reservas: updatedReservas }
            : property
        );
        setPropiedades(updatedProperties);
      } else {
        console.error("El documento no existe en Firestore.");
      }
    } catch (error) {
      console.error("Error al actualizar reservas en Firestore:", error);
      alert("No se pudo eliminar la reserva");
    }
  };

  const handleReservaSelection = (selectedTimestamp: number) => {
    const selectedReserva =
      selectedProperty && Array.isArray(selectedProperty.reservas)
        ? selectedProperty.reservas.find(
            (reserva: any) => reserva.start.seconds === selectedTimestamp
          )
        : null;
    console.log("selectedReserva:", selectedReserva);
    if (selectedReserva) {
      setSelectedReserva(selectedReserva);
    } else {
      setSelectedReserva(null);
    }
  };

  return (
    <div className="w-screen min-h-screen flex justify-center items-center flex-col py-10">
      <div className="flex gap-20">
        <div className="w-2/3 h-full">
          {" "}
          <PropertyAdmin property={selectedProperty} />
        </div>

        <div className="flex flex-col gap-8 w-1/3">
          <div className="mx-auto">
            <h1 className="text-center">Panel de Administrador</h1>
            <label htmlFor="propertySelect" className="text-center ">
              Seleccionar Propiedad:{" "}
            </label>
            <select
              id="propertySelect"
              onChange={handlePropertyChange}
              value={selectedProperty?.direccion}
            >
              {propiedades.map((property, index) => (
                <option key={index} value={property.direccion}>
                  {property.direccion}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-8 border">
            <h2 className="text-center">Agregar Reserva</h2>
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
          <div className="flex flex-col gap-8 border">
            {" "}
            <h2 className="text-center">Eliminar Reserva</h2>
            <div>
              <label htmlFor="selectReserva">Seleccionar Reserva: </label>
              <select
                id="selectReserva"
                onChange={(event) => {
                  const selectedTimestamp = Number(event.target.value);
                  handleReservaSelection(selectedTimestamp);
                }}
              >
                {selectedProperty?.reservas.map((reserva, index) => (
                  <option key={index} value={reserva.start.seconds}>
                    Start: {moment(reserva.start.seconds * 1000).format("MM/DD/YYYY")} - End:{" "}
                    {moment(reserva.end.seconds * 1000).format("MM/DD/YYYY")}
                  </option>
                ))}
              </select>
            </div>
            <button onClick={deleteReservation} className="bg-gray-600 py-1 text-white">
              Eliminar Reserva
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(ReservationAdministrator);
