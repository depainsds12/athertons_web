import React from "react";
import aboutusbg2 from "../../assets/aboutusbg2.jpg";
import gasSafe from "../../assets/aboutus/gasSafe.png";
import chasLogo from "../../assets/aboutus/chasLogo.png";
import BESAlogo from "../../assets/aboutus/BESAlogo.png";
import trustmarkLogo from "../../assets/aboutus/trustmarkLogo.png";
import constructionlineLogo from "../../assets/aboutus/constructionlineLogo.png";
import creditsafeLogo from "../../assets/aboutus/creditsafeLogo.png";
import officeForZeroEmissionVehicle from "../../assets/aboutus/officeForZeroEmissionVehicle.png";

const AccreditationMembership = () => {
  return (
    <section
      className="w-full min-h-screen bg-white flex flex-col"
      aria-labelledby="accreditation-heading"
    >
      {/* Background Header with Decorative Image */}
      <div
        className="relative w-full h-[180px] sm:h-[220px] md:h-[250px] lg:h-[300px] mt-[100px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutusbg2})` }}
        role="presentation"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[#192437]/60" aria-hidden="true" />
        <h2
          id="accreditation-heading"
          className="relative z-10 text-white text-3xl md:text-[45px] lg:text-[55px] xl:text-[60px] font-bold tracking-wide text-center"
        >
          ACCREDITATION & MEMBERSHIPS
        </h2>
      </div>

      {/* Logos section */}
      <div className="w-full flex flex-col items-center justify-center py-10 px-4">
        {/* First group of accreditation logos */}
        <div
          className="flex flex-wrap justify-evenly w-full max-w-[1450px] mb-6"
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
          className="flex flex-wrap justify-evenly w-[75%] max-w-[1150px]"
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
