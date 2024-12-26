import React from 'react';
import { useParams } from 'react-router-dom';
import Subscribe from './Subscribe';
import Hello from './Hello';
import ExploreWork from './ExploreWork';
import { projects } from '../data/projects';

const ProjectDetail = () => {
    const { projectId } = useParams();
    
    // Find the project that matches the URL parameter
    const project = projects.find(
      p => p.title.toLowerCase().replace(/\s+/g, '-') === projectId
    );
  
    if (!project) {
      return <div>Project not found</div>;
    }
  return (
    <div>
    <div className="container mx-auto px-16 py-16">
      {/* Project Header Image */}
      <div className="mb-16 px-10">
        <h2 className='text-5xl font-bold mb-4'>{project.title}</h2>
        <p className='text-xl mb-4'>{project.description}</p>
        <img 
          src={project.image}
          alt={project.title}
          className="w-full rounded-lg py-10"
        />
      </div>

      {/* Project Info Grid */}
      <div className="grid grid-cols-3 gap-8 mb-16 px-10">
        <div className='col-span-1'>
                {/* Industry */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Industry</h2>
          <p className="text-gray-700">{project.industry.join(', ')}</p>
        </div>

        {/* Headquarter */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Headquarter</h2>
          <p className="text-gray-700">{project.headquarter}</p>
        </div>

        {/* Our Role */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Our Role</h2>
          <p className="text-gray-700">{project.ourRole.join(', ')}</p>
        </div>

        {/* Establishment */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Establishment</h2>
          <p className="text-gray-700">{project.establishment}</p>
        </div>
        {/* Technologies */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Technologies</h2>
          <p className="text-gray-700">{project.technologies.join(', ')}</p>
        </div>
        </div>
        <div className='col-span-2'>
        {/* Project Content */}
      <div className="space-y-10">
        {/* Project Overview */}
        <div >
          <h2 className="text-3xl font-bold mb-2">Project Overview</h2>
          <p className="text-gray-700">{project.overview}</p>
        </div>

        {/* The Challenge */}
        <div>
          <h2 className="text-3xl font-bold mb-2">The Challenge</h2>
          <p className="text-gray-700">{project.challenge}</p>
        </div>

        {/* The Solution */}
        <div>
          <h2 className="text-3xl font-bold mb-2">The Solution</h2>
          <p className="text-gray-700">{project.solution}</p>
        </div>
      </div>
        </div>
      </div>
      <div className='flex flex-col gap-4 align-center px-10'>
            <h2 className='text-5xl font-bold mb-4'>Design</h2>
            <img src={project.image2}
            className='w-full rounded-lg'
            />
            <img src={project.image3}
            className='w-full rounded-lg'   
            />
            <div className='grid grid-cols-2 gap-4 align-center'>
                <img src={project.image4}
                className='w-full rounded-lg col-span-1'
                />
                <img src={project.image5}
                className='w-full rounded-lg col-span-1'
                />
            </div>
        </div>
    </div>
          <Subscribe mode="light" />
          <ExploreWork />
          <Hello /> 
    </div>
  );
};

export default ProjectDetail;