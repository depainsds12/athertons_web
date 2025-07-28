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

      <div className="sm:flex absolute top-7 right-2 flex-col items-start justify-start w-[70px] h-[70px] xl:w-[101px] xl:h-[101px]">
        <img
          src={triangleg}
          alt="triangle black"
          className="w-[70px] h-[70px] xl:w-[101px] xl:h-[101px] object-contain"
        />
        <img
          src={trianglew}
          alt="triangle white"
          className="w-[70px] h-[70px] xl:w-[101px] xl:h-[101px] object-contain -mt-6 xl:-mt-9.5"
        />
      </div>

      <div className="sm:flex absolute bottom-[100px] left-2 flex-col items-start justify-start w-[70px] h-[70px] xl:w-[101px] xl:h-[101px]">
        <img
          src={triangleg}
          alt="triangle black"
          className="w-[70px] h-[70px] xl:w-[101px] xl:h-[101px] object-contain"
        />
        <img
          src={trianglew}
          alt="triangle white"
          className="w-[70px] h-[70px] xl:w-[101px] xl:h-[101px] object-contain -mt-6 xl:-mt-9.5"
        />
      </div>

      <div className="flex flex-col justify-center mb-16 md:flex-row gap-15 lg:gap-28">
        {teamData.topTeam.map((person, idx) => (
          <div className="flex flex-col items-center" key={idx}>
            <img
              src={person.img}
              alt={person.name}
              className="animate__animated animate__zoomIn hover:opacity-80 rounded-full w-[200px] h-[200px] sm:w-[150px] sm:h-[150px]  md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] object-cover"
            />
            <h3 className="mt-4 text-white font-semibold text-[32px]">
              {person.name}
            </h3>
            <p className="text-[18px] italic font-medium text-white">
              {person.role}
            </p>
          </div>
        ))}
      </div>

      <div className="w-full border-t border-[#6A778D] pt-10">
        <h2 className="text-white font-semibold text-center mx-auto text-4xl xl:text-[40px] mb-8">
          Head Office Team
        </h2>

        <div className="flex flex-wrap w-full">
          {teamData.sections.map((section, idx) => {
            const isRightCol = idx % 2 === 1;
            const isLastRow = idx >= teamData.sections.length - 2;

            return (
              <div
                key={idx}
                className={`w-full md:w-1/2 p-8 ${
                  isRightCol ? "md:border-l" : ""
                } ${!isLastRow ? "border-b" : ""} border-[#6A778D]`}
              >
                <h3 className="text-[32px] font-semibold mb-6">
                  {section.title}
                </h3>

                <div
                  className={`${
                    section.title === "Estimators"
                      ? "flex flex-row gap-4 2xl:gap-6 justify-start flex-wrap"
                      : section.title === "PDQ Team" ||
                        section.title === "Operations Team"
                      ? "flex flex-row gap-12 2xl:gap-14 justify-start flex-wrap"
                      : "flex flex-wrap gap-6 2xl:gap-8"
                  }`}
                >
                  {section.members.map((member, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <img
                        src={member.img}
                        alt={member.name}
                        className={`rounded-full object-cover hover:opacity-80 ${
                          section.title === "Estimators"
                            ? "w-[100px] h-[100px]"
                            : "w-[130px] h-[130px]"
                        }`}
                      />
                      <h4
                        className={`text-[20px] font-semibold text-center break-words ${
                          section.title === "Estimators"
                            ? "max-w-[100px]"
                            : "max-w-[130px]"
                        }`}
                      >
                        {member.name}
                      </h4>
                      <p className="italic font-medium mb-4 pb-4 text-[12px] text-center  max-w-[150px]">
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

      <button className="mt-12 bg-[#03837E] text-white px-8 py-3  font-semibold   cursor-pointer  hover:border hover:border-[#03837E]  hover:bg-[#FFFFFF] hover:text-[#03837E]">
        View All Teams
      </button>
    </div>
  );
};

export default TeamPage;
