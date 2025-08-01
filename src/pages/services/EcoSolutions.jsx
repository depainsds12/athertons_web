import React from "react";
import EcoSolutionsImg from "../../assets/services/eco_solutions.png";

const HexBulletIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 13 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="hexagon bullet icon"
  >
    <path d="M6.5 0.113281L12.1292 3.36328V9.86328L6.5 13.1133L0.870835 9.86328V3.36328L6.5 0.113281Z" fill="#192437" />
  </svg>
);

const ecoSections = [
  {
    title: "Innovative Technologies",
    paragraphs: [
      "Our retrofit projects incorporate state-of-the-art technologies such as Building Information Modeling (BIM) and smart automation systems to optimise energy use and reduce carbon footprints."
    ]
  },
  {
    title: "New Build Projects",
    subbullets: [
      {
        title: "Sustainable Construction",
        description: "From the ground up, our new builds are designed with sustainability in mind. We integrate renewable energy sources like solar panels and geothermal systems to ensure long-term energy savings."
      },
      {
        title: "Advanced Equipment",
        description: "Utilising the latest in construction technology, including 3D printing and robotics, we deliver precision and efficiency in every project."
      }
    ]
  },
  {
    title: "Expertise",
    paragraphs: [
      "With years of experience in the construction industry, our team is equipped with the knowledge and skills to handle complex ecological projects."
    ]
  },
  {
    title: "Innovation",
    paragraphs: [
      "We stay ahead of the curve by continuously adopting the latest technologies and materials to provide the best solutions for our clients."
    ]
  },
  {
    title: "Sustainability",
    paragraphs: [
      "Our commitment to the environment allows us to implement practices that reduce waste, conserve resources, and promote energy efficiency controlled centrally by our Building and Energy Management Systems."
    ]
  }
];

const EcoSolutions = () => (
  <div className="w-full bg-white flex justify-center overflow-x-hidden">
    <div className="w-full">
      <section
        className="relative w-full h-[180px] sm:h-[220px] md:h-[250px] lg:h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${EcoSolutionsImg})` }}
        aria-labelledby="eco-hero-heading"
        role="banner"
      >
        <div className="absolute inset-0 bg-[#192437] opacity-60 z-10" aria-hidden="true" />
        <h1
          id="eco-hero-heading"
          className="relative z-20 text-white text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] font-bold leading-[1] text-center mt-2"
        >
          ECO SOLUTIONS
        </h1>
      </section>

      <section
        className="w-full flex flex-col items-center py-12 px-4 md:px-14 xl:px-20"
        role="region"
        aria-labelledby="eco-main-heading"
      >
        <h2 id="eco-main-heading" className="sr-only">Eco Solutions Main Content</h2>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex justify-center items-start">
            <img
              src={EcoSolutionsImg}
              alt="Illustration showing eco solutions in building projects"
              className="object-cover w-full  h-auto lg:min-h-[450px] xl:min-h-auto"
            />
          </div>
          <div className="flex flex-col justify-start text-[#192437]">
            <p className="mb-6 text-base md:text-[16px] leading-7 md:leading-[28px] font-normal">
              We specialise in delivering cutting-edge ecological solutions for both retrofit and new build projects. Our mission is to create sustainable, energy-efficient buildings that not only meet but exceed modern environmental standards.
            </p>
            <div className="mb-6" role="region" aria-labelledby="our-services-heading">
              <h3
                id="our-services-heading"
                className="font-semibold text-[36px] leading-[100%] text-[#192437] mt-6 mb-7"
                style={{ fontStyle: "SemiBold", letterSpacing: "0%" }}
              >
                Our Services:
              </h3>
              <div className="font-semibold text-[20px] leading-[100%] mb-6 text-[#192437]">
                Retrofit and new build Consultancy
              </div>
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <HexBulletIcon />
                  <h4 className="font-semibold text-[18px] text-[#192437] m-0">Energy-Efficient Materials</h4>
                </div>
                <p className="text-[#192437] text-[15px] md:text-base leading-7 md:leading-[28px] font-normal mt-2">
                  We use the latest in sustainable materials, including advanced insulation and recycled components, to enhance the energy performance of existing structures.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-y-10 mt-14">
          {ecoSections.map((section, idx) => (
            <section key={idx} role="region" aria-labelledby={`section-title-${idx}`}>
              {section.title === "Innovative Technologies" ? (
                <div className="flex items-center gap-2 mb-4">
                  <HexBulletIcon />
                  <h3 id={`section-title-${idx}`} className="font-semibold text-[22px] text-[#192437]">
                    {section.title}
                  </h3>
                </div>
              ) : section.title === "New Build Projects" ? (
                <h3 id={`section-title-${idx}`} className="font-semibold text-[22px] mb-4 text-[#192437]">
                  {section.title}
                </h3>
              ) : (
                <h3 id={`section-title-${idx}`} className="font-semibold text-[22px] mb-2 text-[#192437]">
                  {section.title}
                </h3>
              )}

              {section.paragraphs?.map((para, i) => (
                <p key={i} className="text-[15px] md:text-base leading-7 md:leading-[28px] font-normal text-[#192437] mb-2">
                  {para}
                </p>
              ))}

              {section.subbullets && (
                <div className="mt-6 flex flex-col gap-y-8">
                  {section.subbullets.map((sb, sbi) => (
                    <div key={sbi}>
                      <div className="flex items-center gap-2 mb-2">
                        <HexBulletIcon />
                        <h4 className="font-semibold text-[18px] text-[#192437]">{sb.title}</h4>
                      </div>
                      <p className="text-[#192437] text-[15px] md:text-base leading-7 md:leading-[28px] font-normal">
                        {sb.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default EcoSolutions;
