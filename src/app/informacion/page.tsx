'use client'
import Image from "next/image"
import Infolegal from "../components/infolegal"
import InfoSections from "../components/InfoSections"
import { useState, useEffect } from "react"
import Loader from "../components/loader"

export default function Informacion(){
    const [loading, setLoading] = useState(true)
    const load = () =>{
      setTimeout(() =>{
          setLoading(false)
      }, 2000)
    }
  
    useEffect(() =>{
      load()
    }, [])
  
    return(
        <>
        {loading? <div className="flex justify-center items-center mt-10"><Loader/></div> : <><div className="section-cont">
            <Infolegal/>
        </div>
        <InfoSections/></>}
        
        </>
    )
}