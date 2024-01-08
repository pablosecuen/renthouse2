import francia from "/public/assets/francia/carouselfrancia.jpg"
import quebracho from "/public/assets/quebracho/carouselquebracho.jpg"
import newbery from "/public/assets/summerhouse/carouselimgnewbery.jpg"
import argentino from "/public/assets/argentino/carouselargentino.jpg"

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
/*     { label: "Reservar", href: "/reservar" }, */
    { label: "Disponibles", href: "/propiedades", onClick: "propiedades" },
    { label: "Experiencias", href: "/experiencias", onClick: "experiencias" },
    { label: "Publica tu casa", href: "/publicatucasa", onClick: "publica tu casa" },
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
      answer: "Según las leyes vigentes para alquileres temporarios, todos los huéspedes deben presentar documento o pasaporte para ser inscritos en el libro de visitas. Esta es una condición, sin excepción, que se aplica a todos los huéspedes, independientemente del canal a través del cual reservan (nuestro sitio web, Airbnb, Booking.com, VRBO u otro)."
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
  


export const carouselObject= [
  {title: "francia", bgImage: francia, bgVideo: "https://www.youtube.com/embed/dU_iqqkUAEc?mute=1"},
  {title: "quebracho", bgImage: quebracho, bgVideo: "https://www.youtube.com/embed/dU_iqqkUAEc?mute=1"},
  {title: "newbery", bgImage: newbery, bgVideo: "https://www.youtube.com/embed/dU_iqqkUAEc?mute=1"},
  {title: "argentino", bgImage: argentino, bgVideo: "https://www.youtube.com/embed/dU_iqqkUAEc?mute=1"},
  {title: "francia1", bgImage: francia, bgVideo: "https://www.youtube.com/embed/dU_iqqkUAEc?mute=1"},

]


 export const cardsInfo = [
    {
      icon: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="80" height="40">
          <path d="M160 224v64h320v-64c0-35.3 28.7-64 64-64h32c0-53-43-96-96-96H160c-53 0-96 43-96 96h32c35.3 0 64 28.7 64 64zm416-32h-32c-17.7 0-32 14.3-32 32v96H128v-96c0-17.7-14.3-32-32-32H64c-35.3 0-64 28.7-64 64 0 23.6 13 44 32 55.1V432c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-16h384v16c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V311.1c19-11.1 32-31.5 32-55.1 0-35.3-28.7-64-64-64z"></path>
        </svg>
      `,
      title: "Equipamiento",
      description: "NOS ENCARGAMOS DE EQUIPAR TU PROPIEDAD SIGUIENDO LAS ULTIMAS TENDENCIAS DEL MERCADO.",
    },
    {
      icon: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="80" height="40">
          <path d="M11 9.27V0l6 11-4 6H7l-4-6L9 0v9.27a2 2 0 102 0zM6 18h8v2H6v-2z"></path>
        </svg>
      `,
      title: "Publicaciones",
      description: "NOS OCUPAMOS DE CREAR LOS ANUNCIOS EN TRES IDIOMAS EN TODOS LOS PORTALES DE ALQUILER TEMPORARIO, ADEMAS DE NUESTRO SITIO WEB.",
   },
       {
      icon: `
       <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" width="80" height="40"><path d="M10.5 8.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path><path d="M2 4a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1.172a2 2 0 01-1.414-.586l-.828-.828A2 2 0 009.172 2H6.828a2 2 0 00-1.414.586l-.828.828A2 2 0 013.172 4H2zm.5 2a.5.5 0 110-1 .5.5 0 010 1zm9 2.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"></path></svg>
      `,
      title: "Fotografía",
      description: "CONTAMOS CON NUESTRO PROPIO EQUIPO DE FOTÓGRAFOS, LISTOS PARA MOSTRAR CADA RINCÓN DE SU PROPIEDAD.",
   },
             {
      icon: `
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="80" height="40"><path fill="none" d="M0 0h24v24H0z"></path><path d="M8 18h10.237L20 19.385V9h1a1 1 0 011 1v13.5L17.545 20H9a1 1 0 01-1-1v-1zm-2.545-2L1 19.5V4a1 1 0 011-1h15a1 1 0 011 1v12H5.455z"></path></svg>
      `,
      title: "Reservas y Solicitudes",
      description: "CONTESTAMOS TODAS LAS SOLICITUDES DE RESERVA EN UN PROMEDIO MENOR A 5 MINUTOS, 7 DÍAS A LA SEMANA.",
   },
                          {
      icon: `
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="80" height="40"><path d="M235.6 160H84.37c-33.1 0-60.74 25.2-63.74 58.2L.27 442.2c-3.409 37.5 26.1 69.8 63.74 69.8h191.1c37.63 0 67.14-32.31 63.74-69.79l-20.36-224C296.4 185.2 268.7 160 235.6 160zm-76.5 256c-34.4 0-63.1-26.3-63.1-58.7 0-25 38.08-75.47 55.5-97.27 4.25-5.312 12.75-5.312 17 0C185.9 281.8 224 332.3 224 357.3c0 32.4-28.7 58.7-64.9 58.7zM379.3 94.06l-43.32-43.32C323.1 38.74 307.7 32 290.8 32h-66.75c0-17.67-14.33-32-32-32H127.1c-17.67 0-32 14.33-32 32l.9 96h128V96h66.75l43.31 43.31c6.248 6.248 16.38 6.248 22.63 0l22.62-22.62c6.29-6.29 6.29-16.39-.01-22.63z"></path></svg>
      `,
      title: "Limpieza",
      description: "EQUIPO DE LIMPIEZA PROFESIONAL DISTRIBUIDO POR ZONAS PARA QUE TRABAJEN SIEMPRE EN LAS MISMAS PROPIEDADES.",
   },
                                                   {
      icon: `
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="80" height="40"><path d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"></path></svg>
      `,
      title: "Mantenimiento",
      description: "AMPLIO EQUIPO DE MANTENIMIENTO DISPONIBLE 24/7 PARA RESOLVER CUALQUIER TIPO DE EVENTUALIDAD QUE PUDIERA SURGIR",
   },
                                                                            {
      icon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="80" height="40"><path d="M160 32v32h128V32c0-17.67 14.3-32 32-32s32 14.33 32 32v32h48c26.5 0 48 21.49 48 48v48H0v-48c0-26.51 21.49-48 48-48h48V32c0-17.67 14.3-32 32-32s32 14.33 32 32zM0 192h448v272c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V192zm328.1 112.1c10.2-8.5 10.2-23.7 0-33.1-8.5-9.3-23.7-9.3-33.1 0l-95 95.1-47.9-47.1c-8.5-9.3-23.7-9.3-33.1 0-9.3 9.4-9.3 24.6 0 33.1l64 64c9.4 10.2 24.6 10.2 33.1 0l112-112z"></path></svg>
      `,
      title: "Check in/Check out",
      description: "COORDINAMOS LOS INGRESOS Y LAS SALIDAS CON DISPONIBILIDAD 24 HORAS.",
   },
                                                                                                     {
      icon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="80" height="40"><path d="M336 64h-53.88C268.9 26.8 233.7 0 192 0s-76.9 26.8-90.1 64H48C21.5 64 0 85.48 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.48 48-48V112c0-26.52-21.5-48-48-48zM96 392c-13.25 0-24-10.75-24-24s10.75-24 24-24 24 10.75 24 24-10.7 24-24 24zm0-96c-13.25 0-24-10.75-24-24s10.75-24 24-24 24 10.8 24 24-10.7 24-24 24zm96-232c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.3-32-32c0-17.67 14.3-32 32-32zm112 320H176c-8.8 0-16-7.2-16-16s7.2-16 16-16h128c8.801 0 16 7.199 16 16 0 8.8-7.2 16-16 16zm0-96H176c-8.8 0-16-7.2-16-16s7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16z"></path></svg>
      `,
      title: "Inventario, Reclamos y Reposiciones",
      description: "NOS ENCARGAMOS DE MANTENER TU INVENTARIO AL DÍA, ASÍ COMO DE RECLAMAR, COBRAR Y REPONER TODOS LOS FALTANTES.",
    },
    // Agrega más objetos aquí para más tarjetas si es necesario
  ];