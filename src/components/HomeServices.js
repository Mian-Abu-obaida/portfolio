const ServiceCard = ({ title, description, isEven }) => (
  <div className="grid grid-cols-3 border-t border-gray-200 py-12">
    {isEven ? (
      <>
        <div className="col-span-1"></div>
        <div className="col-span-1"></div>
        <div className="col-span-1 space-y-4">
          <div className="flex justify-between items-start">
            <h3 className="text-4xl font-bold">{title}</h3>
            <span className="transform rotate-45 text-xl">↗</span>
          </div>
          <p className="text-gray-600">{description}</p>
        </div>
      </>
    ) : (
      <>
        <div className="col-span-1"></div>
        <div className="col-span-1 space-y-4">
          <div className="flex justify-between items-start">
            <h3 className="text-4xl font-bold">{title}</h3>
            <span className="transform rotate-45 text-xl">↗</span>
          </div>
          <p className="text-gray-600">{description}</p>
        </div>
        <div className="col-span-1"></div>
      </>
    )}
  </div>
);

const HomeServices = () => {
  const services = [
    {
      title: "Logo Design",
      description: "Your business logo is only the beginning of your brand story. Graphic design is more than just providing an extremely creative new logo, it also means considering your target audience and the decision-making of your potential customers."
    },
    {
      title: "UI UX Design",
      description: "Create the best digital experience for your customers. With both web design and web development, we can build you the responsive website your business needs to make the perfect first impression."
    },
    {
      title: "Frontend Development",
      description: "Enterprises and startups trust frontend developers at graphy to deliver performance-focused and usable interfaces for the web and mobile apps."
    },
    {
      title: "Business Growth",
      description: "Content strategy, planning, design, social paid and network management. Discover different, creative marketing strategies focused on meeting objectives, spreading your brand and converting leads."
    }
  ];

  return (
    <div className="px-8 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-6 gap-2 mb-24">
        {/* Header Section */}
        <div className="col-span-2">
          <div className="col-span-1">
            <h2 className="text-6xl font-bold mb-8">
              Our
              <br />
              Services
            </h2>
            <button className="bg-[#CCFF00] px-6 py-2 flex items-center gap-2 hover:bg-[#b3e600] transition-colors">
              All Services
              <span className="transform rotate-45">→</span>
            </button>
          </div>
        </div>

        {/* Agency Description */}
        <div className="col-span-4 grid grid-cols-6 gap-2">
          <div className="flex justify-end col-span-1">
            <div className="bg-black text-white p-8 w-24 h-24 flex items-center justify-center">
              <span className="text-sm">
                Graphy
                <br />
                Agency
              </span>
            </div>
          </div>
          <div className="col-span-4">
            <p className="text-gray-600 text-xl">
              GA combine human empathy and intelligent data to provide 
              the highest level of satisfaction for our customers and their users.
            </p>
          </div>
        </div>
        </div>
        {/* Services List */}
        <div>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              isEven={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeServices;