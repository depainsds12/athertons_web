import React from 'react';

const CaseStudyDetail = () => {
  return (
    <section className="font-Poppins">
      {/* Hero Section */}
      <div
        className="relative w-full h-[180px] sm:h-[220px] md:h-[250px] lg:h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(/CaseStudyListbg.jpg)` }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[#192437]/60" />
        <h2
          className="relative z-10 text-white text-3xl md:text-[45px] lg:text-[55px] xl:text-[60px] font-bold tracking-wide text-center"
        >
          LOREM IPSUM
        </h2>
      </div>

      {/* Project Overview */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h3 className="text-center text-2xl font-semibold mb-4">Project Overview</h3>
        <p className="text-center max-w-3xl mx-auto text-gray-700 leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend quam. Aliquam erat sapien quis
          tempus, vehicula quam quis, bibendum sapien. Aliquam blandit nulla id hendrerit porttitor. Maecenas sed
          vehicula justo id fermentum laoreet id lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
          vehicula fermentum leo, nec vehicula nulla placerat vel. Vivamus efficitur fermentum justo, sed tincidunt
          nunc dapibus ut. Phasellus sollicitudin malesuada urna, id convallis purus placerat malesuada sed lorem
          ipsum.
        </p>
      </div>

      {/* Challenges & Solutions */}
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 pb-12">
        <div>
          <h3 className="text-xl font-semibold mb-4">Challenges</h3>
          <p className="mb-4 text-gray-700 leading-7">
            Lorem ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Lorem Ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Lorem Ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Lorem Ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Lorem Ipsum dolor sit amet, consectetur adipiscing elit</li>
          </ul>
          <p className="mt-4 text-gray-700 leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit nulla id hendrerit porttitor.
            Maecenas sed vehicula justo id fermentum laoreet id lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div>
          <img src="/images/casestudy2.jpg" alt="Case Study" className="w-full object-cover" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 pb-12">
        <div>
          <h3 className="text-xl font-semibold mb-4">Solutions</h3>
          <p className="mb-4 text-gray-700 leading-7">
            Lorem ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Lorem Ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Lorem Ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Lorem Ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Lorem Ipsum dolor sit amet, consectetur adipiscing elit</li>
          </ul>
        </div>
        <div>
          <img src="/images/casestudy1.jpg" alt="Case Study" className="w-full object-cover" />
        </div>
      </div>

      {/* Outcome Section */}
      <div className="bg-[#03837E] w-[90%] mx-auto rounded-lg py-12 px-6 my-16 text-white">
        <h3 className="text-center text-2xl md:text-3xl font-semibold mb-8">Outcome</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base">
          <ul className="list-disc pl-5 space-y-2">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Fusce sed justo nisi. In id lacinia orci hendrerit.</li>
            <li>Lorem Ipsum dolor sit amet, amet consectetur.</li>
            <li>Lorem Ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
          <ul className="list-disc pl-5 space-y-2">
            <li>Fusce sed justo nisi. In id lacinia orci hendrerit.</li>
            <li>Lorem ipsum dolor sit amet, amet consectetur.</li>
            <li>Lorem Ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Fusce sed justo nisi. In id lacinia orci hendrerit.</li>
          </ul>
        </div>
      </div>

      {/* Explore More Case Studies */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <h3 className="text-center text-2xl font-semibold mb-10">Explore More Case Studies</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <img src="/images/casestudy3.jpg" alt="Project 1" className="w-full object-cover" />
            <h4 className="text-center font-medium">Lorem Ipsum Title here</h4>
          </div>
          <div className="flex flex-col gap-2">
            <img src="/images/casestudy4.jpg" alt="Project 2" className="w-full object-cover" />
            <h4 className="text-center font-medium">Lorem Ipsum Title here</h4>
          </div>
          <div className="flex flex-col gap-2">
            <img src="/images/casestudy5.jpg" alt="Project 3" className="w-full object-cover" />
            <h4 className="text-center font-medium">Lorem Ipsum Title here</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyDetail;
