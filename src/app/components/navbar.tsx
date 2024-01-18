"use client";
import Image from "next/image";
import { useState} from "react";
export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
    <nav className={`flex flex-row justify-between items-center mt-0 pt-0 bg-white bg-opacity-90 z-50 sticky top-0 ${openMenu? 'mb-20' : ''}`}>
      <div>
        <div className="py-2">
          <Image
            src="/img/logo.png"
            alt="logo"
            width={190}
            height={29}
            className="max-[375px]:block hidden ml-3"
          />
          <Image
            src="/img/logo.png"
            alt="logo"
            width={220}
            height={33}
            className="max-[375px]:hidden max-sm:block hidden ml-3"
          />
          <Image
            src="/img/logo.png"
            alt="logo"
            width={300}
            height={45}
            className="hidden sm:block pt-2 ml-2 md:ml-4"
          />
        {openMenu && (
          <div className="w-full bg-white bg-opacity-80 absolute block md:hidden max-[375px]:text-sm mt-0   left-0  sm:p-2  z-20">
            <div className="max-[375px]:ml-5 max-[375px]:mt-2  max-sm:ml-5 max-sm:mt-2 sm:ml-3">
            <p
              className="cursor-pointer"
              onClick={() => console.log('Hacer algo para "Más información"')}
            >
              Información
            </p>
            <p
              className="cursor-pointer"
              onClick={() => console.log('Hacer algo para "Contacto"')}
            >
              Contacto
            </p>
            </div>
          </div>
        )}
        </div>
      </div>
      <div className="relative">
        <div onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="25"
            width="25"
            className="max-md:block hidden mt-1 sm:mt-1 mr-4"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>
      </div>
      <div className="hidden md:block xl:mr-8 lg:mr-6">
            <div className="flex">
            <p className="mr-2 text-xl">
                Informacion
            </p>
            <p className="text-xl">Contacto</p>
            </div>
      </div>
    </nav>
    </>
  );
}
