import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-[#192437]">
      <div className="w-full bg-[#192437] h-[52px] flex items-center justify-center px-2 text-center">
        <span className="text-white text-xs sm:text-sm md:text-base lg:text-[20px] font-semibold leading-snug mx-1">
          Athertons is the trading name for Atherton & Partners Limited (01579933)
        </span>
      </div>

      <div className="w-full bg-[#03837E] flex flex-col  sm:items-center lg:flex-row lg:items-start lg:justify-between px-6 py-10 gap-8">
        {/* 1. Logo */}
        <div className="flex flex-col items-center lg:items-center flex-1">
          <img
            src="/logo.png"
            alt="Athertons Logo"
            className="w-[100px] h-[90px] sm:w-[120px] sm:h-[110px] object-contain mb-4"
          />
          <div className="flex items-center gap-4 mt-2">
            <span className="inline-block w-[35px] md:w-[48px] h-[35px] md:h-[48px] border border-[#3D6AD6] bg-white flex items-center justify-center rounded-full">
              <img
                src="/images/facebooklogo.png"
                alt="Facebook"
                className="md:w-[26px] md:h-[26px] w-[17px] h-[17px] object-contain mt-2 ml-2 md:ml-2.5 md:mt-2.25"
              />
            </span>
            <span className="inline-block w-[35px] md:w-[48px] h-[35px] md:h-[48px] border border-[#D73F8C] bg-white flex items-center justify-center rounded-full">
              <img
                src="/images/instagramlogo.png"
                alt="Instagram"
                className="md:w-[26px] md:h-[26px] w-[17px] h-[17px] mt-2 ml-2 md:ml-2.5 md:mt-2.25 object-contain"
              />
            </span>
            <span className="inline-block w-[35px] md:w-[48px] h-[35px] md:h-[48px] border border-black bg-white flex items-center justify-center rounded-full">
              <img
                src="/images/twitterlogo.png"
                alt="X"
                className="md:w-[26px] md:h-[26px] w-[17px] h-[17px] mt-2 ml-2 md:ml-2.5 md:mt-2.25 object-contain"
              />
            </span>
            <span className="inline-block w-[35px] md:w-[48px] h-[35px] md:h-[48px] border border-[#BD081C] bg-white flex items-center justify-center rounded-full">
              <img
                src="/images/pinterestlogo.png"
                alt="Pinterest"
                className="w-[22px] h-[22px] md:w-[32px] md:h-[32px] ml-1.5 mt-1.5 md:ml-1.75 md:mt-1.75 object-contain"
              />
            </span>
          </div>
        </div>

        {/* 2. Services and Quick Links for small screen side-by-side */}
        <div className="flex flex-row justify-center gap-8 w-full lg:flex-row lg:flex-1">
          {/* Services */}
          <div className="flex flex-col items-start sm:items-center lg:items-start flex-1">
            <span className="text-white font-semibold text-sm md:text-base mb-4">Our Services</span>
            <Link to="/services/consultancy_smartdesign" className="text-white text-sm md:text-base leading-[28px] hover:underline">Smart Design</Link>
            <Link to="/services/bms_ems_technology" className="text-white text-sm md:text-base leading-[28px] hover:underline">BMS & EMS Technology</Link>
            <Link to="/services/me_engineering" className="text-white text-sm md:text-base leading-[28px] hover:underline">M&E Engineering</Link>
            <Link to="/services/eco_solutions" className="text-white text-sm md:text-base leading-[28px] hover:underline">Eco Solutions</Link>
            <Link to="/services/light_civil_engineering" className="text-white text-sm md:text-base leading-[28px] hover:underline">Light Civil Engineering</Link>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start sm:items-center lg:items-start flex-1">
            <span className="text-white font-semibold text-sm md:text-base mb-4">Quick Links</span>
            <Link to="/aboutus/meetourteam" className="text-white text-sm md:text-base leading-[28px] hover:underline">Meet Our Team</Link>
            <Link to="/aboutus/accreditation_Membership" className="text-white text-sm md:text-base leading-[28px] hover:underline">Accreditations and Membership</Link>
            <Link to="/aboutus/careers" className="text-white text-sm md:text-base leading-[28px] hover:underline">Careers</Link>
            <Link to="/aboutus/testimonials" className="text-white text-sm md:text-base leading-[28px] hover:underline">Testimonials</Link>
          </div>
        </div>

        {/* 3. Contact Us */}
      <div className="flex flex-col sm:items-center items-start justify-start lg:items-start flex-1">
  <span className="text-white font-semibold text-sm md:text-base mb-4">Contact Us</span>
  
  <span className="flex items-center justify-center lg:justify-start text-white text-sm md:text-base leading-[28px] mb-2">
    <svg className="mr-2.5" width="21" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_31_41)">
        <path d="M15.75 8C15.75 13.25 9 17.75 9 17.75C9 17.75 2.25 13.25 2.25 8C2.25 6.20979 2.96116 4.4929 4.22703 3.22703C5.4929 1.96116 7.20979 1.25 9 1.25C10.7902 1.25 12.5071 1.96116 13.773 3.22703C15.0388 4.4929 15.75 6.20979 15.75 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 10.25C10.2426 10.25 11.25 9.24264 11.25 8C11.25 6.75736 10.2426 5.75 9 5.75C7.75736 5.75 6.75 6.75736 6.75 8C6.75 9.24264 7.75736 10.25 9 10.25Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_31_41">
          <rect width="18" height="18" fill="white" transform="translate(0 0.5)" />
        </clipPath>
      </defs>
    </svg>
    19-21 Grange Mount, Birkenhead, Prenton CH43 4XN, UK
  </span>

  <span className="flex items-center justify-center lg:justify-start text-white text-sm md:text-base leading-[28px] mb-2">
    <svg className="mr-2.5" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3.5H15C15.825 3.5 16.5 4.175 16.5 5V14C16.5 14.825 15.825 15.5 15 15.5H3C2.175 15.5 1.5 14.825 1.5 14V5C1.5 4.175 2.175 3.5 3 3.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.5 5L9 10.25L1.5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    info@athertons.co.uk
  </span>

  <span className="flex items-center justify-center lg:justify-start text-white text-sm md:text-base leading-[28px]">
    <svg className="mr-2.5" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_31_39)">
        <path d="M11.2875 4.25C12.0201 4.39292 12.6933 4.75119 13.2211 5.27895C13.7488 5.80671 14.1071 6.47995 14.25 7.2125M11.2875 1.25C12.8095 1.41908 14.2287 2.10063 15.3122 3.18276C16.3957 4.26488 17.079 5.68326 17.25 7.205M16.5 13.19V15.44C16.5009 15.6489 16.4581 15.8556 16.3744 16.047C16.2907 16.2384 16.168 16.4102 16.0141 16.5514C15.8602 16.6926 15.6784 16.8001 15.4806 16.867C15.2827 16.9339 15.073 16.9588 14.865 16.94C12.5571 16.6892 10.3403 15.9006 8.39251 14.6375C6.58038 13.486 5.04401 11.9496 3.89251 10.1375C2.62499 8.1809 1.83619 5.95325 1.59001 3.635C1.57127 3.4276 1.59592 3.21857 1.66239 3.02122C1.72886 2.82387 1.83569 2.64252 1.97609 2.48872C2.11648 2.33491 2.28736 2.21203 2.47785 2.12789C2.66834 2.04375 2.87427 2.0002 3.08251 2H5.33251C5.69649 1.99642 6.04935 2.12531 6.32533 2.36265C6.60131 2.59999 6.78157 2.92959 6.83251 3.29C6.92748 4.01005 7.1036 4.71705 7.35751 5.3975C7.45842 5.66594 7.48026 5.95769 7.42044 6.23816C7.36062 6.51863 7.22166 6.77608 7.02001 6.98L6.06751 7.9325C7.13518 9.81016 8.68985 11.3648 10.5675 12.4325L11.52 11.48C11.7239 11.2784 11.9814 11.1394 12.2619 11.0796C12.5423 11.0198 12.8341 11.0416 13.1025 11.1425C13.783 11.3964 14.49 11.5725 15.21 11.6675C15.5743 11.7189 15.9071 11.9024 16.1449 12.1831C16.3828 12.4638 16.5091 12.8222 16.5 13.19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_31_39">
          <rect width="18" height="18" fill="white" transform="translate(0 0.5)"/>
        </clipPath>
      </defs>
    </svg>
    0151 670 0666
  </span>
</div>

      </div>

      <div className="w-full bg-white h-auto flex flex-col sm:flex-row items-center justify-between gap-2 px-4 py-2 text-xs md:text-sm border-t border-[#e5e7eb] text-center sm:text-left">
        <span>Copyright © 2025 Athertons. All Rights Reserved.</span>
        <span className="text-center sm:text-right">Website By: sdsoftwares.co.uk</span>
      </div>
    </footer>
  );
};

export default Footer;
