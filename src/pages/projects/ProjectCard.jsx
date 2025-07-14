import React from "react";

export default function ProjectCard({ name, image, onClick }) {
  return (
    <div
      onClick={onClick}
      className="w-[360px] bg-white border border-[#D6D6D6] cursor-pointer flex flex-col items-center relative pb-[16px] group"
    >
      <img
        src={image}
        alt={name}
        className="w-[328px] h-[248px] object-cover border border-[#D6D6D6]  mt-4"
      />

      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2 bg-white border border-[#D6D6D6] w-[243px] h-[74px] flex items-center justify-center">
        <p className="text-base font-medium text-black leading-tight text-center w-full group-hover:text-[#03837E] transition-colors duration-300">
          {name}
        </p>
      </div>
    </div>
  );
}
