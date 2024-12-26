import { Link } from 'react-router-dom';
const Footer = () => {
 return (
   <footer className="bg-[#CCFF00] py-8">
     <div className="container mx-auto px-6">
       {/* Navigation Links */}
       <div className="flex flex-wrap justify-center gap-12 m-12 text-6xl">
         <Link to="/about" className="hover:underline ">
           ABOUT US
         </Link>
         <Link to="/projects" className="hover:underline">
           OUR PROJECTS
         </Link>
         <Link to="/services" className="hover:underline">
           SERVICES
         </Link>
         <br/>
         <Link to="/branding" className="hover:underline">
          BRANDING
         </Link>
         <Link to="/contact" className="hover:underline">
           CONTACT US
         </Link>
       </div>
        {/* Copyright and Production Credit */}
       <div className="flex flex-wrap justify-between text-sm">
         <p>© 2022 COPYRIGHT. ALL RIGHTS RESERVED.</p>
         <p>
           PRODUCTION: <Link to="/" className="hover:underline">GRAPHY AGENCY</Link>
         </p>
       </div>
     </div>
   </footer>
 );
};
export default Footer;  