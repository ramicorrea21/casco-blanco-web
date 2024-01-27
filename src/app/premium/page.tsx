'use client'
import React, { useState, useEffect} from "react";
import SecSliders from "../components/secSliders";
import Loader from "../components/loader";

const Premium: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const load = () =>{
    setTimeout(() =>{
        setLoading(false)
    }, 2000)
  }

  useEffect(() =>{
    load()
  }, [])
  const slides = [
    {
      url: "/img/premium/premium-1.png",
    },
    {
      url: "/img/premium/premium-2.png",
    },
    {
      url: "/img/premium/premium-3.png",
    },
    {
      url: "/img/premium/premium-4.png",
    },
  ];

  return (
    <>
     {loading? <div className="flex justify-center items-center mt-10"><Loader/></div> : <>
     <h1 className="text-center mt-5 text-4xl">Viviendas Premium</h1>
      <SecSliders slides={slides} />
      <div className="mt-5 max-w-[1400px]  w-full m-auto pt-8 pb-4 px-4">
        <h1 className="text-center text-4xl">Ficha Técnica</h1>
        <ul className="text-start text-md md:text-lg mx-3 mt-5">
           <li className="mb-1"><strong>FUNDACIÓN:</strong> Se realiza fundación con zapata/platea según necesidad técnica de obra, construidas ambas con vigas riostras y malla sima de refuerzo, con hierro de construcción de diámetro pertinente. Se hormigona con hormigón tipo H21 con camión bomba para lograr una mezcla homogénea y de calidad superior. </li>
           <li className="mb-1"><strong>MUROS:</strong> La totalidad de los muros exteriores con ladrillo marca palmar portante de 18, mientras que los muros interiores se completan con ladrillo marca palmar portante de 12.</li>
           <li className="mb-1"><strong>ABERTURAS:</strong> Puertas interiores jerarquizadas y de primera calidad, con marco, contramarco y picaporte. puerta de ingreso jerarquizada de madera o chapa reforzada. se adiciona puerta de patio o bien puerta ventana de aluminio. ventanas en su totalidad de aluminio sin rejas. </li>
           <li className="mb-1"><strong>INSTALACIONES:</strong> Agua, gas y eléctrico en su totalidad con caño fusión, caño corrugado, y enchufes y llaves de primera calidad. - loza: completa con viguetas pretensadas marca rivadavia, ladrillo de techo marca palmar losa 16,5 ó ladrillo de eps espesor 170mm, malla sima de medidas H6 15x15 3x2 y hormigón premezclado en planta, tipo H21.</li>
           <li className="mb-1"><strong>TERMINACIONES:</strong> Grifería para baños y cocina marca FV o similar, sanitarios marca Ferrum, Roca o similar, mesada de cocina de granito o piedra de medidas largo mínimo 300cm con bacha, iluminación LED o dicroicas interior y exterior (en sus modelos de plafones o empotradas), todas a criterio de la empresa.  Molduras exteriores de EPS revestidas con base coat y modelo a elección, terminación interior de muros a elección del cliente: revoque fino o yeso. Terminación exterior: revoque fino exterior marca Sika o Weber. Pintura int. y ext. marca Alba con gama color a elección del cliente. </li>
           <li className="mb-1"><strong>PISOS:</strong> De tipo porcelanato en su totalidad y de primera calidad. - pileta de natación: de material, con medidas 3,50 x 7,00 mts, incluye bomba de filtrado, skimmer y losetas atérmicas en bordes.</li>
        </ul>
      </div></>}
    </>
  );
};

export default Premium;
