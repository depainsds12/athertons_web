import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { useNavigate } from "react-router-dom";
import { getProjectList } from "../../api/routes";
import { getAxios } from "../../api/config";
import Popup from "../../components/common/Popup";
import ContactSectionWithSlider from "./ContactSectionWithSlider";

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


  const getCategories = () => {
    if (!projectsData?.project_data) return [{ value: "All", label: "All" }];
    
    const categories = new Set(["All"]);
    projectsData.project_data.forEach(project => {
      if (project.category) {
        categories.add(project.category.toLowerCase());
      }
    });
    
   
    return Array.from(categories).map(cat => ({
      value: cat === "all" ? "All" : cat,
      label: cat === "all" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)
    }));
  };

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
    selectedCategory.toLowerCase() === "all" 
      ? projectsData.project_data 
      : projectsData.project_data.filter(p => 
          p.category?.toLowerCase() === selectedCategory.toLowerCase()
        );

  const categories = getCategories();

  return (
    <div className="overflow-x-hidden">
      {showSuccessPopup && (
        <Popup
          message="Your details have been submitted successfully. Stay connected!"
          onClose={() => setShowSuccessPopup(false)}
        />
      )}

      <div
        className="relative w-full h-[180px] sm:h-[220px] md:h-[250px] lg:h-[300px] min-h-[230px] flex items-center justify-center bg-cover bg-center mx-auto"
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
                key={cat.value}
                className={`transition-all duration-300 border group cursor-pointer
                  ${selectedCategory.toLowerCase() === cat.value.toLowerCase()
                    ? "bg-[#03837E] text-white border-[#03837E]" 
                    : "bg-white text-black border-[#03837E] hover:bg-[#E0F4F3]"} 
                  text-sm sm:text-[18px] font-medium 
                  w-[90px] h-[40px]
                  sm:w-[150px] sm:h-[48px] 
                  flex items-center justify-center`}
                onClick={() => setSelectedCategory(cat.value)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="w-full mx-auto flex flex-wrap justify-center max-w-[1600px] gap-6 px-4 py-4">
            {filteredProjects.map((project) => (
              <div
                key={project.id} 
                className="flex-grow flex-shrink basis-full sm:basis-[45%] lg:basis-[30%] max-w-full sm:max-w-[45%] lg:max-w-[30%] flex justify-center my-5"
              >
                <ProjectCard
                  name={project.project_title} 
                  image={project.featured_image}
                  onClick={() => navigate(`/projects/${project.id}`, {
                    state: {projectId: project.id}
                  })} 
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-lg">No projects found in this category.</p>
          </div>
        )}

        <ContactSectionWithSlider 
          onSubmit={handleSubmit}
          formData={formData}
          handleInputChange={handleInputChange}
          formErrors={formErrors}
          isSubmitting={isSubmitting}
          images={projectsData.project_data.map(p => p.featured_image)}
        />
      </div>
    </div>
  );
}