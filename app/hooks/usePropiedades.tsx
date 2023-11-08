"use client";

import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { Propiedad } from "../types/types";
import { firestore } from "../firebase";

const usePropiedades = (): Propiedad[] => {
  const [propiedades, setPropiedades] = useState<Propiedad[]>([]);

  useEffect(() => {
    const propiedadesCollection = collection(firestore, "propiedades");
    const unsubscribe = onSnapshot(propiedadesCollection, (querySnapshot) => {
      const propiedadesData: Propiedad[] = [];
      querySnapshot.forEach((doc) => {
        const propiedadData = doc.data() as Propiedad;
        propiedadesData.push(propiedadData);
      });
      console.log("Propiedades recuperadas:", propiedadesData);
      setPropiedades(propiedadesData);
    });

    return () => {
      unsubscribe(); // Limpieza cuando el componente se desmonta
    };
  }, []); // La dependencia vacía asegura que esto se ejecute solo una vez al montar el componente

  return propiedades;
};

export default usePropiedades;
