import servicesData from '../data/Service.json';

const OurServices = ({ mode = 'light', category = 'development' }) => {
  const bgColor = mode === 'dark' ? 'bg-gray-900' : 'bg-white';
  const textColor = mode === 'dark' ? 'text-white' : 'text-gray-900';
  const descriptionColor = mode === 'dark' ? 'text-gray-300' : 'text-gray-600';

  // Get the services for the specified category
  const categoryData = servicesData[category];

  if (!categoryData) {
    return null; // or show an error message
  }

  return (
    <div className={`px-12 py-16 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold mb-12 ${textColor}`}>
          {categoryData.id}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categoryData.services.map((service, index) => (
            <div key={index} className="group px-4">
              <div className="flex justify-between items-start mb-4">
                <h3 className={`text-2xl font-bold ${textColor}`}>
                  {service.title}
                </h3>
                <svg 
                  className={`w-6 h-6 transform group-hover:translate-x-2 transition-transform ${textColor}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </div>
              <p className={`${descriptionColor}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;