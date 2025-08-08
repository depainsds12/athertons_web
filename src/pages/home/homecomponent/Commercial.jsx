

import commercialMarketLeader from "../../../assets/commercialMarketLeader.png";
import triangleg from "../../../assets/triangleg.svg";
import trianglew from "../../../assets/trianglew.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Commercial = ({ apiData, projectData }) => {
  const features = [
    "Project Management",
    "Procurement",
    "Commissioning",
    "Multiple trades",
  ];

  const [descriptionText, setDescriptionText] = useState("");
  const [listItems, setListItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (apiData?.market_leader_description2) {
      const htmlString = apiData.market_leader_description2;

      const textBeforeList = htmlString.split("<ul>")[0];
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = textBeforeList;
      setDescriptionText(tempDiv.textContent || "");

      const listMatch = htmlString.match(/<ul>(.*?)<\/ul>/s);
      if (listMatch) {
        const listContent = listMatch[1];
        const items = listContent
          .split("<li>")
          .filter((item) => item.includes("</li>"))
          .map((item) => item.split("</li>")[0].trim());
        setListItems(items);
      }
    }
  }, [apiData]);


  const generateProjectSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s]/g, '') 
      .replace(/\s+/g, '-') 
      .replace(/--+/g, '-') 
      .trim();
  };


  const handleProjectClick = (projectTitle) => {
    const slug = generateProjectSlug(projectTitle);
    navigate(`/projects/${slug}`);
  };

  return (
    <section
      className="relative flex flex-col items-center justify-between w-full gap-10  py-16 mx-auto xl:flex-row xl:items-start 2xl:gap-3 max-w-[1600px] section_padding"
      aria-labelledby="commercial-heading"
    >
      <div className="w-full max-w-xl text-center lg:text-left">
        <h2
          id="commercial-heading"
          className="text-[28px] xl:text-[40px] 2xl:text-5xl font-semibold text-[#192437] mb-4"
        >
          {apiData.market_leader_title}
        </h2>
        <p className="text-[#192437] font-medium text-[20px] italic mb-8">
          {apiData.market_leader_description}
        </p>

        <div className="group overflow-hidden w-[300px] sm:w-[563px] mx-auto lg:mx-0">
          <img
            src={apiData.market_leader_image}
            alt="Athertons commercial building project"
            className="object-cover w-full h-auto transition-transform duration-500 ease-in-out animate__animated animate__zoomIn group-hover:scale-105"
          />
        </div>

        {descriptionText && (
          <p className="mt-6 text-[#192437]">{descriptionText}</p>
        )}

        {listItems.length > 0 && (
          <ul
            className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-[#192437] text-left mx-auto md:mx-auto lg:mx-0 w-fit"
            aria-label="Project challenge areas"
          >
            {listItems.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <path
                    d="M6.5 0L12.1292 3.25V9.75L6.5 13L0.870835 9.75V3.25L6.5 0Z"
                    fill="#03837E"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="animationcostume hidden lg:flex absolute top-10 right-0  2xl:-right-20 flex-col items-start justify-start w-[50px] h-[50px] 2xl:w-[139px] 2xl:h-[139px] mr-0.5">
          <img
            src={triangleg}
            alt="triangle black"
            className="lg:w-[101px] md:w-[70px] lg:h-[101px] md:h-[70px]  object-contain "
          />
          <img
            src={trianglew}
            alt="triangle white"
            className="lg:w-[101px] md:w-[70px] lg:h-[101px] md:h-[70px]   object-contain -mt-6 2xl:-mt-10"
          />
        </div>
      </div>
      <div className="animationcostume hidden xl:flex absolute top-[50%] left-0 2xl:-left-20 flex-col items-start justify-start w-[50px] h-[50px] 2xl:w-[101px] 2xl:h-[101px] mr-0.5">
        <img
          src={triangleg}
          alt="triangle black"
          className="xl:w-[101px] md:w-[70px] xl:h-[101px] md:h-[70px]  object-contain"
        />
        <img
          src={trianglew}
          alt="triangle white"
          className="xl:w-[101px] md: w-[70px] xl:h-[101px] md:h-[70px]   object-contain -mt-6 2xl:-mt-10"
        />
      </div>

      <aside
        className="flex flex-col justify-center w-full max-w-xl text-center lg:text-left"
        aria-label="Recent Projects"
      >
        <h3 className="text-[28px] xl:text-[40px] 2xl:text-5xl font-semibold text-[#192437] mb-8">
          Our Recent Projects
        </h3>

        <div className="space-y-6">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="flex flex-col items-center sm:text-left gap-4 sm:flex-row sm:items-center"
            >
              <div className="group w-[216px] h-[164px] md:min-w-[216px] overflow-hidden border border-[#D6D6D6] hover:shadow-xl transition-shadow duration-500 ease-in-out mr-4">
                <img
                  src={project.featured_image}
                  alt={`Preview of ${project.project_title}`}
                  className="object-cover md:min-w-[216px] w-full h-full transition-transform duration-500 ease-in-out shadow-2xl group-hover:scale-105"
                />
              </div>
              <div>
                <h4 className="font-semibold text-[20px] text-[#192437]">
                  {project.project_title}
                </h4>
                <button
                  onClick={() => navigate(`/projects/${project.id}`,{
                    state: { projectId: project.id },
                  })}
                  className="text-[#03837E] text-[18px] font-[500] underline cursor-pointer"
                  aria-label={`View details for ${project.project_title}`}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          className="mt-10 bg-[#03837E] text-white w-full max-w-[511px] py-3 text-lg font-medium mx-auto xl:mx-0 hover:border hover:border-[#03837E] hover:bg-white hover:text-[#03837E] cursor-pointer"
          aria-label="View all projects"
          onClick={() => navigate("/projects")}
        >
          View All Projects
        </button>
      </aside>
    </section>
  );
};

export default Commercial;
