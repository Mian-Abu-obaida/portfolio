import Business from "../components/Business";
import OurPastProject from "../components/OurPastProject";
import Mission from "../components/Mission";
import HomeServices from "../components/HomeServices";
import Leaders from "../components/Leaders";
import LatestNews from "../components/LatestNews";
import Subscribe from "../components/Subscribe";
import Hello from "../components/Hello";
const Home = () => {
    return (
     
      <div className="min-h-screen bg-white relative">
        {/* Main Content */}
        <div className="relative pt-32 px-8 text-center">
          {/* Large GRAPHY AGENCY text */}
          <div className="text-[16vw] leading-none font-bold">
            GRAPHY
            <br />
            AGENCY
          </div>
        
          {/* Quote Button */}
          <div className="absolute top-16 right-16">
          <button className="rounded-full border border-black p-4 group hover:bg-black hover:text-white transition-colors">
            <div className="text-center text-sm space-y-1">
              <div className="flex items-center gap-2">
                Quote <span className="rotate-45">↑</span>
              </div>
              <div>About</div>
              <div>Project</div>
            </div>
          </button>
        </div>

          {/* Welcome text */}
          <div className="mt-8 max-w-md ml-auto text-gray-600">
            <p>
              Welcome to Graphy Agency, where creativity meets innovation. We are your
              destination for all things design-related.
            </p>
          </div>
        </div>
        <Business />
        <OurPastProject />
        <Mission />
        <HomeServices />
        <Leaders />
        <LatestNews />
        <Subscribe mode="light" />
        <Hello /> 
      </div>
      
    );
  };
  
  export default Home;