import React from "react";
import { useEffect, useState } from "react";
import liam from "../../assets/liam.jpg";
import dave from "../../assets/dave.jpg";
import grant from "../../assets/grant.jpg";
import clive from "../../assets/clive.jpg";
import jimmy from "../../assets/jimmy.jpg";
import russell from "../../assets/russell.jpg";
import russell2 from "../../assets/russell2.jpg";
import kieron from "../../assets/kieron.jpg";
import ronson from "../../assets/ronson.jpg";
import staurt from "../../assets/staurt.jpg";
import sandhu from "../../assets/sandhu.jpg";
import nick from "../../assets/nick.jpg";
import paul from "../../assets/paul.png";
import dita from "../../assets/dita.jpg";
import satel from "../../assets/satel.jpg";
import tom from "../../assets/tom.jpg";
import robbie from "../../assets/robbie.jpg";
import karen from "../../assets/karen.jpg";
import noimage from "../../assets/noimage.png";
import aboutusbg1 from "../../assets/aboutusbg1test.jpg";
import { getMeetOurTeam } from "../../api/routes";
import { getAxios } from "../../api/config";

const teamMembers = [
  { name: "Liam", role: "Mechanical Estimator", img: liam },
  { name: "Dave", role: "Electrical Estimator", img: dave },
  { name: "Grant", role: "Mechanical Contracts Manager", img: grant },
  { name: "Leo", role: "Electrical Contracts Manager", img: noimage },
  { name: "Clive", role: "Financial Controller", img: clive },
  { name: "Jimmy", role: "Contracts Manager", img: jimmy },
  { name: "Russell", role: "MEP Buyer", img: russell },
  { name: "Russell", role: "Senior Contracts Manager", img: russell2 },
  { name: "Kieron", role: "Accounts Payable Specialist", img: kieron },
  { name: "Ronson", role: "PDQ Manager", img: ronson },
  { name: "Stuart", role: "Electrical Contracts Manager", img: staurt },
  { name: "Sandhu", role: "PDQ Specialist", img: sandhu },
  { name: "Nick", role: "Electrical Estimator", img: nick },
  { name: "Ian", role: "Electrical Estimator", img: noimage },
  { name: "Paul", role: "Managing Director", img: paul },
  { name: "Dita Naik", role: "Co-Owner And CCO", img: dita },
  { name: "Satel Naik", role: "Co-Owner And CTO", img: satel },
  { name: "Tom", role: "Commercial Director", img: tom },
  { name: "Robbie", role: "Electrical Contracts Manager", img: robbie },
  { name: "Karen", role: "Business Operations Manager", img: karen },
  { name: "Stephen", role: "Technical Director", img: noimage },
];

const MeetOurTeam = () => {
  const [teamData, setTeamData] = useState();
  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await getAxios().get(getMeetOurTeam);
        console.log("data of our team is", response?.data?.data);
        setTeamData(response?.data?.data);
      } catch (error) {
        console.error("Failed to fetch Meet Our team API:", error);
      }
    };

    fetchTeamData();
  }, []);
  return (
    <div className="w-full overflow-x-hidden bg-white flex justify-center">
      <div className="w-full">
        {/* Banner */}
        <div
          className="relative w-full aspect-[1366/300] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${teamData?.banner_image})` }}
        >
          <div className="absolute inset-0 bg-[#192437] opacity-60 z-10" />
          <h1
            id="team-heading"
            className="relative z-20 text-white text-[20px] sm:text-[36px] md:text-[48px] xl:text-[60px] 2xl:text-[80px] font-bold leading-[1] text-center mt-2"
          >
            {/* MEET OUR TEAM */}
            {teamData?.banner_title || "MEET OUR TEAM"}
          </h1>
        </div>

        {/* Team Section (Flex Layout) */}
        <section
          className="w-full flex flex-wrap justify-center gap-y-12 py-8 sm:py-10 md:py-16 px-4 "
          aria-labelledby="team-heading"
          role="list"
        >
          {teamData?.teams_data.map((member, idx) => (
            <div
              key={idx}
              className="w-1/2 sm:w-1/2 md:w-1/3 flex justify-center"
              role="listitem"
            >
              <div className="flex flex-col items-center">
                <img
                  src={member.image}
                  alt={`Portrait of ${member.name}, ${member.role}`}
                  role="img"
                  aria-label={`${member.name}, ${member.role}`}
                  className="rounded-full object-cover relative border border-[#D6D6D6] -top-[4px] -left-[4px]
                    w-[135px] h-[135px]
                    sm:w-[180px] sm:h-[180px]
                    md:w-[190px] md:h-[190px]
                    lg:w-[270px] lg:h-[270px]
                    xl:w-[300px] xl:h-[300px]"
                />
                <div className="mt-4 text-center text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-semibold leading-[1]">
                  {member.name}
                </div>
                <div className="mt-4 mb-1 text-center text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px] font-medium leading-[1] text-[#03837E]">
                  {member.job_title}
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default MeetOurTeam;
