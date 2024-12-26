import leaderImage from '../assets/images/leaders.png';
const Leaders = () => {
 return (
   <div className="px-8 py-16 bg-white relative">
     
      <div className="max-w-7xl mx-auto">
       {/* Main Heading */}
       <h2 className="text-6xl font-bold mb-16 max-w-5xl ps-2">
         We are a UX-driven web agency taking industry leaders forward
       </h2>
        {/* Image Section with Overlay Text */}
       <div className="relative">
         <img 
           src={leaderImage} 
           alt="UX Design Team" 
           className="w-full h-[600px] object-cover"
         />
         
         {/* Overlay Text */}
         <div className="absolute bottom-12 left-32 text-white">
           <div className="flex items-center gap-2 mb-2">
             <h3 className="text-2xl">Your website...</h3>
           </div>
           <p className="text-xl mb-6">redefined in just three months.</p>
           
           {/* Discover Button */}
           <div className="group cursor-pointer">
             <span className="text-white border-b border-white pb-1 inline-flex items-center gap-2">
               Discover 
               <span className="group-hover:translate-x-2 transition-transform">→</span>
             </span>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
};
export default Leaders;