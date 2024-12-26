import figmaLogo from '../assets/images/logo-02.png';
import xdLogo from '../assets/images/logo-07.png';
import webflowLogo from '../assets/images/logo-01.png';
import invisionLogo from '../assets/images/logo-03.png';
import sketchLogo from '../assets/images/logo-06.png';
import hubspotLogo from '../assets/images/logo-05.png';
import balsamiqLogo from '../assets/images/logo-04.png';
import star1 from '../assets/images/Mission-star-1.png';
import star2 from '../assets/images/Mission-Star-2.png';
const Mission = () => {
 const tools = [
   { name: 'Figma', logo: figmaLogo },
   { name: 'Adobe XD', logo: xdLogo },
   { name: 'Webflow', logo: webflowLogo },
   { name: 'InVision', logo: invisionLogo },
   { name: 'Sketch', logo: sketchLogo },
   { name: 'HubSpot', logo: hubspotLogo },
   { name: 'Balsamiq', logo: balsamiqLogo },
 ];
  return (
   <div className="px-8 py-16 relative" style={{backgroundColor: '#F2F2F2'}}>
     {/* Star decoration - top right */}
     <div className="absolute top-32 right-16">
       <img src={star1} alt="Star 1"  />
     </div>
      {/* Star decoration - bottom left */}
     <div className="absolute bottom-32 left-24">
       <img src={star2} alt="Star 2"  />
     </div>
      <div className="max-w-7xl mx-auto space-y-16 ">
       {/* Main heading and description */}
       <div className="max-w-5xl">
         <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
           Our mission is to design the best websites & dashboards around
         </h2>
         <p className="text-gray-600 text-lg max-w-3xl ps-16 text-left">
           I have experience in implementing projects for many large domestic and foreign 
           corporations, enterprises in many elds such as nance, banking, F&B, education, 
           communication.
         </p>
       </div>
        {/* Tools section */}
       <div className="flex flex-wrap justify-center items-center gap-12">
         {tools.map((tool, index) => (
           <img
             key={index}
             src={tool.logo}
             alt={tool.name}
             className="h-8 object-contain hover:grayscale transition-all duration-300"
           />
         ))}
       </div>
        {/* Bottom text */}
       <div className="max-w-xl ml-auto pt-16">
         <p className="text-gray-600 text-lg pr-16 text-left">
           There are an estimated 20 million eCommerce sites across the entire globe, 
           with more and more being created every single day. Did you know that 99% of them 
           won't make any profit? We've have helped many to be in the other 1%.
         </p>
       </div>
     </div>
   </div>
 );
};
export default Mission;