import { useState } from 'react';
import shery from "../assets/images/shery.png";
import obaida from "../assets/images/obaida.jpg";
const Selected = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const team = [
   {
     name: "Shahryar Minhas",
     position: "CEO, Founder",
     social: "LinkedIn, Instagram",
     description: "As the founder and CEO of graphy.agency, I am brings a wealth of expertise and a keen eye for detail to every project undertaken. Whether it's crafting intuitive user interfaces or designing captivating visuals, My work consistently exceeds expectations. Trust in his skills and let your branding and design aspirations come to life with graphy.agency.",
     image: shery,
   },
   {
     name: "Munim Haider",
     position: "Manager",
     social: "LinkedIn, Instagram",
     description: "As the founder and CEO of graphy.agency, I am brings a wealth of expertise and a keen eye for detail to every project undertaken. Whether it's crafting intuitive user interfaces or designing captivating visuals, My work consistently exceeds expectations. Trust in his skills and let your branding and design aspirations come to life with graphy.agency.",
     image: '../assets/images/shery.png'
   },
   {
     name: "Mian Abu Obaida",
     position: "Developer",
     social: "LinkedIn, Instagram",
     description: "As the founder and CEO of graphy.agency, I am brings a wealth of expertise and a keen eye for detail to every project undertaken. Whether it's crafting intuitive user interfaces or designing captivating visuals, My work consistently exceeds expectations. Trust in his skills and let your branding and design aspirations come to life with graphy.agency.",
     image: obaida,
   },
   {
     name: "Afshan Asif",
     position: "HR-Manager",
     social: "LinkedIn, Instagram",
     description: "As the founder and CEO of graphy.agency, I am brings a wealth of expertise and a keen eye for detail to every project undertaken. Whether it's crafting intuitive user interfaces or designing captivating visuals, My work consistently exceeds expectations. Trust in his skills and let your branding and design aspirations come to life with graphy.agency.",
     image: '../assets/images/shery.png'
   }
 ];
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="container mx-auto px-8 py-16">
      <div className="mb-12">
        <h2 className="text-4xl font-bold">WE ARE SELECTED.</h2>
      </div>
      <div className="grid grid-cols-1 divide-y">
        {team.map((member, index) => (
          <div 
            key={index} 
            className="py-6 cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            {activeIndex === index ? (
                <div className='grid grid-cols-12'>
              <div className="col-span-8 flex flex-col gap-4">
                <h3 className="font-bold text-xl">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
                <p className="text-gray-600">{member.social}</p>
                <p className="max-w-2xl text-gray-600 leading-relaxed">
                  {member.description}
                </p>
               </div>
                <div className="col-span-4">
                  
                  <img 
                    src = {member.image}
                    alt={member.name} 
                    style={{width: "300px", height: "400px"}}
                  />
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-3 justify-between items-center">
                 <div><h3 className="font-bold text-xl">{member.name}</h3></div>
                <div><span className="text-gray-600">{member.position}</span></div>
                <div><span className="text-gray-600">{member.social}</span></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Selected;