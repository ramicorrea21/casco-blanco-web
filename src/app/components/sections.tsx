import Carrousel from "./carrousell"
import Carrousel2 from "./carrousel2"
import AmazingButton from "./amazingButton"
import PremiumButton from "./premiumButton"
export default function Sections(){
    return(
       <>
        <div className="section-cont flex flex-col md:flex-row justify-center md:space-x-6 mt-6">
            <div className="w-full md:w-3/6  h-full mb-7 md:h-full flex flex-col">
                <Carrousel/>
                <AmazingButton/>
            </div>
            <div className="w-full md:w-3/6  h-full md:h-full">
                <Carrousel2/>
                <PremiumButton/>
            </div>
        </div>
       </>
    )
}