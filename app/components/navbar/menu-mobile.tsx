import Link from "next/link";
import Image from "next/legacy/image";
import handleNavItemClick from "@/utils";
import Modal from "../modals/sign-in";
import ButtonSignIn from "../buttons/sign-in";
import { signIn, useSession, signOut } from "next-auth/react";

interface NavbarMenuProps {
  isOpen: boolean;
  isModalOpen: boolean;
  toggleMenu: () => void;
  setIsModalOpen: (arg0: boolean) => void;
  showMenu: boolean;
}
const NavbarMenu: React.FC<NavbarMenuProps> = ({
  isOpen,
  toggleMenu,
  isModalOpen,
  setIsModalOpen,
  showMenu,
}) => {
  const { data: session } = useSession();
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const liclass = "my-2 hover:text-secondary transition duration-500";

  return (
    <>
      <div
        className={`transition-all duration-500 sm:hidden  ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } fixed h-screen sm:mt-16 mt-14 w-screen top-0 left-0 bg-black/20`}
        onClick={toggleMenu}
      ></div>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
      <div
        className={`transition-all duration-1000 sm:hidden bg-white z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-12 sm:top-16 right-0 w-[60%] h-screen bg-primary shadow-2xl shadow-black/40 p-4 `}
      >
        <div className="w-24  py-8">
          <div className="w-24">
            {session?.user ? (
              <div className="flex flex-col ">
                <div className=" flex flex-col ">
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
                  <p className="    border-b py-2">{session.user.name}</p>
                  <p className="   border-b py-2">{session.user.email}</p>
                  <Link className="  border-b py-2" href="/dashboard">
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
              </div>
            ) : (
              <>
                <ButtonSignIn />
              </>
            )}
          </div>
        </div>
        <ul className="flex flex-col">
          <li className={liclass}>
            <Link href="#reservar" onClick={(e) => handleNavItemClick(e, "Reservar")}>
              Reservar
            </Link>
          </li>
          <li className={liclass}>
            <Link href="/disponibles" onClick={(e) => handleNavItemClick(e, "Disponibles")}>
              Disponibles
            </Link>
          </li>
          <li className={liclass}>
            <Link href="#experiencias" onClick={(e) => handleNavItemClick(e, "Experiencias")}>
              Experiencias
            </Link>
          </li>
          <li className={liclass}>
            <Link href="#tutoriales" onClick={(e) => handleNavItemClick(e, "Contacto")}>
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarMenu;
