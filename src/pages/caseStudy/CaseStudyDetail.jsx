import React from 'react'

const CaseStudyDetail = () => {
  return (
    <section>
         <div
          className="relative w-full h-[180px] sm:h-[220px] md:h-[250px] lg:h-[300px] mt-[100px] flex items-center justify-center bg-cover bg-center max-w-[1600px] mx-auto"
          style={{ backgroundImage: `url(/CaseStudyListbg.jpg)` }}
          role="presentation"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[#192437]/60" aria-hidden="true" />
          <h2
            id="careers-heading"
            className="relative z-10 text-white text-3xl md:text-[45px] lg:text-[55px] xl:text-[60px] font-bold tracking-wide text-center"
          >
            Lorem Ipsum
          </h2>
        </div>


    </section>
  )
}

export default CaseStudyDetail
