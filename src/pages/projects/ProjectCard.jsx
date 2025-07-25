import React from "react";

export default function ProjectCard({ name, image, onClick }) {
  return (
    <div
      onClick={onClick}
      className="w-full max-w-[360px] bg-white border border-[#D6D6D6] cursor-pointer flex flex-col items-center relative pb-4 group transition-all duration-300"
    >
      <img
        src={image}
        alt={name}
        className="w-[90%] sm:w-[90%] md:w-[90%] h-[200px] sm:h-[180px] md:h-[220px] lg:h-[248px] object-cover border border-[#D6D6D6] mt-4"
      />

      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2 bg-white border border-[#D6D6D6] w-[80%] h-[60px] flex items-center justify-center">
        <p className="text-base font-medium text-black leading-tight text-center w-full group-hover:text-[#03837E] transition-colors duration-300">
          {name}
        </p>
      </div>
    </div>
  );
}
