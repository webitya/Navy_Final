import React from "react";
import { SafetyCertificateOutlined, RocketOutlined, BulbOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";

const TrainingProgramsSection = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-900">
          Our Training Programs
        </h2>

        {/* Grid for Training Programs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Basic Maritime Training */}
          <div className="bg-white p-8 shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300">
            <SafetyCertificateOutlined className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Basic Maritime Training</h3>
            <p className="text-gray-700 mb-6">
              Our entry-level course provides a comprehensive introduction to maritime safety, navigation, and seamanship.
            </p>
             <Link to="register">
             <Button type="primary" className="mt-4">Learn More</Button></Link>
          </div>

          {/* Card 2: Advanced Navigation Skills */}
          <div className="bg-white p-8 shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300">
            <RocketOutlined className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Advanced Navigation Skills</h3>
            <p className="text-gray-700 mb-6">
              This program focuses on advanced navigation techniques, including radar operation, GPS systems, and chart plotting.
            </p>
            <Link to="register">
             <Button type="primary" className="mt-4">Learn More</Button></Link>
          </div>

          {/* Card 3: Leadership at Sea */}
          <div className="bg-white p-8 shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300">
            <BulbOutlined className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Leadership at Sea</h3>
            <p className="text-gray-700 mb-6">
              This course develops leadership and management skills for those aspiring to command positions in the maritime industry.
            </p>
            <Link to="register">
            <Button type="primary" className="mt-4">Learn More</Button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingProgramsSection;
