import about from "../assets/images/About.png";
import Subscribe from "../components/Subscribe";
import NextLevel from "../components/NextLevel";
import Selected from "../components/Selected";
import OurClientsFeedback from "../components/OurClientsFeedback";
import OurMission2 from "../components/OurMission2";
import Hello from "../components/Hello";
const AboutUs = () => {
    return (
      <div className="min-h-screen bg-white relative">
        {/* Main Content */}
        <div className="relative pt-32 px-8 text-center">
          {/* Large GRAPHY AGENCY text */}
          <div className="text-[16vw] leading-none font-bold">
            ABOUT
            <br />
            <span className="text-[#E1E1E1]">GRAPHY</span>
          </div>

          {/* Welcome text */}
          <div className="mt-8 max-w-md ml-auto text-gray-600">
            <p>
            Discover the perfect blend of creativity and innovation at Graphy Agency. Your go-to destination for everything design.
            </p>
          </div>
          <div>
            <img src={about} alt="about"  className="w-full mx-2 my-10"/>
          </div>
        </div>
        <NextLevel />
        <OurMission2 />
        <Selected />
        <OurClientsFeedback />
        <Subscribe mode="dark" />
        <Hello/>
      </div>
    );
  };
  
  export default AboutUs;