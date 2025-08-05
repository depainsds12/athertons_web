import React, { useState, useEffect } from "react";
import triangleg from "../../../assets/triangleg.svg";
import trianglew from "../../../assets/trianglew.svg";
import noimage from "../../../assets/noimage.png";
import { getHomePage } from "../../../api/routes";
import { getAxios } from "../../../api/config";

const TeamPage = () => {
  const [teamData, setTeamData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await getAxios().get(getHomePage);
        setTeamData(response?.data?.data?.teams);
      } catch (error) {
        console.error("Error fetching team data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  // Transform API data into the structure expected by the component
  const transformData = (data) => {
    if (!data) return null;

    const transformed = {
      topTeam: [],
      sections: [],
    };

    // Process each department
    Object.entries(data).forEach(([department, members]) => {
      // Handle top team (empty department)
      if (department === "") {
        transformed.topTeam = members.map((member) => ({
          name: member.name,
          role: member.job_title,
          img: member.image || noimage,
        }));
      } else {
        // Handle other departments
        transformed.sections.push({
          title: `${department} Team`,
          members: members.map((member) => ({
            name: member.name,
            role: member.job_title,
            img: member.image || noimage,
          })),
        });
      }
    });

    // Ensure the sections are in the correct order
    const sectionOrder = [
      "Mechanical",
      "Electrical",
      "Estimators",
      "Finance",
      "PDQ",
      "Operations",
    ];

    transformed.sections.sort((a, b) => {
      const aIndex = sectionOrder.indexOf(a.title.replace(" Team", ""));
      const bIndex = sectionOrder.indexOf(b.title.replace(" Team", ""));
      return aIndex - bIndex;
    });

    return transformed;
  };

  const transformedData = transformData(teamData);

  if (loading) {
    return (
      <div className="bg-[#192437] min-h-screen flex items-center justify-center text-white">
        Loading team data...
      </div>
    );
  }

  if (!transformedData) {
    return (
      <div className="bg-[#192437] min-h-screen flex items-center justify-center text-white">
        Failed to load team data
      </div>
    );
  }

  return (
    <div className="bg-[#192437] w-full">
    <div className=" section_padding relative text-white w-full flex flex-col items-center py-12  mx-auto">
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
        {transformedData.topTeam.map((person, idx) => (
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
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = noimage;
                }}
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
      <div className="w-[100%]  border-t border-[#6A778D] pt-10 max-w-[1800px]">
        <h2 className="text-white font-semibold text-center text-4xl xl:text-[40px] mb-8">
          Head Office Team
        </h2>

        <div className="flex flex-col lg:flex-row lg:flex-wrap w-full">
          {transformedData.sections.map((section, idx) => {
            const isRightCol = idx % 2 === 1;
            const isLastRow = idx >= transformedData.sections.length - 2;

            return (
              <div
                key={idx}
                className={`w-full lg:w-1/2  py-8
                  ${isRightCol ? "lg:border-l lg:pl-10 2xl:pl-22" : "lg:pr-10 2xl:pl-5"}
                  ${
                    section.title.includes("PDQ Team")
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
                    section.title.includes("Estimators")
                      ? "flex flex-wrap justify-center lg:justify-start gap-4 2xl:gap-6"
                      : section.title.includes("PDQ Team") ||
                        section.title.includes("Operations Team")
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
                            section.title.includes("Estimators")
                              ? "w-[100px] h-[100px] 2xl:w-[130px] 2xl:h-[130px]"
                              : "w-[130px] h-[130px] 2xl:w-[150px] 2xl:h-[150px]"
                          }`}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = noimage;
                          }}
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

      <button onClick={()=>{window.location.href = "/aboutus/meetourteam"}} className="mt-12 bg-[#03837E] border-[#03837E] border-1 text-white px-8 py-3 font-semibold hover:border hover:border-[#03837E] hover:bg-[#FFFFFF] hover:text-[#03837E] cursor-pointer">
        View All Teams
      </button>
    </div>
    </div>
  );
};

export default TeamPage;
