"use client";

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Refs for dropdown containers and buttons
  const aboutDropdownRef = useRef(null);
  const servicesDropdownRef = useRef(null);
  const aboutButtonRef = useRef(null);
  const servicesButtonRef = useRef(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // For About dropdown
      if (
        aboutDropdownRef.current &&
        !aboutDropdownRef.current.contains(event.target) &&
        aboutButtonRef.current &&
        !aboutButtonRef.current.contains(event.target)
      ) {
        setAboutDropdown(false);
      }

      // For Services dropdown
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target) &&
        servicesButtonRef.current &&
        !servicesButtonRef.current.contains(event.target)
      ) {
        setServicesDropdown(false);
      }
    };

    // Only add listener if dropdown is open
    if (aboutDropdown || servicesDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [aboutDropdown, servicesDropdown]);

  return (
    <>
      <header
        className={`w-full bg-[#03837E]${
          isMenuOpen ? " fixed top-0 left-0 z-[101]" : ""
        }`}
        style={isMenuOpen ? { height: "110px" } : {}}
      >
        {/* Top bar - responsive layout */}
        <div className="w-full px-4 text-sm text-white ">
          {/* Desktop layout */}
          <div className="hidden md:flex flex-wrap items-center justify-between lg:h-[50px] h-auto mr-8 ml-8 xl:ml-20 xl:mr-20 py-2">
            <div className="flex flex-col items-center sm:flex-row gap-y-2 sm:gap-y-0 gap-x-6">
              <span className="flex items-center gap-1 text-base font-medium leading-none tracking-normal cursor-pointer">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 10.5C21 17.5 12 23.5 12 23.5C12 23.5 3 17.5 3 10.5C3 8.11305 3.94821 5.82387 5.63604 4.13604C7.32387 2.44821 9.61305 1.5 12 1.5C14.3869 1.5 16.6761 2.44821 18.364 4.13604C20.0518 5.82387 21 8.11305 21 10.5Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 13.5C13.6569 13.5 15 12.1569 15 10.5C15 8.84315 13.6569 7.5 12 7.5C10.3431 7.5 9 8.84315 9 10.5C9 12.1569 10.3431 13.5 12 13.5Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Wirral Office
              </span>
              <span className="flex items-center gap-1 text-base font-medium leading-none tracking-normal cursor-pointer">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 10.5C21 17.5 12 23.5 12 23.5C12 23.5 3 17.5 3 10.5C3 8.11305 3.94821 5.82387 5.63604 4.13604C7.32387 2.44821 9.61305 1.5 12 1.5C14.3869 1.5 16.6761 2.44821 18.364 4.13604C20.0518 5.82387 21 8.11305 21 10.5Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 13.5C13.6569 13.5 15 12.1569 15 10.5C15 8.84315 13.6569 7.5 12 7.5C10.3431 7.5 9 8.84315 9 10.5C9 12.1569 10.3431 13.5 12 13.5Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Wrexham Office
              </span>
            </div>
            <div className="flex flex-col items-center sm:flex-row gap-y-2 sm:gap-y-0 gap-x-6">
              <span className="flex items-center gap-1 text-base font-medium leading-none tracking-normal cursor-pointer">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 4.5H20C21.1 4.5 22 5.4 22 6.5V18.5C22 19.6 21.1 20.5 20 20.5H4C2.9 20.5 2 19.6 2 18.5V6.5C2 5.4 2.9 4.5 4 4.5Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 6.5L12 13.5L2 6.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                info@athertons.co.uk
              </span>
              <span className="flex items-center gap-1 text-base font-medium leading-none tracking-normal cursor-pointer">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.0501 5C16.0268 5.19057 16.9244 5.66826 17.6281 6.37194C18.3318 7.07561 18.8095 7.97326 19.0001 8.95M15.0501 1C17.0793 1.22544 18.9716 2.13417 20.4163 3.57701C21.8609 5.01984 22.7721 6.91101 23.0001 8.94M22.0001 16.92V19.92C22.0012 20.1985 21.9441 20.4742 21.8326 20.7293C21.721 20.9845 21.5574 21.2136 21.3521 21.4019C21.1469 21.5901 20.9046 21.7335 20.6408 21.8227C20.377 21.9119 20.0974 21.9451 19.8201 21.92C16.7429 21.5856 13.7871 20.5341 11.1901 18.85C8.77388 17.3147 6.72539 15.2662 5.19006 12.85C3.50003 10.2412 2.4483 7.27099 2.12006 4.18C2.09507 3.90347 2.12793 3.62476 2.21656 3.36162C2.30518 3.09849 2.44763 2.85669 2.63482 2.65162C2.82202 2.44655 3.04986 2.28271 3.30385 2.17052C3.55783 2.05833 3.8324 2.00026 4.11006 2H7.11006C7.59536 1.99522 8.06585 2.16708 8.43382 2.48353C8.80179 2.79999 9.04213 3.23945 9.11005 3.72C9.23668 4.68007 9.47151 5.62273 9.81006 6.53C9.9446 6.88792 9.97372 7.27691 9.89396 7.65088C9.81421 8.02485 9.62892 8.36811 9.36005 8.64L8.09006 9.91C9.51361 12.4135 11.5865 14.4864 14.0901 15.91L15.3601 14.64C15.6319 14.3711 15.9752 14.1858 16.3492 14.1061C16.7231 14.0263 17.1121 14.0555 17.4701 14.19C18.3773 14.5286 19.32 14.7634 20.2801 14.89C20.7658 14.9585 21.2095 15.2032 21.5266 15.5775C21.8437 15.9518 22.0122 16.4296 22.0001 16.92Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                0151 670 0666
              </span>
            </div>
          </div>

          {/* Mobile layout - stacked */}
          <div className="space-y-2 md:hidden">
            {/* First row - offices */}
            <div className="flex items-center justify-center gap-6 sm:gap-8">
              <span className="flex items-center gap-1 text-base font-medium cursor-pointer">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 10.5C21 17.5 12 23.5 12 23.5C12 23.5 3 17.5 3 10.5C3 8.11305 3.94821 5.82387 5.63604 4.13604C7.32387 2.44821 9.61305 1.5 12 1.5C14.3869 1.5 16.6761 2.44821 18.364 4.13604C20.0518 5.82387 21 8.11305 21 10.5Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 13.5C13.6569 13.5 15 12.1569 15 10.5C15 8.84315 13.6569 7.5 12 7.5C10.3431 7.5 9 8.84315 9 10.5C9 12.1569 10.3431 13.5 12 13.5Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Wirral Office
              </span>
              <span className="flex items-center gap-1 text-sm font-medium cursor-pointer">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 10.5C21 17.5 12 23.5 12 23.5C12 23.5 3 17.5 3 10.5C3 8.11305 3.94821 5.82387 5.63604 4.13604C7.32387 2.44821 9.61305 1.5 12 1.5C14.3869 1.5 16.6761 2.44821 18.364 4.13604C20.0518 5.82387 21 8.11305 21 10.5Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 13.5C13.6569 13.5 15 12.1569 15 10.5C15 8.84315 13.6569 7.5 12 7.5C10.3431 7.5 9 8.84315 9 10.5C9 12.1569 10.3431 13.5 12 13.5Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Wrexham Office
              </span>
            </div>

            {/* Second row - contact info */}
            <div className="flex items-center justify-center gap-6 sm:gap-8">
              <span className="flex items-center gap-1 text-sm font-medium cursor-pointer">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 4.5H20C21.1 4.5 22 5.4 22 6.5V18.5C22 19.6 21.1 20.5 20 20.5H4C2.9 20.5 2 19.6 2 18.5V6.5C2 5.4 2.9 4.5 4 4.5Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 6.5L12 13.5L2 6.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                info@athertons.co.uk
              </span>
              <span className="flex items-center gap-1 text-sm font-medium cursor-pointer">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.0501 5C16.0268 5.19057 16.9244 5.66826 17.6281 6.37194C18.3318 7.07561 18.8095 7.97326 19.0001 8.95M15.0501 1C17.0793 1.22544 18.9716 2.13417 20.4163 3.57701C21.8609 5.01984 22.7721 6.91101 23.0001 8.94M22.0001 16.92V19.92C22.0012 20.1985 21.9441 20.4742 21.8326 20.7293C21.721 20.9845 21.5574 21.2136 21.3521 21.4019C21.1469 21.5901 20.9046 21.7335 20.6408 21.8227C20.377 21.9119 20.0974 21.9451 19.8201 21.92C16.7429 21.5856 13.7871 20.5341 11.1901 18.85C8.77388 17.3147 6.72539 15.2662 5.19006 12.85C3.50003 10.2412 2.4483 7.27099 2.12006 4.18C2.09507 3.90347 2.12793 3.62476 2.21656 3.36162C2.30518 3.09849 2.44763 2.85669 2.63482 2.65162C2.82202 2.44655 3.04986 2.28271 3.30385 2.17052C3.55783 2.05833 3.8324 2.00026 4.11006 2H7.11006C7.59536 1.99522 8.06585 2.16708 8.43382 2.48353C8.80179 2.79999 9.04213 3.23945 9.11005 3.72C9.23668 4.68007 9.47151 5.62273 9.81006 6.53C9.9446 6.88792 9.97372 7.27691 9.89396 7.65088C9.81421 8.02485 9.62892 8.36811 9.36005 8.64L8.09006 9.91C9.51361 12.4135 11.5865 14.4864 14.0901 15.91L15.3601 14.64C15.6319 14.3711 15.9752 14.1858 16.3492 14.1061C16.7231 14.0263 17.1121 14.0555 17.4701 14.19C18.3773 14.5286 19.32 14.7634 20.2801 14.89C20.7658 14.9585 21.2095 15.2032 21.5266 15.5775C21.8437 15.9518 22.0122 16.4296 22.0001 16.92Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                0151 670 0666
              </span>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className="w-full bg-white">
          <div className="flex items-center justify-between px-0 ">
            {/* Left: Logo + Navigation */}
            <div className="flex items-center gap-10">
              <div className="w-[90px] h-[84px] flex items-center justify-center sm:w-[116px] sm:h-[107px] sm:ml-8 ml-2 xl:ml-20 cursor-pointer group">
                <img
                  src="/logo.png"
                  alt="Athertons Logo"
                  className="object-contain h-full"
                />
              </div>

              <nav className="hidden lg:flex items-center flex-nowrap gap-5 xl:gap-11 2xl:gap-14 text-black font-medium text-[15px] xl:text-base">
                <Link to="/" className="hover:text-[#03837E] cursor-pointer">
                  Home
                </Link>

                {/* About Us Dropdown */}
                <div
                  className="relative group"
                  ref={aboutDropdownRef}
                  onMouseEnter={() => setAboutDropdown(true)}
                  onMouseLeave={() => setAboutDropdown(false)}
                >
                  <button
                    ref={aboutButtonRef}
                    className="flex items-center gap-1 hover:text-[#03837E] bg-transparent cursor-pointer"
                  >
                    About Us
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M3 4.5L6 7.5L9 4.5"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {aboutDropdown && (
                    <div className="absolute left-0 top-full w-56 bg-white border border-[#D6D6D6] shadow z-50 flex flex-col">
                      <Link
                        to="/aboutus/meetourteam"
                        onClick={() => setAboutDropdown(false)}
                        className="px-4 py-2 text-black hover:text-white hover:bg-[#03837E] border-b border-[#D6D6D6] cursor-pointer transition-colors duration-200"
                      >
                        Meet Our Team
                      </Link>
                      <Link
                        to="/aboutus/accreditation_Membership"
                        onClick={() => setAboutDropdown(false)}
                        className="px-4 py-2 text-black hover:text-white hover:bg-[#03837E] border-b border-[#D6D6D6] cursor-pointer transition-colors duration-200"
                      >
                        Accreditations and Membership
                      </Link>
                      <Link
                        to="/aboutus/careers"
                        onClick={() => setAboutDropdown(false)}
                        className="px-4 py-2 text-black hover:text-white hover:bg-[#03837E] border-b border-[#D6D6D6] cursor-pointer transition-colors duration-200"
                      >
                        Career
                      </Link>
                      <Link
                        to="/aboutus/testimonials"
                        onClick={() => setAboutDropdown(false)}
                        className="px-4 py-2 text-black hover:text-white hover:bg-[#03837E] cursor-pointer transition-colors duration-200"
                      >
                        Testimonial
                      </Link>
                    </div>
                  )}
                </div>

                {/* Services Dropdown */}
                <div
                  className="relative group"
                  ref={servicesDropdownRef}
                  onMouseEnter={() => setServicesDropdown(true)}
                  onMouseLeave={() => setServicesDropdown(false)}
                >
                  <button
                    ref={servicesButtonRef}
                    className="flex items-center gap-1 hover:text-[#03837E] bg-transparent cursor-pointer"
                  >
                    Services
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M3 4.5L6 7.5L9 4.5"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {servicesDropdown && (
                    <div className="absolute left-0 top-full w-64 bg-white border border-[#D6D6D6] shadow z-50 flex flex-col">
                      <Link
                        to="/services/consultancy_smartdesign"
                        onClick={() => setServicesDropdown(false)}
                        className="px-4 py-2 text-black hover:text-white hover:bg-[#03837E] border-b border-[#D6D6D6] cursor-pointer transition-colors duration-200"
                      >
                        Consultancy & Smart Design
                      </Link>
                      <Link
                        to="/services/bms_ems_technology"
                        onClick={() => setServicesDropdown(false)}
                        className="px-4 py-2 text-black hover:text-white hover:bg-[#03837E] border-b border-[#D6D6D6] cursor-pointer transition-colors duration-200"
                      >
                        BMS & EMS Technology
                      </Link>
                      <Link
                        to="/services/me_engineering"
                        onClick={() => setServicesDropdown(false)}
                        className="px-4 py-2 text-black hover:text-white hover:bg-[#03837E] border-b border-[#D6D6D6] cursor-pointer transition-colors duration-200"
                      >
                        M&E Engineering
                      </Link>
                      <Link
                        to="/services/light_civil_engineering"
                        onClick={() => setServicesDropdown(false)}
                        className="px-4 py-2 text-black hover:text-white hover:bg-[#03837E] border-b border-[#D6D6D6] cursor-pointer transition-colors duration-200"
                      >
                        Light Civil Engineering
                      </Link>
                      <Link
                        to="/services/eco_solutions"
                        onClick={() => setServicesDropdown(false)}
                        className="px-4 py-2 text-black hover:text-white hover:bg-[#03837E] cursor-pointer transition-colors duration-200"
                      >
                        Eco Solutions
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  to="/projects"
                  className="hover:text-[#03837E] cursor-pointer"
                >
                  Projects
                </Link>
                <Link
                  to="/casestudies"
                  className="hover:text-[#03837E] cursor-pointer"
                >
                  Case Studies
                </Link>
                <Link
                  to="/contactus"
                  className="hover:text-[#03837E] cursor-pointer"
                >
                  Contact Us
                </Link>
              </nav>
            </div>

            {/* Right: Social icons and Hamburger */}
            <div className="flex items-center gap-4 mr-2 sm:mr-8 lg:mr-6 xl:mr-20">
              <div className="flex gap-2 lg:gap-1.5 xl:gap-3">
                <span className="inline-block w-[35px] md:w-[48px] h-[35px] md:h-[48px] border border-[#3D6AD6] flex items-center justify-center rounded-full cursor-pointer  ">
                  <img
                    src="/images/facebooklogo.png"
                    alt="Facebook"
                    className="md:w-[26px] md:h-[26px] w-[17px] h-[17px] object-contain ml-2.5 mt-2.25"
                  />
                </span>
                <span className="inline-block w-[35px] md:w-[48px] h-[35px] md:h-[48px] border border-[#D73F8C] flex items-center justify-center rounded-full cursor-pointer ">
                  <img
                    src="/images/instagramlogo.png"
                    alt="Instagram"
                    className="md:w-[26px] md:h-[26px] w-[17px] h-[17px] ml-2.5 mt-2.25 object-contain"
                  />
                </span>
                <span className="inline-block w-[35px] md:w-[48px] h-[35px] md:h-[48px] border border-black flex items-center justify-center rounded-full cursor-pointer">
                  <img
                    src="/images/twitterlogo.png"
                    alt="X"
                    className="md:w-[26px] md:h-[26px] w-[17px] h-[17px] ml-2.5 mt-2.25 object-contain"
                  />
                </span>
                <span className="inline-block w-[35px] md:w-[48px] h-[35px] md:h-[48px] border border-[#BD081C] flex items-center justify-center rounded-full cursor-pointer">
                  <img
                    src="/images/pinterestlogo.png"
                    alt="Pinterest"
                    className="w-[22px] h-[22px] md:h-[32px] md:w-[32px] ml-1.75 mt-1.75 object-contain"
                  />
                </span>
              </div>

              <button
                className="flex flex-col gap-1 p-2 cursor-pointer lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <span className="w-6 h-0.5 bg-black transition-all"></span>
                <span className="w-6 h-0.5 bg-black transition-all"></span>
                <span className="w-6 h-0.5 bg-black transition-all"></span>
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Overlay and mobile nav below header when menu is open */}
      {isMenuOpen && (
        <>
          {/* Overlay covers everything below header */}
          <div
            className="fixed left-0 right-0 bg-white z-[99]"
            style={{ top: "110px", bottom: 0 }}
          ></div>
          {/* Mobile Nav, fixed below header */}
          <div
            className="lg:hidden border-t border-gray-200 bg-white z-[100] fixed left-0 right-0"
            style={{ top: "110px", bottom: 0 }}
          >
            <nav className="flex flex-col px-4 py-4 space-y-3">
              <Link
                to="/"
                className="text-black hover:text-[#03837E] py-2 border-b border-[#D6D6D6] mt-20"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              {/* Mobile About Us Dropdown */}
              <div>
                <button
                  type="button"
                  className="w-full flex items-center justify-between py-2 text-black hover:text-[#03837E] border-b border-[#D6D6D6] focus:outline-none"
                  onClick={() => setMobileAboutOpen((v) => !v)}
                >
                  <span>About Us</span>
                  <span
                    className={`pr-2 transition-transform duration-200 ${
                      mobileAboutOpen ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                {mobileAboutOpen && (
                  <div className="flex flex-col bg-white border-b border-[#D6D6D6]">
                    <Link
                      to="/aboutus/meetourteam"
                      className="text-black hover:text-[#03837E] py-2 pl-6 border-b border-[#F4F4F5] text-left"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Meet Our Team
                    </Link>
                    <Link
                      to="/aboutus/accreditation_Membership"
                      className="text-black hover:text-[#03837E] py-2 pl-6 border-b border-[#F4F4F5] text-left"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Accreditations and Membership
                    </Link>
                    <Link
                      to="/aboutus/careers"
                      className="text-black hover:text-[#03837E] py-2 pl-6 border-b border-[#F4F4F5] text-left"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Career
                    </Link>
                    <Link
                      to="/aboutus/testimonials"
                      className="text-black hover:text-[#03837E] py-2 pl-6 text-left"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Testimonial
                    </Link>
                  </div>
                )}
              </div>
              {/* Mobile Services Dropdown */}
              <div>
                <button
                  type="button"
                  className="w-full flex items-center justify-between py-2 text-black hover:text-[#03837E] border-b border-[#D6D6D6] focus:outline-none"
                  onClick={() => setMobileServicesOpen((v) => !v)}
                >
                  <span>Services</span>
                  <span
                    className={`pr-2 transition-transform duration-200 ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                {mobileServicesOpen && (
                  <div className="flex flex-col bg-white border-b border-[#D6D6D6]">
                    <Link
                      to="/services/consultancy_smartdesign"
                      className="text-black hover:text-[#03837E] py-2 pl-6 border-b border-[#F4F4F5] text-left"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Consultancy & Smart Design
                    </Link>
                    <Link
                      to="/services/bms_ems_technology"
                      className="text-black hover:text-[#03837E] py-2 pl-6 border-b border-[#F4F4F5] text-left"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      BMS & EMS Technology
                    </Link>
                    <Link
                      to="/services/me_engineering"
                      className="text-black hover:text-[#03837E] py-2 pl-6 border-b border-[#F4F4F5] text-left"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      M&E Engineering
                    </Link>
                    <Link
                      to="/services/light_civil_engineering"
                      className="text-black hover:text-[#03837E] py-2 pl-6 border-b border-[#F4F4F5] text-left"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Light Civil Engineering
                    </Link>
                    <Link
                      to="/services/eco_solutions"
                      className="text-black hover:text-[#03837E] py-2 pl-6 text-left"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Eco Solutions
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/projects"
                className="text-black hover:text-[#03837E] py-2 border-b border-[#D6D6D6]"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/casestudies"
                className="text-black hover:text-[#03837E] py-2 border-b border-[#D6D6D6]"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                to="/contactus"
                className="text-black hover:text-[#03837E] py-2 border-b border-[#D6D6D6]"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
