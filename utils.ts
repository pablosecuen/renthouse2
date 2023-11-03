const importImagesSummerhouse = (prefix:any, totalImages:number) => {
  const images = [];
  for (let i = 1; i <= totalImages; i++) {
    const img = require(`@/public/assets/summerhouse/DPD-${i.toString().padStart(2, '0')}.webp`);
    images.push(img);
  }
  return images;
};

const importImagesBvArgentino = (prefix: string, totalImages: number, ): string[] => {
  const images: string[] = [];
  for (let i = 1; i <= totalImages; i++) {
    const img = require(`@/public/assets/argentino/DPD - BV ARGENTINO-${i.toString().padStart(2, '0')}.jpg`);
    images.push(img);
  }
  return images;
};



 const importImagesFrancia = (prefix: string, totalImages: number, extension: string): string[] => {
  const images: string[] = [];
  for (let i = 1; i <= totalImages; i++) {
    const img = require(`@/public/assets/francia/DPD - FRANCIA 1200-${i.toString().padStart(2, '0')}.webp`);
    images.push(img);
  }
  return images;
}; 

const importImagesQuebracho = (prefix: string, totalImages: number, extension: string): string[] => {
  const images: string[] = [];
  for (let i = 1; i <= totalImages; i++) {
    const img = require(`@/public/assets/quebracho/DPD - QUEBRACHO-${i.toString().padStart(2, '0')}.${extension}`);
    images.push(img);
  }
  return images;
}; 




export const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top;
      const headerHeight = 16; // Ajusta esto al tamaño de tu barra de navegación
      const totalOffset = offsetTop - headerHeight;

      window.scrollBy({
        top: totalOffset,
        behavior: "smooth",
      });
    }
  };

 const handleNavItemClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    if (window.location.pathname === "/tracking") {
      // Redireccionar a la página de inicio
      window.location.href = "/";

      // Esperar un breve tiempo (por ejemplo, 500 ms) antes de realizar el desplazamiento suave
      setTimeout(() => {
        // Obtener la posición de la sección en la página de inicio
        const targetSection = document.getElementById(sectionId);
        const targetPosition = targetSection?.getBoundingClientRect().top ?? 0;

        // Realizar el desplazamiento suave a la posición de la sección en la página de inicio
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }, 1000);
    } else {
      // Si no estamos en la página de tracking, simplemente realizar el desplazamiento suave
      // utilizando la función handleSmoothScroll() que tenías implementada previamente
      handleSmoothScroll(e, sectionId);
    }
  };

  export default handleNavItemClick;


  export const tabs = [
    { label: "Reservar", href: "/reservar" },
    { label: "Disponibles", href: "/propiedades", onClick: "propiedades" },
    { label: "Experiencias", href: "/experiencias", onClick: "experiencias" },
  ];

  export const faqs = [
    {
      question: "¿En qué moneda están especificadas las tarifas?",
      answer: "Todas nuestras tarifas están en dólares americanos."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Los pagos son con tarjeta de crédito o transferencia local o internacional."
    },
    {
      question: "Si utilizo una tarjeta de crédito emitida en Argentina, ¿cuánto pagaré?*",
      answer: "Si tu tarjeta de crédito fue expedida por un banco argentino, pagarás el equivalente al dólar oficial del día + 75% impuesto país, como todos los gastos en dólares en la República Argentina."
    },
    {
      question: "¿Puedo solicitar una preaprobación para posterior pagar por transferencia?",
      answer: "Sí, puedes solicitar una preaprobación de 24 horas para realizar una transferencia local o internacional. Si pagas desde una cuenta argentina (en pesos), ten en cuenta que debes pagar el equivalente a la punta más alta del dólar paralelo (azul). Puedes solicitarnos los números de cuenta, una vez solicitada la preaprobación del inmueble deseado."
    },
    {
      question: "¿Puedo reservar por otros canales?",
      answer: "¡Sí, claro! Encontrarás nuestros anuncios en Airbnb, Booking.com, VRBO, TripAdvisor, HomeToGo, Marriot Homes & Villas y otras alternativas. Ten en cuenta que, en estos canales, pagarás un cargo de servicio adicional."
    },
    {
      question: "¿Pagaré un depósito de seguridad?",
      answer: "Para todas nuestras propiedades solicitamos un depósito de seguridad entre USD 100 y USD 600 dependiendo del tamaño y capacidad de la propiedad. Este depósito se retiene de tu tarjeta de crédito hasta 7 días después del check-out. Si encontramos algún inventario que falta, te notificaremos y te cargaremos según nuestra lista de precios."
    },
    {
      question: "¿Es posible que el precio de las propiedades varíe en función del número de huéspedes?",
      answer: "Así es como funciona. Para todas nuestras propiedades, los precios varían según el número de huéspedes. Todas las personas deben estar incluidas en la reserva, excepto los niños menores de 2 años que no pagan adicional."
    },
    {
      question: "¿Hay una tarifa adicional para las mascotas?",
      answer: "Correcto; cada mascota pagará una tarifa adicional de limpieza de USD 50 por estancia. Esto significa que si viajas con 2 perros, deberás pagar USD 100. Esta tarifa se solicita para garantizar limpieza y saneamiento en todas nuestras propiedades."
    },
    {
      question: "¿Debo presentar documento de identidad o pasaporte?",
      answer: "Según las leyes vigentes para alquileres temporales en la Ciudad de Buenos Aires, todos los huéspedes deben presentar documento o pasaporte para ser inscritos en el libro de visitas. Esta es una condición, sin excepción, que se aplica a todos los huéspedes, independientemente del canal a través del cual reservan (nuestro sitio web, Airbnb, Booking.com, VRBO u otro)."
    },
    {
      question: "¿Qué es la política de cancelación de Rent House?",
      answer: "Si los huéspedes cancelan al menos 30 días antes del check-in, reciben un reembolso completo. También pueden obtener un reembolso completo dentro de las 48 horas de la reserva si la cancelación ocurre al menos 14 días antes del check-in. Si cancelan entre 7 y 30 días antes del check-in, usted recibe el importe correspondiente al 50% de todas las noches. Si cancelan menos de 7 días antes del check-in, cobramos el 100% de todas las noches."
    },
    {
      question: "¿Cuál es la política de cambio de fecha de Rent House?",
      answer: "No se permite cambio de fecha para acortar su estancia. En caso de ser afectado por esta política, le sugerimos cancelar la reserva, siempre que se encuentre dentro de los plazos para recibir un reembolso total o parcial. Si desea prolongar su estancia, puede contactar a su anfitrión para realizar el cambio correspondiente y le enviará el cupón de pago."
    }
  ]
  
export const propiedades = [
          {direccion: "AVENIDA NEWBERY 9200 FISHERTON",
    tipo:"casa",
    descripcion:"Alquiler temporario una lujosa casa quinta en Fisherton, Rosario, ubicada a menos de 7 km del centro de la ciudad.    La propiedad cuenta con un terreno de 3.000 m2 de espacios    verdes totalmente parquizados, con muebles a tono para    disfrutar al aire libre.    La casa cuenta con aire acondicionado en todos sus ambientes    y una zona de parrillero con vajilla completa. Además, cuenta    con 20 camas y baños equipados para alojar cómodamente a 20    personas.    Cuenta con una galería techada, parrilla cubierta y fogonero    en el exterior. La casa incluye ropa de cama y el servicio de    limpieza y de piscina para mayor comodidad de los huéspedes.    Seguridad privada las 24 horas.",
    huespedes:20,
    baños: 4,
    pileta: false,
    ubicacion:"",
    habitaciones:4,
    camas: 20,
    seguridad: true,
    distanciadelcentro: 10,
    caracteristicas: {
      aire: true,
      menores: true,
      mascotas: true,
      fumadores: true,
      balcon: true,
      bañera: true,
      cafetera: true,
      pileta: true,
      parrilla: true,
      wifi: true,
      estacionamiento: true,
      },
    fechas: {
      libres: [], 
      ocupadas: [], 
    },
    precioPorNoche: 0,
    imagenes: importImagesSummerhouse("@/public/assets/summerhouse/DPD-", 23),
    video: "https://www.youtube.com/embed/dU_iqqkUAEc"
            }, 
          {direccion: " BV. ARGENTINO",
tipo:"casa",
descripcion:"Se ofrece en alquiler temporario una propiedad ubicada en el exclusivo barrio de Fisherton, a solo 7 km del centro de la ciudad de Rosario. La casa cuenta con un terreno de 3.000 m2 y un frente de 40 m2, brindando amplios espacios verdes para disfrutar al aire libre. La propiedad cuenta con seguridad privada, 5 habitaciones y 4 baños equipados para brindar una estadía confortable y placentera. Además, dispone de una piscina para los días cálidos, conexión a internet wifi y un Smart TV con Pack futbol para aquellos que disfrutan del futbol. La propiedad también cuenta con un portón corredizo y un quincho cerrado para disfrutar de asados y reuniones familiares o con amigos. La casa incluye ropa de cama y toallas para mayor comodidad de los huéspedes. Se solicita un uso responsable y exigente de la propiedad para mantenerla en excelentes condiciones.", 
huespedes:20,
baños: 4,
ubicacion:"",
habitaciones:5,
camas: 20,
seguridad: true,
distanciadelcentro: 7,
caracteristicas: {
  aire: true,
  menores: true,
  mascotas: true,
  fumadores: true,
  balcon: true,
  bañera: true,
  cafetera: true,
  pileta: true,
  parrilla: true,
  wifi: true,
  estacionamiento: true,
  "tv led":true,
 "pack futbol": true,
  },
fechas: {
  libres: [], 
  ocupadas: [], 
},
precioPorNoche: 0,
imagenes: importImagesBvArgentino("BV ARGENTINO-", 67),
video: ""
            }, 
          {direccion: "AV FRANCIA",
tipo:"casa",
descripcion:"casa de 3 pisos ubicada en el centro de la ciudad, rodeada de zonas de bares y restaurantes. Cuenta con un amplio quincho con parrilla, aire acondicionado y vajilla para 20/25 personas. Además, dispone de una gran piscina y cochera techada para 4 autos con portón eléctrico. La propiedad cuenta con un jardín de 600 m2 y espacios verdes para disfrutar al aire libre. La casa incluye 5 habitaciones, 6 baños y cocina amplia con varias heladeras, microondas, cafetera, aire acondicionado, ostadoras y ollas. Asimismo, cuenta con ropa de cama y servicio de limpieza de casa y de piscina incluidos durante los fines de semana. También dispone de wi-fi, smart TV  con pack futbol y un quincho abierto para mayor comodidad.", 
huespedes:20,
baños: 6,
ubicacion:"",
habitaciones:5,
camas: 20,
seguridad: true,
distanciadelcentro: 7,
caracteristicas: {
  vajilla:true,
  aire: true,
  menores: true,
  mascotas: true,
  fumadores: true,
  balcon: true,
  bañera: true,
  cafetera: true,
  microondas:true,
  "ropa de cama": true,
  pileta: true,
  parrilla: true,
  wifi: true,
  estacionamiento: true,
  "porton electrico": true,
  "tv led":true,
 "pack futbol": false,
  },
fechas: {
  libres: [], 
  ocupadas: [], 
},
precioPorNoche: 0,
imagenes: importImagesFrancia("Francia 1200-", 72, "webp"),
video: ""
            } ,
          {direccion: "QUEBRACHO",
tipo:"casa",
descripcion:"Hermosa casa con quincho cerrado equipado con parrilla, aire acondicionado y vajilla para 20/25 personas. La propiedad también cuenta con una piscina iluminada, galería techada con espacio para 5 autos, portón eléctrico, fogonero y ropa de cama incluida. En el interior de la casa, hay 4 habitaciones, 3 baños y una cocina amplia con heladera. Además, la casa está completamente amoblada y equipada con wi-fi, Smart TV con pack futbol, microondas, cafetera, tostadoras, ollas y aire acondicionado.", 
huespedes:18,
baños: 3,
ubicacion:"",
habitaciones:4,
camas: 18,
seguridad: true,
distanciadelcentro: 7,
caracteristicas: {
  vajilla:true,
  ollas: true,
  aire: true,
  menores: true,
  mascotas: true,
  fumadores: true,
  balcon: true,
  bañera: true,
  cafetera: true,
  microondas:true,
  tostadora: true,
  "ropa de cama": true,
  pileta: true,
  parrilla: true,
  wifi: true,
  estacionamiento: true,
  "porton electrico": true,
  "tv led":true,
 "pack futbol": false,
 fogonero: true,
  },
fechas: {
  libres: [], 
  ocupadas: [], 
},
precioPorNoche: 0,
imagenes: importImagesQuebracho("QUEBRACHO-", 52, "webp"),
video: ""
            } 
  ]