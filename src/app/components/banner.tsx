export default function Banner(){
    return(
        <div className="video-container w-screen relative">
            <div className="overlay rounded-2xl"></div>
            <video src="/banner/video.mp4" autoPlay loop muted playsInline className="rounded-xl"></video>
            <div className="content absolute text-white p-4 flex flex-col  md:ml-3 justify-center">
                <p className="max-[300px]:text-3xl max-[375px]:text-5xl max-sm:text-6xl max-lg:text-8xl text-9xl">TU MEJOR</p>
                <p className="max-[300px]:text-3xl max-[375px]:text-5xl  max-sm:text-6xl max-lg:text-8xl text-9xl">CASA</p>
                <p className="max-[300px]:text-xs max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg max-[375px]:text-sm mt-2 max-sm:text-md  max-lg:text-lg text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nesciunt libero ut in molestias, quas reiciendis tempora est consequuntur cumque facilis obcaecati eaque nihil fuga dolores dicta veritatis tenetur. Quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nesciunt libero ut in molestias, quas reiciendis tempora est consequuntur cumque facilis obcaecati eaque nihil fuga dolores dicta veritatis tenetur. Quod.</p>
                <div className="mt-6 md:mt-8 flex flex-row">
                    <button className="mr-2 bg-transparent border border-white text-white px-4 py-2 max-[300px]:p-1 max-[300px]:text-sm max-[385px]:px-2 max-[385px]:py-1 rounded-full transition-all hover:bg-white hover:text-black">Ver viviendas</button>
                    <button className="mr-2 bg-transparent border border-white text-white px-4 py-2 max-[300px]:p-1 max-[300px]:text-sm max-[385px]:px-2 max-[385px]:py-1 rounded-full transition-all hover:bg-white hover:text-black">Mas Informacion</button>
                </div>
            </div>
        </div>
    )
}