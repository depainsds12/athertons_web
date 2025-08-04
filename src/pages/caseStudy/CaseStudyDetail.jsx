import React from "react";
import { useParams, Link } from "react-router-dom";
import casestudiesData from "../../data/casestudiesData.js";
import triangleb from "../../assets/triangleb.svg";
import trianglepurew from "../../assets/trianglepurew.svg";

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
  const caseStudy = casestudiesData.find((item) => item.id === id);

  if (!caseStudy) {
    return <div className="p-10 text-center">Case study not found</div>;
  }

  return (
    <section className="font-Poppins text-black">
      {/* Banner */}
      <div
        className="relative w-full min-h-[200px] aspect-[1366/300] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${caseStudy.bannerImage})` }}
      >
        <div className="absolute inset-0 bg-[#192437]/60" />
        <h2 className="relative z-10 text-white text-3xl md:text-[45px] lg:text-[55px] xl:text-[60px] font-bold tracking-wide text-center px-4">
          {caseStudy.title}
        </h2>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-4 py-12 lg:px-8 space-y-20">
        {/* Project Overview */}
        <div>
          <h3 className="text-2xl lg:text-[40px] xl:text-[40px] text-center font-semibold mb-4">
            Project Overview
          </h3>
          <p className="text-center leading-7 text-black">
            {caseStudy.overview}
          </p>
        </div>

        {/* Challenges */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <img
              src={caseStudy.challenges.image}
              alt="Challenge"
              className="w-full object-cover xl:w-[556px] xl:h-[431px]"
            />
            <div className="space-y-4 text-black">
              <h3 className="text-2xl lg:text-[40px] xl:text-[40px] font-semibold mb-8">
                Challenges
              </h3>
              <p>{caseStudy.challenges.text}</p>
              <ul className="space-y-2">
                {caseStudy.challenges.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CustomBullet />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p>{caseStudy.challenges.paragraph}</p>
            </div>
          </div>
        </div>

        {/* Solutions */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-6 order-1 text-black">
              <h3 className="text-2xl lg:text-[40px] xl:text-[40px] font-semibold mb-8">
                Solutions
              </h3>
              <p className="italic">{caseStudy.solutions.text}</p>
              <div className="space-y-6">
                {caseStudy.solutions.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CustomBullet />
                    <div>
                      <h4 className="font-semibold">{point.title}</h4>
                      <p>{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-2">
              <img
                src={caseStudy.solutions.image}
                alt="Solution"
                className="w-full object-cover aspect-[556/431] max-h-[431px]"
              />
            </div>
          </div>
        </div>
      </div>

      
      <div className="w-full max-w-[1440px] mx-auto bg-[#03837E] py-14 relative">
        <div className="max-w-[1440px] mx-auto px-4">
          <h3 className="text-2xl lg:text-[40px] xl:text-[40px] font-semibold mb-10 text-white text-center">
            Outcome
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 text-white text-left max-w-4xl mx-auto">
            {caseStudy.outcome.map((item, i) => (
              <li key={i} className="flex items-start gap-3 justify-start">
                <WhiteBullet />
                <span>{item}</span>
              </li>
            ))}
          </ul>
              {/* Decorative triangles */}
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

      {/* Explore More */}
      <div className="max-w-[1440px] mx-auto px-4 py-12 space-y-20">
        <div>
          <h3 className="text-center text-2xl lg:text-[40px] xl:text-[40px] font-semibold mb-10">
            Explore More Case Studies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            {caseStudy.exploreMore.map((p) => (
              <div
                key={p.id}
                className="flex flex-col gap-2 hover:scale-[1.02] transition"
              >
                <Link to={`/casestudies/${p.id}`}>
                  <img
                    src={p.image}
                    alt={p.name}
                    className="object-cover"
                    style={{ width: "330px", height: "250px" }}
                  />
                </Link>
                <h4 className="font-medium">{p.name}</h4>
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
            <button
              className="bg-[#03837E] text-white text-lg font-medium"
              style={{ width: "283px", height: "48px" }}
            >
              View All Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyDetail;
