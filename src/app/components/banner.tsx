export default function Banner(){
    return(
        <div className="video-container w-screen relative">
            <div className="overlay"></div>
            <video src="/banner/video.mp4" autoPlay loop muted className="rounded-xl"></video>
            <div className="content absolute text-white p-4 flex flex-col  md:ml-3 justify-center">
                <p className="text-6xl md:text-9xl max-[385px]:text-4xl">TU PROXIMA</p>
                <p className="text-6xl md:text-9xl max-[385px]:text-4xl">CASA</p>
                <p className="max-[385px]:text-sm max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mt-6 md:mt-8 text-md  md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nesciunt libero ut in molestias, quas reiciendis tempora est consequuntur cumque facilis obcaecati eaque nihil fuga dolores dicta veritatis tenetur. Quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nesciunt libero ut in molestias, quas reiciendis tempora est consequuntur cumque facilis obcaecati eaque nihil fuga dolores dicta veritatis tenetur. Quod.</p>
                <div className="mt-6 md:mt-8 flex flex-row">
                    <button className="mr-2 bg-transparent border border-white text-white px-4 py-2 max-[385px]:px-2 max-[385px]:py-1 rounded-full transition-all hover:bg-white hover:text-black">Ver viviendas</button>
                    <button className="mr-2 bg-transparent border border-white text-white px-4 py-2 max-[385px]:px-2 max-[385px]:py-1 rounded-full transition-all hover:bg-white hover:text-black">Mas Informacion</button>
                </div>
            </div>
        </div>
    )
}