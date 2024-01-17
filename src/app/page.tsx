import Banner from "./components/banner"
import Sections from "./components/sections"
import Image from "next/image"
export default function Home() {
  return (
    <div className="flex flex-col justify-center mt-6 ml-4 md:ml-7 mr-2 md:mr-0">
      <Banner/>
      <div>
      <div className="border border-t border-black separador mt-6"></div>
      <Sections/>
      </div>
      <div className="mt-20 separador">
        <Image 
        src="/img/banner-2.jpeg"
        alt="banner-casco-blanco"
        width={1080}
        height={600}
        className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}
