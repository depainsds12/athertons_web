// import React, { useState, useEffect } from "react";
// import { getAxios } from "../../api/config";
// import { useParams ,useLocation } from "react-router-dom";

// const ProjectDetail = () => {
//   const [imgIdx, setImgIdx] = useState(0);
//   const { id } = useParams();
//   const [data, setData] = useState({});
//   const [isLoading, setIsLoading] = useState(true);
// const { projectId = '' } = useLocation().state || {};
//   const handlePrev = () =>
//     setImgIdx((prev) => (prev === 0 ? data.gallery.length - 1 : prev - 1));
//   const handleNext = () =>
//     setImgIdx((prev) => (prev === data.gallery.length - 1 ? 0 : prev + 1));

//   // console.log("Project ID from state:", projectId);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await getAxios().get(`/projectdetailpage/${projectId}`);
//         setData(response.data.data.project_data);
//       } catch (error) {
//         console.error("Failed to fetch project details:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [id]);

//   const renderHTMLContent = (htmlString) => {
//     if (!htmlString) return null;

   
//     const withParagraphs = htmlString
//       .replace(/<br\s*\/?>/gi, '</p><p>')
//       .replace(/<\/p><p>/g, '</p><p>');

   
//     const tempDiv = document.createElement('div');
//     tempDiv.innerHTML = withParagraphs;


//     const paragraphs = Array.from(tempDiv.querySelectorAll('p'));

//     return paragraphs.map((p, index) => (
//       <p key={index} className={index !== 0 ? "mt-4" : ""}>
//         {p.textContent}
//       </p>
//     ));
//   };


//   const renderContentSection = (title, description1, description2, image, index) => {
//   if (!title || !description1 || !description2) return null;

//   return (
//     <div key={index} className="flex flex-col gap-8 px-4 md:px-12 pb-16 w-full">
//       <h3 className="text-[#192437] font-semibold text-[30px] md:text-[40px] leading-[100%] mb-6">
//         {title}
//       </h3>
      
//       <div className="flex flex-col lg:flex-row gap-8 w-full">
        
//         {image && (
//           <div className="w-full lg:w-[500px] flex-shrink-0">
//             <img
//               src={image}
//               alt={`${data.project_title} ${title}`}
//               className="w-full h-[300px] lg:h-[450px] object-cover"
//             />
//           </div>
//         )}
        
       
//         <div className="flex-1 text-black font-normal flex justify-center flex-col items-center text-[16px] leading-[28px]">
//           {renderHTMLContent(description1)}
//         </div>
//       </div>
//       <div className="text-black font-normal text-[16px] leading-[28px]">
//         {renderHTMLContent(description2)}
//       </div>
//     </div>
//   );
// };

//   if (isLoading) {
//     return <div className="w-full text-center py-20">Loading...</div>;
//   }

//   return (
//     <section
//       className="w-full bg-white flex flex-col font-Poppins"
//       aria-labelledby="careers-heading"
//     >
//       {/* Banner */}
//       <div
//         className="relative aspect-[1366/300] min-h-[230px] flex items-center justify-center bg-cover bg-center w-full"
//         style={{ backgroundImage: `url(${data.featured_image})` }}
//         role="presentation"
//         aria-hidden="true"
//       >
//         <div className="absolute inset-0 bg-[#192437]/60" aria-hidden="true" />
//         <h2
//           id="careers-heading"
//           className="relative z-10 text-white text-3xl md:text-[45px] lg:text-[55px] xl:text-[60px] font-bold tracking-wide text-center"
//         >
//           {data.project_title}
//         </h2>
//       </div>

//       {/* Main Content */}
//       <div className="w-full max-w-[1440px] mx-auto px-8 lg:py-12 py-6">
//         <div className="flex flex-col lg:flex-row gap-16 px-4 md:px-12 py-10 font-normal text-[16px] leading-[28px] mt-2">
//           {/* Left: Image Gallery */}
//           <div className="flex flex-col lg:w-1/2 w-full items-center">
//             <div className="relative w-full max-w-[720px] xl:aspect-[4/3] overflow-visible mb-4 justify-center">
//               {data.gallery && data.gallery.length > 0 && (
//                 <>
//                   <img
//                     src={data.gallery[imgIdx]}
//                     alt={`${data.project_title} ${imgIdx + 1}`}
//                     className="lg:min-h-[420px] object-cover transition-all duration-300"
//                   />
//                   {data.gallery.length > 1 && (
//                     <>
//                       <button
//                         onClick={handlePrev}
//                         className="absolute left-[-30px] top-1/2 -translate-y-1/2 bg-white border border-[#03837E] rounded-full p-2 w-[65px] h-[65px] flex items-center justify-center z-10 cursor-pointer"
//                         aria-label="Previous image"
//                       >
//                         <img src="/prev.svg" alt="Previous" className="w-7 h-7" />
//                       </button>
//                       <button
//                         onClick={handleNext}
//                         className="absolute right-[-30px] top-1/2 -translate-y-1/2 bg-white border border-[#03837E] rounded-full p-2 w-[65px] h-[65px] flex items-center justify-center z-10 cursor-pointer"
//                         aria-label="Next image"
//                       >
//                         <img src="/next.svg" alt="Next" className="w-7 h-7" />
//                       </button>
//                     </>
//                   )}
//                 </>
//               )}
//             </div>
//           </div>

//           {/* Right: Project Info */}
//           <div className="flex flex-col gap-2 lg:w-1/2 w-full justify-start xl:justify-center">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 2xl:items-center">
//               <div className="text-[#192437] font-semibold text-[20px]">Project Name:</div>
//               <div>{data.project_title}</div>
              
//               <div className="text-[#192437] font-semibold text-[20px]">Overall Value:</div>
//               <div>{data.overall_value}</div>
              
//               <div className="text-[#192437] font-semibold text-[20px]">Athertons project size:</div>
//               <div>{data.athertons_project_size}</div>
              
//               <div className="text-[#192437] font-semibold text-[20px]">Scope of Works:</div>
//               <div>{data.scope_of_works}</div>
              
//               <div className="text-[#192437] font-semibold text-[20px]">Location:</div>
//               <div>{data.location}</div>
              
//               <div className="text-[#192437] font-semibold text-[20px]">Duration:</div>
//               <div>{data.duration}</div>
              
//               <div className="text-[#192437] font-semibold text-[20px]">Client:</div>
//               <div>{data.client}</div>
              
//               {data.project_url && (
//                 <>
//                   <div className="text-[#192437] font-semibold text-[20px]">Project URL:</div>
//                   <div className="underline">
//                     <a href={data.project_url} target="_blank" rel="noopener noreferrer">
//                       {data.project_url}
//                     </a>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Short Description */}
//         <div className="px-4 md:px-12 w-full text-black font-normal text-[16px] leading-[28px] pb-10">
//           {renderHTMLContent(data.short_description)}
//         </div>

//         {/* Render each content section */}
//         {renderContentSection(data.title1, data.description1,data.description2, data.image1, 1)}
//         {renderContentSection(data.title2, data.description3,data.description4, data.image2, 2)}
//         {renderContentSection(data.title3, data.description5,data.description6, data.image3, 3)}
//       </div>
//     </section>
//   );
// };

// export default ProjectDetail;

import React, { useState, useEffect } from "react";
import { getAxios } from "../../api/config";
import { useParams, useLocation } from "react-router-dom";

const ProjectDetail = () => {
  const [imgIdx, setImgIdx] = useState(0);
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { projectId = '' } = useLocation().state || {};

  const handlePrev = () =>
    setImgIdx((prev) => (prev === 0 ? (data.gallery?.length || 1) - 1 : prev - 1));
  const handleNext = () =>
    setImgIdx((prev) => (prev === (data.gallery?.length || 1) - 1 ? 0 : prev + 1));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAxios().get(`/projectdetailpage/${projectId}`);
        setData(response.data.data.project_data || {});
      } catch (error) {
        console.error("Failed to fetch project details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id, projectId]);

  const renderHTMLContent = (htmlString) => {
    if (!htmlString) return null;

    const withParagraphs = htmlString
      .replace(/<br\s*\/?>/gi, '</p><p>')
      .replace(/<\/p><p>/g, '</p><p>');

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = withParagraphs;

    const paragraphs = Array.from(tempDiv.querySelectorAll('p'));

    return paragraphs.map((p, index) => (
      <p key={index} className={index !== 0 ? "mt-4" : ""}>
        {p.textContent}
      </p>
    ));
  };

  const renderContentSection = (title, description1, description2, image, index) => {
    if (!title && !description1 && !description2) return null;

    const hasImage = image && image !== "null";
    const hasContent = description1 || description2;

    return (
      <div key={index} className="flex flex-col gap-8 px-4 md:px-12 pb-16 w-full">
        {title && (
          <h3 className="text-[#192437] font-semibold text-[30px] md:text-[40px] leading-[100%] mb-6">
            {title}
          </h3>
        )}
        
        {hasContent && (
          <div className={`flex flex-col ${hasImage ? 'lg:flex-row' : ''} gap-8 w-full`}>
            {hasImage && (
              <div className="w-full lg:w-[500px] flex-shrink-0">
                <img
                  src={image}
                  alt={`${data.project_title || 'Project'} ${title || ''}`}
                  className="w-full h-[300px] lg:h-[450px] object-cover"
                />
              </div>
            )}
            
            <div className={`${hasImage ? 'flex-1' : 'w-full'} text-black font-normal flex justify-center flex-col items-center text-[16px] leading-[28px]`}>
              {renderHTMLContent(description1)}
              {renderHTMLContent(description2)}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderProjectInfoItem = (label, value) => {
    if (!value) return null;
    
    return (
      <>
        <div className="text-[#192437] font-semibold text-[20px]">{label}:</div>
        <div>{value}</div>
      </>
    );
  };

  if (isLoading) {
    return <div className="w-full text-center py-20">Loading...</div>;
  }

  return (
    <section
      className="w-full bg-white flex flex-col font-Poppins"
      aria-labelledby="careers-heading"
    >
      {/* Banner */}
      {data.featured_image && (
        <div
          className="relative aspect-[1366/300] min-h-[230px] flex items-center justify-center bg-cover bg-center w-full"
          style={{ backgroundImage: `url(${data.featured_image})` }}
          role="presentation"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[#192437]/60" aria-hidden="true" />
          <h2
            id="careers-heading"
            className="relative z-10 text-white text-3xl md:text-[45px] lg:text-[55px] xl:text-[60px] font-bold tracking-wide text-center"
          >
            {data.project_title}
          </h2>
        </div>
      )}

      {/* Main Content */}
      <div className="w-full max-w-[1440px] mx-auto px-8 lg:py-12 py-6">
        <div className="flex flex-col lg:flex-row gap-16 px-4 md:px-12 py-10 font-normal text-[16px] leading-[28px] mt-2">
          {/* Left: Image Gallery */}
          {data.gallery?.length > 0 && (
            <div className="flex flex-col lg:w-1/2 w-full items-center">
              <div className="relative w-full max-w-[720px] xl:aspect-[4/3] overflow-visible mb-4 justify-center">
                <img
                  src={data.gallery[imgIdx]}
                  alt={`${data.project_title || 'Project'} ${imgIdx + 1}`}
                  className="lg:min-h-[420px] object-cover transition-all duration-300"
                />
                {data.gallery.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-[-30px] top-1/2 -translate-y-1/2 bg-white border border-[#03837E] rounded-full p-2 w-[65px] h-[65px] flex items-center justify-center z-10 cursor-pointer"
                      aria-label="Previous image"
                    >
                      <img src="/prev.svg" alt="Previous" className="w-7 h-7" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-[-30px] top-1/2 -translate-y-1/2 bg-white border border-[#03837E] rounded-full p-2 w-[65px] h-[65px] flex items-center justify-center z-10 cursor-pointer"
                      aria-label="Next image"
                    >
                      <img src="/next.svg" alt="Next" className="w-7 h-7" />
                    </button>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Right: Project Info */}
          <div className="flex flex-col gap-2 lg:w-1/2 w-full justify-start xl:justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 2xl:items-center">
              {renderProjectInfoItem("Project Name", data.project_title)}
              {renderProjectInfoItem("Overall Value", data.overall_value)}
              {renderProjectInfoItem("Athertons project size", data.athertons_project_size)}
              {renderProjectInfoItem("Scope of Works", data.scope_of_works)}
              {renderProjectInfoItem("Location", data.location)}
              {renderProjectInfoItem("Duration", data.duration)}
              {renderProjectInfoItem("Client", data.client)}
              
              {data.project_url && (
                <>
                  <div className="text-[#192437] font-semibold text-[20px]">Project URL:</div>
                  <div className="underline">
                    <a href={data.project_url} target="_blank" rel="noopener noreferrer">
                      {data.project_url}
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Short Description */}
        {data.short_description && (
          <div className="px-4 md:px-12 w-full text-black font-normal text-[16px] leading-[28px] pb-10">
            {renderHTMLContent(data.short_description)}
          </div>
        )}

        {/* Render each content section */}
        {renderContentSection(data.title1, data.description1, data.description2, data.image1, 1)}
        {renderContentSection(data.title2, data.description3, data.description4, data.image2, 2)}
        {renderContentSection(data.title3, data.description5, data.description6, data.image3, 3)}
        {renderContentSection(data.title4, data.description7, data.description8, data.image4, 4)}
        {renderContentSection(data.title5, null, null, data.image5, 5)}
      </div>
    </section>
  );
};

export default ProjectDetail;