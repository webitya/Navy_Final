import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-800 to-blue-600 text-white flex flex-col md:flex-row items-center py-16 px-4 md:px-10">
      {/* Left Side Content */}
      <div className="flex-1 mb-8 md:mb-0 md:pr-8">
        <h1 className="text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">Launch Your Career in the Merchant Navy</h1>
        <p className="text-lg mb-6">
          Our GP Rating program offers comprehensive training and dedicated placement support to ensure your successful journey at sea.
        </p>
        <Link to="/form">
          <button className="bg-yellow-400 text-blue-900 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300">
            Apply Now
          </button>
        </Link>
      </div>

      {/* Right Side Image */}
      <div className="flex-1 flex justify-center md:justify-end">
        <img
          src="/i14.webp"
          alt="Merchant Navy Training"
          className="w-full md:w-3/4 lg:w-3/4 xl:w-1/2 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 h-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
