import React from "react";
import Logo from "@/public/assets/logo";
import GoogleButtonLogin from "../buttons/google-button";
export interface ModalProps {
  onClose: () => void;
}
function Login({ onClose }: ModalProps) {
  return (
    <section className="bg-primary  md:w-[450px] w-[350px] bg-gray-200 rounded-xl md:h-full ">
      <div className="flex flex-col z-20 items-center justify-center md:px-6 px-1 py-4 md:py-8 mx-auto md:h-full ">
        <button
          onClick={onClose}
          className="px-4  mr-2 mt-2 text-sm right-0 ml-auto py-2 bg-gray-600 text-white rounded"
        >
          Cerrar
        </button>
        <a href="https://localhost:3000" className=" mb-6">
          <Logo size="md" />
        </a>
        <div className=" bg-primary w-full rounded-lg shadow border md:mt-0  xl:p-0 bg-gray-300 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Ingresa con tu cuenta
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="nombre@compania.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-100 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="flex flex-col w-48">
                    <div className="text-sm ml-2">
                      <label htmlFor="remember" className="text-gray-500 ">
                        Recuerdame
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center py-4">
                {" "}
                <a
                  href="#"
                  className="text-sm w-1/2 text-center font-medium text-secondary hover:underline   "
                >
                  Olvide mi contraseña
                </a>
                <button
                  type="submit"
                  className="w-1/2 text-secondary hover:underline bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5  text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 cursor-pointer "
                >
                  Ingresa
                </button>
              </div>
              <GoogleButtonLogin />
              <p className="text-sm font-light text-gray-500 ">
                Aún no tienes una cuenta?{" "}
                <a href="#" className="font-medium text-secondary hover:underline ">
                  Registro
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
