export default function PremiumButton() {
  return (
    <div className="mt-8 ">
      <div className="w-full md:h-32 h-24 premium-button rounded-xl flex flex-row justify-between">
        <div className="pl-3 md:pl-5 pt-4 flex flex-col xl:pt-5">
          <h1 className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl ">VIVIENDA FAMILIAR PREMIUM</h1>
          <p className="mt-0 md:mt-3 text-sm lg:text-xl">A PARTIR DE $560USD EL M2</p>
        </div>
        <div>
          <button className="bg-black mt-6 md:mt-8 lg:mt-10 mr-1 xl:mr-5 text-xs md:text-sm text-white px-3 py-2  lg:px-5 2xl:px-8 2xl:py-3 rounded-xl transition duration-300 ease-in-out hover:bg-white hover:text-black">
            Ver Mas
          </button>
        </div>
      </div>
    </div>
  );
}
