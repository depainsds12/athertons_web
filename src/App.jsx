import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Home from "./pages/home/Home.jsx";
import MeetOurTeam from "./pages/aboutUs/MeetOurTeam.jsx";
import AccreditationMembership from "./pages/aboutUs/AccreditationMembership.jsx";
import Testimonials from "./pages/aboutUs/Testimonials.jsx";
import Careers from "./pages/aboutUs/Careers.jsx";
import SmartDesign from "./pages/services/SmartDesign.jsx";
import ServicePage from "./pages/services/ServicePage.jsx";
import EcoSolutions from "./pages/services/EcoSolutions.jsx";
import ProjectList from "./pages/projects/ProjectList.jsx";
import CaseStudyList from "./pages/caseStudy/CaseStudyList.jsx";
import ProjectDetail from "./pages/projects/ProjectDetail.jsx";
import ContactUs from "./pages/ContactUs.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/aboutus/meetourteam", element: <MeetOurTeam /> },
        {
          path: "/aboutus/accreditation_Membership",
          element: <AccreditationMembership />,
        },
        { path: "/aboutus/careers", element: <Careers /> },
        { path: "/aboutus/testimonials", element: <Testimonials /> },
        // { path: '/services/consultancy_smartdesign', element: <SmartDesign/> },
        { path: "/services/:serviceName", element: <ServicePage /> },
        { path: '/services/eco_solutions', element: <EcoSolutions/> },
        { path: '/projects', element: <ProjectList/> },
        { path: '/projects/:projectId', element: <ProjectDetail/> },
        { path: '/casestudies', element: <CaseStudyList/> },
        { path: '/contactus', element: <ContactUs/> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
