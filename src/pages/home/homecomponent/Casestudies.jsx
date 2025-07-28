import React from 'react';
import { projects } from '../../../data/projects.js';

const Casestudies = () => {
  return (
    <section className="w-full px-4 sm:px-8 md:px-12 xl:px-20 2xl:px-40 py-16 mx-auto ">
      <h2 className="xl:text-[40px] text-center font-semibold text-[#192437] mb-12">
        Case Studies
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
        {projects.slice(0, 3).map((project) => (
          <div
            key={project.id}
            className="flex flex-col items-start w-full max-w-[520px] mx-auto"
          >
            <div
              className="w-full h-[220px] sm:h-[240px] md:h-[250px] 2xl:h-[400px] overflow-hidden mb-4 bg-gray-100 flex items-center justify-center border"
              style={{
                borderColor: '#D6D6D6',
                borderWidth: '1px',
              }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-[#192437] font-semibold text-[20px] leading-[100%] font-['Open_Sans'] mb-2 text-left w-full">
              {project.name || 'Lorem Ipsum Title here'}
            </h3>
            <a
              href={`/projects/${project.id}`}
              className="text-[#03837E] font-medium text-[18px] leading-[100%] underline underline-offset-2 font-['Open_Sans'] hover:text-[#02635f] cursor-pointer text-left w-full"
            >
              View Details
            </a>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center mt-12">
        <button className="w-[283px] h-[48px] bg-[#03837E]  text-white flex items-center justify-center cursor-pointer  hover:border hover:border-[#03837E]  hover:bg-[#FFFFFF] hover:text-[#03837E] ">
          <span className="text-lg font-medium">
            View All Case Studies
          </span>
        </button>
      </div>
    </section>
  );
};

export default Casestudies;
