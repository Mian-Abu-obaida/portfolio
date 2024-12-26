import React from 'react';
import { Link } from 'react-router-dom';
import blogData from '../data/blogData.json';
import { createSlug } from '../data/helpers';
import {images} from '../data/images';
const Articles = () => {
  const articles = blogData.articles;
  
  return (
    <div className="bg-black text-white min-h-screen px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold mb-16">All Articles</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-w-16 aspect-h-9 mb-6">
                <img 
                  src={images[article.imageName]} 
                  alt={article.title}
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:underline">
                {article.title}
              </h3>
              <p className="text-gray-400 mb-6">
                {article.description}
              </p>
              <Link 
                to={`/blog/${createSlug(article.title)}`} 
                className="inline-flex items-center gap-2 border-b border-white pb-1"
              >
                Read Full
                <span className="transform group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;