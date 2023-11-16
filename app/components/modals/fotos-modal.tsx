"use client";
import React, { useState } from "react";

interface modalProps {
  images: string[];
  handleModalFotos: () => void;
}
const FotosModal: React.FC<modalProps> = ({ images, handleModalFotos }) => {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const handleClickImage = (image: string) => {
    setFullscreenImage(image);
  };

  const handleCloseFullscreen = () => {
    setFullscreenImage(null);
  };
  return (
    <div className="min-h-screen w-screen absolute !z-50 top-0 left-0  p-10 bg-white">
      {fullscreenImage ? (
        <>
          <div
            className="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-50"
            onClick={handleCloseFullscreen}
          >
            <img src={fullscreenImage} alt="Fullscreen" className="max-h-screen max-w-full" />
          </div>
          <button onClick={handleModalFotos} className="fixed top-4 right-20 z-50">
            cerrar
          </button>
        </>
      ) : (
        <>
          <button onClick={handleModalFotos} className="absolute top-4 right-20">
            cerrar
          </button>
          <div className="flex flex-wrap justify-center border p-10 rounded lg">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index}`}
                className="max-w-full max-h-60 object-cover m-2 cursor-pointer"
                onClick={() => handleClickImage(image)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FotosModal;
