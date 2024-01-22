export default function AmazingButton(){
    return(
        <div className="mt-8 ">
        <div className="w-full md:h-32 h-24 amazing-button rounded-xl flex flex-row justify-between">
          <div className="pl-3 md:pl-5 pt-4 flex flex-col xl:pt-5">
            <h1 className="max-[300px]:text-md text-xl md:text-2xl lg:text-3xl 2xl:text-4xl ">VIVIENDA AMAZING</h1>
            <p className="max-[300px]:text-sm mt-0 md:mt-3 text-sm lg:text-xl">DESDE $550 EL M2</p>
          </div>
          <div>
            <button className="bg-black mt-7 md:mt-8 lg:mt-10 md:text-sm mr-1 xl:mr-5 text-xs  text-white px-3 py-2  lg:px-5 2xl:px-8 2xl:py-3 rounded-xl transition duration-300 ease-in-out hover:bg-white hover:text-black">
              Ver Mas
            </button>
          </div>
        </div>
      </div>
    )
}