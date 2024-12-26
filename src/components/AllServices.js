import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AllServices = () => {
  const services = [
    { id: 1, title: 'Logo design', icon: '🎨' },
    { id: 2, title: 'Website design', icon: '💻' },
    { id: 3, title: 'Stationary design', icon: '📝' },
    { id: 4, title: 'Social Media Templates', icon: '📱' },
    { id: 5, title: 'Packaging design', icon: '📦' },
    { id: 6, title: 'Business cards', icon: '🗂️' },
    { id: 7, title: 'Brand Guidelines', icon: '📒' },
    { id: 8, title: 'Marketing Materials', icon: '📊' },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 overflow-hidden">
        <div className="mb-16">
          <h2 className="text-6xl font-bold leading-tight mb-8">
            All your<br />
            services in one.
          </h2>
          <p className="text-gray-600 max-w-2xl">
            I have experience in implementing projects for many large domestic and foreign corporations, 
            enterprises in many fields such as finance, banking, F&B, education, communication.
          </p>
        </div>

        <Slider {...settings} className="services-slider -mx-4">
          {services.map((service) => (
            <div key={service.id} className="px-4">
              <div className="border border-gray-200 bg-transparent p-6 h-40 flex flex-col justify-between">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
            </div>
          ))}
        </Slider>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We are passionate about branding, and always happy to create a custom branding package 
            tailored for your business. Just reach out to our team for more information if you can't 
            see what you're looking for.
          </p>
          <button className="bg-[#CCFF00] text-black px-6 py-3 font-semibold inline-flex items-center">
            Contact Us
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllServices;