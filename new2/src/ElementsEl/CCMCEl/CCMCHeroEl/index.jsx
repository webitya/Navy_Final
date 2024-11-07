import React from 'react';
import { Button } from 'antd';
import { CompassOutlined, FireOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const CCMCHeroSection = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center md:h-screen justify-between py-10 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
      
      {/* Left Column - Content */}
      <div className="flex-1 px-8 py-10 lg:py-20 lg:px-16 relative z-10 text-center lg:text-left animate-fadeInLeft">
        <div className="inline-flex items-center mb-6 text-yellow-300 text-4xl lg:text-5xl">
          <h1 className="font-extrabold text-white tracking-wider">Merchant Navy Cooking Training Program</h1>
        </div>
        
        <p className="text-lg lg:text-xl text-gray-200 mb-8 max-w-lg mx-auto lg:mx-0">
          Embark on a career in the Merchant Navy with our specialized cooking training program. Gain essential culinary skills to serve on-board crews and officers.
        </p>
        
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6 mb-8">
          <div className="flex items-center text-yellow-300">
            <FireOutlined className="text-3xl mr-2" />
            <span className="text-gray-200">Culinary Safety</span>
          </div>
          <div className="flex items-center text-yellow-300">
            <SafetyCertificateOutlined className="text-3xl mr-2" />
            <span className="text-gray-200">Food Handling Certification</span>
          </div>
          <div className="flex items-center text-yellow-300">
            <CompassOutlined className="text-3xl mr-2" />
            <span className="text-gray-200">Navigational Skills</span>
          </div>
        </div>

        <Link to="/form" target='_blank'>
          <Button type="primary" size="large" className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold rounded-full shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
            Apply Now
          </Button>
        </Link>
      </div>
      
      {/* Right Column - Image */}
      <div className="flex-1 relative w-full h-full lg:h-auto">
        <img
          src="/i19.webp"
          alt="CCMC Training"
          className="h-full p-3 w-full object-cover lg:rounded-r-lg shadow-lg transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
        />
      </div>
    </section>
  );
};

export default CCMCHeroSection;
