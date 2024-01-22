export default function Banner() {
  return (
    <div className="video-container w-screen relative">
      <div className="rounded-2xl"></div>
      <video
        src="/banner/banner-mob.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="rounded-xl max-[465px]:block hidden "
      ></video>
           <video
        src="/banner/banner-xl.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="rounded-xl min-[466px]:block hidden "
      ></video>
    </div>
  );
}
