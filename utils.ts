//iteracion de imagenes de summerhouse
// Iteración de imágenes genérica
const importImages = (folder: string, prefix: string, totalImages: number, extension = 'webp'): string[] => {
  const images: string[] = [];
  for (let i = 1; i <= totalImages; i++) {
    const img = `/assets/${folder}/${prefix}-${i.toString().padStart(2, '0')}.${extension}`;
    images.push(img);
  }
  return images;
};

// Llamadas a la función con parámetros específicos para cada tipo de propiedad
const importImagesSummerhouse = (totalImages: number) => importImages('summerhouse', 'DPD', totalImages);
const importImagesBvArgentino = (totalImages: number) => importImages('argentino', 'DPD - BV ARGENTINO', totalImages);
const importImagesFrancia = (totalImages: number) => importImages('francia', 'DPD - FRANCIA 1200', totalImages);
const importImagesQuebracho = (totalImages: number, extension: string) => importImages('quebracho', 'DPD - QUEBRACHO', totalImages, extension);


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
  


