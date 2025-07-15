import React from "react";

const Header = () => {
  return (
    <header className="max-w-[1600px] w-full bg-[#03837E]">
      {/* Top bar */}
      <div className="mx-auto max-w-[1600px] flex items-center justify-between px-4  text-white text-sm lg:h-[50px] h-auto">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1 font-medium text-base leading-none tracking-normal">
            {/* Location Icon Placeholder */}
            <span className="inline-block" />
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_68_663)">
                <path
                  d="M21 10.5C21 17.5 12 23.5 12 23.5C12 23.5 3 17.5 3 10.5C3 8.11305 3.94821 5.82387 5.63604 4.13604C7.32387 2.44821 9.61305 1.5 12 1.5C14.3869 1.5 16.6761 2.44821 18.364 4.13604C20.0518 5.82387 21 8.11305 21 10.5Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 13.5C13.6569 13.5 15 12.1569 15 10.5C15 8.84315 13.6569 7.5 12 7.5C10.3431 7.5 9 8.84315 9 10.5C9 12.1569 10.3431 13.5 12 13.5Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_68_663">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            Wirral Office
          </span>
          <span className="flex items-center gap-1 font-medium text-base leading-none tracking-normal">
            {/* Location Icon Placeholder */}
            <span className="inline-block" />
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_68_663)">
                <path
                  d="M21 10.5C21 17.5 12 23.5 12 23.5C12 23.5 3 17.5 3 10.5C3 8.11305 3.94821 5.82387 5.63604 4.13604C7.32387 2.44821 9.61305 1.5 12 1.5C14.3869 1.5 16.6761 2.44821 18.364 4.13604C20.0518 5.82387 21 8.11305 21 10.5Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 13.5C13.6569 13.5 15 12.1569 15 10.5C15 8.84315 13.6569 7.5 12 7.5C10.3431 7.5 9 8.84315 9 10.5C9 12.1569 10.3431 13.5 12 13.5Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_68_663">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>{" "}
            Wrexham Office
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1 font-medium text-base leading-none tracking-normal">
            {/* Email Icon Placeholder */}
            <span className="inline-block" />
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22 6.5L12 13.5L2 6.5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            info@athertons.co.uk
          </span>
          <span className="flex items-center gap-1 font-medium text-base leading-none tracking-normal">
            {/* Phone Icon Placeholder */}
            <span className="inline-block " />
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_68_661)">
                <path
                  d="M15.0494 5.5C16.0262 5.69057 16.9238 6.16826 17.6275 6.87194C18.3312 7.57561 18.8089 8.47326 18.9994 9.45M15.0494 1.5C17.0787 1.72544 18.971 2.63417 20.4157 4.07701C21.8603 5.51984 22.7715 7.41101 22.9994 9.44M21.9994 17.42V20.42C22.0006 20.6985 21.9435 20.9742 21.832 21.2293C21.7204 21.4845 21.5567 21.7136 21.3515 21.9019C21.1463 22.0901 20.904 22.2335 20.6402 22.3227C20.3764 22.4119 20.0968 22.4451 19.8194 22.42C16.7423 22.0856 13.7864 21.0341 11.1894 19.35C8.77327 17.8147 6.72478 15.7662 5.18945 13.35C3.49942 10.7412 2.44769 7.77099 2.11944 4.68C2.09446 4.40347 2.12732 4.12476 2.21595 3.86162C2.30457 3.59849 2.44702 3.35669 2.63421 3.15162C2.82141 2.94655 3.04925 2.78271 3.30324 2.67052C3.55722 2.55833 3.83179 2.50026 4.10945 2.5H7.10945C7.59475 2.49522 8.06524 2.66708 8.43321 2.98353C8.80118 3.29999 9.04152 3.73945 9.10944 4.22C9.23607 5.18007 9.47089 6.12273 9.80945 7.03C9.94399 7.38792 9.97311 7.77691 9.89335 8.15088C9.8136 8.52485 9.62831 8.86811 9.35944 9.14L8.08945 10.41C9.513 12.9135 11.5859 14.9864 14.0894 16.41L15.3594 15.14C15.6313 14.8711 15.9746 14.6858 16.3486 14.6061C16.7225 14.5263 17.1115 14.5555 17.4694 14.69C18.3767 15.0286 19.3194 15.2634 20.2794 15.39C20.7652 15.4585 21.2088 15.7032 21.526 16.0775C21.8431 16.4518 22.0116 16.9296 21.9994 17.42Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_68_661">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            0151 670 0666
          </span>
        </div>
      </div>
      {/* Main nav */}
      <div className="mx-auto max-w-[1600px] flex items-center justify-between px-4 py-2 bg-white">
        <div className="flex items-center gap-6">
          {/* Logo Placeholder */}
          <div className="w-[115px] h-[107px] flex items-center justify-center">
            <img
              src="/logo.png"
              alt="Athertons Logo"
              className="h-full object-contain"
            />
          </div>
          <nav className="flex items-center gap-6 text-black font-medium text-base leading-none tracking-normal">
            <a
              href="#"
              className="hover:text-[#03837E] font-medium text-base leading-none tracking-normal"
            >
              Home
            </a>
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-[#03837E] font-medium text-base leading-none tracking-normal">
                About Us
                <span className="inline-block align-middle">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              {/* Dropdown placeholder */}
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-[#03837E] font-medium text-base leading-none tracking-normal">
                Services
                <span className="inline-block align-middle">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              {/* Dropdown placeholder */}
            </div>
            <a
              href="#"
              className="hover:text-[#03837E] font-medium text-base leading-none tracking-normal"
            >
              Projects
            </a>
            <a
              href="#"
              className="hover:text-[#03837E] font-medium text-base leading-none tracking-normal"
            >
              Case Studies
            </a>
            <a
              href="#"
              className="hover:text-[#03837E] font-medium text-base leading-none tracking-normal"
            >
              Contact Us
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {/* Social Icon Images */}
          <span className="inline-block w-12 h-12 border border-blue-400 flex items-center justify-center rounded-full">
            <img
              src="/images/facebooklogo.png"
              alt="Facebook"
              className="w-6.5 h-6.5 object-contain ml-2.5 mt-2.5 "
            />
          </span>
          <span className="inline-block w-12 h-12 border border-pink-400 flex items-center justify-center rounded-full">
            <img
              src="/images/instagramlogo.png"
              alt="Instagram"
              className="w-6.5 h-6.5 object-contain ml-2.5 mt-2.5"
            />
          </span>
          <span className="inline-block w-12 h-12 border border-black flex items-center justify-center rounded-full">
            <img
              src="/images/twitterlogo.png"
              alt="X"
              className="w-6.5 h-6.5 object-contain ml-2.5 mt-2.5"
            />
          </span>
          <span className="inline-block w-12 h-12 border border-red-400 flex items-center justify-center rounded-full">
            <img
              src="/images/pinterestlogo.png"
              alt="Pinterest"
              className="w-8 h-8 object-contain ml-1.75 mt-1.75"
            />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
