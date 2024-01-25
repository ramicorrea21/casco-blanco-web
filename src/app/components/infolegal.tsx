import Image from "next/image"
export default function Infolegal(){
    return(
        <>
        <h1 className="text-center text-3xl mt-5 mb-5">Información</h1>
            <div className="flex flex-col justify-center mx-2 md:flex-row md:justify-between">
                <div className="lg:ml-6">
                    <h2 className="text-2xl mb-3 md:text-3xl lg:mb-6">Legal y Contractual</h2>
                    <ul className="text-xs md:text-md lg:text-lg xl:text-xl ">
                        <li className="xl:my-4">-Sistema llave en mano</li>
                        <li className="xl:my-4">-Contrato firmado ante escribano público</li>
                        <li className="xl:my-4">-Garantia firmada ante escribano público por 5 años por defectos y vicios aparentes u ocultos de obra</li>
                    </ul>
                    <div className="border border-t border-black separador my-3 lg:my-6"></div>
                    <ul className="my-3 text-xs md:text-md lg:text-lg xl:text-xl">
                        <li className="xl:my-4">-Plano presentado en el colegio de arquitectos de la provincia de Córdoba, a cargo de la empresa</li>
                        <li className="xl:my-4">-Pagos se requieren según avance la obra</li>
                    </ul>
                </div>
                <div className="mt-3 flex justify-center">
                    <Image
                    src='/img/Info.png'
                    alt="Info"
                    width={444}
                    height={311}
                    className="rounded-xl"
                    />
                </div>
            </div>
        </>
    )
}