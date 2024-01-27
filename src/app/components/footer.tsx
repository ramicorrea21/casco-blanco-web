'use client'
import WspButton from "./wsp";
import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";
import Loader from "./loader";

export default function Footer() {
  const [loading, setLoading] = useState(true)
  const load = () =>{
    setTimeout(() =>{
        setLoading(false)
    }, 2500)
  }

  useEffect(() =>{
    load()
  }, [])



  return (
    <>
    {loading? <></> : <><div>
        <WspButton />
      </div>
      <footer className="w-screen mt-28">
        <div className="p-10 bg-gray-800 text-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="mb-5">
                <h4 className="text-2xl pb-4">Casco Blanco Constructora</h4>
                <p className="text-gray-500">
                  Raúl Hugo Espoile 3021, <br />
                  Barrio Los Naranjos, <br />
                  Córdoba, Argentina <br /> <br />
                </p>
              </div>
              <div className="mb-5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.499612366681!2d-64.23122258818692!3d-31.427909896702225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329823ba399b07%3A0x637c26c780125f8e!2sCasco%20Blanco%20Materiales!5e0!3m2!1ses-419!2sar!4v1706153340128!5m2!1ses-419!2sar"
                  width={300}
                  height={200}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                /> 
              </div>
              <div className="mb-5">
                <h4 className="pb-4">Enlaces</h4>
                <ul className="text-gray-500">
                  <li className="pb-4 flex">
                    <CiMail size={25} /> cascoblancomateriales@gmail.com
                  </li>
                  <li className="pb-4 flex">
                    <BsFillTelephoneFill size={20} />
                    +54 9 3516957869
                  </li>
                  <Link href="https://www.facebook.com/cascoblancomateriales/">
                    <li className="pb-4 flex">
                      <FaFacebookSquare size={25} />
                      Casco Blanco Materiales
                    </li>
                  </Link>
                  <Link href="https://www.instagram.com/cascoblanco.m/">
                    <li className="pb-4 flex">
                      <RiInstagramFill size={25} />
                      cascoblanco.m
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="mb-5">
                <h4 className="pb-4">Sitio web hecho por Ramiro Correa</h4>
                <ul className="text-gray-500">
                  <Link href="https://www.linkedin.com/in/ramiro-correa/">
                    <li className="pb-4 flex">
                      <FaLinkedin size={25} /> Ramiro Correa
                    </li>
                  </Link>
                  <Link href="https://github.com/ramicorrea21">
                    <li className="pb-4 flex">
                      <FaGithub size={25} /> ramicorrea21
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer></>  }
      
    </>
  );
}
