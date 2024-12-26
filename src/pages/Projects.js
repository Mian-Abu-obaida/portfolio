import services from "../assets/images/services.png";
import Subscribe from "../components/Subscribe";
import Hello from "../components/Hello";
import BrandingProjects from "../components/BrandingProjects";
import OurPastProject from "../components/OurPastProject";

const Projects = () => {
    return (
      <div className="min-h-screen bg-white relative">
        {/* Main Content */}
        <div className="relative pt-32 px-8 text-center">
          {/* Large GRAPHY AGENCY text */}
          <div className="text-[16vw] leading-none font-bold">
          <span className="text-[#E1E1E1]">Our</span>
            <br />
            Projects
          </div>

          {/* Welcome text */}
          <div className="mt-8 max-w-md ml-auto text-gray-600">
            <p>
            Discover the perfect blend of creativity and innovation at Graphy Agency. Your go-to destination for everything design.
            </p>
          </div>
          <div>
            <img src={services} alt="about"  className="w-full mx-2 my-10"/>
          </div>
        </div>
        <BrandingProjects />
        <OurPastProject />
        <Subscribe mode="dark" />
        <Hello/>
      </div>
    );
  };
  
  export default Projects;