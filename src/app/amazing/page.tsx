'use client'
import React, {useState, useEffect} from "react";
import SecSliders from "../components/secSliders";
import Loader from "../components/loader";

const Amazing: React.FC = () => {
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
      url: "/img/amazing/amazing-1.png",
    },
    {
      url: "/img/amazing/amazing-2.png",
    },
    {
      url: "/img/amazing/amazing-3.png",
    },
    {
      url: "/img/amazing/amazing-4.png",
    }
  ];

  return (
    <>
     {loading? <div className="flex justify-center items-center mt-10"><Loader/></div> : <> <h1 className="text-center mt-5 text-4xl">Viviendas Amazing</h1>
      <SecSliders slides={slides} />
      <div className="mt-5 max-w-[1400px]  w-full m-auto pt-8 pb-4 px-4">
        <h1 className="text-center text-4xl">Ficha Técnica</h1>
        <ul className="text-start text-md md:text-lg mx-3 mt-5">
           <li className="mb-1"><strong>-FUNDACIÓN:</strong> Se realiza fundación con zapata/platea según necesidad técnica de obra, construidas ambas con vigas riostras y malla sima de refuerzo, con hierro de construcción de diámetro pertinente. se hormigona con hormigón tipo H21 con camión bomba para lograr una mezcla homogénea y de calidad superior.</li>
           <li className="mb-1"><strong>-MUROS:</strong> La totalidad de los muros exteriores con ladrillo marca palmar portante de 18, mientras que los muros interiores se completan con ladrillo marca palmar portante de 12. </li>
           <li className="mb-1"><strong>-ABERTURAS:</strong> Puertas interiores de madera gama intermedia. incluyen marco, contramarco y picaporte. puerta de ingreso de madera o chapa reforzada y ambas de primera calidad. se adiciona puerta de patio o bien puerta ventana de aluminio. ventanas en su totalidad de aluminio sin rejas. - instalaciones: agua, gas y eléctrico en su totalidad con caño fusión, caño corrugado, y enchufes y llaves de primera calidad.</li>
           <li className="mb-1"><strong>-LOZA:</strong> Completa con viguetas pretensadas marca rivadavia, ladrillo de techo marca palmar losa 11 ó ladrillo de eps espesor 120mm, malla sima de medidas H4 15x25 y hormigón premezclado en planta, tipo H21.</li>
           <li className="mb-1"><strong>-TERMINACIONES:</strong> Grifería para baños y cocina marca FV o similar, mesada de granito o piedra de medidas largo mínimo 200cm, revoque fino interior y revoque fino exterior, pintura interior marca alba y exterior marca duralba, con gama de colores a elección del cliente.</li>
           <li className="mb-1"><strong>-PISOS:</strong> De tipo porcelanato en su totalidad y de primera calidad. Casco Blanco® constructora</li>
        </ul>
      </div></>}
    </>
  );
};

export default Amazing;
