import React from 'react';
import { projects } from '../../data/projects';

const CaseStudyList = () => {
  return (
    <div>
      <section
        className="w-full min-h-screen bg-white flex flex-col font-Poppins"
        aria-labelledby="careers-heading"
      >
        {/* Banner */}
        <div
          className="relative w-full h-[180px] sm:h-[220px] md:h-[250px] lg:h-[300px] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(/CaseStudyListbg.jpg)` }}
          role="presentation"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[#192437]/60" aria-hidden="true" />
          <h2
            id="careers-heading"
            className="relative z-10 text-white text-3xl md:text-[45px] lg:text-[55px] xl:text-[60px] font-bold tracking-wide text-center"
          >
            CASE STUDIES
          </h2>
        </div>

       {/* Case Studies Flex Layout */}
<div className="w-full  mx-auto flex flex-wrap justify-center gap-y-12 py-12 px-4">
  {projects.slice(0, 12).map((project, idx) => (
    <div
      key={project.id}
      className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 flex justify-center"
    >
      <div className="flex flex-col items-start ">
        <div
          className="
            aspect-[1.32]
            max-w-[330px]
            sm:w-[250px] sm:h-[190px]
            md:w-[280px] md:h-[210px]
            lg:w-[300px] lg:h-[226px]
            xl:w-[330px] xl:h-[250px]
            overflow-hidden mb-4 bg-gray-100 flex items-center justify-center border
          "
          style={{
            borderColor: '#D6D6D6',
            borderWidth: '1px',
          }}
        >
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div className="text-[#192437] font-semibold text-[20px] leading-[100%] font-['Open_Sans'] mb-2 text-left w-full">
          {project.name || 'Lorem Ipsum Title here'}
        </div>
        <a
          href={`/projects/${project.id}`}
          className="text-[#03837E] font-medium text-[18px] leading-[100%] underline underline-offset-2 font-['Open_Sans'] hover:text-[#02635f] cursor-pointer text-left w-full"
          style={{
            textDecorationStyle: 'solid',
            textDecorationThickness: 0,
          }}
        >
          View Details
        </a>
      </div>
    </div>
  ))}
</div>

      </section>
    </div>
  );
};

export default CaseStudyList;
