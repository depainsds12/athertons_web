import React from "react";


const ContactUs = () => {
  return (
    <>
      {/* Banner Section */}
      <div
        className="relative w-full min-h-[150px] aspect-[1366/300] flex items-center justify-center bg-cover bg-center  mx-auto"
        style={{ backgroundImage: `url(/contactusbg.jpg)` }}
        role="presentation"
        aria-hidden="true"
      >

        <div className="absolute inset-0 bg-[#192437]/60" aria-hidden="true" />
        <h2
          className="relative z-10 text-white text-3xl md:text-[45px] lg:text-[55px] xl:text-[60px] font-bold tracking-wide text-center"
        >
          CONTACT US
        </h2>
      </div>
      <section className="w-full flex flex-col lg:flex-row px-4 md:px-10 lg:px-20 xl:px-32 py-16 gap-10 ">
        {/* Form Container */}
        <div className="w-full xl:w-1/2 flex justify-center items-center">
          <form
            className="bg-[#F4F4F5] p-6 md:p-8 w-full max-w-[629px] flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Name Inputs */}
            <div className="flex gap-4 xl:gap-8.75">
              <div className="flex flex-col w-1/2">
                <label className="text-xs md:text-sm font-semibold mb-1 text-[#192437]">
                  First Name*
                </label>
                <input
                  type="text"
                  required
                  className="border border-[#D6D6D6] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#03837E] bg-white h-[50px]"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label className="text-xs md:text-sm font-semibold mb-1 text-[#192437]">
                  Last Name*
                </label>
                <input
                  type="text"
                  required
                  className="border border-[#D6D6D6] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#03837E] bg-white h-[50px]"
                />
              </div>
            </div>

            {/* Email and Phone */}
            <div className="flex gap-4 xl:gap-8.75">
              <div className="flex flex-col w-1/2">
                <label className="text-xs md:text-sm font-semibold mb-1 text-[#192437]">
                  Your Email*
                </label>
                <input
                  type="email"
                  required
                  className="border border-[#D6D6D6] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#03837E] bg-white h-[50px]"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label className="text-xs md:text-sm font-semibold mb-1 text-[#192437]">
                  Phone*
                </label>
                <input
                  type="tel"
                  required
                  className="border border-[#D6D6D6] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#03837E] bg-white h-[50px]"
                />
              </div>
            </div>

            {/* Company and Subject */}
            <div className="flex gap-4 xl:gap-8.75">
              <div className="flex flex-col w-1/2">
                <label className="text-xs md:text-sm font-semibold mb-1 text-[#192437]">
                  Company Name*
                </label>
                <input
                  type="text"
                  required
                  className="border border-[#D6D6D6] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#03837E] bg-white h-[50px]"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label className="text-xs md:text-sm font-semibold mb-1 text-[#192437]">
                  Subject*
                </label>
                <input
                  type="text"
                  required
                  className="border border-[#D6D6D6] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#03837E] bg-white h-[50px]"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="text-xs md:text-sm font-semibold mb-1 text-[#192437]">
                Your Message
              </label>
              <textarea
                rows={4}
                className="border border-[#D6D6D6] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#03837E] bg-white resize-none h-[120px]"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="h-[48px] bg-[#03837E] text-white font-medium mt-4  cursor-pointer  hover:border hover:border-[#03837E]  hover:bg-[#FFFFFF] hover:text-[#03837E] transition-colors"
            >
              Contact Us
            </button>
          </form>
        </div>

        {/* Contact Info Container */}
        <div className="w-full xl:w-1/2 flex justify-center  lg:items-start ">
          <div className="w-full max-w-[444px] flex flex-col gap-8 p-2 gap-y-6">
            {/* Email */}
            <div className="flex items-start gap-8">
              <span className="flex items-center justify-center w-[80px] h-[80px] bg-[#03837E] text-white">
                <svg width="38" height="38" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.33268 6.42969H31.666C33.4077 6.42969 34.8327 7.85469 34.8327 9.59635V28.5964C34.8327 30.338 33.4077 31.763 31.666 31.763H6.33268C4.59102 31.763 3.16602 30.338 3.16602 28.5964V9.59635C3.16602 7.85469 4.59102 6.42969 6.33268 6.42969Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M34.8327 9.5957L18.9993 20.679L3.16602 9.5957" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </span>
              <div>
                <div className="text-[#192437] text-sm md:text-lg font-semibold mb-3">Send Email</div>
                <a
                  href="mailto:info@athertons.co.uk"
                  className="text-[#03837E] text-sm md:text-lg font-semibold hover:underline"
                >
                  info@athertons.co.uk
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-8">
              <span className="flex items-center justify-center w-[80px] h-[80px] bg-[#03837E] text-white">
                <svg width="38" height="38" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_303_438)">
                    <path d="M23.8291 8.18294C25.3756 8.48467 26.7969 9.24102 27.911 10.3552C29.0252 11.4693 29.7815 12.8906 30.0833 14.4371M23.8291 1.84961C27.0421 2.20655 30.0383 3.64539 32.3257 5.92987C34.613 8.21436 36.0556 11.2087 36.4166 14.4213M34.8333 27.0563V31.8063C34.8351 32.2472 34.7447 32.6837 34.5681 33.0877C34.3914 33.4918 34.1323 33.8545 33.8074 34.1526C33.4825 34.4507 33.0988 34.6776 32.6811 34.8189C32.2634 34.9602 31.8208 35.0126 31.3816 34.9729C26.5094 34.4435 21.8294 32.7787 17.7174 30.1121C13.8918 27.6812 10.6484 24.4377 8.21744 20.6121C5.54157 16.4815 3.87632 11.7787 3.3566 6.88461C3.31703 6.44677 3.36907 6.00548 3.50939 5.58885C3.64972 5.17222 3.87526 4.78937 4.17165 4.46468C4.46804 4.13998 4.82879 3.88057 5.23094 3.70294C5.63308 3.52531 6.06781 3.43336 6.50744 3.43294H11.2574C12.0258 3.42538 12.7708 3.69748 13.3534 4.19854C13.936 4.69959 14.3166 5.3954 14.4241 6.15628C14.6246 7.67638 14.9964 9.16893 15.5324 10.6054C15.7455 11.1722 15.7916 11.7881 15.6653 12.3802C15.539 12.9723 15.2456 13.5158 14.8199 13.9463L12.8091 15.9571C15.0631 19.9211 18.3452 23.2031 22.3091 25.4571L24.3199 23.4463C24.7504 23.0206 25.2939 22.7272 25.886 22.6009C26.4782 22.4746 27.0941 22.5207 27.6608 22.7338C29.0973 23.2698 30.5898 23.6416 32.1099 23.8421C32.8791 23.9506 33.5815 24.338 34.0836 24.9306C34.5857 25.5233 34.8525 26.2798 34.8333 27.0563Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_303_438">
                      <rect width="38" height="38" fill="white" transform="translate(0 0.266602)" />
                    </clipPath>
                  </defs>
                </svg>

              </span>
              <div>
                <div className="text-[#192437] text-sm md:text-lg font-semibold mb-3">Call Us</div>
                <a
                  href="tel:01516700666"
                  className="text-[#03837E] text-sm md:text-lg font-semibold hover:underline"
                >
                  0151 670 0666
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-8">
              <span className="flex items-center justify-center w-[80px] h-[80px] bg-[#03837E] text-white">
                <svg width="38" height="38" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_303_443)">
                    <path d="M33.25 16.0996C33.25 27.1829 19 36.6829 19 36.6829C19 36.6829 4.75 27.1829 4.75 16.0996C4.75 12.3203 6.25133 8.69573 8.92373 6.02334C11.5961 3.35094 15.2207 1.84961 19 1.84961C22.7793 1.84961 26.4039 3.35094 29.0763 6.02334C31.7487 8.69573 33.25 12.3203 33.25 16.0996Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M19 20.8496C21.6234 20.8496 23.75 18.723 23.75 16.0996C23.75 13.4763 21.6234 11.3496 19 11.3496C16.3766 11.3496 14.25 13.4763 14.25 16.0996C14.25 18.723 16.3766 20.8496 19 20.8496Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_303_443">
                      <rect width="38" height="38" fill="white" transform="translate(0 0.266602)" />
                    </clipPath>
                  </defs>
                </svg>

              </span>
              <div>
                <div className="text-[#192437] text-sm md:text-lg font-semibold mb-1">Visit</div>
                <a
                  href="https://maps.google.com/?q=19-21 Grange Mount, Birkenhead, Prenton CH43 4XN, UK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#03837E] text-sm md:text-lg font-semibold hover:underline"
                >
                  19–21 Grange Mount, Birkenhead,
                  <br />
                  Prenton CH43 4XN, UK
                </a>
              </div>
            </div>

            {/* Wrexham Office */}
            <div className="flex items-start gap-8">
              <span className="flex items-center justify-center w-[80px] h-[80px] bg-[#03837E] text-white">
                <svg width="38" height="38" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_303_443)">
                    <path d="M33.25 16.0996C33.25 27.1829 19 36.6829 19 36.6829C19 36.6829 4.75 27.1829 4.75 16.0996C4.75 12.3203 6.25133 8.69573 8.92373 6.02334C11.5961 3.35094 15.2207 1.84961 19 1.84961C22.7793 1.84961 26.4039 3.35094 29.0763 6.02334C31.7487 8.69573 33.25 12.3203 33.25 16.0996Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M19 20.8496C21.6234 20.8496 23.75 18.723 23.75 16.0996C23.75 13.4763 21.6234 11.3496 19 11.3496C16.3766 11.3496 14.25 13.4763 14.25 16.0996C14.25 18.723 16.3766 20.8496 19 20.8496Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_303_443">
                      <rect width="38" height="38" fill="white" transform="translate(0 0.266602)" />
                    </clipPath>
                  </defs>
                </svg>

              </span>
              <div>
                <div className="text-[#192437] text-sm md:text-lg font-semibold ">Our Wrexham Office</div>
                <p className="text-[#03837E] text-sm md:text-lg font-semibold mt-2">
                  Athertons Wrexham, 1st Floor
                  <br />
                  Dalton House, 35 Chester Street
                  <br />
                  Wrexham, LL13 8AH
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maps Section - below all content */}
      <div className="w-full flex flex-col md:flex-row items-center gap-6 px-4 md:px-10 lg:px-20 xl:px-32 pb-16">
        <iframe
          className="w-full md:w-[48%] h-[300px] md:h-[489px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2379.467926965286!2d-3.0357248!3d53.388569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b2704b55b77e9%3A0x9005aa45577452c!2sGrange%20House%2C%2019-21%20Grange%20Mount%2C%20Birkenhead%2C%20Prenton%20CH43%204XN%2C%20UK!5e0!3m2!1sen!2sin!4v1752507524986!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <iframe
          className="w-full md:w-[48%] h-[300px] md:h-[489px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2398.498874132858!2d-2.994213174363613!3d53.047343147054924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487ac71c2026e3df%3A0xf816ac676895e1af!2sHome%20of%20Offices%20Limited!5e0!3m2!1sen!2sin!4v1752507638201!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </>
  );
};

export default ContactUs;
