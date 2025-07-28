import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const aboutDropdownRef = useRef(null);
  const servicesDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(e.target)) {
        setAboutDropdown(false);
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(e.target)) {
        setServicesDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full bg-white">
      <div className="flex items-center justify-between px-0">
        {/* Left: Logo + Navigation */}
        <div className="flex items-center gap-10">
          <div className="w-[90px] h-[84px] flex items-center justify-center sm:w-[116px] sm:h-[107px] sm:ml-8 ml-2 xl:ml-20 cursor-pointer">
            <img
              src="/logo.png"
              alt="Athertons Logo"
              className="h-full object-contain"
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
                className="flex items-center gap-1 hover:text-[#03837E] bg-transparent cursor-pointer"
                onClick={() => setAboutDropdown((v) => !v)}
              >
                About Us
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M3 4.5L6 7.5L9 4.5"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {aboutDropdown && (
                <div className="absolute left-0 top-full mt-2 w-56 bg-white border border-[#D6D6D6] shadow z-50 flex flex-col">
                  {[
                    { to: "/aboutus/meetourteam", label: "Meet Our Team" },
                    { to: "/aboutus/accreditation_Membership", label: "Accreditations and Membership" },
                    { to: "/aboutus/careers", label: "Career" },
                    { to: "/aboutus/testimonials", label: "Testimonial" },
                  ].map((item, i, arr) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setAboutDropdown(false)}
                      className={`px-4 py-2 text-black hover:bg-[#03837E] hover:text-white ${
                        i !== arr.length - 1 ? "border-b border-[#D6D6D6]" : ""
                      } cursor-pointer`}
                    >
                      {item.label}
                    </Link>
                  ))}
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
                className="flex items-center gap-1 hover:text-[#03837E] bg-transparent cursor-pointer"
                onClick={() => setServicesDropdown((v) => !v)}
              >
                Services
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M3 4.5L6 7.5L9 4.5"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {servicesDropdown && (
                <div className="absolute left-0 top-full mt-2 w-64 bg-white border border-[#D6D6D6] shadow z-50 flex flex-col">
                  {[
                    { to: "/services/consultancy_smartdesign", label: "Consultancy & Smart Design" },
                    { to: "/services/bms_ems_technology", label: "BMS & EMS Technology" },
                    { to: "/services/me_engineering", label: "M&E Engineering" },
                    { to: "/services/light_civil_engineering", label: "Light Civil Engineering" },
                    { to: "/services/eco_solutions", label: "Eco Solutions" },
                  ].map((item, i, arr) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setServicesDropdown(false)}
                      className={`px-4 py-2 text-black hover:bg-[#03837E] hover:text-white ${
                        i !== arr.length - 1 ? "border-b border-[#D6D6D6]" : ""
                      } cursor-pointer`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/projects" className="hover:text-[#03837E] cursor-pointer">
              Projects
            </Link>
            <Link to="/casestudies" className="hover:text-[#03837E] cursor-pointer">
              Case Studies
            </Link>
            <Link to="/contactus" className="hover:text-[#03837E] cursor-pointer">
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Right: Social icons and Hamburger */}
        <div className="flex items-center gap-4 mr-2 sm:mr-8 lg:mr-6 xl:mr-20">
          <div className="flex gap-2 lg:gap-1.5 xl:gap-3">
            {[
              { src: "/images/facebooklogo.png", alt: "Facebook", border: "#3D6AD6" },
              { src: "/images/instagramlogo.png", alt: "Instagram", border: "#D73F8C" },
              { src: "/images/twitterlogo.png", alt: "X", border: "black" },
              { src: "/images/pinterestlogo.png", alt: "Pinterest", border: "#BD081C" },
            ].map((icon) => (
              <span
                key={icon.alt}
                className={`inline-block w-[35px] md:w-[48px] h-[35px] md:h-[48px] border flex items-center justify-center rounded-full cursor-pointer`}
                style={{ borderColor: icon.border }}
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="md:w-[26px] md:h-[26px] w-[17px] h-[17px] object-contain"
                />
              </span>
            ))}
          </div>

          <button
            className="lg:hidden flex flex-col gap-1 p-2 cursor-pointer"
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
  );
};

export default Navbar;
