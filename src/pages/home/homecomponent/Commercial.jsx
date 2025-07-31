import commercialMarketLeader from "../../../assets/commercialMarketLeader.png";
import triangleg from "../../../assets/triangleg.svg";
import trianglew from "../../../assets/trianglew.svg";

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
    <section className="relative w-full px-4 sm:px-6 xl:px-20 2xl:px-32 py-16 flex justify-center bg-white overflow-hidden 2xl:mx-auto ">
      <div className="relative w-full max-w-[1700px] flex flex-col xl:flex-row xl:gap-20 items-center xl:items-start ">
        {/* Triangle Decorations */}
        <div className="absolute -top-10 left-6 xl:left-20 animate__animated animate__fadeInDown">
          <img
            src={triangleg}
            alt="triangle black"
            className="w-[80px] xl:w-[100px] h-[80px] xl:h-[100px] object-contain"
          />
          <img
            src={trianglew}
            alt="triangle white"
            className="w-[80px] xl:w-[100px] h-[80px] xl:h-[100px] -mt-6 object-contain"
          />
        </div>

        <div className="absolute -bottom-10 right-6 xl:right-20 animate__animated animate__fadeInUp">
          <img
            src={triangleg}
            alt="triangle black"
            className="w-[80px] xl:w-[100px] h-[80px] xl:h-[100px] object-contain"
          />
          <img
            src={trianglew}
            alt="triangle white"
            className="w-[80px] xl:w-[100px] h-[80px] xl:h-[100px] -mt-6 object-contain"
          />
        </div>

        {/* Left Content */}
        <div className="w-full  text-center xl:text-left mb-16 xl:mb-0">
          <h2 className="text-3xl xl:text-[40px] 2xl:text-5xl font-semibold text-[#192437] mb-4">
            Commercial Market Leader
          </h2>
          <p className="text-[#192437] font-medium text-[20px] italic mb-8">
            At Athertons we make sure that we are on time, even when working to
            tight deadlines.
          </p>

          <div className="group overflow-hidden w-[300px] sm:w-[563px] mx-auto xl:mx-0">
            <img
              src={commercialMarketLeader}
              alt="Athertons commercial building project"
              className="object-cover w-full h-auto transition-transform duration-500 ease-in-out animate__animated animate__zoomIn group-hover:scale-105"
            />
          </div>

          <p className="mt-6 text-[#192437]">
            Our people are dedicated to making sure all your needs are met no
            matter what the project challenge:
          </p>

          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-[#192437] text-left mx-auto xl:mx-0 w-fit">
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
        </div>

        {/* Right Side - Projects */}
        <aside
          className="w-full max-w-2x text-center xl:text-left"
          aria-label="Recent Projects"
        >
          <h3 className="text-3xl xl:text-[40px] 2xl:text-5xl font-semibold text-[#192437] mb-8">
            Our Recent Projects
          </h3>

          <div className="space-y-6">
            {recentProjects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col items-center gap-4 sm:flex-row sm:items-center"
              >
                <div className="group w-[216px] h-[164px] overflow-hidden border border-[#D6D6D6] hover:shadow-xl transition-shadow duration-500 ease-in-out">
                  <img
                    src={project.image}
                    alt={`Preview of ${project.title}`}
                    className="object-cover w-full h-full transition-transform duration-500 ease-in-out shadow-2xl animate__animated animate__zoomIn group-hover:scale-105"
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
            className="mt-10 bg-[#03837E] text-white w-full max-w-[511px] py-3 text-lg font-medium mx-auto xl:mx-0 hover:border hover:border-[#03837E] hover:bg-white hover:text-[#03837E]"
            aria-label="View all projects"
          >
            View All Projects
          </button>
        </aside>
      </div>
    </section>
  );
};

export default Commercial;
