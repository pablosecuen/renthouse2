import img1 from "@/public/assets/summerhouse/DPD-01.webp"
import img2 from "@/public/assets/summerhouse/DPD-02.webp"
import img3 from "@/public/assets/summerhouse/DPD-03.webp"
import img4 from "@/public/assets/summerhouse/DPD-04.webp"
import img5 from "@/public/assets/summerhouse/DPD-05.webp"
import img6 from "@/public/assets/summerhouse/DPD-06.webp"
import img7 from "@/public/assets/summerhouse/DPD-07.webp"
import img8 from "@/public/assets/summerhouse/DPD-08.webp"
import img9 from "@/public/assets/summerhouse/DPD-09.webp"
import img10 from "@/public/assets/summerhouse/DPD-10.webp"
import img11 from "@/public/assets/summerhouse/DPD-11.webp"
import img12 from "@/public/assets/summerhouse/DPD-12.webp"
import img13 from "@/public/assets/summerhouse/DPD-13.webp"
import img14 from "@/public/assets/summerhouse/DPD-14.webp"
import img15 from "@/public/assets/summerhouse/DPD-15.webp"
import img16 from "@/public/assets/summerhouse/DPD-16.webp"
import img17 from "@/public/assets/summerhouse/DPD-17.webp"
import img18 from "@/public/assets/summerhouse/DPD-18.webp"
import img19 from "@/public/assets/summerhouse/DPD-19.webp"
import img20 from "@/public/assets/summerhouse/DPD-20.webp"
import img21 from "@/public/assets/summerhouse/DPD-21.webp"
import img22 from "@/public/assets/summerhouse/DPD-22.webp"
import img23 from "@/public/assets/summerhouse/DPD-23.webp"




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
    habitaciones: 0,
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
    imagenes: [img1,img2,img3,img4,img5,img6, img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23],
}
  ]