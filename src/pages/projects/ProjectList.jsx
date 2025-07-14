import React, { useState } from "react";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import { useNavigate } from "react-router-dom";

const categories = ["All", "Mechanical", "Electrical"];

export default function ProjectList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 pb-12 font-poppins">
      {/* Banner */}
      <div
          className="relative w-full h-[180px] sm:h-[220px] md:h-[250px] lg:h-[300px] mt-[100px] flex items-center justify-center bg-cover bg-center max-w-[1600px] mx-auto"
          style={{ backgroundImage: `url(/project-list.jpg)` }}
          role="presentation"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[#192437]/60" aria-hidden="true" />
          <h2
            id="careers-heading"
            className="relative z-10 text-white text-3xl md:text-[45px] lg:text-[55px] xl:text-[60px] font-semibold tracking-wide text-center"
          >
            PROJECTS
          </h2>
        </div>

      {/* Section Title */}
      <div className="max-w-5xl mx-auto mt-10 text-center">
        <h2 className="text-2xl md:text-[40px] font-bold mb-2">Our Recent Projects</h2>
        <div className="text-[20px] text-[#03837E] mb-6">Awesome Projects</div>
        {/* Category Filters */}
        <div className="flex justify-center gap-5 mb-8">
          {categories.map((cat) => (
            <button
  key={cat}
  className={`transition-all duration-300 border group 
    ${selectedCategory === cat 
      ? "bg-[#03837E] text-white border-[#03837E]" 
      : "bg-white text-black border-[#03837E] hover:bg-[#E0F4F3]"} 
    text-[18px] font-semibold 
    w-[150px] h-[48px] 
    md:w-[150px] md:h-[48px] 
    flex items-center justify-center`}
  onClick={() => setSelectedCategory(cat)}
>
  {cat}
</button>

          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-18 py-4 px-4">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            image={project.image}
            onClick={() => navigate(`/projects/${project.id}`)}
          />
        ))}
      </div>
    </div>
  );
} 