import React, { useState } from "react";
import meEngineering from "../../assets/services/me_engineering.png";
import lightCivil from "../../assets/services/light_civil_engineering.png";
import bmsEms from "../../assets/services/bms_ems_technology.png";
import bg1 from "../../assets/services/bg1.png";
import Accreditation from "./homecomponent/Accreditation";
import Commercial from "./homecomponent/Commercial";
import Services from "./homecomponent/Services";
import Casestudies from "./homecomponent/Casestudies";
import TestimonialsAndConfidence from "./homecomponent/TestimonialsAndConfidence";
import Team from "./homecomponent/Team";
import NewandContactus from "./homecomponent/NewandContactus";
import WalesSection from "./homecomponent/WalesSection";
import Video from "./homecomponent/Video";

const images = [
  "/project-list.jpg",
  meEngineering,
  lightCivil,
  bmsEms,
  bg1,
];

export default function HomePage() {
  const [startIdx, setStartIdx] = useState(0);

  const handlePrev = () => {
    setStartIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setStartIdx((prev) => (prev + 1) % images.length);
  };

  return (
    <div>
      <div className="relative w-full h-screen xl:max-h-[600px] 2xl:max-h-[700px] ">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-500"
          style={{ backgroundImage: `url(${images[startIdx]})` }}
        ></div>

        <div className="absolute inset-0 bg-[#192437]/60 z-0"></div>

        <div className="relative z-10 flex flex-col items-start justify-center h-full px-10 text-white">
          <p className="text-base sm:text-lg md:text-2xl font-bold mb-4">DESIGN & INSTALLATION</p>
          <h1 className="text-[28px] sm:text-4xl md:text-6xl font-bold mb-8">TURNKEY SOLUTIONS</h1>

          <p className=" text-[12px] sm:text-base md:text-lg w-[50%]">
            Athertons is a highly experienced Mechanical, Electrical, HVAC, Fire Protection, Refrigeration. Through our team of mechanical, electrical, plumbing, HVAC, and fire protection engineers.
          </p>

          <button className="bg-[#03837E] w-[170px] h-[40px] md:w-[170px] md:h-[48px] shadow-[0px_4px_10px_0px_#00000080] mt-10 cursor-pointer  hover:border hover:border-[#03837E]  hover:bg-[#FFFFFF] hover:text-[#03837E] ">
            <p className="text-lg font-[500]">Find Out More</p>
          </button>

        <div className="absolute flex items-center gap-6 right-0 bottom-0">
  <button
    onClick={handlePrev}
    className=" w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] flex items-center justify-center bg-white rounded-full transition hover:bg-[#03837E] group mb-4 cursor-pointer"
    style={{ opacity: 1 }}
  >
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.6667 20H8.33341"
        stroke="#03837E"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="group-hover:stroke-white transition"
      />
      <path
        d="M20 8.33301L8.33333 19.9997L20 31.6663"
        stroke="#03837E"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="group-hover:stroke-white transition"
      />
    </svg>
  </button>

  <button
    onClick={handleNext}
    className=" w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] flex items-center justify-center bg-white rounded-full  transition hover:bg-[#03837E] group mb-4 cursor-pointer"
    style={{ opacity: 1 }}
  >
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.33325 20H31.6666"
        stroke="#03837E"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="group-hover:stroke-white transition"
      />
      <path
        d="M20 8.33301L31.6667 19.9997L20 31.6663"
        stroke="#03837E"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="group-hover:stroke-white transition"
      />
    </svg>
  </button>
</div>

          {/* Pagination Dots */}
          <div className="absolute bottom-10 left-10 flex gap-4">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`md:w-4 md:h-4 sm:w-3  sm:h-3 h-2.5 w-2.5 rounded-full ${
                  idx === startIdx ? "bg-[#03837E]" : "bg-white"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
      <Services/>
      <Accreditation/>
      <Commercial/>
      <Video/>
      <Casestudies/>
      <TestimonialsAndConfidence/>
      <WalesSection/>
      <Team/>
      <NewandContactus/>
      
    </div>
  );
} 
