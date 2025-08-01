import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { serviceData } from "../../data/serviceData";

const HexIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block mr-2 align-middle"
    aria-hidden="true"
  >
    <path
      d="M6.5 0L12.1292 3.25V9.75L6.5 13L0.870835 9.75V3.25L6.5 0Z"
      fill="currentColor"
    />
  </svg>
);

const ServicePage = () => {
  const { serviceName } = useParams();
  const [service, setService] = useState(serviceData[serviceName]);

  useEffect(() => {
    setService(serviceData[serviceName]);
  }, [serviceName]);

  if (!service) {
    return (
      <div className="text-center mt-20" role="alert" aria-live="polite">
        Service not found.
      </div>
    );
  }

  const rightSections = service.upperBlockSections || [];
  const belowSections = service.bottomBlockSections || [];

  return (
    <main
      className="w-full min-h-screen bg-white flex flex-col font-poppins"
      role="main"
      aria-label="Service Details"
    >
      <section
        className="relative w-full min-h-[200px] aspect-[1366/300] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${service.heroImage})` }}
        role="banner"
        aria-label={`${service.heading} Hero`}
      >
        <div className="absolute inset-0 bg-[#192437]/60" aria-hidden="true" />
        <h1 className="relative z-10 text-white text-3xl md:text-[45px] lg:text-[55px] xl:text-[60px] font-bold tracking-wide text-center">
          {service.heading}
        </h1>
      </section>

      <section
        className="w-full max-w-[1600px] mx-auto flex flex-col py-14 px-4 md:px-14 xl:px-20"
        aria-label="Service Content"
      >
        <div className="w-full flex flex-col gap-10 lg:flex-row lg:items-start 2xl:items-center">
          <div className="flex justify-center items-start lg:w-1/2 w-full">
            <img
              src={service.image}
              alt={`${service.heading} illustration`}
              className="object-cover w-full h-auto"
            />
          </div>

          <div className="flex flex-col lg:w-1/2 w-full space-y-8 h-full">
            {rightSections.map((section, idx) => (
              <section
                key={idx}
                role="region"
                aria-labelledby={`right-section-${idx}`}
              >
                {section.title && (
                  <h2
                    id={`right-section-${idx}`}
                    className="text-lg font-semibold flex items-center"
                  >
                    <HexIcon />
                    {section.title}
                  </h2>
                )}
                {section.paragraphs &&
                  section.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className={`${i > 0 ? "mt-4" : ""} text-base leading-7 md:leading-[28px]`}
                    >
                      {p}
                    </p>
                  ))}
              </section>
            ))}
          </div>
        </div>

        <div className="flex flex-col w-full mt-10 space-y-10">
          {belowSections.map((section, idx) => (
            <section
              key={idx}
              role="region"
              aria-labelledby={`below-section-${idx}`}
            >
              {section.title && (
                <h3
                  id={`below-section-${idx}`}
                  className="text-lg font-semibold flex items-center"
                >
                  <HexIcon />
                  {section.title}
                </h3>
              )}
              {section.paragraphs &&
                section.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className={`${i > 0 ? "mt-4" : ""} text-base leading-7 md:leading-[28px]`}
                  >
                    {p}
                  </p>
                ))}
            </section>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ServicePage;
