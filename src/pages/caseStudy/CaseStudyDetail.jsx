import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import casestudiesData from "../../data/casestudiesData.js";
import triangleb from "../../assets/triangleb.svg";
import trianglepurew from "../../assets/trianglepurew.svg";
import { useEffect, useState } from "react";
import { getAxios } from "../../api/config";

const CustomBullet = () => (
  <svg
    width="13"
    height="14"
    viewBox="0 0 13 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0 mt-1"
  >
    <path
      d="M6.5 0.982422L12.1292 4.23242V10.7324L6.5 13.9824L0.870835 10.7324V4.23242L6.5 0.982422Z"
      fill="#192437"
    />
  </svg>
);

const WhiteBullet = () => (
  <svg
    width="13"
    height="14"
    viewBox="0 0 13 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0 mt-1"
  >
    <path
      d="M6.5 0.982422L12.1292 4.23242V10.7324L6.5 13.9824L0.870835 10.7324V4.23242L6.5 0.982422Z"
      fill="white"
    />
  </svg>
);

const CaseStudyDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { caseStudyId = '' } = useLocation().state || {};
  const [exploreData, setExploreData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAxios().get(`/casestudydetailpage/${id}`);
        setData(response.data.data.case_study_data);
        setExploreData(response.data.latest_case_study_data);
      } catch (error) {
        console.error("Failed to fetch project details:", error);
        setError("Failed to load case study details");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="p-10 text-center">{error}</div>;
  }

  if (!data) {
    return <div className="p-10 text-center">Case study not found</div>;
  }

 
  const parseHtml = (htmlString) => {
    return { __html: htmlString };
  };


  const extractBulletPoints = (htmlString) => {
    const liRegex = /<li>(.*?)<\/li>/g;
    const matches = [];
    let match;
    while ((match = liRegex.exec(htmlString)) !== null) {
      matches.push(match[1]);
    }
    return matches;
  };

  const parseSolutionsContent = (htmlString) => {
    const elements = [];
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
 
    const nodes = doc.body.childNodes;
    
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      
      if (node.nodeType === Node.ELEMENT_NODE) {
        if (node.tagName === 'P') {
        
          elements.push({
            type: 'paragraph',
            content: node.innerHTML
          });
        } else if (node.tagName === 'UL') {
       
          const listItems = node.querySelectorAll('li');
          listItems.forEach(li => {
            const strong = li.querySelector('strong');
            if (strong) {
              elements.push({
                type: 'listItem',
                title: strong.textContent,
                description: li.textContent.replace(strong.textContent, '').trim()
              });
            } else {
              elements.push({
                type: 'listItem',
                title: li.textContent,
                description: ''
              });
            }
          });
        }
      }
    }
    
    return elements;
  };

  const challengeBulletPoints = extractBulletPoints(data.challenges_description);
  const solutionsContent = parseSolutionsContent(data.solutions_description);

  return (
    <section className="font-Poppins text-black">
    
      <div
        className="relative w-full aspect-[1366/300] min-h-[230px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${data.featured_image})` }}
      >
        <div className="absolute inset-0 bg-[#192437]/60" />
        <h2 className="relative z-10 text-white text-3xl md:text-[45px] lg:text-[55px] xl:text-[60px] font-bold tracking-wide text-center px-4">
          {data.title}
        </h2>
      </div>

     
      <div className="max-w-[1440px] mx-auto px-4 py-12 lg:px-8 space-y-20 flex flex-col justify-center items-center">
      
        <div className="w-full max-w-[1200px] mx-auto text-center mb-0 lg:mb-5">
          <h3 className="text-2xl lg:text-[40px] xl:text-[40px] text-center font-semibold mb-4">
            {data.project_overview_title}
          </h3>
          <div 
            className="text-center leading-7 text-black" 
            dangerouslySetInnerHTML={parseHtml(data.project_overview)}
          />
        </div>

    
        <div className="mb-5 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-10 place-items-center place-content-center">
            <img
              src={data.challenge_image}
              alt="Challenge"
              className="w-full object-cover xl:w-[556px] xl:h-[431px]"
            />
            <div className="space-y-4 text-black">
              <h3 className="text-2xl text-center md:text-left lg:text-[40px] xl:text-[40px] font-semibold mb-5">
                {data.challenges_title}
              </h3>
              <div className="text-center md:text-left" dangerouslySetInnerHTML={parseHtml(data.challenges_description.replace(/<li>.*?<\/li>/g, ''))} />
              <ul className="space-y-2">
                {challengeBulletPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CustomBullet />
                    <p dangerouslySetInnerHTML={parseHtml(point)} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

     
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start my-8">
            <div className="space-y-6 order-2 lg:order-1 text-black">
              <h3 className="text-2xl text-center md:text-left lg:text-[40px] xl:text-[40px] font-semibold mb-2 sm:mb-5">
                {data.solutions_title}
              </h3>
              <div className="space-y-6">
                {solutionsContent.map((item, i) => {
                  if (item.type === 'paragraph') {
                    return (
                      <div 
                        key={`p-${i}`} 
                        className="italic text-center md:text-left"
                        dangerouslySetInnerHTML={parseHtml(item.content)}
                      />
                    );
                  } else if (item.type === 'listItem') {
                    return (
                      <div key={`li-${i}`} className="flex items-start gap-3">
                        <CustomBullet />
                        <div>
                          {item.title && <h4 className="font-semibold">{item.title}</h4>}
                          {item.description && <p>{item.description}</p>}
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={data.solution_image}
                alt="Solution"
                className="w-full object-cover aspect-[556/431] max-h-[431px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto bg-[#03837E] py-7 lg:py-14 relative">
        <div className="max-w-[1440px] mx-auto px-4">
          <h3 className="text-2xl lg:text-[40px] xl:text-[40px] font-semibold mb-5 lg:mb-10 text-white text-center">
            Outcome
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 gap-x-[10px] text-white text-left max-w-[1050px] mx-auto">
            {data.outcomes.map((item, i) => (
              <li key={i} className="flex items-start gap-3 justify-start">
                <WhiteBullet />
                <span>{item}</span>
              </li>
            ))}
          </ul>
         
          <div className="animate-bounce hidden lg:flex absolute top-8 right-8 flex-col items-start justify-start">
            <img
              src={triangleb}
              alt="triangle black"
              className="w-[70px] xl:w-[80px] h-[70px] xl:h-[80px] object-contain"
            />
            <img
              src={trianglepurew}
              alt="triangle white"
              className="w-[70px] xl:w-[80px] h-[70px] xl:h-[80px] object-contain -mt-6"
            />
          </div>
          <div className="animate-bounce hidden lg:flex absolute bottom-8 left-8 flex-col items-start justify-start">
            <img
              src={triangleb}
              alt="triangle black"
              className="w-[70px] xl:w-[80px] h-[70px] xl:h-[80px] object-contain"
            />
            <img
              src={trianglepurew}
              alt="triangle white"
              className="w-[70px] xl:w-[80px] h-[70px] xl:h-[80px] object-contain -mt-6"
            />
          </div>
        </div>
      </div>

    
      <div className="max-w-[1440px] mx-auto px-4 pb-12 py-5 lg:py-12 space-y-20">
        <div>
          <h3 className="text-center text-2xl lg:text-[40px] xl:text-[40px] font-semibold mb-5 lg:mb-10">
            Explore More Case Studies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            {exploreData.map((p) => (
              <div
                key={p.id}
                className="flex flex-col gap-2 hover:scale-[1.02] transition"
              >
                <Link to={`/casestudies/${p.id}`}>
                  <img
                    src={p.featured_image}
                    alt={p.name}
                    className="object-cover"
                    style={{ width: "330px", height: "250px" }}
                  />
                </Link>
                <h4 className="font-medium">{p.title}</h4>
                <Link
                  to={`/casestudies/${p.id}`}
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: 500,
                    fontSize: "18px",
                    lineHeight: "100%",
                    color: "#03837E",
                    textDecoration: "underline",
                    textUnderlineOffset: "0%",
                  }}
                >
                  View Detail
                </Link>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Link to="/casestudies">
              <button
                className="bg-[#03837E] text-white text-lg font-medium cursor-pointer hover:bg-white hover:text-[#03837E] border border-[#03837E] transition-colors duration-300 flex items-center justify-center"
                style={{ width: "283px", height: "48px" }}
              >
                View All Case Studies
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyDetail;