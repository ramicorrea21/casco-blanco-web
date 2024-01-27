'use client'
import Banner from "./components/banner";
import Sections from "./components/sections";
import Link from "next/link";
import Loader from "./components/loader";
import { useState, useEffect } from "react";


export default function Home() {
  const [loading, setLoading] = useState(true)
  const load = () =>{
    setTimeout(() =>{
        setLoading(false)
    }, 2000)
  }

  useEffect(() =>{
    load()
  }, [])


  return (
    <>
    {loading? <div className="flex justify-center items-center mt-10"><Loader/></div> : <div className="flex flex-col justify-center mt-6 ml-4 md:ml-7 mr-2 md:mr-0">
      <Banner />
      <div>
        <div className="border border-t border-black separador mt-6"></div>
        <div className="w-full flex flex-col items-center justify-center my-10" id="sections">
          <h1 className="md:text-5xl text-4xl max-[390px]:text-3xl ">
          Tipologías
          </h1>
          <p className="text-slate-600 md:text-xl text-md text-center mt-8 min-[500px]:mb-6   max-[385px]:text-sm max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg">
          Construimos tu proyecto con materiales de construcción tradicional y pagás por avance de obra. Trabajamos con las mejores marcas: Palmar, Holcim, FV, Ferrum, Roca, Acindar y más.
          </p>
          <Link href='tel:+5493516957869' className="max-[500px]:block hidden"><h2 className="text-blue-500 text-center text-md mt-10">Llamar</h2></Link>
        </div>
        <Sections />
      </div>
    </div>}
      
    </>
  );
}
