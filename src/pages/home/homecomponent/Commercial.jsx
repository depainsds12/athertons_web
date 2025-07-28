import React from "react";
import commercialMarketLeader from "../../../assets/commercialMarketLeader.png";
import triangleg from '../../../assets/triangleg.svg';
import trianglew from '../../../assets/trianglew.svg';

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

const Commercial = () => {
  const features = [
    "Project Management",
    "Procurement",
    "Commissioning",
    "Multiple trades",
  ];

  return (
    <section
      className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-20 2xl:gap-32 px-6 xl:px-20 2xl:px-40 py-16 w-full mx-auto relative"
      aria-labelledby="commercial-heading"
    >
      {/* Left Side */}
      <div className="max-w-xl  w-full text-center lg:text-left">
        <h2
          id="commercial-heading"
          className="text-3xl xl:text-[40px] 2xl:text-5xl font-semibold text-[#192437] mb-4"
        >
          Commercial Market Leader
        </h2>
        <p className="text-[#192437] font-medium text-[20px] italic mb-8">
          At Athertons we make sure that we are on time, even when working to
          tight deadlines.
        </p>

        <img
          src={commercialMarketLeader}
          alt="Athertons commercial building project"
          className="object-cover w-[300px] sm:w-[563px] h-auto mx-auto lg:mx-0"
        />

        <p className="mt-6 text-[#192437]">
          Our people are dedicated to making sure all your needs are met no
          matter what the project challenge:
        </p>

       <ul
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
</ul>

    <div className=" sm:flex absolute top-0 right-0 flex-col items-start justify-start ">
          <img src={triangleg} alt="triangle black" className="xl:w-[139px] md:w-[70px] xl:h-[139px] md:h-[70px]  object-contain" />
          <img src={trianglew} alt="triangle white" className="xl:w-[139px] md: w-[70px] xl:h-[139px] md:h-[70px]   object-contain -mt-6 xl:-mt-13" />
        </div>

      </div>
        <div className="hidden xl:flex absolute bottom-30 left-0 flex-col items-start justify-start w-[50px] h-[50px] mr-0.5">
        <img src={triangleg} alt="triangle black" className="xl:w-[101px] md:w-[70px] xl:h-[101px] md:h-[70px]  object-contain" />
        <img src={trianglew} alt="triangle white" className="xl:w-[101px]md: w-[70px] xl:h-[101px] md:h-[70px]   object-contain -mt-6 xl:-mt-6" />
      </div>

      {/* Right Side - Recent Projects */}
      <aside
        className="w-full max-w-xl flex flex-col justify-center text-center lg:text-left"
        aria-label="Recent Projects"
      >
        <h3 className="text-3xl xl:text-[40px] 2xl:text-5xl font-semibold text-[#192437] mb-8">
          Our Recent Projects
        </h3>

        <div className="space-y-6">
          {recentProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col sm:flex-row gap-4 items-center sm:items-start"
            >
              <img
                src={project.image}
                alt={`Preview of ${project.title}`}
                className="border border-[#D6D6D6] object-cover w-[216px] h-[164px]"
              />
              <div>
                <h4 className="font-semibold text-[#192437]">{project.title}</h4>
                <a
                  href={project.link}
                  className="text-[#03837E] underline"
                  aria-label={`View details for ${project.title}`}
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>

        <button
          className="mt-10 bg-[#03837E] text-white w-full max-w-xs py-3 text-center text-lg font-medium mx-auto lg:mx-0 cursor-pointer  hover:border hover:border-[#03837E]  hover:bg-[#FFFFFF] hover:text-[#03837E] "
          aria-label="View all projects"
        >
          View All Projects
        </button>
      </aside>
    </section>
  );
};

export default Commercial;
