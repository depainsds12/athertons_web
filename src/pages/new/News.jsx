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
  return (
    <div className="w-full mb-8">
      {/* Banner */}
      <div
        className="relative w-full aspect-[1366/300] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${newsbg})` }}
      >
        <div className="absolute inset-0 bg-[#192437] opacity-60 z-10" />
        <h1
          id="page-heading"
          className="relative z-20 text-white text-[20px] sm:text-[36px] md:text-[48px] xl:text-[60px] 2xl:text-[80px] font-bold leading-[1] text-center"
        >
          NEWS & INSIGHT
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
          {newsData.map((item, index) => (
            <li
              key={index}
              className="flex flex-col sm:flex-row gap-4 items-start h-full"
            >
              <img
                src={item.img}
                alt={`News: ${item.title}`}
                className="
                  object-cover
                  w-[287px] h-[188px] mx-auto
                  sm:mx-0
                  sm:w-[150px] sm:h-[130px]
                  md:w-[180px] md:h-[140px]
                  lg:w-[200px] lg:h-[165px]
                  xl:w-[287px] xl:h-[188px]
                  2xl:w-[300px] 2xl:h-[195px]
                  flex-shrink-0
                "
              />
              {/* Text content */}
              <div className="flex flex-col flex-1 justify-between h-full">
                <div>
                  <h3 className=" text-[#192437]  font-semibold text-[18px] sm:text-[20px] leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-normal text-[14px] sm:text-[16px] leading-[24px] sm:leading-[28px] mt-1.5 lg:mt-0.5 xl:mt-1.5">
                    {item.desc}
                  </p>
                </div>
                <Link
                  to={`/newsandinsight/${index + 1}`}   // <-- dynamic link
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
