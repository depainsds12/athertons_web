import { useState, useEffect } from "react";
import bg1 from "../../assets/services/bg1.png";
import bmsEms from "../../assets/services/bms_ems_technology.png";
import lightCivil from "../../assets/services/light_civil_engineering.png";
import meEngineering from "../../assets/services/me_engineering.png";
import Accreditation from "./homecomponent/Accreditation";
import Casestudies from "./homecomponent/Casestudies";
import Commercial from "./homecomponent/Commercial";
import NewandContactus from "./homecomponent/NewandContactus";
import Services from "./homecomponent/Services";
import Team from "./homecomponent/Team";
import TestimonialsAndConfidence from "./homecomponent/TestimonialsAndConfidence";
import Video from "./homecomponent/Video";
import WalesSection from "./homecomponent/WalesSection";
import { getHomePage } from "../../api/routes";
import { getAxios } from "../../api/config";

const images = ["/project-list.jpg", meEngineering, lightCivil, bmsEms, bg1];

export default function HomePage() {
  const [startIdx, setStartIdx] = useState(0);
  const [servicesData, setServicesData] = useState([]);
  const [membershipImages, setMembershipImages] = useState([]);
  const [homepageData, setHomePageData] = useState({});
  const handlePrev = () => {
    setStartIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setStartIdx((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const fetchHomePageData = async () => {
      try {
        const response = await getAxios().get(getHomePage);

        setServicesData(response?.data?.data?.services);
        setMembershipImages(response?.data?.data?.memberships);
        setHomePageData(response?.data?.data?.homepage_content);
      } catch (error) {
        console.error("Failed to fetch Home API:", error);
      }
    };

    fetchHomePageData();
  }, []);

  return (
    <div>
      <div className="relative w-full min-h-[500px] flex justify-center items-center lg:h-screen xl:max-h-[600px] 2xl:max-h-[700px] ">
        <div
          className="absolute inset-0 transition-all duration-500 bg-center bg-cover animate__animated animate__zoomIn"
          style={{ backgroundImage: `url(${images[startIdx]})` }}
        ></div>

        <div className="absolute inset-0 bg-[#192437]/60 z-0"></div>

        <div className="relative z-10 flex flex-col items-start justify-center min-h-[480px] h-full px-4 pr-7 lg:px-10 mx-2 xl:ml-12 text-white">
          <p className="lg:mb-4 text-base font-bold sm:text-lg md:text-2xl animate__animated animate__flipInX">
            DESIGN & INSTALLATION
          </p>
          <h1 className="text-[28px] mb-3 sm:text-4xl md:text-6xl font-bold lg:mb-8 animate__animated animate__flipInX">
            TURNKEY SOLUTIONS
          </h1>

          <p className=" text-[12px] sm:text-base md:text-lg w-full md:w-[50%] animate__animated animate__flipInX">
            Athertons is a highly experienced Mechanical, Electrical, HVAC, Fire
            Protection, Refrigeration. Through our team of mechanical,
            electrical, plumbing, HVAC, and fire protection engineers.
          </p>

          <button className="bg-[#03837E] w-[170px] h-[40px] md:w-[170px] md:h-[48px] shadow-[0px_4px_10px_0px_#00000080] mt-10 cursor-pointer  hover:border hover:border-[#03837E]  hover:bg-[#FFFFFF] hover:text-[#03837E] ">
            <p className="text-lg font-[500]">Find Out More</p>
          </button>

          <div className="absolute bottom-0 right-7 xl:right-15 flex items-center gap-6 ">
            <button
              onClick={handlePrev}
              className=" w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[60px] md:h-[60px] flex items-center justify-center bg-white rounded-full transition hover:bg-[#03837E] group mb-4 cursor-pointer"
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
                  className="transition group-hover:stroke-white"
                />
                <path
                  d="M20 8.33301L8.33333 19.9997L20 31.6663"
                  stroke="#03837E"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition group-hover:stroke-white"
                />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className=" w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[60px] md:h-[60px] flex items-center justify-center bg-white rounded-full  transition hover:bg-[#03837E] group mb-4 cursor-pointer"
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
                  className="transition group-hover:stroke-white"
                />
                <path
                  d="M20 8.33301L31.6667 19.9997L20 31.6663"
                  stroke="#03837E"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition group-hover:stroke-white"
                />
              </svg>
            </button>
          </div>

          <div className="absolute flex gap-4 bottom-10 left-10">
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

      <Services servicesData={servicesData} />
      <Accreditation membershipsData={membershipImages} />
      <Commercial />
      <Video />
      <Casestudies />
      <TestimonialsAndConfidence />
      <WalesSection />
      <Team />
      <NewandContactus />
    </div>
  );
}
