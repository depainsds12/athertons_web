import { projects } from "../../../data/projects.js";
import { useNavigate } from "react-router-dom";
import casestudiesData from "../../../data/casestudiesData.js";
const Casestudies = ({apiData}) => {
  const navigate = useNavigate();
    const generateProjectSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s]/g, '') 
      .replace(/\s+/g, '-') 
      .replace(/--+/g, '-') 
      .trim();
  };


  // const handleProjectClick = (projectTitle) => {
  //   const slug = generateProjectSlug(projectTitle);
  //   navigate(`/casestudies/${slug}`);
  // };

  return (
    <section className="w-full  py-5 lg:py-16 section_padding mx-auto ">
      <h2 className=" text-[28px] lg:text-[40px] text-center font-semibold text-[#192437] mb-3 lg:mb-12">
        Case Studies
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-7 lg:gap-y-16 xl:gap-x-18">
        {apiData.map((project) => (
          <div
            key={project.id}
            className="flex flex-col items-start w-full max-w-[520px] mx-auto"
          >
            <div
              className="group hover:shadow-xl w-full overflow-hidden mb-4 bg-gray-100 flex items-center justify-center border aspect-[330/250]"
              style={{
                borderColor: "#D6D6D6",
                borderWidth: "1px",
              }}
            >
              <img
                src={project.featured_image}
                alt={project.name}
                className="object-cover w-full h-full transition-transform duration-500 ease-in-out animate__animated animate__zoomIn group-hover:scale-105"
              />
            </div>

            <h3 className="text-[#192437] font-semibold text-[20px] leading-[100%] font-['Open_Sans'] mb-2 text-left w-full">
              {project.title}
            </h3>
            <a
              onClick={() => navigate(`/casestudies/${project.id}`,{
                  state: {caseStudyId: project.id}
                })}
              // href={`/casestudies/${project.id}`}
              className="text-[#03837E] font-medium text-[18px] leading-[100%] underline underline-offset-2 font-['Open_Sans'] hover:text-[#02635f] cursor-pointer text-left w-full"
            >
              View Details
            </a>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center mt-12">
        <button onClick={()=>{window.location.href = "/casestudies"}} className="w-[283px] h-[48px] bg-[#03837E] text-white flex items-center justify-center cursor-pointer hover:border hover:border-[#03837E] hover:bg-[#FFFFFF] hover:text-[#03837E]">
          <span className="text-lg font-medium">View All Case Studies</span>
        </button>
      </div>
    </section>
  );
};

export default Casestudies;
