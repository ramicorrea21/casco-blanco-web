import Banner from "./components/banner"
import Sections from "./components/sections"
export default function Home() {
  return (
    <div className="flex flex-col justify-center mt-6 ml-4 md:ml-7 mr-2 md:mr-0">
      <Banner/>
      <div>
      <div className="border border-t border-black separador mt-6"></div>
      <Sections/>
      </div>
    </div>
  )
}
