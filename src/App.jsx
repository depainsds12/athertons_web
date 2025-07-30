import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import "./index.css";
import AccreditationMembership from "./pages/aboutUs/AccreditationMembership.jsx";
import Careers from "./pages/aboutUs/Careers.jsx";
import MeetOurTeam from "./pages/aboutUs/MeetOurTeam.jsx";
import Testimonials from "./pages/aboutUs/Testimonials.jsx";
import CaseStudyList from "./pages/caseStudy/CaseStudyList.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Home from "./pages/home/Home.jsx";
import ProjectDetail from "./pages/projects/ProjectDetail.jsx";
import ProjectList from "./pages/projects/ProjectList.jsx";
import EcoSolutions from "./pages/services/EcoSolutions.jsx";
import ServicePage from "./pages/services/ServicePage.jsx";
import News from "./pages/new/News.jsx";
import NewsDetail from "./pages/new/NewsDetail.jsx";


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
        { path: "/services/eco_solutions", element: <EcoSolutions /> },
        { path: "/projects", element: <ProjectList /> },
        { path: "/projects/:projectId", element: <ProjectDetail /> },
        { path: "/casestudies", element: <CaseStudyList /> },
        { path: "/casestudies", element: <CaseStudyList /> },
        { path: "/contactus", element: <ContactUs /> },
        { path: "/newsandinsight", element: <News /> },
        { path: "/newsandinsight/:newsId", element: <NewsDetail /> },

      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
