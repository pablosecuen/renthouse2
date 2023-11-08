import Login from "./login-form";
import React from "react";
export interface ModalProps {
  onClose: () => void;
}
export default function Modal({ onClose }: ModalProps) {
  return (
    <div className="fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center bg-primary/50">
      <div className="  self-center place-self-center z-50  ">
        <Login onClose={onClose} />

        <div
          className="fixed -z-10 min-h-screen  w-screen  top-0 left-0 bg-black/20"
          onClick={onClose}
        ></div>
      </div>
    </div>
  );
}
