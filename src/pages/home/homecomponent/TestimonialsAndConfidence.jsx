import quote from "../../../assets/aboutus/quote.svg";
import triangleb from "../../../assets/triangleb.svg";
import triangleg from "../../../assets/triangleg.svg";
import trianglew from "../../../assets/trianglepurew.svg";

const TestimonialsAndConfidence = ({ apiData, testimonialData }) => {
  const renderHtmlContent = (html) => {
    return { __html: html || "" };
  };
  const parseContent = (htmlContent) => {
    if (!htmlContent) return [];

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlContent;

    const listItems = tempDiv.querySelectorAll("li");

    return Array.from(listItems).map((item) => {
      const content = item.innerHTML.split("<br>");
      return {
        title: content[0]?.trim() || "",
        description: content.slice(1).join(" ")?.trim() || "",
      };
    });
  };

  const leftContent = apiData?.building_confidence_description
    ? parseContent(apiData.building_confidence_description)
    : [""];
  return (
    <section className="relative flex flex-col w-full lg:flex-row font-poppins">
      <div className="lg:w-1/2 bg-[#03837E] text-white px-6 xl:px-20 py-10 space-y-8 relative z-10">
        <h2 className="text-[28px] font-semibold">
          {apiData?.building_confidence_title || "Building Confidence"}
        </h2>
        <div className="relative group w-[90%] max-w-[600px] overflow-hidden">
          <img
            src={apiData?.building_confidence_image}
            alt="Modern Building"
            className="aspect-[518/392] w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 bg-white px-4 py-2 text-[#03837E] text-[20px] font-semibold">
            Founded In <br /> 1981
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          {leftContent.map((item, idx) => (
            <article key={idx} className="flex flex-col">
              <h3 className="text-[20px] font-semibold text-white flex items-center gap-2 ">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <path
                    d="M6.5 0L12.1292 3.25V9.75L6.5 13L0.870835 9.75V3.25L6.5 0Z"
                    fill="white"
                  />
                </svg>
                {item.title}
              </h3>
              <p className=" mt-2 text-base leading-[28px] text-white">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="animationcostume2 absolute left-0 flex-col items-start justify-start hidden sm:flex top-25">
          <img
            src={triangleb}
            alt="triangle black"
            className="w-[70px] h-[70px] object-contain"
          />
          <img
            src={trianglew}
            alt="triangle white"
            className="w-[70px] h-[70px] object-contain -mt-6"
          />
        </div>

        {/* Bottom Triangle */}
        {/* <div className="absolute left-0 flex-col items-start justify-start hidden xl:flex bottom-25">
          <img
            src={triangleb}
            alt="triangle black"
            className="w-[70px] h-[70px] object-contain"
          />
          <img
            src={trianglew}
            alt="triangle white"
            className="w-[70px] h-[70px] object-contain -mt-6"
          />
        </div> */}
      </div>

      <div className="lg:w-1/2 bg-[#F4F4F5] px-6 xl:px-20 py-10 flex flex-col space-y-6 relative">
        <h2 className="text-[#192437] text-[28px] font-semibold">
          Client Testimonials
        </h2>

        {/* <div className="animate-bounce animationcostume2 hidden sm:flex absolute top-1/2 right-0 transform -translate-y-1/2 flex-col items-start justify-start w-[70px] h-[70px] 2xl:w-[70px] 2xl:h-[70px]">
          <img
            src={triangleg}
            alt="triangle black"
            className="w-[70px] xl:w-[80px] h-[70px] xl:h-[80px] object-contain"
          />
          <img
            src={trianglew}
            alt="triangle white"
            className="w-[70px] xl:w-[80px] h-[70px] xl:h-[80px] object-contain -mt-6"
          />
        </div> */}

        <div className="grid grid-cols-1 gap-8">
          {testimonialData.map((t, idx) => (
            <article
              key={t.id}
              className="flex flex-col h-auto pt-4 bg-white hover:shadow-2xl pl-7 pr-7 pb-7"
              role="article"
              aria-labelledby={`testimonial-name-${idx}`}
            >
              <div className="flex flex-col my-auto">
                <div className="flex items-start pt-2 gap-x-6">
                  <img
                    src={quote}
                    alt="Quote"
                    className="w-[70px] h-[80px] pl-1.5 object-contain"
                    aria-hidden="true"
                  />
                  <div className="flex flex-col my-auto">
                    <div
                      id={`testimonial-name-${t.id}`}
                      className="text-[#192437] text-lg md:text-[20px] font-semibold leading-7"
                    >
                      {t.name}
                    </div>
                    {t.job_title && (
                      <div className="text-[#03837E] text-base leading-7 font-medium italic mt-1">
                        {t.job_title}
                      </div>
                    )}
                  </div>
                </div>

                <div
                  dangerouslySetInnerHTML={renderHtmlContent(t.message)}
                  className="text-[#192437] font-normal text-base leading-7 mt-4"
                />
                {t.readMore && (
                  <span
                    className="text-[#03837E] font-medium cursor-pointer hover:underline mt-2"
                    role="link"
                    tabIndex={0}
                  >
                    Read More
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <button onClick={()=>{window.location.href = "/aboutus/testimonials"}} className="w-full max-w-[511px] h-[48px]  bg-[#03837E] flex items-center justify-center   text-white cursor-pointer  hover:border hover:border-[#03837E]  hover:bg-[#FFFFFF] hover:text-[#03837E]">
            <span className="text-lg font-medium">View All Testimonials</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsAndConfidence;
