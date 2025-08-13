import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAxios } from "../../api/config";
import { 
  getSmartDesignPage,
  getBmsEmsTechnologyPage,
  getMeEngineeringPage,
  getEcoSolutionsPage,
  getLightCivilPage
} from "../../api/routes";

const HexIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block mr-2 align-middle flex-shrink-0"
    aria-hidden="true"
  >
    <path
      d="M6.5 0L12.1292 3.25V9.75L6.5 13L0.870835 9.75V3.25L6.5 0Z"
      fill="currentColor"
    />
  </svg>
);

const serviceEndpoints = {
  'consultancy_smartdesign': getSmartDesignPage,
  'bms_ems_technology': getBmsEmsTechnologyPage,
  'me_engineering': getMeEngineeringPage,
  'eco_solutions': getEcoSolutionsPage,
  "light_civil_engineering": getLightCivilPage
};

const ServicePage = () => {
  const { serviceName } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        setLoading(true);
        const endpoint = serviceEndpoints[serviceName];
        
        if (!endpoint) {
          throw new Error(`No endpoint found for service: ${serviceName}`);
        }

        const response = await getAxios().get(endpoint);
        setService(response.data.data);
      } catch (err) {
        setError(err.message || "Failed to fetch service data");
      } finally {
        setLoading(false);
      }
    };

    fetchServiceData();
  }, [serviceName]);


  const parseHtmlContent = (htmlString) => {
    if (!htmlString) return [];
    
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlString;
    
    const sections = [];
    let currentSection = { elements: [] };
    
    Array.from(tempDiv.children).forEach(element => {
      if (element.tagName === 'H2' || element.tagName === 'H3') {
       
        if (currentSection.elements.length > 0) {
          sections.push(currentSection);
          currentSection = { elements: [] };
        }
        currentSection.title = element.textContent;
      } else {
       
        if (element.tagName === 'P') {
          currentSection.elements.push({
            type: 'paragraph',
            content: element.textContent
          });
        } else if (element.tagName === 'UL' || element.tagName === 'OL') {
          const listItems = Array.from(element.querySelectorAll('li')).map(li => li.textContent);
          currentSection.elements.push({
            type: 'list',
            listType: element.tagName.toLowerCase(),
            items: listItems
          });
        } else if (element.tagName === 'H4') {
          currentSection.elements.push({
            type: 'subheading',
            content: element.textContent,
            level: 4
          });
        } else if (element.tagName === 'H5') {
          currentSection.elements.push({
            type: 'subheading',
            content: element.textContent,
            level: 5
          });
        }
       
      }
    });

  
    if (currentSection.elements.length > 0) {
      sections.push(currentSection);
    }

    return sections;
  };

  if (loading) {
    return <div className="text-center mt-20" role="status" aria-live="polite">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-20 text-red-500" role="alert" aria-live="assertive">{error}</div>;
  }

  if (!service) {
    return <div className="text-center mt-20" role="alert" aria-live="polite">Service not found.</div>;
  }

  const upperBlockSections = parseHtmlContent(service.description_1);
  const bottomBlockSections = parseHtmlContent(service.description_2);


  const RenderList = ({ list }) => (
    <ul className={`mt-4 ${list.listType === 'ol' ? 'list-decimal pl-5' : 'list-disc pl-5'}`}>
      {list.items.map((item, i) => (
        <li key={i} className="mb-2">
          {item}
        </li>
      ))}
    </ul>
  );

 
  const RenderSubheading = ({ level, content }) => {
    const HeadingTag = `h${level}`;
    return (
      <HeadingTag className={`text-[${24 - (level * 2)}px] font-semibold mt-6 mb-3`}>
        {content}
      </HeadingTag>
    );
  };


  const SectionRenderer = ({ section, sectionType, index }) => (
    <section
      key={`${sectionType}-${index}`}
      role="region"
      aria-labelledby={`${sectionType}-section-${index}`}
      className="mb-8"
    >
      {section.title && (
        <h2
          id={`${sectionType}-section-${index}`}
          className="text-[20px] font-semibold flex items-center"
        >
          <HexIcon />
          {section.title}
        </h2>
      )}

      {section.elements.map((element, i) => {
        if (element.type === 'paragraph') {
          return (
            <p
              key={`${sectionType}-p-${i}`}
              className={`${i > 0 ? 'mt-4' : ''} text-base leading-7 md:leading-[28px]`}
            >
              {element.content}
            </p>
          );
        } else if (element.type === 'list') {
          return <RenderList key={`${sectionType}-list-${i}`} list={element} />;
        } else if (element.type === 'subheading') {
          return (
            <RenderSubheading 
              key={`${sectionType}-subheading-${i}`}
              level={element.level}
              content={element.content}
            />
          );
        }
        return null;
      })}
    </section>
  );

  return (
    <main className="w-full min-h-screen bg-white flex flex-col font-poppins" role="main" aria-label="Service Details">
     
      <section
        className="relative w-full min-h-[230px] aspect-[1366/300] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${service.banner_image})` }}
        role="banner"
        aria-label={`${service.banner_title} Hero`}
      >
        <div className="absolute inset-0 bg-[#192437]/60" aria-hidden="true" />
        <h1 className="relative z-10 text-white text-3xl md:text-[45px] lg:text-[55px] xl:text-[60px] font-bold tracking-wide text-center">
          {service.banner_title}
        </h1>
      </section>

      {/* Content Section */}
      <section className="w-full max-w-[1600px] mx-auto flex flex-col py-14 px-4 md:px-14 xl:px-20" aria-label="Service Content">
        <div className="w-full flex flex-col gap-10 lg:flex-row lg:items-start 2xl:items-center">
          {/* Left Image */}
          <div className="flex justify-center items-start lg:w-1/2 w-full">
            <img
              src={service.image}
              alt={`${service.banner_title} illustration`}
              className="object-cover w-full lg:min-h-[450px] h-auto"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col lg:w-1/2 w-full space-y-8 h-full">
            {upperBlockSections.map((section, index) => (
              <SectionRenderer section={section} sectionType="upper" index={index} />
            ))}
          </div>
        </div>

        {/* Below Sections */}
        <div className="flex flex-col w-full mt-10 space-y-10">
          {bottomBlockSections.map((section, index) => (
            <SectionRenderer section={section} sectionType="bottom" index={index} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ServicePage;