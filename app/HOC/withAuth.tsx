import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { NextPage } from "next";

interface Props {}

const withAuth = (WrappedComponent: NextPage) => {
  const Auth: NextPage<Props> = (props: Props) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem("adminToken");

      if (token) {
        setIsAuthenticated(true);
        router.push("/admin/administrador-reservas"); // Redirige a la página de administración si está autenticado"
      } else {
        setIsAuthenticated(false);
        router.push("/"); // Redirige a la página de inicio de sesión si no está autenticado
      }
    }, [router]);

    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };

  Auth.getInitialProps = async (context) => {
    const wrappedProps = WrappedComponent.getInitialProps
      ? await WrappedComponent.getInitialProps(context)
      : {};
    // Puedes realizar ciertas lógicas aquí para verificar la autenticación antes de renderizar el componente

    return { ...wrappedProps };
  };

  return Auth;
};

export default withAuth;
