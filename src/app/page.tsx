import Banner from "./components/banner";
import Sections from "./components/sections";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-col justify-center mt-6 ml-4 md:ml-7 mr-2 md:mr-0">
      <Banner />
      <div>
        <div className="border border-t border-black separador mt-6"></div>
        <div className="w-full flex flex-col items-center justify-center my-10">
          <h1 className="md:text-5xl text-4xl max-[390px]:text-3xl ">
            Viviendas Disponibles
          </h1>
          <p className="text-slate-600 md:text-xl text-md text-center mt-8   max-[385px]:text-sm max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg">
            Contamos con 2 modelos de hogares ideales para la comodidad de
            nuestros clientes, permitiendo adaptarse correctamente a sus gustos
            y necesidades. No dude en contactarse para que lo acompañemos en su
            eleccion
          </p>
          <h2 className="text-blue-500 text-center text-md mt-10">MAS INFO</h2>
        </div>
        <Sections />
      </div>
      <div className="border border-t border-black separador mt-6"></div>
    </div>
  );
}
