import { useState,useEffect } from "react";
import triangleb from '../../assets/triangleb.svg';
import trianglew from '../../assets/trianglew.svg';


export default function ContactSectionWithSlider({ onSubmit, formData, handleInputChange, formErrors, isSubmitting, images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(1); 

  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleSlides(1);
      } else if (window.innerWidth < 1024) { 
        setVisibleSlides(2);
      } else { 
        setVisibleSlides(3);
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(prev => 
      prev === 0 ? Math.max(0, images.length - visibleSlides) : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(prev => 
      prev >= images.length - visibleSlides ? 0 : prev + 1
    );
  };


  const visibleImages = images.slice(currentIndex, currentIndex + visibleSlides);
 
  if (currentIndex + visibleSlides > images.length) {
    const remaining = visibleSlides - (images.length - currentIndex);
    visibleImages.push(...images.slice(0, remaining));
  }

  return (
    <div className="relative flex flex-col max-w-[1440px] items-center justify-center bg-[#03837E] w-[90%] mx-auto p-5 md:p-7 lg:p-10 mt-20 mb-20 overflow-visible">
      {/* Slider */}
      <div className="relative flex items-center justify-center w-full mb-2" style={{ zIndex: 2, minHeight: '170px' }}>
        <button
          onClick={handlePrev}
          className="absolute bg-white cursor-pointer -left-5 xl:left-0 border border-[#03837E] rounded-full w-[44px] h-[44px] flex items-center justify-center z-10 p-0 ml-4"
          aria-label="Previous image"
          style={{ 
            minWidth: '44px', 
            minHeight: '44px', 
            top: '50%', 
            transform: 'translateY(-50%)',
            
          }}
        >
          <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'scaleX(-1)' }}>
            <path d="M4.58301 11.0654H17.4163" stroke="#03837E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11 4.64844L17.4167 11.0651L11 17.4818" stroke="#03837E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      
        <div className="flex gap-4 mx-auto overflow-hidden">
          {visibleImages.map((img, i) => (
            <div 
              key={`${img}-${i}`}
              className={`transition-all duration-300 flex-shrink-0 ${
                visibleSlides === 1 ? 'w-full' : 
                visibleSlides === 2 ? 'w-1/2' : 
                'w-1/3'
              }`}
            >
              <img
                src={img}
                alt="Project"
                className="w-full h-[180px] max-w-[180px] md:max-w-[230px] md:h-[250px] xl:h-[280px] xl:max-w-[300px] object-cover transform -translate-y-[5%] sm:-translate-y-[40%] md:-translate-y-[5%]"
              />
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute -right-5 cursor-pointer xl:right-0 bg-white border border-[#03837E] rounded-full w-[44px] h-[44px] flex items-center justify-center z-10 p-0 mr-4"
          aria-label="Next image"
          style={{ 
            minWidth: '44px', 
            minHeight: '44px', 
            top: '50%', 
            transform: 'translateY(-50%)',
          
          }}
        >
          <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.58301 11.0654H17.4163" stroke="#03837E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11 4.64844L17.4167 11.0651L11 17.4818" stroke="#03837E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
     
      <div className="hidden sm:flex absolute top-40 right-2 flex-col items-start justify-start">
        <img src={triangleb} alt="triangle black" className="lg:w-[101px] w-[70px] lg:h-[101px] h-[70px] object-contain" />
        <img src={trianglew} alt="triangle white" className="lg:w-[101px] w-[70px] lg:h-[101px] h-[70px] object-contain -mt-6 lg:-mt-10" />
      </div>

      <div className="hidden sm:flex absolute bottom-0.5 left-2 flex-col items-start justify-start">
        <img src={triangleb} alt="triangle black" className="lg:w-[101px] w-[70px] lg:h-[101px] h-[70px] object-contain" />
        <img src={trianglew} alt="triangle white" className="lg:w-[101px] w-[70px] lg:h-[101px] h-[70px] object-contain -mt-6 lg:-mt-10" />
      </div>

     
      <h2 className="text-white text-2xl md:text-[40px] font-semibold text-center mb-4 mt-4 sm:mt-6" style={{ zIndex: 2 }}>Contact Us</h2>
      
     
      <div className="flex justify-center w-full mt-4 sm:mt-6" style={{ zIndex: 2 }}>
        <form
          className="bg-[#F4F4F5] p-6 md:p-8 w-full sm:w-[90%] md:w-[80%] lg:w-[70%] min-w-[300px] max-w-[600px] flex flex-col gap-4 mx-auto"
          onSubmit={onSubmit}
        >
         
          <div className="flex justify-between gap-4">
            <div className="flex flex-col w-[45%] sm:w-1/2">
              <label className="text-xs md:text-sm font-semibold mb-1 text-[#192437]">First Name*</label>
              <input
                type="text"
                name="first_name"
                required
                value={formData.first_name}
                onChange={handleInputChange}
                className={`border ${formErrors.first_name ? 'border-red-500' : 'border-[#D6D6D6]'} px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#03837E] bg-white h-[50px]`}
              />
              {formErrors.first_name && <span className="text-red-500 text-xs">{formErrors.first_name}</span>}
            </div>
            <div className="flex flex-col w-[45%] sm:w-1/2">
              <label className="text-xs md:text-sm font-semibold mb-1 text-[#192437]">Last Name*</label>
              <input
                type="text"
                name="last_name"
                required
                value={formData.last_name}
                onChange={handleInputChange}
                className={`border ${formErrors.last_name ? 'border-red-500' : 'border-[#D6D6D6]'} px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#03837E] bg-white h-[50px]`}
              />
              {formErrors.last_name && <span className="text-red-500 text-xs">{formErrors.last_name}</span>}
            </div>
          </div>
          <div className="flex gap-4 justify-between">
            <div className="flex flex-col w-[45%] sm:w-1/2">
              <label className="text-xs md:text-sm font-semibold mb-1 text-[#192437]">Your Email*</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className={`border ${formErrors.email ? 'border-red-500' : 'border-[#D6D6D6]'} px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#03837E] bg-white h-[50px]`}
              />
              {formErrors.email && <span className="text-red-500 text-xs">{formErrors.email}</span>}
            </div>
            <div className="flex flex-col w-[45%] sm:w-1/2">
              <label className="text-xs md:text-sm font-semibold mb-1 text-[#192437]">Phone*</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className={`border ${formErrors.phone ? 'border-red-500' : 'border-[#D6D6D6]'} px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#03837E] bg-white h-[50px]`}
              />
              {formErrors.phone && <span className="text-red-500 text-xs">{formErrors.phone}</span>}
            </div>
          </div>
          <div className="flex gap-4 justify-between">
            <div className="flex flex-col w-[45%] sm:w-1/2">
              <label className="text-xs md:text-sm font-semibold mb-1 text-[#192437]">Company Name*</label>
              <input
                type="text"
                name="company_name"
                required
                value={formData.company_name}
                onChange={handleInputChange}
                className={`border ${formErrors.company_name ? 'border-red-500' : 'border-[#D6D6D6]'} px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#03837E] bg-white h-[50px]`}
              />
              {formErrors.company_name && <span className="text-red-500 text-xs">{formErrors.company_name}</span>}
            </div>
            <div className="flex flex-col w-[45%] sm:w-1/2">
              <label className="text-xs md:text-sm font-semibold mb-1 text-[#192437]">Subject*</label>
              <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleInputChange}
                className={`border ${formErrors.subject ? 'border-red-500' : 'border-[#D6D6D6]'} px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#03837E] bg-white h-[50px]`}
              />
              {formErrors.subject && <span className="text-red-500 text-xs">{formErrors.subject}</span>}
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-xs md:text-sm font-semibold mb-1 text-[#192437]">Your Message</label>
            <textarea
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="border border-[#D6D6D6] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#03837E] bg-white resize-none h-[120px]"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="h-[48px] bg-[#03837E] text-white font-medium mt-4 cursor-pointer hover:border hover:border-[#03837E] hover:bg-[#FFFFFF] hover:text-[#03837E] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Contact Us'}
          </button>
        </form>
      </div>
    </div>
  );
}