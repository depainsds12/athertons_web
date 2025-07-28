import React from "react";
import aboutusbg4 from '../../assets/aboutus/aboutusbg4.jpg';
import quote from '../../assets/aboutus/quote.png';

const testimonials = [
  {
    name: "Knowsley Lane School and the wider Academy",
    role: "Lead Site Manager",
    content:
      "I am based in Knowsley Lane Primary School where Athertons have just completed a boiler replacement and a replacement of all the domestic water supply in the whole school. I have overseen many works within our 9 schools and usually it's not a pleasant experience, but on this occasion the whole process has been amazing. The lads were excellent, polite and professional throughout, even switching over...",
    readMore: true,
  },
  {
    name: "Lee Bell",
    role: "Site Manager, Read Construction",
    content:
      "Gents, I just wanted to take this opportunity to thank you all for your help and hard work to get the Bro Alun school extension not only complete but to a very high standard under difficult circumstances. We have had great feedback from the client, School as well as our head office. Your expertise and dedication may be sometimes be taken for granted after years of working together but be assured...",
    readMore: true,
  },
  {
    name: "Kroll Corlett Construction",
    role: "",
    content:
      "Just a quick email to say thank you for Athertons work on the Liverpool University M.I.F Building. Please send my thanks to Alan and the wider team. We had a really good handover and the client and end user are delighted with the end product. They also send their thanks. Looking forward to our next project very soon.",
    readMore: false,
  },
  {
    name: "Steve Day",
    role: "Gareth Rowlands and Matthew Nicholas from Read Construction",
    content:
      "We are very happy with the job which was delivered on programme, meaning you secured the next set of school orders thanks to great performance and solid",
    readMore: false,
  },
];

const Testimonials = () => {
  return (
    <section
      className="min-h-screen bg-white flex flex-col font-Poppins w-full"
      aria-labelledby="testimonials-heading"
    >
      <div
        className="relative w-full min-h-[150px] aspect-[1366/300] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutusbg4})` }}
        role="presentation"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[#192437]/60" aria-hidden="true" />
        <h2
          id="testimonials-heading"
          className="relative z-10 text-white text-3xl md:text-[45px] lg:text-[55px] xl:text-[60px] font-bold tracking-wide text-center"
        >
          TESTIMONIALS
        </h2>
      </div>

      <div className="w-full flex justify-center mt-8">
        <h3 className="text-[#03837E] text-xl md:text-[30px] font-semibold text-center">
          Businesses You Can Back
        </h3>
      </div>

      <div className="w-full flex justify-center py-10 px-4 sm:px-6 md:px-10 xl:px-20">
        <div className="grid gap-8 w-full max-w-[1500px] grid-cols-1 md:grid-cols-2">
          {testimonials.map((t, idx) => (
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
                    {t.role && (
                      <div
                        className="text-[#03837E] text-base leading-7 font-medium italic mt-1"
                        id={`testimonial-role-${idx}`}
                      >
                        {t.role}
                      </div>
                    )}
                  </div>
                </div>

                <div className="text-[#192437] font-normal text-base leading-7 tracking-normal mt-4">
                  {t.content}
                  {t.readMore && (
                    <span
                      className="text-[#03837E] font-medium cursor-pointer ml-1 hover:underline"
                      role="link"
                      tabIndex={0}
                    >
                      Read More
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
