"use client";
import ReactGA from "react-ga";
import React from "react";
import { useEffect } from "react";

export const initGA = () => {
  ReactGA.initialize("G-GNNWD1EF17");
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const withGoogleAnalytics = <P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P> => {
  const trackPage = (page: string) => {
    ReactGA.set({ page });
    ReactGA.pageview(page);
  };

  const HOC: React.FC<P> = (props) => {
    useEffect(() => {
      initGA(); // Inicializa Google Analytics
      trackPage(window.location.pathname); // Registra la página actual al cargar la aplicación

      const handleRouteChange = (url: string) => {
        trackPage(url); // Registra la página al cambiar de ruta
      };

      // Manejador para el cambio de ruta
      const router = window.location.pathname;
      handleRouteChange(router);

      window.addEventListener("routeChangeComplete", () => {
        handleRouteChange(window.location.pathname);
      });

      return () => {
        window.removeEventListener("routeChangeComplete", () => {
          handleRouteChange(window.location.pathname);
        });
      };
    }, []);

    return <WrappedComponent {...props} />;
  };

  return HOC;
};
