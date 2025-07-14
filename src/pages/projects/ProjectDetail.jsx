import React from 'react'

const ProjectDetail = () => {
  return (
    <section className="w-full min-h-screen bg-white flex flex-col font-Poppins max-w-[1600px] mx-auto" aria-labelledby="careers-heading">
      <div
        className="relative w-full h-[180px] sm:h-[220px] md:h-[250px] lg:h-[300px] mt-[100px] flex items-center justify-center bg-cover bg-center max-w-[1600px] mx-auto"
        style={{ backgroundImage: `url(/ty-menai.jpg)` }}
        role="presentation"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[#192437]/60" aria-hidden="true" />
        <h2
          id="careers-heading"
          className="relative z-10 text-white text-3xl md:text-[45px] lg:text-[55px] xl:text-[60px] font-bold tracking-wide text-center"
        >
          Tŷ Menai College Refurbishment
        </h2>
      </div>
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8 px-4 md:px-12 py-10 max-w-6xl mx-auto w-full">
        {/* Left: Image Carousel */}
        <div className="flex flex-col items-center lg:w-1/2 w-full">
          <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-lg overflow-hidden mb-4">
            <img src="/images/ty-1.jpg" alt="Ty Menai Refurbishment 1" className="w-full h-full object-cover" />
            {/* Carousel arrows (static for now) */}
            <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md" aria-label="Previous image">
              <span className="text-2xl text-[#192437]">&#8592;</span>
            </button>
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md" aria-label="Next image">
              <span className="text-2xl text-[#192437]">&#8594;</span>
            </button>
          </div>
          <div className="w-full max-w-[420px] aspect-[4/3] rounded-lg overflow-hidden">
            <img src="/images/ty-2.jpg" alt="Ty Menai Refurbishment 2" className="w-full h-full object-cover" />
          </div>
        </div>
        {/* Right: Project Info */}
        <div className="flex flex-col gap-2 lg:w-1/2 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
            <div className="text-[#192437] font-semibold text-[20px] leading-[100%]">Project Name:</div>
            <div className="text-black font-normal text-[16px] leading-[28px]">Tŷ Menai Refurbishment</div>
            <div className="text-[#192437] font-semibold text-[20px] leading-[100%]">Overall Value:</div>
            <div className="text-black font-normal text-[16px] leading-[28px]">£10 million / Ty Menai Transformation</div>
            <div className="text-[#192437] font-semibold text-[20px] leading-[100%]">Athertons project size:</div>
            <div className="text-black font-normal text-[16px] leading-[28px]">£6m project</div>
            <div className="text-[#192437] font-semibold text-[20px] leading-[100%]">Scope of Works:</div>
            <div className="text-black font-normal text-[16px] leading-[28px]">Refurbishment</div>
            <div className="text-[#192437] font-semibold text-[20px] leading-[100%]">Location:</div>
            <div className="text-black font-normal text-[16px] leading-[28px]">Bangor</div>
            <div className="text-[#192437] font-semibold text-[20px] leading-[100%]">Duration:</div>
            <div className="text-black font-normal text-[16px] leading-[28px]">40 Weeks</div>
            <div className="text-[#192437] font-semibold text-[20px] leading-[100%]">Client:</div>
            <div className="text-black font-normal text-[16px] leading-[28px]">Read Construction for Grŵp Llandrillo Menai</div>
            <div className="text-[#192437] font-semibold text-[20px] leading-[100%]">Project URL:</div>
            <div className="text-black font-normal text-[16px] leading-[28px] underline"><a href="http://www.grwp.ac.uk" target="_blank" rel="noopener noreferrer">http://www.grwp.ac.uk</a></div>
          </div>
          <p className="mt-6 text-black font-normal text-[16px] leading-[28px]">Grŵp Llandrillo Menai appointed North Wales-based Read Construction to carry out the works to the new College Menai Bangor Campus, which is situated on Parc Menai in Bangor, with teaching on the campus due to take place from September 2014.<br/>Read Construction appointed Athertons as main contractor to deliver the full refurbishment.</p>
        </div>
      </div>
      {/* Summary Section */}
      <div className="flex flex-col lg:flex-row gap-8 px-4 md:px-12 pb-16 max-w-6xl mx-auto w-full">
        <div className="flex-1">
          <h3 className="text-[#192437] font-semibold text-[40px] leading-[100%] mb-6">Summary</h3>
          <p className="text-black font-normal text-[16px] leading-[28px] mb-4">The project, backed with £10 million from the Welsh Government’s Sustainable Communities for Learning Programme, will relocate Coleg Menai’s current campus – which houses more than 600 learners, many with complex additional learning needs (ALN) – to a new, previously largely non-educational and light-industrial facility situated on Parc Menai, Bangor.</p>
          <p className="text-black font-normal text-[16px] leading-[28px] mb-4">Health and Recovery, Hospitality and Catering, Business, Travel and Tourism, Performing Arts, Public Sector Academy, IT and Science laboratories, Art and Design, Music Technology, and Media Studies will all be delivered from the new campus, which includes much improved accessibility, specialist teaching and learning spaces, and a range of industry-standard facilities, including an Apple Mac suite and a professional working kitchen.</p>
          <p className="text-black font-normal text-[16px] leading-[28px] mb-4">The new building will also house its own hair and beauty salons as part of the curriculum, as well as up to 180 staff performance studios which will be utilised by the college’s performing arts learners. The new campus will be open to members of the public and will include a range of community facilities, including a café, conference and meeting rooms, and a business incubation hub. The new campus will also be home to the college’s Supported Internship Programme, which helps young people with additional learning needs to gain work experience and employment skills.</p>
          <p className="text-black font-normal text-[16px] leading-[28px] mb-4">The scheme achieved a BREEAM ‘Excellent’ rating, with low-carbon and BREEAM accredited elements, through the installation of solar panels, air source heat pumps and electric vehicle charging points.</p>
          <p className="text-black font-normal text-[16px] leading-[28px] mb-4">Athertons provided all cabling within the refurbished buildings. The new modular building works included the design to develop sustainable connections for both new and existing buildings.</p>
          <p className="text-black font-normal text-[16px] leading-[28px] mb-4">Speaking about the project, Grŵp Llandrillo Menai’s deputy, Sion Lloyd, said: “This was exciting; campus was an incredible opportunity to have a new, energy-efficient structure, which would provide a fantastic learning environment for our learners and staff. The new campus will also be home to the college’s Supported Internship Programme, which helps young people with additional learning needs to gain work experience and employment skills.”</p>
          <p className="text-black font-normal text-[16px] leading-[28px]">Read Construction’s Health and Safety Manager and College liaison, David Wells, said: “It is looking fantastic! Going up against and surpasses the students’ and staff’s expectations. We have been on site since March, working with schools in the area, including the local primary, to develop, and are eager to get the project completed for September.”</p>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <img src="/images/ty-2.jpg" alt="Ty Menai Refurbishment 2" className="w-full rounded-lg object-cover aspect-[4/3]" />
        </div>
      </div>
    </section>
  )
}

export default ProjectDetail
