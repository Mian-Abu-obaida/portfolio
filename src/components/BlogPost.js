import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import blogData from '../data/blogData.json';
import { createSlug } from '../data/helpers';
import { images } from '../data/images';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = blogData.articles.find(
      post => createSlug(post.title) === slug
    );
    setPost(foundPost);
  }, [slug]);

  if (!post) return <div>Post not found</div>;

  return (
    <div className="bg-white text-black min-h-screen">
      <div className="max-w-4xl mx-auto px-8 py-16">
        {/* Back button */}
        <Link 
          to="/articles" 
          className="inline-flex items-center gap-2 text-[#CCFF00] mb-8"
        >
          ← Back to News
        </Link>

        {/* Date */}
        <div className="text-gray-400 mb-4">{post.date}</div>

        {/* Title */}
        <h1 className="text-6xl font-bold mb-8">{post.title}</h1>

        {/* Featured Image */}
        <div className="mb-12">
          <img 
            src={images[post.imageName]} 
            alt={post.title}
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-6">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;