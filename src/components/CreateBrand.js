import React, { useState } from 'react';

const CreateBrand = () => {
  // Add state to track which section is open
  const [openSection, setOpenSection] = useState('Strategy');

  // Handler for clicking on a section
  const toggleSection = (sectionName) => {
    setOpenSection(openSection === sectionName ? null : sectionName);
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 grid grid-cols-5 justify-between">
        {/* Left Column */}
        <div className="col-span-2 px-10">
          <h2 className="text-6xl font-bold leading-tight mb-8">
            Create a brand<br />
            that customers<br />
            choose
          </h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet consectetur. Elementum interdum congue aliquet ut.
            Curabitur arcu amet quis eget. Et viverra fringilla sed nunc faucibus facilisis amet
            fermentum. Enim pretium id eu in ullamcorper sit. Orci in convallis
            scelerisque phasellus quam sagittis. Nibh fringilla nulla mi diam aenean. Vel sem
            ultrices viverra in laoreet.
          </p>
        </div>
       <div className="col-span-1"></div>
        {/* Right Column */}
        <div className="col-span-2 px-10">
          <div className="space-y-8">
            {/* Strategy Section */}
            <div className="border-b border-gray-200 pb-4">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection('Strategy')}>
                <h3 className="text-2xl font-bold">Strategy</h3>
                <span className="text-2xl">{openSection === 'Strategy' ? '-' : '+'}</span>
              </div>
              {openSection === 'Strategy' && (
                <p className="text-gray-600 mt-4">
                  We work with you on defining your objectives and where you fit in the current market. 
                  We want to understand your positioning and how you currently resonate with your consumers. 
                  From here, we will put together a series of long-term goals that will aim to result in 
                  increased consumer preference for your brand.
                </p>
              )}
            </div>

            {/* Planning Section */}
            <div className="border-b border-gray-200 pb-4">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection('Planning')}>
                <h3 className="text-2xl font-bold">Planning</h3>
                <span className="text-2xl">{openSection === 'Planning' ? '-' : '+'}</span>
              </div>
              {openSection === 'Planning' && (
                <p className="text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet consectetur. Planning phase details go here.
                </p>
              )}
            </div>

            {/* Designing Section */}
            <div className="border-b border-gray-200 pb-4">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection('Designing')}>
                <h3 className="text-2xl font-bold">Designing</h3>
                <span className="text-2xl">{openSection === 'Designing' ? '-' : '+'}</span>
              </div>
              {openSection === 'Designing' && (
                <p className="text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet consectetur. Designing phase details go here.
                </p>
              )}
            </div>

            {/* Review Section */}
            <div className="border-b border-gray-200 pb-4">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection('Review')}>
                <h3 className="text-2xl font-bold">Review</h3>
                <span className="text-2xl">{openSection === 'Review' ? '-' : '+'}</span>
              </div>
              {openSection === 'Review' && (
                <p className="text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet consectetur. Review phase details go here.
                </p>
              )}
            </div>

            {/* Delivery Section */}
            <div className="border-b border-gray-200 pb-4">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection('Delivery')}>
                <h3 className="text-2xl font-bold">Delivery</h3>
                <span className="text-2xl">{openSection === 'Delivery' ? '-' : '+'}</span>
              </div>
              {openSection === 'Delivery' && (
                <p className="text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet consectetur. Delivery phase details go here.
                </p>
              )}
            </div>

            <div className="mt-8">
              <button className="bg-[#CCFF00] text-black px-6 py-3 font-semibold inline-flex items-center">
                Get Your Brand Guideline
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateBrand;