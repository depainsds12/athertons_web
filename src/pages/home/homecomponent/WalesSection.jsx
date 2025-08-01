const WalesSection = () => {
  return (
    <section
      className="w-full flex justify-center px-4 sm:px-6 lg:px-10 py-12"
      aria-label="Supporting Wales Section"
    >
      <div className="w-full max-w-[1700px] flex flex-col lg:flex-row items-center lg:items-start justify-center gap-16 2xl:gap-30">
        {/* Left Block */}
        <div className="flex flex-col items-center lg:items-start w-full max-w-[563px]">
          <h2 className="font-poppins font-semibold text-[28px] md:text-[40px] leading-[125%] tracking-[0] text-[#192437] mb-6 text-center lg:text-left">
            Athertons: <br /> Supporting Wales
          </h2>

          <div
            role="img"
            aria-label="Project list thumbnail"
            className="relative border border-[#D6D6D6] sm:w-full  w-[300px] sm:h-[346px] overflow-hidden"
          >
            <img
              src="/project-list.jpg"
              alt="Athertons Project Thumbnail"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-[#192437] opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="absolute w-[50px] h-[50px] rounded-full border-6 border-white animate-ping z-0"></span>
              <button
                aria-label="Play Ty Menai Project Video"
                className="relative z-10 w-[70px] h-[70px] bg-[#03837E] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 border-4 border-white cursor-pointer"
              >
                <svg
                  width="30"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 5v14l11-7L8 5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right Block */}
        <div className="flex flex-col items-center lg:items-start w-full max-w-[513px]">
          <h2 className="font-poppins font-semibold text-[28px] md:text-[40px]  leading-[125%] tracking-[0] text-[#192437] mb-2 text-center lg:text-left">
            Supporting Wales <br /> Infrastructure
          </h2>

          <p className="text-[#03837E] font-poppins font-semibold text-[18px] lg:text-[20px] mb-5 text-center lg:text-left mt-1">
            Cefnogi Seilwaith Cymru
          </p>
          <div
            role="img"
            aria-label="Wales Flag Supporting Infrastructure"
            className="border border-[#D6D6D6] sm:w-full sm:h-[308px] w-[300px] overflow-hidden"
          >
            <img
              src="/images/wales.png"
              alt="Wales Flag"
              className="object-cover sm:w-full sm:h-full  "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WalesSection;
