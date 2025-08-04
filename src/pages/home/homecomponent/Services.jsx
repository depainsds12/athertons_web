import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import triangleg from "../../../assets/triangleg.svg";
import trianglew from "../../../assets/trianglew.svg";

const Services = ({ servicesData = [] }) => {
  const [active, setActive] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (servicesData.length > 0) {
      setActive(servicesData[0].title);
      setIsLoading(false);
    }
  }, [servicesData]);

  const activeService = servicesData.find(
    (service) => service.title === active
  );


   const handleReadMore = () => {
    if (activeService) {
      
      const serviceRoutes = {
        "BMS EMS Technology": "bms_ems_technology",
        "M&E Engineering": "me_engineering",
        "Smart Design": "consultancy_smartdesign",
        "Eco Solutions": "eco_solutions",
        "Light Civil Engineering": "light_civil_engineering",
      };

     
    
    const route = serviceRoutes[activeService.title] || 
                 activeService.title.toLowerCase()
                   .replace(/&/g, '')  
                   .replace(/\s+/g, '_')  
                   .replace(/[^\w_]/g, '');  
      
      navigate(`/services/${route}`);
    }
  };

  if (isLoading) {
    return (
      <section className="relative flex flex-col items-center w-full mt-2 sm:mb-15">
        <div className="text-center py-10">
          <p>Loading services...</p>
        </div>
      </section>
    );
  }

  if (!servicesData.length) {
    return (
      <section className="relative flex flex-col items-center w-full mt-2 sm:mb-15">
        <div className="text-center py-10">
          <p>No services available</p>
        </div>
      </section>
    );
  }

  return (
    <div className="w-full flex items-center justify-center">
      <section className="relative flex flex-col max-w-(--layout-width) items-center w-full mt-2 sm:mb-15">
        <div className="animationcostume2 hidden xl:flex absolute top-20 right-10 flex-col items-start mr-0.5 justify-start w-[50px] h-[50px]">
          <img
            src={triangleg}
            alt="triangle black"
            className="xl:w-[101px] md:w-[70px] xl:h-[101px] md:h-[70px] object-contain"
          />
          <img
            src={trianglew}
            alt="triangle white"
            className="xl:w-[101px] md:w-[70px] xl:h-[101px] md:h-[70px] object-contain -mt-6 xl:-mt-6"
          />
        </div>

        <h2 className="text-[28px] md:text-[40px] font-semibold text-[#192437] my-4 lg:mt-10 lg:mb-8">
          Our Services
        </h2>
        
       
        <div className="w-full">
          <div role="tablist" className="flex flex-row flex-nowrap w-full sm:w-[85%] lg:w-full">
            {servicesData.map((service) => (
              <div key={service.title} className="relative flex-1">
                <button
                  onClick={() => setActive(service.title)}
                  className={`h-[70px] sm:h-[90px] md:h-[110px] lg:h-[130px] xl:h-[168px]
                    border border-[#D6D6D6] cursor-pointer
                    ${active === service.title
                      ? "bg-[#03837E] text-white border-b-0"
                      : "bg-white text-[#192437]"
                    }
                    w-full flex items-center justify-center transition-colors
                    hover:bg-[#03837E] hover:text-white focus:outline-none
                    text-[10px] sm:text-xs md:text-sm px-1 sm:px-2 text-center`}
                  aria-pressed={active === service.title}
                  aria-current={active === service.title ? "page" : undefined}
                  role="tab"
                >
                  <span className="font-semibold sm:text-base lg:text-[18px] xl:text-[24px] animate__animated animate__zoomIn">
                    {service.title}
                  </span>
                </button>

                {active === service.title && (
                  <>
                    <div className="block sm:hidden absolute left-1/2 transform -translate-x-1/2 -bottom-[6px] z-10">
                      <svg width="16" height="11" viewBox="0 0 32 22" fill="none">
                        <path d="M16.5 0L0 21.5H32L16.5 0Z" fill="#192437" />
                      </svg>
                    </div>
                    <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 -bottom-[11px] z-10">
                      <svg width="32" height="22" viewBox="0 0 32 22" fill="none">
                        <path d="M16.5 0L0 21.5H32L16.5 0Z" fill="#192437" />
                      </svg>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

      
        {activeService && (
          <div className="w-full">
            <div className="bg-[#192437] text-white flex flex-col md:flex-row justify-center py-10 w-full sm:w-[85%] lg:w-full">
              <div className="flex flex-col w-full gap-6 px-4 md:flex-row sm:px-8">
                <div className="flex-1">
                  <h3 className="text-xl lg:text-[28px] xl:text-[36px] mt-1 font-semibold">
                    {activeService.title}
                  </h3>
                  <p className="italic font-[600] lg:text-[18px] xl:text-[20px] mt-3.5">
                    {activeService.subtitle}
                  </p>
                  <p className="mt-2.5 xl:mt-3.5 font-normal text-[16px] leading-[28px] tracking-[0]">
                    {activeService.description}
                  </p>

                  <button 
                    onClick={handleReadMore}
                    className="mt-10 bg-[#03837E] px-4 py-2 text-white cursor-pointer 
                             hover:border hover:border-[#03837E] hover:bg-[#FFFFFF] hover:text-[#03837E]"
                  >
                    Read More
                  </button>
                </div>
                <div className="flex items-center justify-end overflow-hidden group">
                  {activeService.image ? (
                    <img
                      src={activeService.image}
                      alt={`${activeService.title} Illustration`}
                      className="aspect-[464/344] w-full md:w-[310px] lg:w-[400px] xl:w-[464px] xl:h-[344px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/464x344?text=Image+Not+Available";
                      }}
                    />
                  ) : (
                    <div className="aspect-[464/344] w-[200px] md:w-[310px] lg:w-[400px] xl:w-[464px] xl:h-[344px] bg-gray-200 flex items-center justify-center">
                      <span>Image not available</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Services;
