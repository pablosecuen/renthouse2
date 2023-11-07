export interface Propiedad {
    id: string;
    firebaseId: string; 
    documentoId: string;
    direccion: string;
    tipo: string;
    descripcion: string;
    huespedes: number;
    baños: number;
    ubicacion: string;
    habitaciones: number;
    camas: number;
    precioPorNoche: number;
    imagenes: string[];
    distanciadelcentro: number;
    caracteristicas: {
      seguridad: boolean;
      aire: boolean;
      menores: boolean;
      mascotas: boolean;
      fumadores: boolean;
      balcon: boolean;
      bañera: boolean;
      cafetera: boolean;
      pileta: boolean;
      parrilla: boolean;
      wifi: boolean;
      estacionamiento: boolean;
    }[];
    reservas: {
      start: Date;
      end: Date;
      title: string;
    }[];
    video: string;
  }


  export interface Reserva {
    map?: unknown;
    start: { seconds: number; nanoseconds: number };
    end: { seconds: number; nanoseconds: number };
    title?: string;
  }