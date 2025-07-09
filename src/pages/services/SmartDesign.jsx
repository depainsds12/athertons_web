import React from "react";
import bg1 from '../../assets/services/bg1.png';

const SmartDesign = () => {
  return (
    <main className="w-full min-h-screen bg-white flex flex-col font-sans" aria-label="Smart Design Consultancy Main Content">
      {/* Hero Section */}
      <section
        className="relative w-full h-[180px] sm:h-[220px] md:h-[250px] lg:h-[300px] mt-[100px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bg1})` }}
        aria-labelledby="smartdesign-hero-heading"
      >
        <div className="absolute inset-0 bg-[#192437]/60" aria-hidden="true" />
        <h1
          id="smartdesign-hero-heading"
          className="relative z-10 text-white text-3xl md:text-[45px] lg:text-[55px] xl:text-[60px] font-bold tracking-wide text-center"
        >
          CONSULTANCY & SMART DESIGN
        </h1>
      </section>

      {/* Two-column Content Section */}
      <section className="w-full flex justify-center py-12 px-4 md:px-14 xl:px-20 bg-white" aria-labelledby="smartdesign-content-heading">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Image */}
          <div className="flex justify-center items-start" role="img" aria-label="Smart Design Illustration">
            <img
              src={bg1}
              alt="Digital cityscape representing smart design and consultancy services"
              className="object-cover"
              style={{ width: '559px', height: '383px', opacity: 1, transform: 'rotate(0deg)', maxWidth: '100%', maxHeight: '100%' }}
            />
          </div>
          {/* Right Content */}
          <div className="flex flex-col justify-start text-[#192437] lg:mt-12">
            <h2 id="smartdesign-content-heading" className="sr-only">Smart Design Consultancy Details</h2>
            <p
              className="font-normal text-base md:text-[16px] leading-7 md:leading-[28px] tracking-normal mb-6"
              style={{ fontFamily: 'Poppins', fontWeight: 400, fontStyle: 'normal', fontSize: '16px', lineHeight: '28px', letterSpacing: '0%' }}
            >
              ATHERTONS is a highly experienced Mechanical, Electrical,  HVAC, Fire Protection, Refrigeration.
              <br /><br />
              Through our team of mechanical, electrical, plumbing, HVAC, and fire protection engineers, we ensure that your projects are not only cost-effective but also adaptable, trustworthy, and sustainable. Leveraging our expertise in building regulations, we are equipped to guide you in the creation of efficient and effective system designs. We can create Smart Ports, Smart Cities, Data Centres, Smart Factories, Smart Office Blocks and more, all with high-tech centralised solutions as well as energy efficient options.
            </p>
          </div>
        </div>
      </section>
      {/* Below image and text: last two paragraphs */}
      <section className="w-full flex justify-center px-4 md:px-14 xl:px-20 bg-white" aria-label="Smart Design Engineering Expertise">
        <div className="max-w-6xl w-full">
          <p
            className="font-normal text-base md:text-[16px] leading-7 md:leading-[28px] tracking-normal mb-6 text-[#192437]"
            style={{ fontFamily: 'Poppins', fontWeight: 400, fontStyle: 'normal', fontSize: '16px', lineHeight: '28px', letterSpacing: '0%' }}
          >
            All our skilled engineers are highly trained and we have extensive expertise in both mechanical and electrical engineering. By having expertise in both disciplines, we understand the complexities of how they impact one another and how they need to best integrate with the other specialisms required on any project. We have extensive experience on more complex projects and offer many decades of experience in delivering solutions.
          </p>
          <p
            className="font-normal text-base md:text-[16px] leading-7 md:leading-[28px] tracking-normal mb-6 text-[#192437]"
            style={{ fontFamily: 'Poppins', fontWeight: 400, fontStyle: 'normal', fontSize: '16px', lineHeight: '28px', letterSpacing: '0%' }}
          >
            Our professional consulting and engineering expertise is dedicated to enhancing environments and facilities for optimal productivity and well-being. With extensive experience across multiple industry sectors, our commissioning team delivers reliable tailored solutions for your projects, optimising performance and compliance.
          </p>
        </div>
      </section>
    </main>
  );
};

export default SmartDesign; 