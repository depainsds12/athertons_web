import React, { useState, useEffect } from "react";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import { useNavigate } from "react-router-dom";
import triangleb from '../../assets/triangleb.svg';
import trianglew from '../../assets/trianglew.svg';
import { getProjectList } from "../../api/routes";
import { getAxios } from "../../api/config";
import Popup from "../../components/common/Popup";

const categories = ["All", "Mechanical", "Electrical"];


export default function ProjectList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [projectsData, setProjectsData] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);  
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    company_name: "",
    subject: "",
    message: ""
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.first_name.trim()) errors.first_name = 'First name is required';
    if (!formData.last_name.trim()) errors.last_name = 'Last name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) errors.phone = 'Phone is required';
    if (!formData.company_name.trim()) errors.company_name = 'Company name is required';
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("first_name", formData.first_name);
      formDataToSend.append("last_name", formData.last_name);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("company_name", formData.company_name);
      formDataToSend.append("subject", formData.subject);
      formDataToSend.append("message", formData.message);

      const response = await getAxios().post("/contactus/store", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setShowSuccessPopup(true);
      setFormData({
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        company_name: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAxios().get(getProjectList);
        console.log("data of projects are", response?.data?.data);
        setProjectsData(response.data.data);
      } catch (error) {
        console.error("Failed to fetch Project API:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading projects: {error.message}</div>;
  }

  if (!projectsData) {
    return null;
  }

  const filteredProjects = 
    selectedCategory === "All" 
      ? projectsData.project_data 
      : projectsData.project_data.filter((p) => p.category === selectedCategory);

  return (
    <div className="overflow-x-hidden">
    
      {showSuccessPopup && (
        <Popup
          message="Your details have been submitted successfully. Stay connected!"
          onClose={() => setShowSuccessPopup(false)}
        />
      )}

      <div
        className="relative w-full h-[180px] sm:h-[220px] md:h-[250px] lg:h-[300px] flex items-center justify-center bg-cover bg-center mx-auto"
        style={{ backgroundImage: `url(${projectsData.banner_image})` }} 
        role="presentation"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[#192437]/60" aria-hidden="true" />
        <h2
          id="careers-heading"
          className="relative z-10 text-white text-3xl md:text-[45px] lg:text-[55px] xl:text-[60px] font-semibold tracking-wide text-center"
        >
          {projectsData.banner_title}
        </h2>
      </div>
      
      <div className="w-full mx-auto">
        <div className="w-full mx-auto mt-10 text-center">
          <h2 className="text-2xl md:text-[40px] font-bold mb-2">{projectsData.title_1}</h2>
          <div className="text-[20px] text-semibold text-[#03837E] mb-6">{projectsData.title_2}</div>
        
          <div className="flex justify-center gap-5 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`transition-all duration-300 border group cursor-pointer
                  ${selectedCategory === cat 
                    ? "bg-[#03837E] text-white border-[#03837E]" 
                    : "bg-white text-black border-[#03837E] hover:bg-[#E0F4F3]"} 
                  text-sm sm:text-[18px] font-medium 
                  w-[90px] h-[40px]
                  sm:w-[150px] sm:h-[48px] 
                  flex items-center justify-center`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="w-full mx-auto flex flex-wrap justify-center gap-6 px-4 py-4">
          {filteredProjects.map((project, index) => (
            <div
              key={index} 
              className="flex-grow flex-shrink basis-full sm:basis-[45%] lg:basis-[30%] max-w-full sm:max-w-[45%] lg:max-w-[30%] flex justify-center my-5"
            >
              <ProjectCard
                name={project.project_title} 
                image={project.featured_image}
                onClick={() => navigate(`/projects/${index}`)} 
              />
            </div>
          ))}
        </div>

        {/* Custom Contact Section with Slider and Form (after cards) */}
        <ContactSectionWithSlider 
          onSubmit={handleSubmit}
          formData={formData}
          handleInputChange={handleInputChange}
          formErrors={formErrors}
          isSubmitting={isSubmitting}
        />
      </div>
    </div>
  );
}

function ContactSectionWithSlider({ onSubmit, formData, handleInputChange, formErrors, isSubmitting }) {
  const [imgIdx, setImgIdx] = React.useState(0);

  const sliderImages = [
    projects[4]?.image, 
    projects[1]?.image, 
    projects[2]?.image, 
  ].filter(Boolean);

  const handlePrev = () => setImgIdx((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  const handleNext = () => setImgIdx((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative flex flex-col items-center justify-center bg-[#03837E] w-[90%] mx-auto pb-10 pt-8 mt-50 mb-20 overflow-visible">
      {/* Slider */}
      <div className="relative flex items-center justify-center w-full mb-2" style={{ zIndex: 2, minHeight: '170px' }}>
        <button
          onClick={handlePrev}
          className="absolute left-0 bg-white border border-[#03837E] rounded-full w-[44px] h-[44px] flex items-center justify-center z-10 p-0 ml-4"
          aria-label="Previous image"
          style={{ minWidth: '44px', minHeight: '44px', top: '-52px' }}
        >
          <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'scaleX(-1)' }}>
            <path d="M4.58301 11.0654H17.4163" stroke="#03837E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11 4.64844L17.4167 11.0651L11 17.4818" stroke="#03837E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      
        <div className="flex gap-6 mx-auto">
          {sliderImages.map((img, i) => (
            <img
              key={img}
              src={sliderImages[(imgIdx + i) % sliderImages.length]}
              alt="Project"
              className={`lg:w-[200px] lg:h-[150px] w-[75px] sm:w-[120px] md:w-[150px] xl:w-[313.01px] xl:h-[237.13px] object-cover transform -translate-y-210/100 sm:-translate-y-130/100 md:-translate-y-105/100 lg:-translate-y-75/100 xl:-translate-y-62/100 ${i === 1 ? 'z-10' : 'z-0'}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 bg-white border border-[#03837E] rounded-full w-[44px] h-[44px] flex items-center justify-center z-10 p-0 mr-4"
          aria-label="Next image"
          style={{ minWidth: '44px', minHeight: '44px', top: '-52px' }}
        >
          <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.58301 11.0654H17.4163" stroke="#03837E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11 4.64844L17.4167 11.0651L11 17.4818" stroke="#03837E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      <div className="hidden sm:flex absolute top-40 right-2 flex-col items-start justify-start">
        <img src={triangleb} alt="triangle black" className="lg:w-[101px] w-[70px] lg:h-[101px] h-[70px] object-contain" />
        <img src={trianglew} alt="triangle white" className="lg:w-[101px] w-[70px] lg:h-[101px] h-[70px] object-contain -mt-6 lg:-mt-10" />
      </div>

      <div className="hidden sm:flex absolute bottom-0.5 left-2 flex-col items-start justify-start">
        <img src={triangleb} alt="triangle black" className="lg:w-[101px] w-[70px] lg:h-[101px] h-[70px] object-contain" />
        <img src={trianglew} alt="triangle white" className="lg:w-[101px] w-[70px] lg:h-[101px] h-[70px] object-contain -mt-6 lg:-mt-10" />
      </div>

      {/* Contact Us Title */}
      <h2 className="text-white text-2xl md:text-[40px] font-semibold text-center mb-6" style={{ zIndex: 2 }}>Contact Us</h2>
      
      {/* Contact Form */}
      <div className="flex justify-center w-full" style={{ zIndex: 2 }}>
        <form
          className="bg-[#F4F4F5] p-6 md:p-8 w-[70%] min-w-[300px] max-w-[600px] flex flex-col gap-4 mx-auto"
          onSubmit={onSubmit}
        >
          <div className="flex gap-4">
            <div className="flex flex-col w-1/2">
              <label className="text-xs md:text-sm font-semibold mb-1 text-[#192437]">First Name*</label>
              <input
                type="text"
                name="first_name"
                required
                value={formData.first_name}
                onChange={handleInputChange}
                className={`border ${formErrors.first_name ? 'border-red-500' : 'border-[#D6D6D6]'} px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#03837E] bg-white h-[50px]`}
              />
              {formErrors.first_name && <span className="text-red-500 text-xs">{formErrors.first_name}</span>}
            </div>
            <div className="flex flex-col w-1/2">
              <label className="text-xs md:text-sm font-semibold mb-1 text-[#192437]">Last Name*</label>
              <input
                type="text"
                name="last_name"
                required
                value={formData.last_name}
                onChange={handleInputChange}
                className={`border ${formErrors.last_name ? 'border-red-500' : 'border-[#D6D6D6]'} px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#03837E] bg-white h-[50px]`}
              />
              {formErrors.last_name && <span className="text-red-500 text-xs">{formErrors.last_name}</span>}
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col w-1/2">
              <label className="text-xs md:text-sm font-semibold mb-1 text-[#192437]">Your Email*</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className={`border ${formErrors.email ? 'border-red-500' : 'border-[#D6D6D6]'} px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#03837E] bg-white h-[50px]`}
              />
              {formErrors.email && <span className="text-red-500 text-xs">{formErrors.email}</span>}
            </div>
            <div className="flex flex-col w-1/2">
              <label className="text-xs md:text-sm font-semibold mb-1 text-[#192437]">Phone*</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className={`border ${formErrors.phone ? 'border-red-500' : 'border-[#D6D6D6]'} px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#03837E] bg-white h-[50px]`}
              />
              {formErrors.phone && <span className="text-red-500 text-xs">{formErrors.phone}</span>}
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col w-1/2">
              <label className="text-xs md:text-sm font-semibold mb-1 text-[#192437]">Company Name*</label>
              <input
                type="text"
                name="company_name"
                required
                value={formData.company_name}
                onChange={handleInputChange}
                className={`border ${formErrors.company_name ? 'border-red-500' : 'border-[#D6D6D6]'} px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#03837E] bg-white h-[50px]`}
              />
              {formErrors.company_name && <span className="text-red-500 text-xs">{formErrors.company_name}</span>}
            </div>
            <div className="flex flex-col w-1/2">
              <label className="text-xs md:text-sm font-semibold mb-1 text-[#192437]">Subject*</label>
              <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleInputChange}
                className={`border ${formErrors.subject ? 'border-red-500' : 'border-[#D6D6D6]'} px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#03837E] bg-white h-[50px]`}
              />
              {formErrors.subject && <span className="text-red-500 text-xs">{formErrors.subject}</span>}
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-xs md:text-sm font-semibold mb-1 text-[#192437]">Your Message</label>
            <textarea
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="border border-[#D6D6D6] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#03837E] bg-white resize-none h-[120px]"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="h-[48px] bg-[#03837E] text-white font-medium mt-4 cursor-pointer hover:border hover:border-[#03837E] hover:bg-[#FFFFFF] hover:text-[#03837E] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Contact Us'}
          </button>
        </form>
      </div>
    </div>
  );
}