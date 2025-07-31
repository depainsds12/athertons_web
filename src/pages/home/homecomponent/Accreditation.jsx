import React from "react";
import gasSafe from "../../../assets/aboutus/gasSafe.png";
import chasLogo from "../../../assets/aboutus/chasLogo.png";
import BESAlogo from "../../../assets/aboutus/BESAlogo.png";
import trustmarkLogo from "../../../assets/aboutus/trustmarkLogo.png";
import constructionlineLogo from "../../../assets/aboutus/constructionlineLogo.png";
import creditsafeLogo from "../../../assets/aboutus/creditsafeLogo.png";
import officeForZeroEmissionVehicle from "../../../assets/aboutus/officeForZeroEmissionVehicle.png";

const Accreditation = () => {
  const images = [
    gasSafe,
    chasLogo,
    BESAlogo,
    trustmarkLogo,
    constructionlineLogo,
    creditsafeLogo,
    officeForZeroEmissionVehicle,
  ];

  return (
    <div className="bg-[#F4F4F5] px-3 py-5 md:py-12 md:px-6">
      <p className="font-semibold text-center text-[28px] md:text-3xl xl:text-[40px] text-[#192437] mb-8">
        Accreditation & Memberships
      </p>

      <div className="flex flex-wrap w-full max-w-[1700px] mx-auto justify-center">
        {images.map((img, index) => (
          <div
            key={index}
            className="w-1/2 sm:w-1/2 md:w-1/3 lg:flex-1 flex justify-center items-center py-4"
          >
            <div className="bg-[#FFFFFF] w-[140px] h-[78px] flex items-center justify-center m-1">
              <img
                src={img}
                alt="Accreditation Logo"
                className="object-contain "
                style={{
                  width: "140px",
                  height: "78px",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accreditation;
