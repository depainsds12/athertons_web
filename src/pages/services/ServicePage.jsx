// src/pages/ServicePage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import bg1 from "../.././assets/services/bg1.png";
import ME_Enginner from "../.././assets/services/me_engineering.png";

const serviceData = {
  consultancy_smartdesign: {
    heading: "CONSULTANCY & SMART DESIGN",
    heroImage: bg1,
    image: bg1,
    paragraphs: [
      `ATHERTONS is a highly experienced Mechanical, Electrical,  HVAC, Fire Protection, Refrigeration`,
      `Through our team of mechanical, electrical, plumbing, HVAC, and fire protection engineers, we ensure that your projects are not only cost-effective but also adaptable, trustworthy, and sustainable. Leveraging our expertise in building regulations, we are equipped to guide you in the creation of efficient and effective system designs. We can create Smart Ports, Smart Cities, Data Centres, Smart Factories, Smart Office Blocks and more, all with high-tech centralised solutions as well as energy efficient options.`,
    ],
    finalParagraphs: [
      `All our skilled engineers are highly trained and we have extensive expertise in both mechanical and electrical engineering. By having expertise in both disciplines, we understand the complexities of how they impact one another and how they need to best integrate with the other specialisms required on any project. We have extensive experience on more complex projects and offer many decades of experience in delivering solutions.`,
      `Our professional consulting and engineering expertise is dedicated to enhancing environments and facilities for optimal productivity and well-being. With extensive experience across multiple industry sectors, our commissioning team delivers reliable tailored solutions for your projects, optimising performance and compliance.`,
    ],
    // list: {
    //   title: "Our Key Capabilities:",
    //   items: [
    //     "Smart Ports",
    //     "Smart Cities",
    //     "Data Centres",
    //     "Smart Factories",
    //     "Smart Office Blocks",
    //   ],
    // },
  },

  me_engineering: {
    heading: "M&E Engineering",
    heroImage: ME_Enginner,
    image: ME_Enginner,
    paragraphs: [
      `Athertons is a highly experienced Mechanical, Electrical,  HVAC, Fire Protection, Refrigeration Engineering.`,
      `All our skilled engineers are highly trained and we have extensive expertise in both mechanical and electrical engineering. By having expertise in both disciplines, we understand the complexities of how they impact one another and how they need to best integrate with the other specialisms required on any project. We have extensive experience on more complex projects and offer many decades of experience in delivering solutions.`,
      `Our professional consulting and engineering expertise is dedicated to enhancing environments and facilities for optimal productivity and well-being. With extensive experience across multiple industry sectors, our commissioning team delivers reliable tailored solutions for your projects, optimising performance and compliance.`,
    ],
    finalParagraphs: [
      `Through our team of mechanical, electrical, plumbing, HVAC, and fire protection engineers, we ensure that your projects are not only cost-effective but also adaptable, trustworthy, and sustainable. Leveraging our expertise in building regulations, we are equipped to guide you in the creation of efficient and effective system designs.`,
      `Regular maintenance of heating, ventilation, and air conditioning systems not only assists in preventing breakdowns in business-critical environments but also helps to improve energy efficiency and enhance system optimisation for improved performance.  This results in reduced running costs, greater energy efficiency, and a potentially longer life of the units.`,
      `Heat, Ventilation, and Air Conditioning (HVAC) systems primarily regulate temperature, humidity, and air purity inside a building for a comfortable ambiance.`,
      `HVAC systems comprise a critical component of any commercial infrastructure such as hotels, offices, schools, hospitals, restaurants, and even industrial buildings. All these premises necessitate efficient HVAC systems for ambient comfort. The HVAC systems installed by us can be aligned with solar energy, heat pumps, smart thermostats, building management systems, and even ice-powered AC for reducing energy consumption and minimising environmental impact.`,
      `We can further enhance this with cutting-edge, unseen or flushed AC units and diverse heating devices which can either be discretely integrated or form an element of the design.`,
      `At Athertons, our skilled team, boasting over 40 years of industry experience, has been offering quality HVAC products and services to commercial businesses and industrial installations.`,
    ],
    // list: {
    //   title: "Our Key Capabilities:",
    //   items: [
    //     "Smart Ports",
    //     "Smart Cities",
    //     "Data Centres",
    //     "Smart Factories",
    //     "Smart Office Blocks",
    //   ],
    // },
  },
};

const ServicePage = () => {
  const { serviceName } = useParams();
  const service = serviceData[serviceName];

  if (!service) {
    return <div className="text-center mt-20">Service not found.</div>;
  }

  return (
    <main className="w-full min-h-screen bg-white flex flex-col font-sans">
      {/* Hero Section */}
      <section
        className="relative w-full h-[180px] sm:h-[220px] md:h-[250px] lg:h-[300px] mt-[100px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${service.heroImage})` }}
      >
        <div className="absolute inset-0 bg-[#192437]/60" />
        <h1 className="relative z-10 text-white text-3xl md:text-[45px] lg:text-[55px] xl:text-[60px] font-bold tracking-wide text-center">
          {service.heading}
        </h1>
      </section>

      {/* Content Section */}
      <section className="w-full flex justify-center py-12 px-4 md:px-14 xl:px-20 bg-white">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Image */}

          <div className="flex justify-center items-start">
            <img
              src={service.image}
              alt="Service illustration"
              className="object-cover max-w-full max-h-full"
              style={{ width: "629px", height: "531px" }}
            />
          </div>
          {/* Right Content */}
          <div className="flex flex-col text-[#192437] lg:mt-12">
            {service.paragraphs.map((para, i) => (
              <p
                key={i}
                className="mb-6 text-base md:text-[16px] leading-7 md:leading-[28px] font-normal"
              >
                {para}
              </p>
            ))}

            {/* Optional List */}
            {service.list && (
              <>
                <h3 className="text-lg font-semibold mt-4 mb-2">
                  {service.list.title}
                </h3>
                <ul className="list-disc list-inside">
                  {service.list.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Final Paragraphs */}
      <section className="w-full flex justify-center px-4 md:px-14 xl:px-20 bg-white">
        <div className="max-w-6xl w-full">
          {service.finalParagraphs.map((para, i) => (
            <p
              key={i}
              className="mb-6 text-base md:text-[16px] leading-7 md:leading-[28px] text-[#192437]"
            >
              {para}
            </p>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ServicePage;
