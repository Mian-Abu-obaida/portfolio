import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    projectType: 'USER EXPERIENCE DESIGN',
    projectIdea: '',
    budget: '',
    source: '',
    contact: ''
  });

  const budgetOptions = [
    '<$500',
    '$500 - $1000',
    '$1000 - $1500',
    '$1500 - $2000',
    '$2000+'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="bg-gray-50 p-8 rounded-lg max-w-4xl mx-auto relative">
      {/* Close button */}
      <button className="absolute right-6 top-6">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      <form onSubmit={handleSubmit} className="space-y-8">
        <h1 className="text-3xl font-medium mb-8">Hello, Team!</h1>

        {/* Name and Company */}
        <div className="flex items-center gap-2 text-xl">
          <span>My name is</span>
          <input
            type="text"
            placeholder="YOUR NAME"
            className="border-b border-gray-300 px-2 py-1 flex-1 focus:outline-none"
          />
          <span>from</span>
          <input
            type="text"
            placeholder="WEBSITE OR COMPANY NAME"
            className="border-b border-gray-300 px-2 py-1 flex-1 focus:outline-none"
          />
        </div>

        {/* Project Type */}
        <div className="flex items-center gap-2 text-xl">
          <span>I'd like to discuss</span>
          <select className="bg-gray-200 rounded-full px-4 py-1 focus:outline-none">
            <option>USER EXPERIENCE DESIGN</option>
            {/* Add other options as needed */}
          </select>
          <span>project idea & design brief</span>
        </div>

        {/* Project Idea */}
        <div>
          <input
            type="text"
            placeholder="PITCH YOUR PROJECT IDEA (OPTIONAL)"
            className="w-full border-b border-gray-300 px-2 py-1 focus:outline-none"
          />
        </div>

        {/* Budget */}
        <div className="space-y-4">
          <div className="text-xl">A budget for this project is</div>
          <div className="flex flex-wrap gap-2">
            {budgetOptions.map((option) => (
              <button
                key={option}
                type="button"
                className="bg-gray-200 rounded-full px-4 py-1 hover:bg-gray-300 focus:outline-none"
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Source */}
        <div className="flex items-center gap-2 text-xl">
          <span>I learned about your company through</span>
          <input
            type="text"
            placeholder="SOURCE (OPTIONAL)"
            className="border-b border-gray-300 px-2 py-1 flex-1 focus:outline-none"
          />
        </div>

        {/* Contact */}
        <div className="flex items-center gap-2 text-xl">
          <span>Contact me back at</span>
          <input
            type="text"
            placeholder="YOUR EMAIL / BUSINESS WHATSAPP"
            className="border-b border-gray-300 px-2 py-1 flex-1 focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[#CCFF00] rounded-full w-32 h-32 flex items-center justify-center text-lg font-medium hover:bg-[#b8e600] transition-colors"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;