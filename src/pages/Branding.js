import BrandingImage from "../assets/images/Branding.png";
import Subscribe from "../components/Subscribe";
import OurClientsFeedback from "../components/OurClientsFeedback";
import Hello from "../components/Hello";
import BrandingProjects from "../components/BrandingProjects";
import CreateBrand from "../components/CreateBrand";
import AllServices from "../components/AllServices";


const Branding = () => {
    return (
      <div className="min-h-screen bg-white relative">
        {/* Main Content */}
        <div className="relative pt-32 px-8 text-center">
          {/* Large GRAPHY AGENCY text */}
          <div className="text-[16vw] leading-none font-bold">
            BRANDING
            <br />
            <span className="text-[#E1E1E1]">IN LAHORE</span>
          </div>
          <div>
            <img src={BrandingImage} alt="about"  className="w-full mx-2 my-10"/>
          </div>
          {/* Welcome text */}
          <div className="mt-8 grid grid-cols-3 text-black-600 text-left">
            <div className="col-span-1">
                <h2 className="text-5xl font-bold mb-4">Create a brand that customers choose</h2>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-1">
                <h4 className="text-2xl font-bold mb-4">Branding has the power to change the direction of your business.</h4>
                <p>Discover the perfect blend of creativity and innovation at Graphy Agency. Your go-to destination for everything design.</p>
            </div>
            
          </div>
        </div>                        
        <BrandingProjects />
        <CreateBrand />
        <AllServices />
        <OurClientsFeedback />
        <Subscribe mode="dark" />
        <Hello/>
      </div>
    );
  };
  
  export default Branding;