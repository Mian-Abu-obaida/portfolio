import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';  // Import projects data

const ExploreWork = () => {
  return (
    <div className="bg-[#1A1A1A] py-20 px-12">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="mb-12">
          <h2 className="text-white text-6xl font-bold mb-8">
            EXPLORE WHAT WE<br />
            HAVE DONE
          </h2>
          <Link to="/allprojects"

            className="inline-block bg-[#CCFF00] text-black px-6 py-3 font-medium hover:bg-[#a3cc00] transition-colors"
          >
            See All Work →
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link 
              key={project.title}
              to={`/project/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-4">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="text-white">
                <p className="text-sm text-gray-400 mb-2">{project.tags.join(', ')}</p>
                <h3 className="text-2xl font-medium">{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreWork;