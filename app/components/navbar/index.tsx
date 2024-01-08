/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import UseAnimations from "react-useanimations";
import menu2 from "react-useanimations/lib/menu2";
import NavnarMenuDesktop from "./menu-desktop";
import NavbarMenu from "./menu-mobile";
import ButtonSignIn from "../buttons/sign-in";
import Logo from "@/public/assets/logo";
import Link from "next/link";
import Image from "next/legacy/image";
import { useSession, signOut } from "next-auth/react";
import Modal from "../modals/sign-in";
import { Toaster, toast } from "sonner";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { data: session } = useSession();
  const pathname = usePathname();
  const isExperienciasRoute = pathname === "/experiencias";

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
    setShowMenu(!showMenu);
  }, [isMenuOpen, showMenu]);

  useEffect(() => {
    const handleEscapeKey = (event: any) => {
      if (event.key === "Escape") {
        toggleMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    // Agregar el evento al documento
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isMenuOpen, toggleMenu]);

  const handleHover = () => {
    setShowMenu(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Función para cerrar el menú si se hace clic fuera
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setShowMenu(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut();
      toast.success("¡Cierre de sesión exitoso!");
    } catch (error) {
      toast.error("Error al cerrar sesión");
    }
  };

  useEffect(() => {
    if (session && session.user && !showWelcome) {
      toast.success(`¡Bienvenido, ${session.user.name}!`);
      setShowWelcome(true);
    }
  }, [session, showWelcome]);

  return (
    <nav>
      <Toaster position="top-center" expand={true} richColors />
      <div
        className={`z-50 xs:h-full fixed font-semibold md:text-md w-full tracking-wide px-8 flex items-center justify-between align-middle lg:pr-8 ${
          isExperienciasRoute
            ? "bg-transparent text-white absolute "
            : "bg-metal2 bg-center bg-contain backdrop-blur-3xl bg-white"
        }`}
      >
        {isExperienciasRoute ? (
          <>
            <div className="hidden md:block md:w-1/3">
              <Link href="/">
                <Logo size="lg" color="blanco" />
              </Link>
            </div>
            <div className="md:hidden block md:w-1/3">
              <Logo size="md" color="blanco" />
            </div>
          </>
        ) : (
          <>
            <div className="hidden md:block md:w-1/3">
              <Link href="/">
                <Logo size="lg" />
              </Link>
            </div>
            <div className="md:hidden block md:w-1/3">
              <Logo size="md" />
            </div>
          </>
        )}

        <NavnarMenuDesktop />

        <div
          className={`hidden sm:flex sm:justify-end sm:w-1/3 ${
            isExperienciasRoute ? "text-white" : ""
          }`}
        >
          {/*...*/}

          {session?.user ? (
            <div
              className="flex relative gap-x-2 items-center"
              onMouseEnter={handleHover}
              ref={menuRef}
            >
              <div className="w-12 flex items-center">
                <Image
                  alt="User profile image"
                  width={50}
                  height={50}
                  objectFit="cover"
                  layout="fixed"
                  quality={50}
                  placeholder="blur"
                  blurDataURL={session.user.image || ""}
                  src={session.user.image || ""}
                  className="w-10 h-full rounded-full cursor-pointer"
                />
                {showMenu && (
                  <div className="absolute top-12 right-0 bg-white border border-gray-200 rounded-lg shadow-md p-4 ">
                    <p className=" flex items-center  border-b py-2">{session.user.name}</p>
                    <p className=" flex items-center border-b py-2">{session.user.email}</p>
                    <Link className="flex items-center  border-b py-2" href="/dashboard">
                      Perfil
                    </Link>
                    <button
                      className="flex items-center py-2 mt-4 rounded-full px-4 h-8 mb-1 bg-[#a1d1cf]"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="hidden md:block">
              <ButtonSignIn handleOpenModal={handleOpenModal} />
            </div>
          )}
        </div>

        <button onClick={toggleMenu} className=" animation-container md:hidden">
          <UseAnimations animation={menu2} size={50} fillColor="#a1d1cf" strokeColor="#a1d1cf" />
        </button>
        {isModalOpen && <Modal onClose={handleCloseModal} />}
      </div>
      <NavbarMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} handleOpenModal={handleOpenModal} />
    </nav>
  );
};

export default Navbar;
