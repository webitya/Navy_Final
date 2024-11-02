import React from "react";
import { Button } from "antd";
import { UserOutlined, GlobalOutlined, SafetyCertificateOutlined, RocketOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const AboutHeroSection = () => {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-blue-900 p-5 text-white overflow-hidden pt-20 pb-10 md:pt-5 md:pb-5">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" style={{ backgroundImage: "url('/path-to-your-ship-image.jpg')" }}></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl px-4">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 drop-shadow-lg">
          Navigating Careers, Shaping Futures
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl mb-6 font-semibold">
          Your Trusted Partner for Merchant Navy Training & Vacancies
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl mb-10">
          With decades of experience, we are committed to providing world-class training and career opportunities in the Merchant Navy. We empower aspiring seafarers with the knowledge, skills, and guidance needed for a successful maritime career.
        </p>

        {/* CTA Button */}
        <Link to="/form" target="_blank">
          <Button type="primary" size="large" className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 transition duration-300 ease-in-out rounded-full shadow-lg">
            Join the Fleet
          </Button>
        </Link>
      </div>

      {/* Icon Achievements Row */}
      <div className="relative z-10 flex flex-wrap justify-center mt-12 space-x-10">
        {[
          { icon: <UserOutlined />, label: "1000+ Graduates" },
          { icon: <GlobalOutlined />, label: "Global Opportunities" },
          { icon: <SafetyCertificateOutlined />, label: "Certified Training" },
          { icon: <RocketOutlined />, label: "8+ Years of Expertise" },
        ].map((achievement, index) => (
          <div key={index} className="text-center transition-transform transform hover:scale-110 mb-4">
            <div className="text-4xl sm:text-5xl md:text-6xl mb-2">
              {achievement.icon}
            </div>
            <p className="text-sm sm:text-lg">{achievement.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutHeroSection;
