import Login from "./login-form";

export interface ModalProps {
  onClose: () => void;
}
export default function Modal({ onClose }: ModalProps) {
  return (
    <div className="fixed z-10 top-0 left-0 w-screen h-screen flex items-center justify-center bg-primary/50">
      <div className="relative  self-center place-self-center z-50 ">
        <button
          onClick={onClose}
          className="px-4 absolute mr-2 mt-2 text-sm right-0 py-2 bg-gray-600 text-white rounded"
        >
          Cerrar
        </button>
        <Login />
        <div
          className="fixed -z-10 min-h-screen  w-screen  top-0 left-0 bg-black/20"
          onClick={onClose}
        ></div>
      </div>
    </div>
  );
}
