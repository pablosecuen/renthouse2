"use client";
import React, { useState } from "react";
import button from "@/public/assets/exit/buttonExit.svg";
import Image from "next/legacy/image";
import Modal from "../modals/sign-in";

interface ButtonSignInProps extends React.HTMLAttributes<HTMLDivElement> {
  handleOpenModal?: () => void;
}
function ButtonSignIn({ handleOpenModal }: ButtonSignInProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-24 h-auto md:block cursor-pointer animate-fadeInLeft">
      <Image
        src={button}
        alt="boton"
        width={150}
        height={100}
        onClick={handleOpenModal}
        className="border h-auto"
      />
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
}

export default ButtonSignIn;
