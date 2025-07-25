import triangleGg from "../../../assets/traingleGg.svg";
import triangleWw from "../../../assets/triangleWw.svg";

const Video = () => {
  return (
    <section
      className="relative w-full  mx-auto h-[278px] md:h-[346px] overflow-hidden border border-[#D6D6D6]"
      aria-label="Ty Menai Project Video"
    >
      {/* Thumbnail Image */}
      <img
        src="/images/ty-menai.jpg"
        alt="Ty Menai Building"
        className="object-cover w-full h-full"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#192437] opacity-50"></div>

      {/* Triangles Decorations */}
      <div className="absolute top-0 flex flex-row items-start justify-start left-5">
        <img
          src={triangleGg}
          alt="triangle black"
          className="w-[70px] xl:w-[139px] h-[70px] xl:h-[139px] object-contain"
        />
        <img
          src={triangleWw}
          alt="triangle white"
          className="w-[70px] xl:w-[139px] h-[70px] xl:h-[139px] object-contain -ml-6 xl:-ml-13"
        />
      </div>

      <div className="absolute bottom-0 flex flex-row items-start justify-start right-5">
        <img
          src={triangleGg}
          alt="triangle black"
          className="w-[70px] xl:w-[139px] h-[70px] xl:h-[139px] object-contain"
        />
        <img
          src={triangleWw}
          alt="triangle white"
          className="w-[70px] xl:w-[139px] h-[70px] xl:h-[139px] object-contain -ml-6 xl:-ml-13"
        />
      </div>

      {/* Text */}
      <h2 className="absolute top-[25%] left-1/2 transform -translate-x-1/2 text-white font-poppins font-semibold text-lg md:text-xl">
        Ty Menai Project Video
      </h2>

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Ring effect */}
        <span className="absolute w-20 h-20 rounded-full border-4 border-[#03837E] animate-ping z-0"></span>

        {/* Actual Play Button */}
        <button
          aria-label="Play Ty Menai Project Video"
          className="relative z-10 w-16 h-16 bg-[#03837E] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 5v14l11-7L8 5z" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Video;
