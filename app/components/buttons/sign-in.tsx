"use client";
import React, { useState } from "react";
import button from "@/public/assets/exit/buttonExit.svg";
import Image from "next/image";
import Modal from "../modals/sign-in";

function ButtonSignIn() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-24 sm:block">
      <Image src={button} alt="boton" width={150} height={150} onClick={handleButtonClick} />
      {isModalOpen && (
        <>
          <Modal onClose={handleCloseModal} />
        </>
      )}
    </div>
  );
}

export default ButtonSignIn;
