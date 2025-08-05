import React, { useState, useEffect } from "react";

const HomeSlider = ({ sliderData = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (sliderData.length > 0) {
      const imageUrls = sliderData.map((item) => item.image);
      setImages(imageUrls);
    }
  }, [sliderData]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (sliderData.length > 1) {
      const interval = setInterval(() => {
        handleNext();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [sliderData.length, currentIndex]);

  const renderHtmlContent = (html) => {
    return { __html: html || "" };
  };

  if (sliderData.length === 0) {
    return (
      <div className="min-h-[500px] flex items-center justify-center">
        Loading slider...
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-[500px] flex justify-center items-center lg:h-screen xl:max-h-[600px] 2xl:max-h-[700px]">
      <div
        className="absolute inset-0 transition-all duration-500 bg-center bg-cover animate__animated animate__zoomIn"
        style={{
          backgroundImage: `url(${sliderData[currentIndex]?.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="absolute inset-0 bg-[#192437]/60 z-0"></div>

      <div className="relative z-10 flex flex-col items-start justify-center min-h-[480px] h-full section_padding text-white">
        {sliderData[currentIndex]?.subtitle && (
          <p className="lg:mb-4 text-base font-bold sm:text-lg md:text-2xl animate__animated animate__flipInX">
            {sliderData[currentIndex].subtitle}
          </p>
        )}

        {sliderData[currentIndex]?.title && (
          <h1 className="text-[28px] mb-3 sm:text-4xl md:text-5xl lg:text-6xl font-bold lg:mb-8 animate__animated animate__flipInX">
            {sliderData[currentIndex].title}
          </h1>
        )}

        {sliderData[currentIndex]?.description && (
          <div
            dangerouslySetInnerHTML={renderHtmlContent(
              sliderData[currentIndex].description
            )}
            className="text-[12px] sm:text-base  lg:text-lg w-full md:w-[50%] animate__animated animate__flipInX"
          />
        )}

        <button className="bg-[#03837E] w-[170px] h-[40px] md:w-[170px] md:h-[48px] shadow-[0px_4px_10px_0px_#00000080] mt-10 cursor-pointer hover:border hover:border-[#03837E] hover:bg-[#FFFFFF] hover:text-[#03837E]">
          <p className="text-lg font-[500]">Find Out More</p>
        </button>

        {sliderData.length > 1 && (
          <div className="absolute bottom-0 right-7 xl:right-15 flex items-center gap-6">
            <button
              onClick={handlePrev}
              className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[60px] md:h-[60px] flex items-center justify-center bg-white rounded-full transition hover:bg-[#03837E] group mb-4 cursor-pointer"
              aria-label="Previous slide"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.6667 20H8.33341"
                  stroke="#03837E"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition group-hover:stroke-white"
                />
                <path
                  d="M20 8.33301L8.33333 19.9997L20 31.6663"
                  stroke="#03837E"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition group-hover:stroke-white"
                />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[60px] md:h-[60px] flex items-center justify-center bg-white rounded-full transition hover:bg-[#03837E] group mb-4 cursor-pointer"
              aria-label="Next slide"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.33325 20H31.6666"
                  stroke="#03837E"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition group-hover:stroke-white"
                />
                <path
                  d="M20 8.33301L31.6667 19.9997L20 31.6663"
                  stroke="#03837E"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition group-hover:stroke-white"
                />
              </svg>
            </button>
          </div>
        )}

        {sliderData.length > 1 && (
          <div className="absolute flex gap-4 bottom-10 left-5 sm:left-7 md:left-10  lg:left-21">
            {sliderData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`md:w-4 md:h-4 sm:w-3 sm:h-3 h-2.5 w-2.5 rounded-full transition ${
                  idx === currentIndex ? "bg-[#03837E]" : "bg-white"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeSlider;
