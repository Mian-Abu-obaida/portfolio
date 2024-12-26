import { useState } from 'react';
import missionImage from '../assets/images/OurMission.png';
const OurMission2 = () => {
 const [isHovered, setIsHovered] = useState(false);
  return (
   <div className="container mx-auto px-8 py-16">
     <div className="grid grid-cols-2 gap-8">
       {/* Left side - Image with plus button */}
       <div className="relative">
         <img 
           src={missionImage} 
           alt="Laptop showing simple design text" 
           className="w-full h-auto grayscale"
         />
         <button 
           className="absolute w-32 h-32 bg-[#CCFF00] flex items-center justify-center text-5xl rounded-full"
           style={{right: '-4rem', bottom: '-3rem'}}
           onMouseEnter={() => setIsHovered(true)}
           onMouseLeave={() => setIsHovered(false)}
         >
           +
         </button>
       </div>
        {/* Right side - Mission text */}
       <div className="flex items-center">
         <h2 className="text-5xl font-normal leading-tight">
           Our mission is to design the best websites & dashboards around
         </h2>
       </div>
     </div>
   </div>
 );
};
export default OurMission2;