import React from 'react';
import { Button } from 'antd';
import { CompassOutlined } from '@ant-design/icons';

const CCMCHeroSection = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between py-10 bg-cover bg-center"
             style={{ backgroundImage: 'url(/c2.jpeg)' }}>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60 z-0"></div>
      
      {/* Left Column - Content */}
      <div className="flex-1 px-8 py-10 lg:py-20 lg:px-16 relative z-10 text-center lg:text-left animate-fadeInLeft">
        <div className="inline-flex items-center mb-6 text-blue-500 text-4xl lg:text-5xl">
          <CompassOutlined className="mr-3" /> {/* Maritime Icon from Ant Design */}
          <h1 className="font-bold text-white">CCMC Training Program</h1>
        </div>
        <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
          Our comprehensive CCMC program equips you with the skills and qualifications needed for a successful career in the Merchant Navy.
        </p>
        <Button type="primary" size="large" className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          Apply Now
        </Button>
      </div>
      
      {/* Right Column - Image */}
      <div className="flex-1 relative w-full h-full lg:h-auto">
        <img src="/c1.jpeg" alt="CCMC Training" className="h-full w-full object-cover lg:rounded-l-lg shadow-lg transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl" />
      </div>
    </section>
  );
};

export default CCMCHeroSection;
