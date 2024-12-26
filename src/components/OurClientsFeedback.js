import { useState } from 'react';

const OurClientsFeedback = () => {
  const testimonials = [
    {
      text: "Working with Graphy Agency has been an absolute pleasure. Their attention to detail and creative solutions have transformed our digital presence.",
      author: "John D.",
      rating: 5
    },
    {
      text: "Working with Graphy Agency has been an absolute pleasure. Their attention to detail and creative solutions have transformed our digital presence.",
      author: "John D.",
      rating: 5
    },
    {
      text: "Working with Graphy Agency has been an absolute pleasure. Their attention to detail and creative solutions have transformed our digital presence.",
      author: "John D.",
      rating: 5
    },
    {
      text: "Working with Graphy Agency has been an absolute pleasure. Their attention to detail and creative solutions have transformed our digital presence.",
      author: "John D.",
      rating: 5
    },
    {
      text: "Working with Graphy Agency has been an absolute pleasure. Their attention to detail and creative solutions have transformed our digital presence.",
      author: "John D.",
      rating: 5
    },
    {
      text: "Working with Graphy Agency has been an absolute pleasure. Their attention to detail and creative solutions have transformed our digital presence.",
      author: "John D.",
      rating: 5
    },
    {
      text: "Working with Graphy Agency has been an absolute pleasure. Their attention to detail and creative solutions have transformed our digital presence.",
      author: "John D.",
      rating: 5
    },
    {
      text: "Working with Graphy Agency has been an absolute pleasure. Their attention to detail and creative solutions have transformed our digital presence.",
      author: "John D.",
      rating: 5
    },
    {
      text: "Working with Graphy Agency has been an absolute pleasure. Their attention to detail and creative solutions have transformed our digital presence.",
      author: "John D.",
      rating: 5
    },
    {
      text: "Working with Graphy Agency has been an absolute pleasure. Their attention to detail and creative solutions have transformed our digital presence.",
      author: "John D.",
      rating: 5
    },
    // Add more testimonials as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(3);
  const [currentIndex2, setCurrentIndex2] = useState(0);

  const handleNext = () => {
    console.log('Next clicked', currentIndex, testimonials.length);
    if (currentIndex < testimonials.length ) {
      setCurrentIndex(prev => prev + 1);
      setCurrentIndex2(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    console.log('Prev clicked', currentIndex);
    if (currentIndex2 > 0) {
      setCurrentIndex(prev => prev - 1);
      setCurrentIndex2(prev => prev - 1);
    }
  };

  return (
    <div className="container mx-auto px-8 py-16">
      <h2 className="text-4xl font-bold mb-12">Our clients feedback is important for us.</h2>
      <div className="relative">
        <div className="flex gap-6 overflow-hidden">
          <div 
            className="flex gap-6 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex2 * 340}px)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="max-w-[340px] flex-shrink-0 bg-gray-100 p-6 rounded-lg">
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
                <p className="mt-4 font-bold">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
        <button 
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg ${currentIndex === 0 ? 'opacity-50' : 'hover:bg-gray-100'}`}
        >
          ←
        </button>
        <button 
          onClick={handleNext}
          disabled={currentIndex2 >= testimonials.length}
          className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg ${currentIndex >= testimonials.length - 3 ? 'opacity-50' : 'hover:bg-gray-100'}`}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default OurClientsFeedback;