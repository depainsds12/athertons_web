import React, { useState } from "react";
import bmsEmsTechnology from "../../../assets/services/bms_ems_technology.png";
import meEngineering from "../../../assets/services/me_engineering.png";
import ecoSolutions from "../../../assets/services/eco_solutions.png";
import lightCivilEngineering from "../../../assets/services/light_civil_engineering.png";
import triangleg from '../../../assets/triangleg.svg';
import trianglew from '../../../assets/trianglew.svg';

const services = [
  {
    id: "bms-ems",
    name: "BMS & EMS Technology",
    image: bmsEmsTechnology,
    title: "BMS & EMS Technology",
    subtitle: "Integrated Mechanical and Electrical Systems",
    description:
      "Our Building Management Systems (BMS) and Energy Management Systems (EMS) offer seamless integration of mechanical and electrical systems. Designed to optimise performance and efficiency, our solutions ensure that all building systems work harmoniously to provide a comfortable and productive environment.",
  },
  {
    id: "me-engineering",
    name: "M&E Engineering",
    image: meEngineering,
    title: "M&E Engineering",
    subtitle: "Mechanical and Electrical Excellence",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae orci nec nulla luctus eleifend. Phasellus ac finibus lorem.",
  },
  {
    id: "eco-solutions",
    name: "Eco Solutions",
    image: ecoSolutions,
    title: "Eco Solutions",
    subtitle: "Sustainable Innovations",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet neque eget nisl dignissim efficitur. Nulla facilisi.",
  },
  {
    id: "light-civil",
    name: "Light Civil Engineering",
    image: lightCivilEngineering,
    title: "Light Civil Engineering",
    subtitle: "Smart Civil Engineering Solutions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed urna et sapien posuere vulputate non a diam.",
  },
  {
    id: "smart-design",
    name: "Smart Design",
    image: bmsEmsTechnology,
    title: "Smart Design",
    subtitle: "Innovative & Modern Concepts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit massa et suscipit vehicula. Vivamus sit amet nulla nec ex hendrerit posuere.",
  },
];

const Services = () => {
  const [active, setActive] = useState("bms-ems");
  const activeService = services.find((service) => service.id === active);

  return (
    <section className="w-full relative flex flex-col items-center mt-2">

      <div className=" sm:flex absolute top-0 right-0 flex-col items-start justify-start w-[50px] h-[50px]">
        <img src={triangleg} alt="triangle black" className="xl:w-[101px] md:w-[70px] xl:h-[101px] md:h-[70px]  object-contain" />
        <img src={trianglew} alt="triangle white" className="xl:w-[101px]md: w-[70px] xl:h-[101px] md:h-[70px]   object-contain -mt-6 xl:-mt-6" />
      </div>
      <h2 className="text-3xl md:text-[40px] font-semibold text-[#192437]  mt-10 mb-8">Our Services</h2>

      <div
        role="tablist"
        className="flex flex-row flex-nowrap w-full max-w-[1070px]"
      >
        {services.map((service) => (
          <div key={service.id} className="relative flex-1">
            <button
              onClick={() => setActive(service.id)}
              className={`
                aspect-[7/5] min-h-[40px] sm:min-h-[80px]
                border border-[#D6D6D6] cursor-pointer
                ${
                  active === service.id
                    ? "bg-[#03837E] text-white border-b-0"
                    : "bg-white text-[#192437]"
                }
                w-full flex items-center justify-center transition-colors
                hover:bg-[#03837E] hover:text-white focus:outline-none
                text-[10px] sm:text-xs md:text-sm px-1 sm:px-2 text-center
              `}
              aria-pressed={active === service.id}
              aria-current={active === service.id ? "page" : undefined}
              role="tab"
            >
              <span className="font-semibold">{service.name}</span>
            </button>

            {active === service.id && (
              <>
                <div className="block sm:hidden absolute left-1/2 transform -translate-x-1/2 -bottom-[6px] z-10">
                  <svg
                    width="16"
                    height="11"
                    viewBox="0 0 32 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.5 0L0 21.5H32L16.5 0Z" fill="#192437" />
                  </svg>
                </div>
                <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 -bottom-[11px] z-10">
                  <svg
                    width="32"
                    height="22"
                    viewBox="0 0 32 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.5 0L0 21.5H32L16.5 0Z" fill="#192437" />
                  </svg>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="bg-[#192437] text-white flex flex-col md:flex-row justify-center py-10 w-full max-w-[1070px]">
        <div className="flex flex-col md:flex-row w-full px-4 sm:px-8 gap-6">
          <div className="flex-1">
            <h3 className="text-xl font-semibold">{activeService.title}</h3>
            <p className="italic">{activeService.subtitle}</p>
            <p className="mt-2 text-sm">{activeService.description}</p>
            <button className="mt-4 bg-[#03837E] px-4 py-2 text-white cursor-pointer  hover:border hover:border-[#03837E]  hover:bg-[#FFFFFF] hover:text-[#03837E] ">
              Read More
            </button>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={activeService.image}
              alt={`${activeService.title} Illustration`}
              className="max-w-[200px] sm:max-w-[250px] object-cover"
            />
          </div>
        </div>
      </div>

          <div className="hidden xl:flex absolute bottom-30 left-0 flex-col items-start justify-start w-[50px] h-[50px]">
        <img src={triangleg} alt="triangle black" className="xl:w-[101px] md:w-[70px] xl:h-[101px] md:h-[70px]  object-contain" />
        <img src={trianglew} alt="triangle white" className="xl:w-[101px]md: w-[70px] xl:h-[101px] md:h-[70px]   object-contain -mt-6 xl:-mt-6" />
      </div>

    </section>
  );
};

export default Services;
