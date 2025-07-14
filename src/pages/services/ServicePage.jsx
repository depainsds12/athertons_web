// src/pages/ServicePage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import bg1 from "../.././assets/services/bg1.png";
import ME_Enginner from "../.././assets/services/me_engineering.png";
import BmsEmsTechnologyImg from "../../assets/services/bms_ems_technology.png";
import EcoSolutionsImg from "../../assets/services/eco_solutions.png";
import LightCivilEngineeringImg from "../../assets/services/light_civil_engineering.png";

const HexIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-2 align-middle">
    <path d="M6.5 0L12.1292 3.25V9.75L6.5 13L0.870835 9.75V3.25L6.5 0Z" fill="#192437"/>
  </svg>
);

const serviceData = {
  consultancy_smartdesign: {
    heading: "CONSULTANCY & SMART DESIGN",
    heroImage: bg1,
    image: bg1,
    sections: [
      {
        paragraphs: [
          `ATHERTONS is a highly experienced Mechanical, Electrical,  HVAC, Fire Protection, Refrigeration`,
          `Through our team of mechanical, electrical, plumbing, HVAC, and fire protection engineers, we ensure that your projects are not only cost-effective but also adaptable, trustworthy, and sustainable. Leveraging our expertise in building regulations, we are equipped to guide you in the creation of efficient and effective system designs. We can create Smart Ports, Smart Cities, Data Centres, Smart Factories, Smart Office Blocks and more, all with high-tech centralised solutions as well as energy efficient options.`,
        ],
      },
      {
        paragraphs: [
          `All our skilled engineers are highly trained and we have extensive expertise in both mechanical and electrical engineering. By having expertise in both disciplines, we understand the complexities of how they impact one another and how they need to best integrate with the other specialisms required on any project. We have extensive experience on more complex projects and offer many decades of experience in delivering solutions.`,
          `Our professional consulting and engineering expertise is dedicated to enhancing environments and facilities for optimal productivity and well-being. With extensive experience across multiple industry sectors, our commissioning team delivers reliable tailored solutions for your projects, optimising performance and compliance.`,
        ],
      },
    ],
  },
  me_engineering: {
    heading: "M&E Engineering",
    heroImage: ME_Enginner,
    image: ME_Enginner,
    sections: [
      {
        paragraphs: [
          `Athertons is a highly experienced Mechanical, Electrical,  HVAC, Fire Protection, Refrigeration Engineering.`,
          `All our skilled engineers are highly trained and we have extensive expertise in both mechanical and electrical engineering. By having expertise in both disciplines, we understand the complexities of how they impact one another and how they need to best integrate with the other specialisms required on any project. We have extensive experience on more complex projects and offer many decades of experience in delivering solutions.`,
          `Our professional consulting and engineering expertise is dedicated to enhancing environments and facilities for optimal productivity and well-being. With extensive experience across multiple industry sectors, our commissioning team delivers reliable tailored solutions for your projects, optimising performance and compliance.`,
        ],
      },
      {
        paragraphs: [
          `Through our team of mechanical, electrical, plumbing, HVAC, and fire protection engineers, we ensure that your projects are not only cost-effective but also adaptable, trustworthy, and sustainable. Leveraging our expertise in building regulations, we are equipped to guide you in the creation of efficient and effective system designs.`,
          `Regular maintenance of heating, ventilation, and air conditioning systems not only assists in preventing breakdowns in business-critical environments but also helps to improve energy efficiency and enhance system optimisation for improved performance.  This results in reduced running costs, greater energy efficiency, and a potentially longer life of the units.`,
          `Heat, Ventilation, and Air Conditioning (HVAC) systems primarily regulate temperature, humidity, and air purity inside a building for a comfortable ambiance.`,
          `HVAC systems comprise a critical component of any commercial infrastructure such as hotels, offices, schools, hospitals, restaurants, and even industrial buildings. All these premises necessitate efficient HVAC systems for ambient comfort. The HVAC systems installed by us can be aligned with solar energy, heat pumps, smart thermostats, building management systems, and even ice-powered AC for reducing energy consumption and minimising environmental impact.`,
          `We can further enhance this with cutting-edge, unseen or flushed AC units and diverse heating devices which can either be discretely integrated or form an element of the design.`,
          `At Athertons, our skilled team, boasting over 40 years of industry experience, has been offering quality HVAC products and services to commercial businesses and industrial installations.`,
        ],
      },
    ],
  },
  bms_ems_technology: {
    heading: "BMS & EMS TECHNOLOGY",
    heroImage: BmsEmsTechnologyImg,
    image: BmsEmsTechnologyImg,
    sections: [
      {
        title: " Quality Assurance",
        paragraphs: [
          "Our Building Management Systems (BMS) and Energy Management Systems (EMS) offer seamless integration of mechanical and electrical systems. Designed to optimise performance and efficiency, our solutions ensure that all building systems work harmoniously to provide a comfortable and productive environment."
        ]
      },
      {
        title: "HVAC Efficiency",
        paragraphs: [
          "Our advanced BMS and EMS solutions include state-of-the-art HVAC (Heating, Ventilation, and Air Conditioning) management. By utilising real-time data and predictive analytics, we ensure optimal indoor climate control while maximising energy efficiency and reducing operational costs."
        ]
      },
      {
        title: "Energy Efficiency and Renewable Integration",
        paragraphs: [
          "We are committed to driving energy efficiency and sustainability. Our systems integrate renewable energy sources such as solar panels and heat pumps, ensuring that your building operates with minimal environmental impact. Our energy management solutions help you monitor and control energy usage, leading to significant cost savings and a reduced carbon footprint. The latest technologies can be harnessed and integrated."
        ]
      },
      {
        title: "Security and Lighting Control",
        paragraphs: [
          "Our BMS and EMS solutions include comprehensive security and lighting control systems. From advanced access control to intelligent lighting management, we provide a secure and well-lit, energy efficient environment. Our systems are designed to enhance onsite safety and security while optimising energy usage."
        ]
      },
      {
        title: "AI and ML Driven Technology",
        paragraphs: [
          "Harnessing the power of Artificial Intelligence (AI) and Machine Learning (ML) with our advanced BMS and EMS solutions, our systems use AI and ML algorithms to predict maintenance needs, optimise energy consumption, and improve overall system performance. This cutting-edge technology ensures that your building operates at peak efficiency with minimal downtime."
        ]
      },
      {
        title: "Centralised Control and Monitoring",
        paragraphs: [
          "Our centralised control and monitoring systems provide a single interface for managing all building systems. This allows for easy oversight and management of mechanical and electrical, HVAC, energy, security, lighting, and access control systems. Our user-friendly interface ensures that you have complete control and visibility over your building’s operations."
        ]
      },
      {
        title: "Customized Solutions",
        paragraphs: [
          "We understand that every project is unique and so our team of experts works closely with you to design and implement customised BMS and EMS solutions that meet your specific needs. Whether you are looking to enhance energy efficiency, improve security, or integrate advanced technologies, we have the expertise to deliver tailored solutions that achieve your goals."
        ]
      },
    ],
  },
  eco_solutions: {
    heading: "ECO SOLUTIONS",
    heroImage: EcoSolutionsImg,
    image: EcoSolutionsImg,
    sections: [
      {
        intro: "We specialise in delivering cutting-edge ecological solutions for both retrofit and new build projects. Our mission is to create sustainable, energy-efficient buildings that not only meet but exceed modern environmental standards.",
        services: {
          title: "Our Services:",
          subheading: "Retrofit and new build Consultancy",
          bullets: [
            {
              title: "Energy-Efficient Materials",
              description: "We use the latest in sustainable materials, including advanced insulation and recycled components, to enhance the energy performance of existing structures."
            }
          ]
        }
      },
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
      },
    ],
  },
  light_civil_engineering: {
    heading: "LIGHT CIVIL ENGINEERING",
    heroImage: LightCivilEngineeringImg,
    image: LightCivilEngineeringImg,
    sections: [
      {
        paragraphs: [
          "We excel in providing comprehensive light civil engineering services. Our expertise spans a wide range of projects, from building works and groundworks to advanced mechanical and electrical installations. We are committed to delivering high-quality, sustainable solutions tailored to meet the unique needs of each client."
        ]
      },
      {
        title: "Construction",
        paragraphs: [
          "We undertake various building projects, ensuring precision and quality in every aspect."
        ]
      },
      {
        title: "Groundworks",
        paragraphs: [
          "Our team handles all groundwork requirements, including excavation, foundation laying, and drainage systems."
        ]
      },
      {
        title: "Kerbing",
        paragraphs: [
          "We provide professional kerbing services to enhance the functionality and aesthetics of your project. Ground Landscape Design: Our experts design and implement ground landscapes that are both beautiful and sustainable."
        ]
      },
      {
        title: "Mechanical & Electrical (M&E) Services",
        paragraphs: [
          "We install and maintain state-of-the-art refrigeration and HVAC systems to ensure optimal climate control."
        ]
      },
      {
        title: "WiFi Cabling and Data Networks",
        paragraphs: [
          "Our team sets up robust data networks and WiFi cabling to keep your buildings connected and efficient."
        ]
      },
      {
        title: "Infrastructure Projects",
        paragraphs: [
          "We have extensive experience in constructing and maintaining bridges and service stations, ensuring safety and durability."
        ]
      },
      {
        title: "Bridges and Service Stations",
        paragraphs: [
          "We have extensive experience in constructing and maintaining bridges and service stations, ensuring safety and durability."
        ]
      },
      {
        title: "Ports and Airports",
        paragraphs: [
          "Our services extend to the development and enhancement of ports and airports, supporting critical infrastructure needs."
        ]
      },
    ],
  },
};



const ServicePage = () => {
  const { serviceName } = useParams();
  const service = serviceData[serviceName];

  if (!service) {
    return <div className="text-center mt-20" role="alert" aria-live="polite">Service not found.</div>;
  }

  return (
    <main className="w-full min-h-screen bg-white flex flex-col font-sans" role="main" aria-label="Service Details">
      {/* Hero Section */}
      <section
        className="relative w-full h-[180px] sm:h-[220px] md:h-[250px] lg:h-[300px] mt-[100px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${service.heroImage})` }}
        role="banner"
        aria-label={`${service.heading} Hero`}
      >
        <div className="absolute inset-0 bg-[#192437]/60" aria-hidden="true" />
        <h1 className="relative z-10 text-white text-3xl md:text-[45px] lg:text-[55px] xl:text-[60px] font-bold tracking-wide text-center">
          {service.heading}
        </h1>
      </section>

      {/* Content Section */}
      <section className="w-full flex justify-center py-12 px-4 md:px-14 xl:px-20 bg-white" aria-label="Service Content">
        <div className="max-w-6xl w-full flex flex-col gap-10 items-start">
          {/* Top section: image left, first section text right (side-by-side on md+) */}
          <div className="w-full flex flex-col md:flex-row gap-10 items-start">
            {/* Left Image */}
            <div className="flex justify-center items-start md:w-1/2 w-full">
              <img
                src={service.image}
                alt={
                  serviceName === 'consultancy_smartdesign' ? 'Consultancy & Smart Design illustration' :
                  serviceName === 'bms_ems_technology' ? 'BMS & EMS Technology illustration' :
                  serviceName === 'me_engineering' ? 'M&E Engineering illustration' :
                  serviceName === 'eco_solutions' ? 'Eco Solutions illustration' :
                  serviceName === 'light_civil_engineering' ? 'Light Civil Engineering illustration' :
                  'Service illustration'
                }
                className={
                  `object-cover max-w-full max-h-full ` +
                  (serviceName === 'consultancy_smartdesign' ? 'xl:w-[559px] xl:h-[383px]' :
                  serviceName === 'bms_ems_technology' ? 'xl:w-[629px] xl:h-[431px]' :
                  serviceName === 'me_engineering' ? 'xl:w-[629px] xl:h-[477px]' :
                  serviceName === 'eco_solutions' ? 'xl:w-[629px] xl:h-[431px]' :
                  serviceName === 'light_civil_engineering' ? 'xl:w-[629px] xl:h-[431px]' :
                  '')
                }
                style={{
                  ...(serviceName === 'consultancy_smartdesign' && { opacity: 1, top: '523px', left: '98px', transform: 'rotate(0deg)' }),
                  ...(serviceName === 'bms_ems_technology' && { opacity: 1, top: '523px', left: '101px', transform: 'rotate(0deg)' }),
                  ...(serviceName === 'me_engineering' && { opacity: 1, top: '523px', left: '101px', transform: 'rotate(0deg)' }),
                  ...(serviceName === 'eco_solutions' && { opacity: 1, top: '531px', left: '98px', transform: 'rotate(0deg)' }),
                  ...(serviceName === 'light_civil_engineering' && { opacity: 1, top: '531px', left: '98px', transform: 'rotate(0deg)' }),
                }}
              />
            </div>
            {/* First Section Text (right of image on md+) */}
            <div className="flex flex-col text-[#192437] lg:mt-12 md:w-1/2 w-full">
              {serviceName === 'eco_solutions' ? (
                <>
                  {/* Intro paragraph */}
                  <p className="mb-4 text-base md:text-[16px] leading-7 md:leading-[28px] font-normal">
                    {service.sections[0].intro}
                  </p>
                  {/* Our Services */}
                  <section className="mb-4" aria-label="Eco Solutions Services">
                    <h2 className="font-semibold text-[36px] leading-[100%] mb-2 text-[#192437]">{service.sections[0].services.title}</h2>
                    <div className="font-semibold text-[24px] leading-[100%] mb-1 text-[#192437]">{service.sections[0].services.subheading}</div>
                    <ul className="ml-2 list-none" aria-label="Service Bullets">
                      {service.sections[0].services.bullets.map((b, i) => (
                        <li key={i} className="flex items-start mb-1">
                          <HexBulletIcon />
                          <div>
                            <span className="font-semibold text-[20px] leading-[100%] text-[#192437]">{b.title}</span>
                            <span className="font-normal ml-1 inline text-[#192437]">{b.description}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </section>
                </>
              ) : serviceName === 'bms_ems_technology' ? (
                <>
                  {[0,1].map(idx => (
                    <section key={idx} className="mb-6" aria-label={service.sections[idx].title?.trim() || `Section ${idx+1}`}>
                      <h2 className="font-semibold text-base md:text-lg mb-1 flex items-center"><HexIcon />{service.sections[idx].title.trim()}</h2>
                      {service.sections[idx].paragraphs && service.sections[idx].paragraphs.map((para, i) => (
                        <p key={i} className="text-[15px] md:text-base leading-7 md:leading-[28px] font-normal">{para}</p>
                      ))}
                    </section>
                  ))}
                </>
              ) : (
                service.sections && service.sections[0] && (
                  <section className="mb-8" aria-label="Introduction">
                    {serviceName === 'light_civil_engineering' ? (
                      <>
                        {/* Intro paragraph */}
                        {service.sections[0].paragraphs && service.sections[0].paragraphs.map((para, i) => (
                          <p key={i} className="mb-4 text-base md:text-[16px] leading-7 md:leading-[28px] font-normal">{para}</p>
                        ))}
                        {/* Construction and Groundworks */}
                        {[1,2].map(idx => (
                          <section key={idx} className="mb-6" aria-label={service.sections[idx].title?.trim() || `Section ${idx+1}`}>
                            <h2 className="text-lg font-semibold mb-2 flex items-center"><HexIcon />{service.sections[idx].title?.trim?.() || ''}</h2>
                            {service.sections[idx].paragraphs && service.sections[idx].paragraphs.map((para, i) => (
                              <p key={i} className="mb-4 text-base md:text-[16px] leading-7 md:leading-[28px] font-normal">{para}</p>
                            ))}
                          </section>
                        ))}
                      </>
                    ) : (
                      service.sections[0].title && (
                        <h2 className="text-lg font-semibold mb-2">{service.sections[0].title}</h2>
                      )
                    )}
                    {serviceName !== 'light_civil_engineering' && service.sections[0].paragraphs && service.sections[0].paragraphs.map((para, i) => (
                      <p
                        key={i}
                        className="mb-4 text-base md:text-[16px] leading-7 md:leading-[28px] font-normal"
                      >
                        {para}
                      </p>
                    ))}
                  </section>
                )
              )}
            </div>
          </div>
          {/* Remaining Sections: always below image */}
          <div className="flex flex-col text-[#192437] lg:mt-12 w-full">
            {serviceName === 'eco_solutions' ? (
              service.sections.slice(1).map((section, idx) => (
                <section key={idx} className="mb-8" aria-label={section.title || `Section ${idx+2}`}>
                  <h3 className="font-semibold text-[24px] leading-[100%] mb-1 text-[#192437]">
                    {section.title}
                  </h3>
                  {section.paragraphs && section.paragraphs.map((para, i) => (
                    <p key={i} className="text-[15px] md:text-base leading-7 md:leading-[28px] font-normal text-[#192437]">{para}</p>
                  ))}
                  {section.subbullets && (
                    <ul className="ml-4 mt-2 list-none" aria-label="Sub Bullets">
                      {section.subbullets.map((sb, sbi) => (
                        <li key={sbi} className="flex items-start mb-2">
                          <HexBulletIcon />
                          <div>
                            <span className="font-semibold text-[20px] leading-[100%] text-[#192437]">{sb.title}</span>
                            <span className="font-normal ml-1 inline text-[#192437]">{sb.description}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))
            ) : serviceName === 'bms_ems_technology' ? (
              service.sections.slice(2).map((section, idx) => (
                <section key={idx} className="mb-8" aria-label={section.title?.trim() || `Section ${idx+3}`}>
                  <h3 className="font-semibold text-base md:text-lg mb-1 flex items-center"><HexIcon />{section.title.trim()}</h3>
                  {section.paragraphs && section.paragraphs.map((para, i) => (
                    <p key={i} className="text-[15px] md:text-base leading-7 md:leading-[28px] font-normal">{para}</p>
                  ))}
                </section>
              ))
            ) : (
              service.sections && service.sections.slice(1).map((section, idx) => (
                <section key={idx} className="mb-8" aria-label={section.title || `Section ${idx+2}`}>
                  {serviceName === 'light_civil_engineering' ? (
                    section.title && (
                      <h3 className="text-lg font-semibold mb-2 flex items-center"><HexIcon />{section.title.trim()}</h3>
                    )
                  ) : (
                    section.title && (
                      <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
                    )
                  )}
                  {section.paragraphs && section.paragraphs.map((para, i) => (
                    <p
                      key={i}
                      className="mb-4 text-base md:text-[16px] leading-7 md:leading-[28px] font-normal"
                    >
                      {para}
                    </p>
                  ))}
                </section>
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicePage;
