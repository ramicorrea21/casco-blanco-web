export default function Banner(){
    return(
        <div className="video-container relative">
            <div className="overlay"></div>
            <video src="/banner/video.mp4" autoPlay loop muted className="rounded-xl"></video>
            <div className="content absolute text-white p-4 flex flex-col mt-20 md:ml-3">
                <p className="text-6xl md:text-9xl">TU PROXIMA</p>
                <p className="text-6xl md:text-9xl">CASA</p>
                <p className="max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mt-6 md:mt-8 text-md     md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nesciunt libero ut in molestias, quas reiciendis tempora est consequuntur cumque facilis obcaecati eaque nihil fuga dolores dicta veritatis tenetur. Quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nesciunt libero ut in molestias, quas reiciendis tempora est consequuntur cumque facilis obcaecati eaque nihil fuga dolores dicta veritatis tenetur. Quod.</p>
                <div className="mt-6 md:mt-8 flex flex-row">
                    <button className="mr-2 bg-transparent border border-white text-white px-4 py-2 rounded-full transition-all hover:bg-white hover:text-black">Ver viviendas</button>
                    <button className="mr-2 bg-transparent border border-white text-white px-4 py-2 rounded-full transition-all hover:bg-white hover:text-black">Mas Informacion</button>
                </div>
            </div>
        </div>
    )
}