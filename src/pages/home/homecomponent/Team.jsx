import clive from "../../../assets/clive.jpg";
import dave from "../../../assets/dave.jpg";
import dita from "../../../assets/dita.jpg";
import grant from "../../../assets/grant.jpg";
import jimmy from "../../../assets/jimmy.jpg";
import karen from "../../../assets/karen.jpg";
import kieron from "../../../assets/kieron.jpg";
import nick from "../../../assets/nick.jpg";
import {
  default as ian,
  default as noimage,
} from "../../../assets/noimage.png";
import paul from "../../../assets/paul.png";
import robbie from "../../../assets/robbie.jpg";
import ronson from "../../../assets/ronson.jpg";
import russell from "../../../assets/russell.jpg";
import russell2 from "../../../assets/russell2.jpg";
import sandhu from "../../../assets/sandhu.jpg";
import satel from "../../../assets/satel.jpg";
import stuart from "../../../assets/staurt.jpg";
import tom from "../../../assets/tom.jpg";
import triangleg from "../../../assets/triangleg.svg";
import trianglew from "../../../assets/trianglew.svg";

const teamData = {
  topTeam: [
    { name: "Satel Naik", role: "Co-Owner And CTO", img: satel },
    { name: "Dita Naik", role: "Co-Owner And CCO", img: dita },
    { name: "Paul", role: "Managing Director", img: paul },
  ],
  sections: [
    {
      title: "Mechanical Team",
      members: [
        { name: "Russell", role: "Senior Contracts Manager", img: russell2 },
        { name: "Jimmy", role: "Contracts Manager", img: jimmy },
        { name: "Grant", role: "Mechanical Contracts Manager", img: grant },
      ],
    },
    {
      title: "Electrical Team",
      members: [
        { name: "Robbie", role: "Electrical Contracts Manager", img: robbie },
        { name: "Stuart", role: "Electrical Contracts Manager", img: stuart },
        { name: "Lee", role: "Electrical Contracts Manager", img: noimage },
      ],
    },
    {
      title: "Estimators",
      members: [
        { name: "Nick", role: "Electrical Estimator", img: nick },
        { name: "Dave", role: "Mechanical Estimator", img: dave },
        { name: "Ian", role: "Electrical Estimator", img: ian },
        { name: "Liam", role: "Mechanical Estimator", img: noimage },
      ],
    },
    {
      title: "Finance Team",
      members: [
        { name: "Karen", role: "Business Operations Manager", img: karen },
        { name: "Kieron", role: "Accounts Payable Specialist", img: kieron },
        { name: "Clive", role: "Financial Controller", img: clive },
      ],
    },
    {
      title: "PDQ Team",
      members: [
        { name: "Sandhu", role: "PDQ Specialist", img: sandhu },
        { name: "Ronson", role: "PDQ Manager", img: ronson },
      ],
    },
    {
      title: "Operations Team",
      members: [
        { name: "Tom", role: "Commercial Director", img: tom },
        { name: "Russell", role: "MEP Buyer", img: russell },
      ],
    },
  ],
};

const TeamPage = () => {
  return (
    <div className="bg-[#192437] relative text-white w-full flex flex-col items-center py-12 px-6 mx-auto">
      <h2 className="text-white font-semibold text-4xl xl:text-[40px] mb-10">
        The Team
      </h2>

      {/* Triangle Top Right */}
      <div className="animationcostume sm:flex absolute top-7 right-10 flex-col items-start justify-start w-[70px] h-[70px] xl:w-[70px] xl:h-[70px]">
        <img
          src={triangleg}
          alt="triangle black"
          className="w-[70px] h-[70px] xl:w-[80px] xl:h-[80px] object-contain"
        />
        <img
          src={trianglew}
          alt="triangle white"
          className="w-[70px] h-[70px] xl:w-[80px] xl:h-[80px] object-contain -mt-6 xl:-mt-9.5"
        />
      </div>

      {/* Triangle Bottom Left */}
      <div className="animationcostume2 sm:flex absolute bottom-[100px] left-10 flex-col items-start justify-start w-[70px] h-[70px] xl:w-[80px] xl:h-[80px]">
        <img
          src={triangleg}
          alt="triangle black"
          className="w-[70px] h-[70px] xl:w-[80px] xl:h-[80px] object-contain"
        />
        <img
          src={trianglew}
          alt="triangle white"
          className="w-[70px] h-[70px] xl:w-[80px] xl:h-[80px] object-contain -mt-6 xl:-mt-9.5"
        />
      </div>

      {/* Top Team */}
      <div className="flex flex-col items-center justify-center mb-16 md:flex-row gap-10 lg:gap-28 max-w-[1800px] mx-auto">
        {teamData.topTeam.map((person, idx) => (
          <div className="flex flex-col items-center" key={idx}>
            <div className="overflow-hidden rounded-full group">
              <img
                src={person.img}
                alt={person.name}
                className="animate__animated animate__zoomIn hover:opacity-80 rounded-full 
                w-[160px] h-[160px] md:w-[200px] md:h-[200px] 
                lg:w-[240px] lg:h-[240px] xl:w-[300px] xl:h-[300px] 
                2xl:w-[350px] 2xl:h-[350px] object-cover 
                transition-transform duration-500 ease-in-out 
                group-hover:scale-105"
              />
            </div>
            <h3 className="mt-4 font-semibold text-[24px] sm:text-[28px] md:text-[32px] text-center">
              {person.name}
            </h3>
            <p className="text-[16px] sm:text-[18px] italic font-medium text-center">
              {person.role}
            </p>
          </div>
        ))}
      </div>

      {/* Head Office */}
      <div className="w-[92%] px-4 md:px-10 border-t border-[#6A778D] pt-10 max-w-[1800px]">
        <h2 className="text-white font-semibold text-center text-4xl xl:text-[40px] mb-8">
          Head Office Team
        </h2>

        <div className="flex flex-col lg:flex-row lg:flex-wrap w-full">
          {teamData.sections.map((section, idx) => {
            const isRightCol = idx % 2 === 1;
            const isLastRow = idx >= teamData.sections.length - 2;

            return (
              <div
                key={idx}
                className={`w-full lg:w-1/2 px-4 py-8 
    ${isRightCol ? "lg:border-l lg:pl-10 2xl:pl-22" : "2xl:pl-5"} 
    ${
      section.title === "PDQ Team"
        ? "border-b lg:border-b-0"
        : !isLastRow
        ? "border-b"
        : ""
    } 
    border-[#6A778D] text-center lg:text-left`}
              >
                <h3 className="text-[28px] font-semibold mb-6">
                  {section.title}
                </h3>

                <div
                  className={`${
                    section.title === "Estimators"
                      ? "flex flex-wrap justify-center lg:justify-start gap-4 2xl:gap-6"
                      : section.title === "PDQ Team" ||
                        section.title === "Operations Team"
                      ? "flex flex-wrap justify-center lg:justify-start gap-8 2xl:gap-16"
                      : "flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-6 2xl:gap-10"
                  }`}
                >
                  {section.members.map((member, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="overflow-hidden rounded-full group">
                        <img
                          src={member.img}
                          alt={member.name}
                          className={`rounded-full object-cover hover:opacity-80 transition-transform duration-300 ease-in-out group-hover:scale-105 ${
                            section.title === "Estimators"
                              ? "w-[100px] h-[100px] 2xl:w-[130px] 2xl:h-[130px]"
                              : "w-[130px] h-[130px] 2xl:w-[150px] 2xl:h-[150px]"
                          }`}
                        />
                      </div>
                      <h4 className="text-[18px] sm:text-[20px] font-semibold text-center break-words mt-2">
                        {member.name}
                      </h4>
                      <p className="italic font-medium text-[12px] text-center max-w-[150px] mt-1 mb-4">
                        {member.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button className="mt-12 bg-[#03837E] text-white px-8 py-3 font-semibold hover:border hover:border-[#03837E] hover:bg-[#FFFFFF] hover:text-[#03837E] cursor-pointer">
        View All Teams
      </button>
    </div>
  );
};

export default TeamPage;
