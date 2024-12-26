import NextLevelImage  from "../assets/images/NextLevel.png";
const NextLevel = () => {
 return (
   <div className="container mx-auto px-8 py-16 ">
     <div className="col-span-2 grid md:grid-cols-3 gap-8 items-center">
       <div className="space-y-6 col-span-2">
         <h2 className="text-4xl font-bold">Taking Your Business To Next Level</h2>
         <p className="text-gray-600">
           At GRAPHY AGENCY, we specialize in elevating your business to new heights through 
           our expert design and development services. With years of experience, we are 
           committed to taking your brand to the next level. From captivating branding 
           strategies to stunning web designs, we are the solution that will help propel 
           your business into the digital age. Let us help you navigate this ever-evolving 
           landscape, and let's together take your business to the next level.
         </p>
         <div className="flex gap-16 mt-8">
           <div>
             <h3 className="text-4xl font-bold">200+</h3>
             <p className="text-gray-600">SATISFIED CLIENTS</p>
           </div>
           <div>
             <h3 className="text-4xl font-bold">3+</h3>
             <p className="text-gray-600">YEARS OF EXPERIENCE</p>
           </div>
         </div>
       </div>
       <div className="col-span-1" >
         <img src={NextLevelImage} alt="Team Meeting" className="rounded-lg" />
       </div>
     </div>
   </div>
 );
};
export default NextLevel;