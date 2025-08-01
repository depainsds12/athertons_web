import { useState, useEffect } from "react";
import Accreditation from "./homecomponent/Accreditation";
import Casestudies from "./homecomponent/Casestudies";
import Commercial from "./homecomponent/Commercial";
import NewandContactus from "./homecomponent/NewandContactus";
import Services from "./homecomponent/Services";
import Team from "./homecomponent/Team";
import TestimonialsAndConfidence from "./homecomponent/TestimonialsAndConfidence";
import Video from "./homecomponent/Video";
import WalesSection from "./homecomponent/WalesSection";
import { getHomePage } from "../../api/routes";
import { getAxios } from "../../api/config";
import HomeSlider from "./homecomponent/HomeSlider";

export default function HomePage() {
  const [servicesData, setServicesData] = useState([]);
  const [membershipImages, setMembershipImages] = useState([]);
  const [homepageData, setHomePageData] = useState({});
  const [testimonialData, setTestimonialData] = useState([]);
  const [sliderData, setSliderData] = useState([]);
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    const fetchHomePageData = async () => {
      try {
        const response = await getAxios().get(getHomePage);

        setServicesData(response?.data?.data?.services);
        setMembershipImages(response?.data?.data?.memberships);
        setHomePageData(response?.data?.data?.homepage_content);
        setTestimonialData(response?.data?.data?.testimonials);
        setSliderData(response?.data?.data?.sliders);
        setTeamData(response?.data?.data?.teams);
      } catch (error) {
        console.error("Failed to fetch Home API:", error);
      }
    };

    fetchHomePageData();
  }, []);

  return (
    <div>
      <HomeSlider sliderData={sliderData} />

      <Services servicesData={servicesData} />
      <Accreditation membershipsData={membershipImages} />
      <Commercial apiData={homepageData} />
      <Video apiData={homepageData} />
      <Casestudies />
      <TestimonialsAndConfidence
        apiData={homepageData}
        testimonialData={testimonialData}
      />
      <WalesSection apiData={homepageData} />
      <Team teamData={teamData} />
      <NewandContactus />
    </div>
  );
}
