import React from "react";
import { useState, useEffect } from "react";
import aboutusbg2 from "../../assets/aboutusbg2.jpg";
import gasSafe from "../../assets/aboutus/gasSafe.png";
import chasLogo from "../../assets/aboutus/chasLogo.png";
import BESAlogo from "../../assets/aboutus/BESAlogo.png";
import trustmarkLogo from "../../assets/aboutus/trustmarkLogo.png";
import constructionlineLogo from "../../assets/aboutus/constructionlineLogo.png";
import creditsafeLogo from "../../assets/aboutus/creditsafeLogo.png";
import officeForZeroEmissionVehicle from "../../assets/aboutus/officeForZeroEmissionVehicle.png";
import { getAccreditationPage } from "../../api/routes";
import { getAxios } from "../../api/config";

const AccreditationMembership = () => {
  const [apiData, setApiData] = useState({});
  useEffect(() => {
    const fetchAccreditationPageData = async () => {
      try {
        const response = await getAxios().get(getAccreditationPage);
        console.log("data is", response?.data?.data);
        setApiData(response?.data?.data);
      } catch (error) {
        console.error("Failed to fetch Accreditation Page API:", error);
      }
    };

    fetchAccreditationPageData();
  }, []);
  return (
    <section
      className=" bg-white min-h-screen flex flex-col w-full"
      aria-labelledby="accreditation-heading"
    >
      {/* Background Header with Decorative Image */}
      <div
        className="relative w-full min-h-[180px] aspect-[1366/300] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${apiData?.banner_image})` }}
        role="presentation"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[#192437]/60" aria-hidden="true" />
        <h2
          id="accreditation-heading"
          className="relative z-10 text-white   text-[20px] sm:text-[36px] lg:text-[48px] xl:text-[60px]  font-bold tracking-wide text-center"
        >
          {/* ACCREDITATION & MEMBERSHIPS */}
          {apiData?.banner_title}
        </h2>
      </div>

      {/* Logos section */}
      <div className="w-full flex flex-col items-center justify-center py-10 px-0.5">
        {/* First group of accreditation logos */}
        <div
          className="flex flex-wrap justify-evenly w-full  mb-6 mt-2"
          role="group"
          aria-labelledby="group1-label"
        >
          <h3 id="group1-label" className="sr-only">
            Accreditations group 1
          </h3>
          {[
            { src: gasSafe, alt: "Gas Safe Registered" },
            { src: chasLogo, alt: "CHAS Accreditation" },
            { src: BESAlogo, alt: "BESA Membership" },
            { src: trustmarkLogo, alt: "TrustMark Approved" },
          ].map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center w-[80px] h-[70px] sm:w-[100px] sm:h-[85px] lg:h-[70px] lg:w-[220px] xl:w-[265px] xl:h-[78px]"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-16 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Second group of accreditation logos */}
        <div
          className="flex flex-wrap justify-evenly w-[75%]  mt-8 lg:mt-12 mb-4"
          role="group"
          aria-labelledby="group2-label"
        >
          <h3 id="group2-label" className="sr-only">
            Accreditations group 2
          </h3>
          {[
            { src: constructionlineLogo, alt: "Constructionline Member" },
            { src: creditsafeLogo, alt: "Creditsafe Verified" },
            {
              src: officeForZeroEmissionVehicle,
              alt: "Office for Zero Emission Vehicles Certification",
            },
          ].map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center w-[80px] h-[70px] sm:w-[100px] sm:h-[85px] lg:h-[70px] lg:w-[220px] xl:w-[265px] xl:h-[78px]"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccreditationMembership;
