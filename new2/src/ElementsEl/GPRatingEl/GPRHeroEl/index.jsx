import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-blue-900 text-white flex flex-col md:flex-row items-center py-16 px-4 md:px-10">
      {/* Left Side Content */}
      <div className="flex-1 mb-8 md:mb-0 md:pr-8">
        <h1 className="text-4xl font-bold leading-tight mb-4">Start Your Career in Merchant Navy</h1>
        <p className="text-lg mb-6">
          Our GP Rating program provides comprehensive training and placement support, preparing you for a successful career at sea.
        </p>
        <Link to="/apply">
          <button className="bg-yellow-500 text-blue-900 font-semibold py-3 px-6 rounded-lg hover:bg-yellow-600 transition duration-300">
            Apply Now
          </button>
        </Link>
      </div>

      {/* Right Side Image */}
      <div className="flex-1 flex justify-center md:justify-end">
        <img
          src="/c2.jpeg"
          alt="Merchant Navy Training"
          className="w-full md:w-3/4 lg:w-1/2 rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
