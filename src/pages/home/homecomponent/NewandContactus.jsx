import React from 'react';
import triangleg from '../../../assets/triangleg.svg';
import trianglew from '../../../assets/trianglew.svg';

const NewandContactus = () => {
  return (
    <section
      className=" relative flex flex-col xl:flex-row w-full justify-between px-6 xl:px-[101px] pb-12 mt-16"
      aria-label="News and Contact Section"
    >
      {/* Left Section: News & Insights */}
   <div className="w-full xl:w-1/2 pr-0 xl:pr-[60px]">
  <h2
    className="font-poppins font-semibold text-[#192437] text-[28px] md:text-[32px] xl:text-[36px] leading-[100%] mb-8"
    aria-label="News and Insights"
  >
    News & Insights
  </h2>

  <ul className="space-y-6" role="list" aria-labelledby="news-list">
    {[1, 2, 3].map((item) => (
      <li
        key={item}
        role="listitem"
        className="flex flex-col sm:flex-row gap-4 items-start"
        aria-label="News Item"
      >
        <img
          src="/images/ty-menai.jpg"
          alt="Tŷ Menai Project"
          className="
            border border-[#D6D6D6]
            object-cover
            w-full h-[200px]
            sm:w-[220px] sm:h-[165px]
            xl:w-[234px] xl:h-[177px]
          "
        />
        <div className="flex flex-col gap-2">
          <h3
            className="font-poppins font-semibold text-[20px] leading-[100%]"
            aria-label="News Heading"
          >
            Lorem Ipsum dummy Heading Text
          </h3>
          <p
            className="font-poppins font-normal text-[16px] leading-[28px]"
            aria-label="News Description"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <a
            href="#"
            aria-label="View Details"
            className="underline text-[#03837E] font-poppins font-medium text-[18px] leading-[100%]"
          >
            View Details
          </a>
        </div>
      </li>
    ))}
  </ul>

  <button
    type="button"
    aria-label="View All News and Insights"
    className="w-full xl:w-[511px] h-[48px] bg-[#03837E] text-white cursor-pointer  hover:border hover:border-[#03837E]  hover:bg-[#FFFFFF] hover:text-[#03837E] font-poppins font-medium text-[18px] text-center mt-8"
  >
    View All News & Insights
  </button>
</div>

<div className=" sm:flex absolute top-0 right-0 flex-col items-start justify-start w-[50px] h-[50px]">
            <img src={triangleg} alt="triangle black" className="xl:w-[101px] md:w-[70px] xl:h-[101px] md:h-[70px]  object-contain" />
            <img src={trianglew} alt="triangle white" className="xl:w-[101px]md: w-[70px] xl:h-[101px] md:h-[70px]   object-contain -mt-6 xl:-mt-6" />
          </div>

          <div className=" sm:flex absolute bottom-30 left-0 flex-col items-start justify-start w-[50px] h-[50px]">
               <img src={triangleg} alt="triangle black" className="xl:w-[101px] md:w-[70px] xl:h-[101px] md:h-[70px]  object-contain" />
               <img src={trianglew} alt="triangle white" className="xl:w-[101px]md: w-[70px] xl:h-[101px] md:h-[70px]   object-contain -mt-6 xl:-mt-6" />
             </div> 

      {/* Right Section: Contact Us */}
      <div className="w-full xl:w-1/2 mt-12 xl:mt-0 flex flex-col items-center xl:items-end">
        <h2
          className="font-poppins font-semibold text-[#192437] text-[28px] md:text-[32px] xl:text-[36px] leading-[100%] mb-8 self-center xl:self-start xl:ml-6"
          aria-label="Contact Us"
        >
          Contact Us
        </h2>
        <form
          aria-label="Contact Us Form"
          className="bg-[#F4F4F5] p-6 md:p-8 w-full max-w-[500px] flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex gap-4">
            <div className="flex flex-col w-1/2">
              <label htmlFor="firstName" className="text-xs md:text-sm font-semibold mb-1 text-[#192437]">
                First Name*
              </label>
              <input
                id="firstName"
                type="text"
                required
                className="border border-[#D6D6D6] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#03837E] bg-white h-[50px]"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="lastName" className="text-xs md:text-sm font-semibold mb-1 text-[#192437]">
                Last Name*
              </label>
              <input
                id="lastName"
                type="text"
                required
                className="border border-[#D6D6D6] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#03837E] bg-white h-[50px]"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-xs md:text-sm font-semibold mb-1 text-[#192437]">
              Email Address*
            </label>
            <input
              id="email"
              type="email"
              required
              className="border border-[#D6D6D6] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#03837E] bg-white h-[50px]"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="text-xs md:text-sm font-semibold mb-1 text-[#192437]">
              Phone Number*
            </label>
            <input
              id="phone"
              type="tel"
              required
              className="border border-[#D6D6D6] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#03837E] bg-white h-[50px]"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col w-1/2">
              <label htmlFor="company" className="text-xs md:text-sm font-semibold mb-1 text-[#192437]">
                Company Name*
              </label>
              <input
                id="company"
                type="text"
                required
                className="border border-[#D6D6D6] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#03837E] bg-white h-[50px]"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="subject" className="text-xs md:text-sm font-semibold mb-1 text-[#192437]">
                Subject*
              </label>
              <input
                id="subject"
                type="text"
                required
                className="border border-[#D6D6D6] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#03837E] bg-white h-[50px]"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-xs md:text-sm font-semibold mb-1 text-[#192437]">
              Your Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="border border-[#D6D6D6] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#03837E] bg-white resize-none h-[120px]"
            />
          </div>

          <button
            type="submit"
            aria-label="Submit Contact Us Form"
            className="h-[48px] bg-[#03837E] text-white cursor-pointer  hover:border hover:border-[#03837E]  hover:bg-[#FFFFFF] hover:text-[#03837E] font-poppins font-medium text-[18px] text-center mt-4  transition-colors"
          >
            Contact Us
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewandContactus;
