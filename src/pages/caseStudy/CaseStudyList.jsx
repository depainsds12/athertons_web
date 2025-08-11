import React from 'react';
import { useEffect ,useState } from 'react';
// import { projects } from '../../data/projects';
import { Link ,useNavigate } from 'react-router-dom';
import { caseStudies } from '../../data/caseStudies';
import { getCaseStudyList } from '../../api/routes';
import { getAxios } from '../../api/config';

const CaseStudyList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getAxios().get(getCaseStudyList);
          console.log("data of projects are", response?.data?.data);
          setData(response.data.data);
        } catch (error) {
          console.error("Failed to fetch Case Studies API:", error);
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);

    
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <section
        className="w-full min-h-screen bg-white flex flex-col font-Poppins"
        aria-labelledby="careers-heading"
      >
        {/* Banner */}
        <div
          className="relative w-full aspect-[1366/300] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${data.banner_image})` }}
          role="presentation"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[#192437]/60" aria-hidden="true" />
          <h2
            id="careers-heading"
            className="relative z-10 text-white text-3xl md:text-[45px] lg:text-[55px] xl:text-[60px] font-bold tracking-wide text-center"
          >
          
            {data.banner_title}
          </h2>
        </div>

        
        <div className="w-full mx-auto flex flex-wrap justify-center gap-y-12 py-12 px-4">
          {data.case_study_data.map((project, idx) => (
            <div
              key={project.id}
              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 flex justify-center"
            >
              <div className="flex flex-col items-start">
                <div
                  className="aspect-[1.32] max-w-[330px] sm:w-[250px] sm:h-[190px] md:w-[280px] md:h-[210px] lg:w-[300px] lg:h-[226px] xl:w-[330px] xl:h-[250px] overflow-hidden mb-4 bg-gray-100 flex items-center justify-center border"
                  style={{
                    borderColor: '#D6D6D6',
                    borderWidth: '1px',
                  }}
                >
                  <img
                    src={project.featured_image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                </div>
                <div className="text-[#192437] font-semibold text-[20px] leading-[100%] font-['Open_Sans'] mb-2 text-left w-full">
                  {project.title}
                </div>
                <Link
                 onClick={() => navigate(`/casestudies/${project.id}`,{
                  state: {caseStudyId: project.id}
                })} 
                  className="text-[#03837E] font-medium text-[18px] leading-[100%] underline underline-offset-2 font-['Open_Sans'] hover:text-[#02635f] cursor-pointer text-left w-full"
                  style={{
                    textDecorationStyle: 'solid',
                    textDecorationThickness: 0,
                  }}
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CaseStudyList;