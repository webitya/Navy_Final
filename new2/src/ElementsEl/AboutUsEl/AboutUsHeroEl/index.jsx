import React from "react";
import { Button } from "antd";
import { UserOutlined, GlobalOutlined, SafetyCertificateOutlined, RocketOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const AboutHeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-900 p-5 text-white relative h-screen flex flex-col justify-center items-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{ backgroundImage: "url('/path-to-your-ship-image.jpg')" }}></div>
      
      {/* Content */}
      <div className="z-10 text-center max-w-4xl px-4">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Navigating Careers, Shaping Futures
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl mb-8">
          Your Trusted Partner for Merchant Navy Training & Vacancies
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl mb-10">
          With decades of experience, we are committed to providing world-class training and career opportunities in the Merchant Navy. We empower aspiring seafarers with the knowledge, skills, and guidance needed for a successful maritime career.
        </p>

        {/* CTA Button */}
        <Link to="/register">
        <Button type="primary" size="large" className="bg-gradient-to-r from-blue-300 to-blue-700 hover:from-blue-500 hover:to-blue-800 transition duration-300 ease-in-out">
          Join the Fleet
        </Button></Link>
      </div>

      {/* Icon Achievements Row */}
      <div className="z-10 flex justify-center mt-12 space-x-8">
        <div className="text-center">
          <UserOutlined className="text-4xl md:text-5xl mb-2" />
          <p className="text-lg">1000+ Graduates</p>
        </div>
        <div className="text-center">
          <GlobalOutlined className="text-4xl md:text-5xl mb-2" />
          <p className="text-lg">Global Opportunities</p>
        </div>
        <div className="text-center">
          <SafetyCertificateOutlined className="text-4xl md:text-5xl mb-2" />
          <p className="text-lg">Certified Training</p>
        </div>
        <div className="text-center">
          <RocketOutlined className="text-4xl md:text-5xl mb-2" />
          <p className="text-lg">20+ Years of Expertise</p>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSection;
