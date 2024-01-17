export default function Footer(){
    return(
        <>
         <div className="mt-10 mb-5 flex flex-col md:text-start text-center md:flex-row justify-center md:space-x-6 lg:space-x-10 xl:space-x-20 2xl:space-x-32 ">
            <div className="flex flex-col md:mt-6 ">
                <p className="lg:text-2xl text-lg">Constructora</p>
                <p className="mt-3 lg:text-sm text-xs">Priorizamos la comodidad de nuestros clientes</p>
            </div>
            <div className="flex flex-col mt-6 items-center md:items-start">
                <p className="lg:text-2xl text-lg">Ponerse en contacto</p>
                <div className="mt-3 lg:text-md text-sm flex flex-row"><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path d="M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z"/></svg> 
                <p className="mb-2 ml-1">111-111-1111</p></div>
                <div className="mt-3 lg:text-md text-sm flex flex-row"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg> 
                <p className="mb-2 ml-1">cascoblanco@gmail.com</p></div>
            </div>
            <div className="flex flex-col mt-6">
                <p className="lg:text-2xl text-lg">Enlaces</p>
                <p className="mt-3 lg:text-sm text-xs">Facebook</p>
                <p className="mt-3 lg:text-sm text-xs">Instagram</p>
                <p className="mt-3 lg:text-sm text-xs">Linkedin</p>
            </div>
            <div className="flex  flex-col mt-6">
                <p className="lg:text-2xl text-lg">Trayecto</p>
                <p className="mt-3 lg:text-sm text-xs">10 años construyendo los sueños de </p>
                <p className="mt-3 lg:text-sm text-xs">mas de 300 clientes</p>
            </div>
        </div>       
        </>
    )
}