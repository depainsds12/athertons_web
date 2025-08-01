import commercialMarketLeader from "../../../assets/commercialMarketLeader.png";
import triangleg from "../../../assets/triangleg.svg";
import trianglew from "../../../assets/trianglew.svg";
import { useState, useEffect } from "react";

const recentProjects = [
  {
    id: 1,
    title: "Tŷ Menai College Refurbishment",
    image: "/images/ty-menai.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "St Johns Church Presbytery",
    image: "/images/st-johns-church.png",
    link: "#",
  },
  {
    id: 3,
    title: "Bro Alun School Wrexham",
    image: "/images/bro-alan-school.png",
    link: "#",
  },
];

const Commercial = ({ apiData }) => {
  const features = [
    "Project Management",
    "Procurement",
    "Commissioning",
    "Multiple trades",
  ];

  const [descriptionText, setDescriptionText] = useState("");
  const [listItems, setListItems] = useState([]);

  // useEffect(() => {
  //   if (apiData?.market_leader_description2) {
  //     // Create a temporary DOM element to parse the HTML
  //     const tempDiv = document.createElement("div");
  //     tempDiv.innerHTML = DOMPurify.sanitize(
  //       apiData.market_leader_description2
  //     );

  //     // Extract paragraph content (text before the first ul)
  //     const paragraphs = tempDiv.querySelectorAll("p");
  //     setDescriptionText(paragraphs[0]?.textContent || "");

  //     // Extract list items
  //     const items = Array.from(tempDiv.querySelectorAll("li")).map(
  //       (li) => li.textContent
  //     );
  //     setListItems(items);
  //   }
  // }, [apiData]);

  useEffect(() => {
    if (apiData?.market_leader_description2) {
      // Simple parsing without DOMPurify
      const htmlString = apiData.market_leader_description2;

      // Extract text before <ul> (paragraph content)
      const textBeforeList = htmlString.split("<ul>")[0];
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = textBeforeList;
      setDescriptionText(tempDiv.textContent || "");

      // Extract list items
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

  return (
    <section
      className="relative flex flex-col items-center justify-between w-full gap-10 px-6 py-16 mx-auto xl:flex-row xl:items-start 2xl:gap-32 xl:px-20 2xl:px-40 max-w-[1600px]"
      aria-labelledby="commercial-heading"
    >
      {/* Left Side */}
      <div className="w-full max-w-xl text-center lg:text-left">
        <h2
          id="commercial-heading"
          className="text-[28px] xl:text-[40px] 2xl:text-5xl font-semibold text-[#192437] mb-4"
        >
          {apiData.market_leader_title}
        </h2>
        <p className="text-[#192437] font-medium text-[20px] italic mb-8">
          {/* At Athertons we make sure that we are on time, even when working to
          tight deadlines. */}
          {apiData.market_leader_description}
        </p>

        <div className="group overflow-hidden w-[300px] sm:w-[563px] mx-auto lg:mx-0">
          <img
            src={apiData.market_leader_image}
            alt="Athertons commercial building project"
            className="object-cover w-full h-auto transition-transform duration-500 ease-in-out animate__animated animate__zoomIn group-hover:scale-105"
          />
        </div>

        {/* <p className="mt-6 text-[#192437]">
          Our people are dedicated to making sure all your needs are met no
          matter what the project challenge:
          {apiData.market_leader_description2}
        </p> */}
        {descriptionText && (
          <p className="mt-6 text-[#192437]">{descriptionText}</p>
        )}

        {/* <ul
          className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-[#192437] text-left mx-auto md:mx-auto lg:mx-0 w-fit"
          aria-label="Project challenge areas"
        >
          {features.map((feature, idx) => (
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
              {feature}
            </li>
          ))}
        </ul> */}

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

        <div className="animationcostume hidden xl:flex absolute top-10 right-10 flex-col items-start justify-start w-[50px] h-[50px] mr-0.5">
          <img
            src={triangleg}
            alt="triangle black"
            className="xl:w-[101px] md:w-[70px] xl:h-[101px] md:h-[70px]  object-contain "
          />
          <img
            src={trianglew}
            alt="triangle white"
            className="xl:w-[101px] md:w-[70px] xl:h-[101px] md:h-[70px]   object-contain -mt-6 xl:-mt-6"
          />
        </div>
      </div>
      <div className="animationcostume2 hidden xl:flex absolute bottom-30 left-10 flex-col items-start justify-start w-[50px] h-[50px] mr-0.5">
        <img
          src={triangleg}
          alt="triangle black"
          className="xl:w-[101px] md:w-[70px] xl:h-[101px] md:h-[70px]  object-contain"
        />
        <img
          src={trianglew}
          alt="triangle white"
          className="xl:w-[101px]md: w-[70px] xl:h-[101px] md:h-[70px]   object-contain -mt-6 xl:-mt-6"
        />
      </div>

      {/* Right Side - Recent Projects */}
      <aside
        className="flex flex-col justify-center w-full max-w-xl text-center lg:text-left"
        aria-label="Recent Projects"
      >
        <h3 className="text-[28px] xl:text-[40px] 2xl:text-5xl font-semibold text-[#192437] mb-8">
          Our Recent Projects
        </h3>

        <div className="space-y-6">
          {recentProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col items-center sm:text-left gap-4 sm:flex-row sm:items-center"
            >
              <div className="group w-[216px] h-[164px] overflow-hidden border border-[#D6D6D6] hover:shadow-xl transition-shadow duration-500 ease-in-out mr-4">
                <img
                  src={project.image}
                  alt={`Preview of ${project.title}`}
                  className="object-cover w-full h-full transition-transform duration-500 ease-in-out shadow-2xl group-hover:scale-105"
                />
              </div>
              <div>
                <h4 className="font-semibold text-[20px] text-[#192437]">
                  {project.title}
                </h4>
                <a
                  href={project.link}
                  className="text-[#03837E] text-[18px] font-[500] underline cursor-pointer"
                  aria-label={`View details for ${project.title}`}
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>

        <button
          className="mt-10 bg-[#03837E] text-white w-full max-w-[511px] py-3 text-lg font-medium mx-auto xl:mx-0 hover:border hover:border-[#03837E] hover:bg-white hover:text-[#03837E] cursor-pointer"
          aria-label="View all projects"
        >
          View All Projects
        </button>
      </aside>
    </section>
  );
};

export default Commercial;
