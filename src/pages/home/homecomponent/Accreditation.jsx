import React from "react";

const Accreditation = ({ membershipsData }) => {
  return (
    <div className="bg-[#F4F4F5]  py-5 md:py-12 ">
      <p className="font-semibold text-center text-[28px] md:text-3xl xl:text-[40px] text-[#192437] mb-3 lg:mb-8">
        Accreditation & Memberships
      </p>

      {membershipsData.length > 0 ? (
        <div className="flex flex-wrap w-full section_padding mx-auto justify-center">
          {membershipsData.map((item, index) => (
            <div
              key={index}
              className="w-1/2 sm:w-1/2 md:w-1/3 lg:flex-1 flex justify-center items-center py-4"
            >
              <div className=" w-[140px] h-[78px] flex items-center justify-center m-1">
                <img
                  src={item.logo}
                  alt={`Membership Logo ${index + 1}`}
                  className="object-contain"
                  style={{
                    width: "140px",
                    height: "78px",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center py-10">No memberships data available</p>
      )}
    </div>
  );
};

export default Accreditation;
