import businessImage from '../assets/images/business.png';
import businessCircle from '../assets/images/business-circle.png';
const Business = () => {
 return (
   <div className="min-h-screen bg-black text-white px-8 py-16">
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
       {/* Left Content */}
       <div className="space-y-8">
         <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
           Taking Your Business
           <br />
           To Next Level
         </h2>
         
         <p className="text-gray-300 max-w-2xl">
           At Graphy Agency, we specialize in elevating your business to new heights
           through the power of design. Our dedicated team of designers, artists, and
           innovators is committed to taking your brand to the next level. From
           captivating branding strategies to stunning web designs, we are the catalysts
           that turn your visions into remarkable realities. Join us on this journey, where
           imagination and design converge, and let's together take your business to the
           next level.
         </p>
          {/* Stats */}
         <div className="flex gap-16 pt-8">
           <div>
             <h3 className="text-5xl font-bold">200+</h3>
             <p className="text-sm text-gray-400 mt-2">
               SUCCESSFULLY
               <br />
               COMPLETED
               <br />
               PROJECTS
             </p>
           </div>
           <div>
             <h3 className="text-5xl font-bold">3+</h3>
             <p className="text-sm text-gray-400 mt-2">
               YEARS OF
               <br />
               EXPERIENCE
             </p>
           </div>
         </div>
       </div>
        {/* Right Content - Image and Circle */}
       <div className="relative my-10">
         <img 
           src={businessImage} 
           alt="Business Team" 
           className="rounded-lg"
         />
         <img src={businessCircle} alt="Business Team" className="absolute" style={{width: "12rem", height:"12rem", bottom:"-6rem", left:"-6rem"}} />
       </div>
     </div>
   </div>
 );
};
export default Business;