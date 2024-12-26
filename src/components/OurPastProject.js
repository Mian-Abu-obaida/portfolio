import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectCard = ({ title, description, image, tags, index }) => (
  <Link 
    to={`/project/${title.toLowerCase().replace(/\s+/g, '-')}`} 
    className="grid grid-cols-3 group cursor-pointer mb-24"
  >
    <div></div>
    {index % 2 === 0 ? (
      // Even numbered cards (0, 2, 4...) - Text first, then image
      <>
        <div className="flex justify-between items-start mb-4">
          <div className='p-4'>
            <div className='flex justify-between'>
              <h3 className="text-2xl font-bold mb-3 group-hover:underline">{title}</h3>
              <span className="transform rotate-45 mr-10">↗</span>
            </div>
            <p className="text-gray-600 max-w-md">{description}</p>
            <div className="flex gap-2 mt-4">
              {tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-4 py-1 rounded-full border border-gray-300 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <img src={image} alt={title} className="w-full rounded-lg" />
        </div>
      </>
    ) : (
      // Odd numbered cards (1, 3, 5...) - Image first, then text
      <>
        <div className="mt-4">
          <img src={image} alt={title} className="w-full rounded-lg" />
        </div>
        <div className="flex justify-between items-start mb-4">
          <div className='p-4'>
            <div className='flex justify-between'>
              <h3 className="text-2xl font-bold mb-3 group-hover:underline">{title}</h3>
              <span className="transform rotate-45 mr-10">↗</span>
            </div>
            <p className="text-gray-600 max-w-md">{description}</p>
            <div className="flex gap-2 mt-4">
              {tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-4 py-1 rounded-full border border-gray-300 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </>
    )}
  </Link>
);

const OurPastProject = () => {
  return (
    <div className="px-8 py-16 bg-white">
      <div className="flex justify-between items-start mb-12">
        <div>
          <h2 className="text-5xl font-bold mb-8">
            Our Past
            <br />
            Projects
          </h2>
          <Link to="/allprojects">
          <button className="bg-[#CCFF00] px-6 py-2 flex items-center gap-2 hover:bg-[#b3e600] transition-colors">
            All Cases
            <span className="transform rotate-45">→</span>
          </button>
          </Link>
        </div>
        <Link to="/work" className="text-black underline">
          See all projects
        </Link>
      </div>
      <div className="space-y-16">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            {...project}
          />
        ))}
      </div>
    </div>
  );
};

export default OurPastProject;