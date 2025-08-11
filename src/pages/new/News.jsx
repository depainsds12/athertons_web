import React from "react";
import { Link } from "react-router-dom";  // <-- ADD THIS
import newsbg from "../../assets/newsbg.jpg";
import img1 from "../../assets/news/1.jpg";
import img2 from "../../assets/news/2.jpg";
import img3 from "../../assets/news/3.jpg";
import img4 from "../../assets/news/4.jpg";
import img5 from "../../assets/news/5.png";
import img6 from "../../assets/news/6.jpg";
import img7 from "../../assets/news/7.jpg";
import img8 from "../../assets/news/8.jpg";
import { useEffect, useState } from "react";
import { getNewsList } from "../../api/routes";
import { getAxios } from "../../api/config";
import { useNavigate } from "react-router-dom";
const newsData = [
  { img: img1, title: "Lorem Ipsum dummy Heading Text", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { img: img2, title: "Lorem Ipsum dummy Heading Text", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { img: img3, title: "Lorem Ipsum dummy Heading Text", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { img: img4, title: "Lorem Ipsum dummy Heading Text", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { img: img5, title: "Lorem Ipsum dummy Heading Text", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { img: img6, title: "Lorem Ipsum dummy Heading Text", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { img: img7, title: "Lorem Ipsum dummy Heading Text", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { img: img8, title: "Lorem Ipsum dummy Heading Text", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
];

const News = () => {

   const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getAxios().get(getNewsList);
        
          setData(response.data.data);
        } catch (error) {
          console.error("Failed to fetch News Insight API:", error);
     
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);

    
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="w-full mb-8">
      {/* Banner */}
      <div
        className="relative w-full aspect-[1366/300] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${data.banner_image})` }}
      >
        <div className="absolute inset-0 bg-[#192437] opacity-60 z-10" />
        <h1
          id="page-heading"
          className="relative z-20 text-white text-[20px] sm:text-[36px] md:text-[48px] xl:text-[60px] 2xl:text-[80px] font-bold leading-[1] text-center"
        >
          {data.banner_title}
        </h1>
      </div>

      {/* News Section */}
      <section
        className="max-w-[1800px] mx-auto px-4 md:px-8 lg:px-16 py-10"
        aria-labelledby="news-heading"
      >
        <h2
          id="news-heading"
          className="font-poppins font-semibold text-[#192437] text-[28px] md:text-[32px] xl:text-[40px] leading-[100%] text-center mt-5 mb-12"
        >
          News & Insights
        </h2>

        <ul
          className="
            grid grid-cols-1
            lg:grid-cols-2
            gap-8 gap-y-12 xl:gap-x-10
          "
        >
          {data.news_insight_data.map((item, index) => (
            <li
              key={item.id}
              className="flex flex-col sm:flex-row gap-4 items-start h-full"
            >
              <img
                src={item.featured_image}
                alt={`News: ${item.title}`}
                className="
                  object-cover
                  w-full px-4 mx-auto
                  sm:mx-0 sm:px-0
                  sm:w-[150px] sm:h-[130px]
                  md:w-[180px] md:h-[140px]
                  lg:w-[200px] lg:h-[165px]
                  xl:w-[287px] xl:h-[188px]
                  2xl:w-[300px] 2xl:h-[195px]
                  flex-shrink-0
                "
              />
              {/* Text content */}
              <div className="flex flex-col flex-1 justify-between h-full px-4  sm:px-2 lg:px-0  ">
                <div>
                  <h3 className=" text-[#192437]  font-semibold text-[18px] sm:text-[20px] leading-snug ">
                    {item.title}
                  </h3>
                  <p className="font-normal text-[14px] sm:text-[16px] leading-[24px] sm:leading-[28px] mt-1.5 lg:mt-0.5 xl:mt-1.5">
                    {item.excerpt}
                  </p>
                </div>
                <Link
                onClick={() => navigate(`/newsandinsight/${item.id}`, 
              {state: { idnews: item.id } }
                )}
                    
                  className="
                    underline text-[#03837E]
                    font-poppins font-medium
                    text-[16px] sm:text-[18px]
                    mt-2 cursor-pointer
                  "
                >
                  View Details
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default News;

// import React, { useState, useEffect } from "react";
// import { useParams, useLocation, useNavigate } from "react-router-dom";
// import { getAxios } from "../../api/config";

// const NewsDetail = () => {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const navigate = useNavigate();
  
//   // Try to get newsId from location state first, then from params as fallback
//   const location = useLocation();
//   const { newsId: stateNewsId } = location.state || {};
//   const { id: paramId } = useParams();
  
//   const newsId = stateNewsId || paramId;
//   console.log("Final News ID:", newsId);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         if (!newsId) {
//           console.error("No news ID available");
//           navigate("/"); // or handle this case appropriately
//           return;
//         }
        
//         const response = await getAxios().get(`/newsinsightsdetailpage/${newsId}`);
//         const apiData = response.data.data.news_insights_data;
        
//         // Transform API data to match your component's expected structure
//         const transformedData = {
//           bannerImage: apiData.featured_image,
//           title: apiData.title,
//           image: apiData.featured_image,
//           subheading: apiData.title,
//           description: apiData.excerpt,
//           points: extractPointsFromDescription(apiData.description),
//           summary: apiData.excerpt,
//           paragraphs: extractParagraphsFromDescription(apiData.description)
//         };
        
//         setData(transformedData);
//       } catch (error) {
//         console.error("Failed to fetch news details:", error);
//         navigate("/"); // or handle error appropriately
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [newsId, navigate]);

//   // Helper function to extract bullet points from HTML description
//   const extractPointsFromDescription = (html) => {
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(html, 'text/html');
//     const listItems = doc.querySelectorAll('li');
//     return Array.from(listItems).map(li => li.textContent);
//   };

//   // Helper function to extract paragraphs from HTML description
//   const extractParagraphsFromDescription = (html) => {
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(html, 'text/html');
//     const paragraphs = doc.querySelectorAll('p');
//     return Array.from(paragraphs)
//       .map(p => p.textContent)
//       .filter(text => text.trim().length > 0);
//   };

//   if (isLoading) return <div className="p-10">Loading...</div>;
//   if (!data) return <div className="p-10">News not found</div>;

//   return (
//     <div className="w-full font-Poppins mb-8" role="main" aria-labelledby="news-heading">
//       {/* Banner */}
//       <div
//         role="banner"
//         className="relative w-full min-h-[200px] aspect-[1366/300] flex items-center justify-center bg-cover bg-center"
//         style={{ backgroundImage: `url(${data.bannerImage})` }}
//       >
//         <div className="absolute inset-0 bg-[#192437] opacity-60 z-10" />
//         <h1
//           id="news-heading"
//           className="relative z-20 text-white text-[36px] sm:text-[48px] md:text-[60px] font-bold text-center"
//         >
//           {data.title}
//         </h1>
//       </div>

//       {/* Content */}
//       <section
//         className="w-full bg-white max-w-[1600px] mx-auto py-14 xl:py px-4 md:px-14 xl:px-20"
//         aria-labelledby="news-content-heading"
//       >
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Left: Image */}
//           <div className="flex-shrink-0 flex justify-center xl:mr-5">
//             <img
//               src={data.image}
//               alt={`Illustration for ${data.title}`}
//               className="w-full max-w-[556px] h-auto object-cover xl:w-[556px] xl:h-[422px]"
//             />
//           </div>

//           {/* Right: Text */}
//           <div className="flex flex-col justify-start ml-2">
//             <h2
//               id="news-content-heading"
//               className="text-[32px] lg:text-[40px] text-[#192437] font-semibold"
//             >
//               {data.subheading}
//             </h2>
//             <p className="italic font-[500] text-[20px] mt-3 mb-5">{data.description}</p>

//             <ul className="mb-4 space-y-3" role="list">
//               {data.points.map((p, idx) => (
//                 <li key={idx} className="flex items-start gap-3" role="listitem">
//                   <svg
//                     width="12"
//                     height="14"
//                     viewBox="0 0 12 14"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="flex-shrink-0 mt-1"
//                     aria-hidden="true"
//                   >
//                     <path
//                       d="M6.10547 0.982422L11.7346 4.23242V10.7324L6.10547 13.9824L0.476304 10.7324V4.23242L6.10547 0.982422Z"
//                       fill="#192437"
//                     />
//                   </svg>
//                   <span>{p}</span>
//                 </li>
//               ))}
//             </ul>

//             <p className="mt-3">{data.summary}</p>
//           </div>
//         </div>

//         {/* Paragraphs below */}
//         <div className="mt-12 flex flex-col gap-6">
//           {data.paragraphs.map((para, idx) => (
//             <p key={idx}>{para}</p>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default NewsDetail;