import React from 'react';

const WalesSection = () => {
  return (
    <section
      className="w-full flex flex-col xl:flex-row justify-between gap-10 px-6 xl:px-[100px] py-12"
      aria-label="Supporting Wales Section"
    >
      {/* Left Block: Video Thumbnail Placeholder */}
      <div className="flex flex-col w-full xl:w-1/2 items-start md:items-start">
        <h2 className="font-poppins font-semibold text-[#192437] text-[28px] md:text-[32px] xl:text-[36px] leading-[110%] mb-6 text-left">
          Athertons: <br /> Supporting Wales
        </h2>
        <div
          role="img"
          aria-label="Project list thumbnail"
          className="relative border border-[#D6D6D6] w-full max-w-[563px] h-[346px] overflow-hidden"
        >
          {/* Background image */}
          <img
            src="/project-list.jpg"
            alt="Athertons Project Thumbnail"
            className="w-full h-full object-cover"
          />

          {/* Overlay with 50% opacity #192437 */}
          <div className="absolute inset-0 bg-[#192437] opacity-50"></div>

          {/* Play button on top */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              aria-label="Play video"
              className="w-16 h-16 bg-[#03837E] rounded-full flex items-center justify-center"
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
        </div>
      </div>

      {/* Right Block: Wales Support Image */}
      <div className="flex flex-col w-full xl:w-1/2 items-start md:items-start">
        <h2 className="font-poppins font-semibold text-[#192437] text-[28px] md:text-[32px] xl:text-[36px] leading-[110%] mb-2 text-left">
          Supporting Wales <br /> Infrastructure
        </h2>
        <p className="text-[#03837E] font-poppins font-medium text-[18px] mb-4 text-left">
          Cefnogi Seilwaith Cymru
        </p>
        <div
          role="img"
          aria-label="Wales Flag Supporting Infrastructure"
          className="border border-[#D6D6D6] w-full max-w-[513px] h-[308px] overflow-hidden"
        >
          <img
            src="/images/wales.png"
            alt="Wales Flag"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WalesSection;
