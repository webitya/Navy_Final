import React from "react";
import { Button } from "antd";
import { UserOutlined, GlobalOutlined, SafetyCertificateOutlined, RocketOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const AboutHeroSection2 = () => {
  return (
    <div className="relative h-screen flex flex-col justify-between items-center bg-gradient-to-r from-blue-500 to-blue-900 text-white overflow-hidden">
      {/* Background Image Banner */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50" style={{ backgroundImage: "url('/t1.webp')" }}></div>
      
      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-6xl p-6 text-center mt-20 md:mt-32">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg mb-4">
          Navigating Careers, Shaping Futures
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl font-medium mb-4">
          Your Trusted Partner for Merchant Navy Training & Vacancies
        </p>

        {/* Description */}
        <p className="text-sm md:text-base lg:text-lg mb-8 px-4 sm:px-10 lg:px-20">
          With decades of experience, we are committed to providing world-class training and career opportunities in the Merchant Navy. Empowering aspiring seafarers with the knowledge, skills, and guidance needed for a successful maritime career.
        </p>

        {/* CTA Button */}
        <Link to="/form" target="_blank">
          <Button
            type="primary"
            size="large"
            className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 transition duration-300 ease-in-out rounded-full px-6 py-3 shadow-md"
          >
            Join the Fleet
          </Button>
        </Link>
      </div>

      {/* Icon Achievements Row */}

    </div>
  );
};

export default AboutHeroSection2;
