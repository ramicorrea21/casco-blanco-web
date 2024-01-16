import Image from "next/image"
export default function Navbar(){
    return(
        <>
        <nav className="sticky top-0 z-50 bg-white">
            <div className="flex justify-between mt-1 md:mt-1">
                <Image 
                src='/img/logo.png'
                width={280}
                height={44}
                alt="Logo"
                className="hidden md:block md:ml-5"
                priority
                />
                <Image 
                src='/img/logo.png'
                width={200}
                height={31}
                alt="Logo"
                className="md:hidden ml-3 mt-1"
                priority
                />
                <div className="flex mt-1 mr-3 md:mt-2 md:mr-6">
                    <p className="mr-2 md:mr-4 md:text-2xl text-lg">
                        Informacion
                    </p>
                    <div className="flex">
                    <span className="md:text-2xl text-lg">Contacto</span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512" className="mt-2 ml-1 hidden md:block"><path d="M121 32C91.6 32 66 52 58.9 80.5L1.9 308.4C.6 313.5 0 318.7 0 323.9V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V323.9c0-5.2-.6-10.4-1.9-15.5l-57-227.9C446 52 420.4 32 391 32H121zm0 64H391l48 192H387.8c-12.1 0-23.2 6.8-28.6 17.7l-14.3 28.6c-5.4 10.8-16.5 17.7-28.6 17.7H195.8c-12.1 0-23.2-6.8-28.6-17.7l-14.3-28.6c-5.4-10.8-16.5-17.7-28.6-17.7H73L121 96z"/></svg>
                    </div>
                </div>

            </div>
        </nav>
        </>
    )
}