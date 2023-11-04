"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import UseAnimations from "react-useanimations";
import menu2 from "react-useanimations/lib/menu2";
import NavnarMenuDesktop from "./menu-desktop";
import NavbarMenu from "./menu-mobile";
import ButtonSignIn from "../buttons/sign-in";
import Logo from "@/public/assets/logo";
import Link from "next/link";
import Image from "next/legacy/image";
import { signIn, useSession, signOut } from "next-auth/react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { data: session } = useSession();

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

  // Función para cerrar el menú si se hace clic fuera
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setShowMenu(false);
    }
  };

  return (
    <nav>
      <div className="z-50 xs:h-full fixed  font-semibold md:text-lg w-full tracking-wide px-8  flex items-center justify-between align-middle lg:pr-8 bg-metal2 bg-center bg-contain backdrop-blur-3xl bg-white">
        <div className="hidden md:block md:w-1/3">
          <Link href="/">
            {" "}
            <Logo size="lg" />
          </Link>
        </div>
        <div className="md:hidden block md:w-1/3">
          <Logo size="md" />
        </div>
        <button onClick={toggleMenu} className=" animation-container sm:hidden">
          <UseAnimations animation={menu2} size={50} fillColor="#a1d1cf" strokeColor="#a1d1cf" />
        </button>
        <NavnarMenuDesktop />

        <div className="hidden sm:flex sm:justify-end sm:w-1/3">
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
                      onClick={async () => {
                        await signOut({
                          callbackUrl: "/",
                        });
                      }}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <>
              <ButtonSignIn />
            </>
          )}
        </div>
      </div>
      <NavbarMenu
        isOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        showMenu={showMenu}
      />
    </nav>
  );
};

export default Navbar;
