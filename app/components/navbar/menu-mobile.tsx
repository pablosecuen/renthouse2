import Link from "next/link";
import Image from "next/image";
import button from "@/public/assets/exit/buttonExit.svg";
import handleNavItemClick from "@/utils";
import Modal from "../modals/sign-in";

interface NavbarMenuProps {
  isOpen: boolean;
  isModalOpen: boolean;
  toggleMenu: () => void;
  setIsModalOpen: (arg0: boolean) => void;
}
const NavbarMenu: React.FC<NavbarMenuProps> = ({
  isOpen,
  toggleMenu,
  isModalOpen,
  setIsModalOpen,
}) => {
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
        className={`transition-all duration-500 sm:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } fixed h-screen sm:mt-16 mt-14 w-screen top-0 left-0 bg-black/20`}
        onClick={toggleMenu}
      ></div>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
      <div
        className={`transition-all duration-1000 sm:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-14 sm:top-16 right-0 w-[50%] h-screen bg-primary shadow-2xl p-4 `}
      >
        <div className="w-24 mx-auto py-8">
          <div className="w-24">
            <Image src={button} alt="boton" width={150} height={150} onClick={handleButtonClick} />
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
