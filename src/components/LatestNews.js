import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import blogData from '../data/blogData.json';
import { createSlug } from '../data/helpers';
import { images } from '../data/images';

const LatestNews = () => {
  const news = blogData.articles;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="bg-black text-white px-8 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-16">
          <div>
            <h2 className="text-6xl font-bold mb-8">
              Latest News
            </h2>
            <Link to="/articles">
              <button className="bg-[#CCFF00] text-black px-6 py-2 flex items-center gap-2 hover:bg-[#b3e600] transition-colors">
                All Articles
                <span className="transform rotate-45">→</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Slider */}
        <Slider {...settings} className="news-slider">
          {news.map((item, index) => (
            <div key={index} className="px-3">
              <div className="group cursor-pointer">
                <div className="aspect-w-16 aspect-h-9 mb-6">
                  <img 
                    src={images[item.imageName]} 
                    alt={item.title}
                    className="w-full h-[300px] object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:underline">
                  {item.title}
                </h3>
                <p className="text-gray-400 mb-6">
                  {item.description}
                </p>
                <Link 
                  to={`/blog/${createSlug(item.title)}`} 
                  className="inline-flex items-center gap-2 border-b border-white pb-1"
                >
                  Read Full
                  <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LatestNews;