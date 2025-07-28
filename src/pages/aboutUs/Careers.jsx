import React, { useRef, useState } from "react";
import aboutusbg3 from "../../assets/aboutus/aboutusbg3.jpg";

const Careers = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const fileInputRef = useRef();

  return (
    <section
      className="bg-white flex flex-col font-Poppins w-full"
      aria-labelledby="careers-heading"
    >
      {/* Header */}
      <div
        className="relative min-h-[180px] aspect-[1366/300] flex items-center justify-center bg-cover bg-center w-full"
        style={{ backgroundImage: `url(${aboutusbg3})` }}
        role="presentation"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[#192437]/60" />
        <h2
          id="careers-heading"
          className="relative z-10 text-white text-[20px] sm:text-[36px] md:text-[48px] xl:text-[60px] 2xl:text-[80px] font-bold tracking-wide text-center"
        >
          CAREERS
        </h2>
      </div>

      {/* Register Interest */}
      <div className="w-full flex flex-col items-center mt-10">
        <h3 className="text-[#192437] text-2xl md:text-[40px] font-semibold text-center">
          Register Your Interest
        </h3>
        <p className="text-[#03837E] text-base md:text-[20px] font-semibold text-center mt-1 mb-8 cursor-pointer hover:underline">
          Join us now
        </p>
      </div>

      {/* Main Content */}
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-10 px-4 mb-16 max-w-[1600px] mx-auto">
        {/* Form Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <form
            className="bg-[#F4F4F5] border border-[#D6D6D6] p-6 md:p-8 w-full max-w-[629px] flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex gap-4 xl:gap-8">
              <div className="flex flex-col w-1/2">
                <label className="text-xs md:text-sm font-semibold mb-1 text-[#192437]">
                  First Name*
                </label>
                <input
                  type="text"
                  required
                  className="border border-[#D6D6D6] px-3 py-2 text-sm bg-white h-[50px] focus:outline-none focus:ring-2 focus:ring-[#03837E]"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label className="text-xs md:text-sm font-semibold mb-1 text-[#192437]">
                  Last Name*
                </label>
                <input
                  type="text"
                  required
                  className="border border-[#D6D6D6] px-3 py-2 text-sm bg-white h-[50px] focus:outline-none focus:ring-2 focus:ring-[#03837E]"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-xs md:text-sm font-semibold mb-1 text-[#192437]">
                Phone Number*
              </label>
              <input
                type="tel"
                required
                className="border border-[#D6D6D6] px-3 py-2 text-sm bg-white h-[50px] focus:outline-none focus:ring-2 focus:ring-[#03837E]"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-xs md:text-sm font-semibold mb-1 text-[#192437]">
                Email Address*
              </label>
              <input
                type="email"
                required
                className="border border-[#D6D6D6] px-3 py-2 text-sm bg-white h-[50px] focus:outline-none focus:ring-2 focus:ring-[#03837E]"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-xs md:text-sm font-semibold mb-1 text-[#192437]">
                Upload Resume*
              </label>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="border border-[#D6D6D6] py-2 mt-3 text-sm bg-white font-medium cursor-pointer hover:bg-[#e0e0e0] focus:outline-none text-[#192437] text-center h-[50px] w-full max-w-[425px]"
                  onClick={() => fileInputRef.current.click()}
                >
                  Choose File
                </button>
                <input
                  type="file"
                  required
                  ref={fileInputRef}
                  className="hidden"
                  onChange={(e) => setResumeFile(e.target.files[0])}
                />
                <span className="text-xs md:text-sm font-semibold text-[#192437] whitespace-nowrap ml-2">
                  {resumeFile ? resumeFile.name : "Not Chosen File"}
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-xs md:text-sm font-semibold mb-1 text-[#192437]">
                Your Message
              </label>
              <textarea
                rows={4}
                className="border border-[#D6D6D6] px-3 py-2 text-sm bg-white resize-none h-[120px] focus:outline-none focus:ring-2 focus:ring-[#03837E]"
              />
            </div>

            <button
              type="submit"
              className="h-[48px] bg-[#03837E] text-white font-medium mt-4  cursor-pointer  hover:border hover:border-[#03837E]  hover:bg-[#FFFFFF] hover:text-[#03837E] transition-colors"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Details Section */}
        <div className="w-full lg:w-1/2 flex justify-center self-center">
          <div className="w-full max-w-[500px] xl:max-w-[568px] flex flex-col gap-8 p-2">
            <h4 className="text-[#192437] text-xl md:text-[36px] font-semibold mb-2">
              Contact Details
            </h4>

            {/* Email */}
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-16 h-16 xl:w-20 xl:h-20 mr-4 bg-[#03837E]">
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.33268 6.42871H31.666C33.4077 6.42871 34.8327 7.85371 34.8327 9.59538V28.5954C34.8327 30.337 33.4077 31.762 31.666 31.762H6.33268C4.59102 31.762 3.16602 30.337 3.16602 28.5954V9.59538C3.16602 7.85371 4.59102 6.42871 6.33268 6.42871Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M34.8327 9.5957L18.9993 20.679L3.16602 9.5957"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <div>
                <div className="text-[#192437] text-sm md:text-[20px] font-semibold mb-2 ">
                  Send Email
                </div>
                <a
                  href="mailto:info@athertons.co.uk"
                  className="text-[#03837E] text-sm md:text-[20px] font-semibold hover:underline"
                >
                  info@athertons.co.uk
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-16 h-16 xl:w-20 xl:h-20 mr-4 bg-[#03837E]">
                <svg width="38" height="38" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_71_1240)">
<path d="M23.8292 8.18294C25.3757 8.48467 26.797 9.24102 27.9112 10.3552C29.0253 11.4693 29.7817 12.8906 30.0834 14.4371M23.8292 1.84961C27.0422 2.20655 30.0384 3.64539 32.3258 5.92987C34.6131 8.21436 36.0557 11.2087 36.4167 14.4213M34.8334 27.0563V31.8063C34.8352 32.2472 34.7449 32.6837 34.5682 33.0877C34.3915 33.4918 34.1324 33.8545 33.8075 34.1526C33.4826 34.4507 33.099 34.6776 32.6812 34.8189C32.2635 34.9602 31.8209 35.0126 31.3817 34.9729C26.5095 34.4435 21.8295 32.7787 17.7176 30.1121C13.892 27.6812 10.6485 24.4377 8.21756 20.6121C5.54169 16.4815 3.87644 11.7787 3.35672 6.88461C3.31716 6.44677 3.36919 6.00548 3.50952 5.58885C3.64984 5.17222 3.87538 4.78937 4.17177 4.46468C4.46816 4.13998 4.82891 3.88057 5.23106 3.70294C5.6332 3.52531 6.06793 3.43336 6.50756 3.43294H11.2576C12.026 3.42538 12.7709 3.69748 13.3535 4.19854C13.9361 4.69959 14.3167 5.3954 14.4242 6.15628C14.6247 7.67638 14.9965 9.16893 15.5326 10.6054C15.7456 11.1722 15.7917 11.7881 15.6654 12.3802C15.5391 12.9723 15.2458 13.5158 14.8201 13.9463L12.8092 15.9571C15.0632 19.9211 18.3453 23.2031 22.3092 25.4571L24.3201 23.4463C24.7505 23.0206 25.2941 22.7272 25.8862 22.6009C26.4783 22.4746 27.0942 22.5207 27.6609 22.7338C29.0974 23.2698 30.59 23.6416 32.1101 23.8421C32.8792 23.9506 33.5816 24.338 34.0837 24.9306C34.5859 25.5233 34.8527 26.2798 34.8334 27.0563Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_71_1240">
<rect width="38" height="38" fill="white" transform="translate(0 0.266602)"/>
</clipPath>
</defs>
</svg>

              </span>
              <div>
                <div className="text-[#192437] text-sm md:text-[20px] font-semibold mb-2 ">
                  Call Us
                </div>
                <a
                  href="tel:01516700666"
                  className="text-[#03837E] text-sm md:text-[20px] font-semibold hover:underline"
                >
                  0151 670 0666
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-16 h-16 xl:w-20 xl:h-20 mr-4 bg-[#03837E]">
              <svg width="38" height="38" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_71_1245)">
<path d="M33.25 16.0996C33.25 27.1829 19 36.6829 19 36.6829C19 36.6829 4.75 27.1829 4.75 16.0996C4.75 12.3203 6.25133 8.69573 8.92373 6.02334C11.5961 3.35094 15.2207 1.84961 19 1.84961C22.7793 1.84961 26.4039 3.35094 29.0763 6.02334C31.7487 8.69573 33.25 12.3203 33.25 16.0996Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 20.8496C21.6234 20.8496 23.75 18.723 23.75 16.0996C23.75 13.4763 21.6234 11.3496 19 11.3496C16.3766 11.3496 14.25 13.4763 14.25 16.0996C14.25 18.723 16.3766 20.8496 19 20.8496Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_71_1245">
<rect width="38" height="38" fill="white" transform="translate(0 0.266602)"/>
</clipPath>
</defs>
</svg>

              </span>
              <div>
                <div className="text-[#192437] text-sm md:text-[20px] font-semibold mb-2">
                  Visit
                </div>
                <a
                  href="https://maps.google.com/?q=19-21 Grange Mount, Birkenhead, Prenton CH43 4XN, UK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#03837E] text-sm md:text-[20px] font-semibold hover:underline"
                >
                  19–21 Grange Mount, Birkenhead,
                  <br />
                  Prenton CH43 4XN, UK
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
