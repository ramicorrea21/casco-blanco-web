import Image from "next/image"
import Infolegal from "../components/infolegal"
import InfoSections from "../components/InfoSections"
export default function Informacion(){
    return(
        <>
        <div className="section-cont">
            <Infolegal/>
        </div>
        <InfoSections/>
        </>
    )
}