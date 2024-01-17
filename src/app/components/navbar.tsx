import Image from "next/image"
export default function Navbar(){
    return(
        <>
        <nav className="sticky top-0 z-50 bg-white py-2">
            <div className="flex justify-center mt-1 md:mt-1">
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
                className="md:hidden max-[375px]:hidden ml-3 mt-1"
                priority
                />
                <Image 
                src='/img/logo.png'
                width={190}
                height={30}
                alt="Logo"
                className="hidden max-[375px]:block ml-1 mt-1"
                priority
                />
            </div>
        </nav>
        </>
    )
}