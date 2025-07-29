import quote from "../../../assets/aboutus/quote.svg";
import triangleb from "../../../assets/triangleb.svg";
import triangleg from "../../../assets/triangleg.svg";
import trianglew from "../../../assets/trianglepurew.svg";

const leftContent = [
  {
    title: "Quality Assurance",
    description:
      "At ATHERTONS, we pride ourselves on maintaining the highest quality standards. Our critical mass, along with a team of skilled professionals and cutting-edge design tools, positions us to compete with the best in the industry. We are committed to delivering exceptional service to our clients, ensuring their satisfaction at every stage of a project. Our directors and senior management actively engage from concept to completion, reinforcing our client-focused approach.",
  },
  {
    title: "Collaborative Partnership",
    description:
      "Our reputation is built on long-standing client relationships. We value quality and understand that collaborative partnerships are essential. At ATHERTONS, we work closely with our clients, architects, and other stakeholders to achieve successful outcomes. Our commitment to excellence drives us to deliver results that exceed expectations. Directors and senior management play an active role in project development, ensuring seamless collaboration throughout.",
  },
  {
    title: "360 Approach",
    description:
      "ATHERTONS takes a holistic view of engineering design. Our team combines technical expertise with an understanding of architectural and structural nuances. Whether it’s designing HVAC systems, electrical layouts, or sustainable solutions, we adhere to regulations while maintaining the overall design integrity. Our 360-degree approach ensures comprehensive solutions that meet both functional and aesthetic requirements.",
  },
];

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
];

const TestimonialsAndConfidence = () => {
  return (
    <section className="relative flex flex-col w-full lg:flex-row font-poppins">
      {/* LEFT SIDE */}
      <div className="lg:w-1/2 bg-[#03837E] text-white px-6 xl:px-20 py-10 space-y-8 relative z-10">
        <h2 className="text-2xl font-semibold">Building Confidence</h2>
        <div className="relative overflow-hidden group">
          <img
            src="/images/building.jpg"
            alt="Modern Building"
            className="w-full max-h-[400px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 bg-white px-4 py-2 text-[#192437] font-semibold">
            Founded In <br /> 1981
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          {leftContent.map((item, idx) => (
            <article key={idx} className="flex flex-col">
              <h3 className="text-lg font-semibold text-white">
                • {item.title}
              </h3>
              <p className="text-sm leading-6 text-white">{item.description}</p>
            </article>
          ))}
        </div>

        {/* Top Triangle */}
        <div className="absolute left-0 flex-col items-start justify-start hidden sm:flex top-25">
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
        <div className="absolute left-0 flex-col items-start justify-start hidden xl:flex bottom-25">
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
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:w-1/2 bg-[#F4F4F5] px-6 xl:px-20 py-10 flex flex-col space-y-6 relative">
        <h2 className="text-[#192437] text-2xl font-semibold">
          Client Testimonials
        </h2>

        {/**righ triangle */}
        <div className="hidden sm:flex absolute top-1/2 right-0 transform -translate-y-1/2 flex-col items-start justify-start w-[70px] h-[70px] 2xl:w-[101px] 2xl:h-[101px]">
          <img
            src={triangleg}
            alt="triangle black"
            className="w-[70px] xl:w-[101px] h-[70px] xl:h-[101px] object-contain"
          />
          <img
            src={trianglew}
            alt="triangle white"
            className="w-[70px] xl:w-[101px] h-[70px] xl:h-[101px] object-contain -mt-6"
          />
        </div>

        <div className="grid grid-cols-1 gap-8">
          {testimonials.map((t, idx) => (
            <article
              key={idx}
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
                      id={`testimonial-name-${idx}`}
                      className="text-[#192437] text-lg md:text-[20px] font-semibold leading-7"
                    >
                      {t.name}
                    </div>
                    {t.role && (
                      <div className="text-[#03837E] text-base leading-7 font-medium italic mt-1">
                        {t.role}
                      </div>
                    )}
                  </div>
                </div>

                <div className="text-[#192437] font-normal text-base leading-7 mt-4">
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

        <div className="flex justify-center pt-4">
          <button className="w-[283px] h-[48px]  bg-[#03837E] flex items-center justify-center   text-white cursor-pointer  hover:border hover:border-[#03837E]  hover:bg-[#FFFFFF] hover:text-[#03837E]">
            <span className="text-lg font-medium">View All Testimonials</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsAndConfidence;
