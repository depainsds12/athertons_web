import React from "react";
import { useState, useEffect } from "react";
import aboutusbg4 from '../../assets/aboutus/aboutusbg4.jpg';
import quote from '../../assets/aboutus/quote.png';
import { getTestimonialsPage } from "../../api/routes";
import { getAxios } from "../../api/config";

const Testimonials = () => {
  const [testimonialData, setTestimonialData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchTestimonialPageData = async () => {
      try {
        const response = await getAxios().get(getTestimonialsPage);
        setTestimonialData(response?.data?.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch Home API:", error);
        setLoading(false);
      }
    };

    fetchTestimonialPageData();
  }, []);

  if (loading) {
    return <div>Loading testimonials...</div>;
  }

  if (!testimonialData) {
    return <div>Failed to load testimonials.</div>;
  }

  return (
    <section
      className="min-h-screen bg-white flex flex-col font-Poppins w-full"
      aria-labelledby="testimonials-heading"
    >
      <div
        className="relative w-full min-h-[150px] aspect-[1366/300] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${testimonialData?.banner_image})` }}
        role="presentation"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[#192437]/60" aria-hidden="true" />
        <h2
          id="testimonials-heading"
          className="relative z-10 text-white text-3xl md:text-[45px] lg:text-[55px] xl:text-[60px] font-bold tracking-wide text-center"
        >
          {testimonialData?.banner_title || "TESTIMONIALS"}
        </h2>
      </div>

      <div className="w-full flex justify-center mt-8">
        <h3 className="text-[#03837E] text-xl md:text-[30px] font-semibold text-center">
          Businesses You Can Back
        </h3>
      </div>

      <div className="w-full flex justify-center py-10 px-4 sm:px-6 md:px-10 xl:px-20">
        <div className="grid gap-8 w-full max-w-[1500px] grid-cols-1 md:grid-cols-2">
          {testimonialData?.data?.map((t, idx) => (
            <article
              key={idx}
              className="bg-[#F4F4F5] flex flex-col justify-between p-6 md:p-7 w-full min-h-[373px] "
              role="article"
              aria-labelledby={`testimonial-name-${idx}`}
            >
              <div className="flex flex-col">
                <div className="flex items-start gap-x-4">
                  <img
                    src={quote}
                    alt=""
                    aria-hidden="true"
                    className=" w-[84px] h-[60px] md:w-[106px] md:h-[76px] pl-1.5"
                  />
                  <div>
                    <div
                      id={`testimonial-name-${idx}`}
                      className="text-[#192437] text-lg md:text-[20px] font-semibold leading-7"
                    >
                      {t.name}
                    </div>
                    {t.job_title && (
                      <div
                        className="text-[#03837E] text-base leading-7 font-medium italic mt-1"
                        id={`testimonial-role-${idx}`}
                      >
                        {t.job_title}
                      </div>
                    )}
                  </div>
                </div>

                <div 
                  className="text-[#192437] font-normal text-base leading-7 tracking-normal mt-4"
                  dangerouslySetInnerHTML={{ __html: t.message }}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;