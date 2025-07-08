import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';  
import Home from './pages/home/Home.jsx';
import MeetOurTeam from './pages/aboutUs/MeetOurTeam.jsx';

function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Layout />,
        children: [
          { path: '/', element: <Home /> },
          { path: '/aboutus/meetourteam', element: <MeetOurTeam /> },
        ],
      },
    ],
    
  );

  return <RouterProvider router={router} />;
}

export default App;
