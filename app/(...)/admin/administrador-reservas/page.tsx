/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Propiedad } from "@/app/types/types";
import usePropiedades from "@/app/hooks/usePropiedades";
import PropertyAdmin from "./components/property-admin";
import DeleteReservation from "./components/delete-reservation";
import AddReservation from "./components/add-reservation";

function ReservationAdministrator() {
  const arrProperties = usePropiedades();
  const [propiedades, setPropiedades] = useState<Propiedad[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<Propiedad>(propiedades[0]);

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

  return (
    <div className="w-screen min-h-screen flex justify-center items-center flex-col p-10 pt-20  ">
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
      <div className="flex flex-col md:flex-row gap-20  w-full min-h-screen ">
        <div className="md:w-1/2 pt-10 ">
          <h2>Administrar Fechas Ocupadas para {selectedProperty?.direccion}</h2>
          <PropertyAdmin property={selectedProperty} />
        </div>

        <div className="flex flex-col justify-center items-center gap-8 md:w-1/2 ">
          <div>
            {" "}
            <AddReservation selectedProperty={selectedProperty} />
            <DeleteReservation
              selectedProperty={selectedProperty}
              propiedades={propiedades}
              setPropiedades={setPropiedades}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservationAdministrator
