import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const AllProjects = () => {
  
  
  return (
    
    <div className="bg-black text-white min-h-screen px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold mb-16">All Project</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link to={`/project/${project.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-black underline">
            <div key={index} className="group cursor-pointer">
              <div className="aspect-w-16 aspect-h-9 mb-6">
                <img 
                  src={project.image}  
                  alt={project.title}
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:underline">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6">
                {project.description}
              </p>

              <div className="inline-block bg-[#CCFF00] text-black px-6 py-3 font-medium hover:bg-[#a3cc00] transition-colors">
              See All Work →
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;