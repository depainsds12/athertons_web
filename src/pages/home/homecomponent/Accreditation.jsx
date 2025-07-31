import React from 'react';
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
    <div className="bg-[#F4F4F5] py-12 px-6">
      <p className="font-semibold text-center text-2xl md:text-3xl xl:text-[40px] text-[#192437] mb-8">
        Accreditation & Memberships
      </p>

      <div className="flex flex-wrap w-full max-w-[1800px] mx-auto ">
        {images.map((img, index) => (
          <div
            key={index}
            className="flex-1  flex justify-center items-center py-4"
          >
            <div className=' bg-[#FFFFFF] w-[140px] h-[78px]'>
            <img
              src={img}
              alt="Accreditation Logo"
              className="object-contain p-1.75"
              style={{
                width: '140px',
               
                height: '78px',
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
