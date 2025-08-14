import React from "react";
import { Link } from "react-router-dom";  

import { useEffect, useState } from "react";
import { getNewsList } from "../../api/routes";
import { getAxios } from "../../api/config";
import { useNavigate } from "react-router-dom";


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
        className="relative w-full min-h-[230px] aspect-[1366/300] flex items-center justify-center bg-cover bg-center"
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
        className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-10 py-10"
        aria-labelledby="news-heading"
      >
        <h2
          id="news-heading"
          className="font-poppins font-semibold text-[#192437] text-[28px] md:text-[32px] xl:text-[40px] leading-[100%] text-center my-5 lg:my-10"
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
              <div className="flex flex-col flex-1 h-full px-4  sm:px-2 lg:px-0  ">
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

