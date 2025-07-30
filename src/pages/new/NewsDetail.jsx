import React from "react";
import { useParams } from "react-router-dom";
import newsData from "../../data/newsData";

const NewsDetail = () => {
  const { newsId } = useParams();
  const data = newsData.find((item) => item.id === newsId);

  if (!data) return <div className="p-10">News not found</div>;

  return (
    <div className="w-full font-Poppins mb-8" role="main" aria-labelledby="news-heading">
      {/* Banner */}
      <div
        role="banner"
        className="relative w-full aspect-[1366/300] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${data.bannerImage})` }}
      >
        <div className="absolute inset-0 bg-[#192437] opacity-60 z-10" />
        <h1
          id="news-heading"
          className="relative z-20 text-white text-[36px] sm:text-[48px] font-bold text-center"
        >
          {data.title}
        </h1>
      </div>

      {/* Content */}
      <section
        className="px-6 py-10 bg-white xl:mx-20 mx-6 lg:mx-14"
        aria-labelledby="news-content-heading"
      >
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Image */}
          <div className="flex-shrink-0 flex justify-center xl:mr-5">
            <img
              src={data.image}
              alt={`Illustration for ${data.title}`}
              className="w-full max-w-[556px] h-auto object-cover lg:w-[556px] lg:h-[422px]"
            />
          </div>

          {/* Right: Text */}
          <div className="flex flex-col justify-start ml-2">
            <h2
              id="news-content-heading"
              className="text-[32px] lg:text-[40px] text-[#192437] font-semibold"
            >
              {data.subheading}
            </h2>
            <p className="italic font-[500] text-[20px] mt-3 mb-5">{data.description}</p>

            <ul className="mb-4 space-y-3" role="list">
              {data.points.map((p, idx) => (
                <li key={idx} className="flex items-start gap-3" role="listitem">
                  <svg
                    width="12"
                    height="14"
                    viewBox="0 0 12 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 mt-1"
                    aria-hidden="true"
                  >
                    <path
                      d="M6.10547 0.982422L11.7346 4.23242V10.7324L6.10547 13.9824L0.476304 10.7324V4.23242L6.10547 0.982422Z"
                      fill="#192437"
                    />
                  </svg>
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <p className="mt-3">{data.summary}</p>
          </div>
        </div>

        {/* Paragraphs below */}
        <div className="mt-12 flex flex-col gap-6">
          {data.paragraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewsDetail;
