import Image from "next/image"
export default function InfoSections(){
    return(
        <>
        <div className="flex separador justify-center">
        <div className="border border-t border-black w-full md:ml-4 ml-2 mt-3"></div>
        </div>
        <div className="mt-5   w-full m-auto pt-8 md:pb-6  px-4">
        <h1 className="text-center text-4xl">Ficha Técnica</h1>
        <ul className="text-start text-md md:text-lg lg:text-xl mx-3 mt-5">
            <li className="mb-2">-VIVIENDA FAMILIAR AMAZING: En tres configuraciones de 60, 100 y 140 metros cuadrados, con posibilidad de elección de metros libres. Apto dúplex a partir de 90 metros.</li>
            <li className="mb-2">-VIVIENDA FAMILIAR PREMIUM: En tres configuraciones de 110, 190 y 260 metros cuadrados, con posibilidad de elección de metros libres. Apto dúplex a partir de 90 metros.</li>
            <li className="mb-2">-La cantidad de ambientes, habitaciones, tamaño de garage, dimensiones de cocina, comedor y living, dependerá de la configuración y metros cuadrados elegidos por el cliente, y de las condiciones del terreno o lote donde se desarrollará la construcción, que puede diferir con nuestros modelos y planos ya confeccionados. </li>
            <li className="mb-2">-La empresa se responsabiliza por el personal de obra, la provisión de herramientas, elementos y materiales de construcción necesarios e inherentes al proyecto, los honorarios de los arquitectos.</li>
            <li className="mb-2">-Plazo de obra: se estima un mínimo de 6 y un máximo de 9 meses para proyectos que superen los 100 metros cuadrados.</li>
        </ul>
      </div>
        </>
    )
}