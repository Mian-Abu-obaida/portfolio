import React from 'react';

// Import your project images
import BrandWork1 from '../assets/images/BrandWork1.png'; // OpenMenu.pk app
import BrandWork2 from '../assets/images/BrandWork2.png'; // Rich Technologies branding
import BrandWork3 from '../assets/images/BrandWork3.png'; // Global Art & Cultural Exchange
import BrandWork4 from '../assets/images/BrandWork4.png'; // Rich.pk visual guide
import BrandWork5 from '../assets/images/BrandWork5.png'; // Rich Technologies logo
import BrandWork6 from '../assets/images/BrandWork6.png'; // HomeAuctionMLS
import BrandWork7 from '../assets/images/BrandWork7.png'; // Rich Technologies business cards
import BrandWork8 from '../assets/images/BrandWork8.png'; // Notion logo

const BrandingProjects = () => {
  const projects = [
    {
      id: 1,
      image: BrandWork1,
      title: "OpenMenu.pk",
      category: "App Design & Branding"
    },
    {
      id: 2,
      image: BrandWork2,
      title: "Rich Technologies",
      category: "Brand Identity"
    },
    {
      id: 3,
      image: BrandWork3,
      title: "Global Art & Cultural Exchange",
      category: "Logo Design"
    },
    {
      id: 4,
      image: BrandWork4,
      title: "Rich.pk",
      category: "Visual Brand Guide"
    },
    {
      id: 5,
      image: BrandWork5,
      title: "Rich Technologies",
      category: "Logo Design"
    },
    {
      id: 6,
      image: BrandWork6,
      title: "HomeAuctionMLS",
      category: "Brand Identity"
    },
    {
      id: 7,
      image: BrandWork7,
      title: "Rich Technologies",
      category: "Brand Assets"
    },
    {
      id: 8,
      image: BrandWork8,
      title: "Notion",
      category: "Logo Design"
    }
  ];

  return (
    <section className="bg-[#1A1A1A] py-20">
      <div className="max-w-none">
        {/* Heading - contained within normal margins */}
        <div className="container mx-auto px-4 mb-16">
          <h2 className="text-white text-6xl font-bold leading-tight">
            Our recent branding<br />
            projects.
          </h2>
        </div>

        {/* Projects Grid - extends beyond container */}
        <div className="relative overflow-hidden">
          {/* First Row */}
          <div className="flex -mx-[10%] mb-8">
            {projects.slice(0, 4).map((project) => (
              <div key={project.id} className="w-1/4 px-2">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover" 
                />
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="flex -mx-[10%]">
            {projects.slice(4, 8).map((project) => (
              <div key={project.id} className="w-1/4 px-2">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingProjects;