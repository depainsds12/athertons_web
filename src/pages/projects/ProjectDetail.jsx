import React, { useState ,useEffect } from "react";
import { getAxios } from "../../api/config";
import { useParams } from "react-router-dom";
const images = [
  "/images/ty-1.jpg",
  "/images/ty-2.jpg",
  "/images/ty-3.jpg",
  "/images/ty-4.jpg",
];

const ProjectDetail = () => {

  const [imgIdx, setImgIdx] = useState(0);
  const { id } = useParams();
  const handlePrev = () =>
    setImgIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const handleNext = () =>
    setImgIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
   const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAxios().get(`/projectdetailpage/${1}`);
        console.log("data  is", response?.data?.data);
        setData(response?.data?.data);
      } catch (error) {
        console.error("Failed to fetch Meet Our team API:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section
      className="w-full bg-white flex flex-col font-Poppins"
      aria-labelledby="careers-heading"
    >
      {/* Banner */}
      <div
        className="relative aspect-[1366/300] min-h-[200px] flex items-center justify-center bg-cover bg-center w-full"
        style={{ backgroundImage: `url(/images/ty-menai.jpg)` }}
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
      <div className="w-full max-w-[1440px] mx-auto px-8 lg:py-12 py-6">
        <div className="flex flex-col lg:flex-row gap-16 px-4 md:px-12 py-10 font-normal text-[16px] leading-[28px] mt-2">
          {/* Left: Image */}
          <div className="flex flex-col lg:w-1/2 w-full items-center">
            <div className="relative w-full max-w-[720px] xl:aspect-[4/3] overflow-visible mb-4 justify-center">
              <img
                src={images[imgIdx]}
                alt={`Ty Menai Refurbishment ${imgIdx + 1}`}
                className="lg:min-h-[420px] object-cover transition-all duration-300"
              />

              {/* Previous Button */}
              <button
                onClick={handlePrev}
                className="absolute left-[-30px] top-1/2 -translate-y-1/2 bg-white border border-[#03837E] rounded-full p-2 w-[65px] h-[65px] flex items-center justify-center z-10 cursor-pointer"
                aria-label="Previous image"
              >
                <img src="/prev.svg" alt="Previous" className="w-7 h-7" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-[-30px] top-1/2 -translate-y-1/2 bg-white border border-[#03837E] rounded-full p-2 w-[65px] h-[65px] flex items-center justify-center z-10 cursor-pointer"
                aria-label="Next image"
              >
                <img src="/next.svg" alt="Next" className="w-7 h-7" />
              </button>
            </div>
          </div>

          {/* Right: Project Info */}
          <div className="flex flex-col gap-2 lg:w-1/2 w-full justify-start xl:justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 2xl:items-center">
              <div className="text-[#192437] font-semibold text-[20px]">
                Project Name:
              </div>
              <div>Tŷ Menai Refurbishment</div>
              <div className="text-[#192437] font-semibold text-[20px]">
                Overall Value:
              </div>
              <div>£10 million / Ty Menai Transformation</div>
              <div className="text-[#192437] font-semibold text-[20px]">
                Athertons project size:
              </div>
              <div>£6m project</div>
              <div className="text-[#192437] font-semibold text-[20px]">
                Scope of Works:
              </div>
              <div>Refurbishment</div>
              <div className="text-[#192437] font-semibold text-[20px]">
                Location:
              </div>
              <div>Bangor</div>
              <div className="text-[#192437] font-semibold text-[20px]">
                Duration:
              </div>
              <div>40 Weeks</div>
              <div className="text-[#192437] font-semibold text-[20px]">
                Client:
              </div>
              <div>Read Construction for Grŵp Llandrillo Menai</div>
              <div className="text-[#192437] font-semibold text-[20px]">
                Project URL:
              </div>
              <div className="underline">
                <a
                  href="http://www.grwp.ac.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://www.grwp.ac.uk
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Paragraph Below Image Full Width */}
        <div className="px-4 md:px-12 w-full text-black font-normal text-[16px] leading-[28px] pb-10">
          <p>
            Grŵp Llandrillo Menai appointed North Wales-based Read Construction
            to carry out the works on the new Coleg Menai Bangor Campus, which
            is situated on Parc Menai in Bangor, with teaching at the campus due
            to take place from September 2024.
          </p>
          <p className="mt-3">
            Read Construction appointed Athertons as main contractor to deliver
            the full refurbishment.
          </p>
        </div>

        {/* Summary Section */}
        <div className="flex flex-col sm:gap-8 px-4 md:px-12 pb-16 w-full">
          <h3 className="text-[#192437] font-semibold text-[30px] md:text-[40px] leading-[100%] mb-6">
            Summary
          </h3>
          <div className="flex flex-col lg:flex-row gap-8 text-black font-normal text-[16px] leading-[28px]">
            <div className="flex-1 flex flex-col gap-4">
              <p className="text-[#192437] font-[500]">
                TThe project, backed with £14 million from the Welsh
                Government’s Sustainable Communities for Learning Programme,
                will relocate Coleg Menai’s current provision from the
                Ffriddoedd Road and Friars site. The new Bangor campus – which
                will be within very close proximity to the long-established Art
                department already situated on Parc Menai – will be the new home
                for ten vocational areas:
              </p>
              <p>
                HHair and Beauty, Hospitality and Catering, Business, Travel and
                Tourism, Performing Arts, Music, Media (TV and Games
                Development), Access to Higher Education, Adult Community
                Learning, and English for Speakers Other Languages. Included
                within the facility will be cutting-edge, industry-level
                facilities, ranging from a professional training kitchen, an
                Apple Mac suite, and a modern LibraryPlus space.
              </p>
            </div>
            <div className="flex-1 mb-1 flex justify-center lg:justify-end">
              <img
                src="/images/ty-2.jpg"
                alt="Ty Menai Refurbishment 2"
                className="w-full max-w-[580px] object-cover aspect-[4/3]"
              />
            </div>
          </div>

          {/* Extra Summary Text */}
          <div className="flex flex-col gap-4 text-black font-normal text-[16px] leading-[28px] mt-3 sm:mt-1">
            <p>
              Hair & beauty salons and nail bars run by learners will be open to
              the public, as well as a 180-seat performance studio which will be
              utilised by the Performing Arts department for theatre performance
              and live shows. Members of the public will also be able to dine in
              the on-site training restaurant during the week. Learners and
              staff will also benefit from a large, open-plan refectory and
              coffee bar, and there will be a large Learner Services presence
              offering careers guidance, confidential support and wellbeing
              activities to students.
            </p>
            <p>
              The exciting development will also be certified Net-Zero Carbon
              and BREEAM excellent, through the installation of solar panels,
              air source heat pumps and LED lighting.
            </p>
            <p>
              Grŵp Llandrillo Menai is also working with the Welsh Government’s
              Active Travel department to develop sustainable transport links to
              the site, through the creation of cycle routes.
            </p>
            <p>
              Dafydd Evans, Chief Executive of Grŵp Llandrillo Menai, said,
               “This new exciting campus serves as an innovative opportunity to
              have cross-departmental teaching, which will enhance the learner
              experience. We also hope that the facility will strengthen links
              with industry partners, through utilising the space to hold
              masterclasses and showcases. We would like to thank the Welsh
              Government for their continued support and for the generous
              funding package we have received for this project”.
            </p>
            <p>
              Aled Jones-Griffith, Principal of Coleg Menai and Coleg
              Meirion-Dwyfor, said, “I’m looking forward to giving current and
              prospective students the opportunity to walk around the new
              campus. We are already working with schools in the area as part of
              the 14-19 provision, and we are eager to develop that partnership
              even further – now we have modern facilities across all sites”.
            </p>
            <p>
              Alex Read, Director of Read Construction, said, “We are proud to
              be working with Grŵp Llandrillo Menai to deliver their latest net
              zero scheme at Tŷ Menai. As a proud North Wales based company, we
              are committed to reinvesting the Welsh pound through the
              engagement of local companies, and employment of local people on
              this prestigious scheme.”
            </p>
          </div>
        </div>

        {/* Background Section */}
        <div className="flex flex-col gap-8 px-4 md:px-12 pb-16 w-full">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <img
                src="/images/ty-3.jpg"
                alt="Ty Menai Refurbishment 3"
                className="w-full object-cover aspect-[4/3] max-w-[580px]"
              />
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center text-black font-normal text-[16px] leading-[28px] gap-4">
              <h3 className="text-[#192437] font-semibold text-[30px] leading-[35px] md:text-[40px] mb-2">
                Background of the project
              </h3>
              <p className="text-[#192437] font-[500]">
                The project involved refurbishing a large, two-story building,
                approximately 20 years old, primarily used as office space and
                meeting rooms. The building features a steel frame, concrete
                floors, a steel roof, and a raised access floor on the first
                floor for service routing. An adjacent smaller annex building,
                intended for the maintenance division, was also fully
                refurbished.
              </p>
              <p>
                The refurbishment included a complete upgrade of all lighting,
                power, fire alarm, security, CCTV, electric vehicle charging,
                sound and lighting systems, and data infrastructure. The new
                lighting system is entirely LED. The existing main distribution
                system was retained and modified, with the UPS section and
                battery backups removed to accommodate new distribution cabling.{" "}
              </p>
            </div>
          </div>

          <div className="flex flex-col text-black font-normal text-[16px] leading-[28px] gap-4">
            <p>
              Additionally, a new photovoltaic (PV) system with a maximum export
              limit of 200KW was installed. A 160A external feeder pillar was
              also installed to serve three double electric vehicle chargers.
            </p>
            <p>
              Mechanically, the refurbishment consisted of Ventilation, Air
              conditioning, VT & CT Gas Heating, Domestic water services and
              Sprinkler systems to the new build consisting of teaching spaces.
              The AC consisted of VRF systems providing heating and cooling
              throughout majority of the areas, and DX coils were installed
              along with AHUs. The AHUs were located within the plant room and
              compounds across the scheme and the MVHR units were installed in
              the ceiling void, local to the areas they were serving. The toilet
              areas were also equipped with individual extract fans controlled
              via PIR. Moreover, the domestic water system consisted of new
              booster tank and pump set which allowed the cold water main feed
              to be distributed throughout the building via service voids.
            </p>
          </div>
        </div>

        {/* Challenges Section - updated alignment here */}
        <div className="flex flex-col gap-8 px-4 md:px-12 pb-16 w-full">
          <h3 className="text-[#192437] font-semibold text-[40px]">
            Challenges and Solutions
          </h3>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2 flex flex-col gap-4 text-black font-normal text-[16px] leading-[28px]">
              <p className="text-[#192437] font-[500]">
                Due to the extent and location of the project, multiple
                obstacles were encountered and resolved. These required critical
                thinking, re-design, risk management and continuous change
                management.
              </p>
              <p>
                The project faced several key challenges. Firstly, as it
                involved refurbishing an existing building with reused main
                containment and distribution systems, the full scope of work
                only became clear during demolition. This necessitated extensive
                relocation of original cabling to fit the new layout. Secondly,
                insufficient information  during the tender stage created
                significant hurdles, including missing cable and lighting
                calculations and incomplete drawings. This led to unexpected
                changes such as installing nine mechanical distribution boards
                instead of the planned 2, with 5 of these rated at 250A,
                requiring substantial adjustments.{" "}
              </p>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <img
                src="/images/ty-4.jpg"
                alt="Ty Menai Challenges"
                className="w-full object-cover aspect-[4/3] max-w-[580px]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 text-black font-normal text-[16px] leading-[28px]">
            <p>
              The complexity and the extensive of the project included managing
              over 200 client-initiated changes, ranging from minor adjustments
              to major redesigns of systems like the PV and external lighting,
              added complexity and adaptation throughout. The multi-disciplinary
              team based on-site worked closely with Read Construction to
              deliver the expected outcomes.
            </p>
            <p>
              Throughout the project, numerous challenges were successfully
              addressed by continuously updating and revising working drawings.
              A significant aspect involved a complete redesign of the PV
              system, originally planned as both field-mounted and roof-mounted.
              The final design focused on maximising roof space to optimise
              energy generation. Additionally, due to the absence of initial
              lighting calculations, Signify (Phillips) were approached to
              verify the adequacy of the original lighting design. This review
              revealed a need for approximately 400 additional light fittings to
              ensure project requirements were met effectively.
            </p>
            <p>
              Another challenge included ensuring our services such as
              ventilation, pipework, electrical cabling and air conditioning
              were compliant with the fire and compartment strategy regulations
              of the existing layout building. To make the fire and compartments
              strategy compliant with regulations was particularly complex, due
              to the existing building layout. Various methods had to be
              explored when passing our services through, or to make our
              services complement one another like vent, pipework, electrical
              cabling and air conditioning. External fire wall consultants and
              architects were commissioned to bring additional consultancy.
              Additional measures were introduced to achieve approved fire
              safety standards: adding additional and bespoke bracketry systems
              to ensure compliance with manufacturer’s instructions. Making
              bespoke plates to support fire dampers within fire curtains.
              Installing fire rated ductwork from kitchen areas through
              compartments and risers.
            </p>
            <p>
              Further challenges involved the included of the ventilation kits
              at the tender stage, which were intended to be retained but once
              the project commenced they were checked over and found to be
              insufficient for use. Others issues faced were extensive faults on
              existing taps and leaks on all plumbing systems, which needed
              redesign and replacement.
            </p>
            <p>
              A complete lack of phone signal in the area attributable to the
              remote location of the project, added to the complexity making it
              difficult to communicate between parts of the business and supply
              chain both on site and in the office. To counteract this and to
              avoid mis-communication between the different parts of the
              business and supply chain both on site and in the office, multiple
              measures were introduced. A temporary walkie-talkie system for
              effortless communication was introduced. More weekly site visits
              were introduced from an early stage, to facilitate smooth
              multi-disciplinary delivery as a one-stop-shop main contractor. A
              new high speed Wi-Fi system specific to Athertons was introduced
              and the supply chain was notified of specific delivery instruction
              and route to ensure deliveries arrived on time. A bespoke office
              was built with a whole suite of printing services, laptops, Wi-Fi
              installations and other technical solutions to manage this complex
              and diverse build.
            </p>
            <p>
              Despite encountering various challenges, the exemplary service
              provided by Athertons has solidified our status as industry
              leaders, ensuring continued commitment in exceeding customer
              satisfaction whilst delivering complex technical solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
