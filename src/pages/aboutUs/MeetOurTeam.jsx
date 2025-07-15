import React from "react";
import liam from '../../assets/liam.jpg';
import dave from '../../assets/dave.jpg';
import grant from '../../assets/grant.jpg';
import clive from '../../assets/clive.jpg';
import jimmy from '../../assets/jimmy.jpg';
import russell from '../../assets/russell.jpg';
import russell2 from '../../assets/russell2.jpg';
import kieron from '../../assets/kieron.jpg';
import ronson from '../../assets/ronson.jpg';
import staurt from '../../assets/staurt.jpg';
import sandhu from '../../assets/sandhu.jpg';
import nick from '../../assets/nick.jpg';
import paul from '../../assets/paul.png';
import dita from '../../assets/dita.jpg';
import satel from '../../assets/satel.jpg';
import tom from '../../assets/tom.jpg';
import robbie from '../../assets/robbie.jpg';
import karen from '../../assets/karen.jpg';
import noimage from '../../assets/noimage.png';
import aboutusbg1 from '../../assets/aboutusbg1test.jpg';

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
  return (
    <div className="w-full overflow-x-hidden bg-white flex justify-center">
      <div className="w-full max-w-[1600px]">
        
        <div
          className="relative w-full h-[180px] sm:h-[220px] md:h-[250px] lg:h-[300px] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutusbg1})` }}
        >
          <div className="absolute inset-0 bg-[#192437] opacity-60 z-10" />
          <h1
            id="team-heading"
            className="relative z-20 text-white text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] font-bold leading-[1] text-center mt-2"
          >
            MEET OUR TEAM
          </h1>
        </div>

        {/* Team Grid */}
        <section
          className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-y-12 gap-x-8 py-12 sm:py-14 md:py-16 place-items-center"
          aria-labelledby="team-heading"
          role="list"
        >
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center"
              role="listitem"
            >
              <img
                src={member.img}
                alt={`Portrait of ${member.name}, ${member.role}`}
                role="img"
                aria-label={`${member.name}, ${member.role}`}
                className="rounded-full object-cover relative border border-[#D6D6D6] -top-[4px] -left-[4px]
                  w-[100px] h-[100px]
                  sm:w-[150px] sm:h-[150px]
                  md:w-[200px] md:h-[200px]
                  lg:w-[280px] lg:h-[280px]
                  xl:w-[300px] xl:h-[300px]"
              />
              <div className="mt-4 text-center text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-semibold leading-[1]">
                {member.name}
              </div>
              <div className="mt-1 text-center text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px] font-medium leading-[1] text-[#03837E]">
                {member.role}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default MeetOurTeam;
