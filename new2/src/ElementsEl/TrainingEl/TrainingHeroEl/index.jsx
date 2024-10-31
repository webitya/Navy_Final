import React from "react";
import { Button, Card } from "antd";
import { SafetyCertificateOutlined, RocketOutlined, BulbOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const TrainingHeroSection = () => {
  return (
    <div className="relative">
      {/* Hero Section with Background Image */}
      <div
        className="h-[90vh] bg-[url('/c4.jpg')] bg-cover bg-center relative"
        style={{ backgroundAttachment: 'fixed' }} // Parallax effect (optional)
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div>
            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Become a Leader in the Merchant Navy
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-2xl text-gray-200 mb-8">
              Enroll in our comprehensive training programs and take the first step toward a rewarding maritime career.
            </p>

            {/* Call to Action Button */}
            <Link to="register">
            <Button
              type="primary"
              size="large"
              className="bg-white text-purple-700 font-semibold hover:bg-gray-100 hover:text-purple-900"
            >
              Explore Our Courses
            </Button></Link>
          </div>
        </div>
      </div>

      {/* Additional Content Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          {/* Intro Text */}
          <p className="text-lg md:text-xl text-gray-700 mb-12">
            Whether you're just starting out or looking to advance your maritime career, we offer a variety of courses to meet your needs. From basic safety training to advanced navigation skills, we provide all the necessary tools for a successful future at sea.
          </p>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Basic Maritime Training */}
            <Card className="p-6 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
              <SafetyCertificateOutlined className="text-4xl text-purple-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Basic Maritime Training</h3>
              <p className="text-gray-700 mb-6">
                Get started with fundamental skills for safe navigation and essential maritime knowledge.
              </p>
              <Link to="www.webitya.com" target="_blank">
              <Button type="link" className="text-purple-500">Learn More</Button></Link>
            </Card>

            {/* Card 2: Advanced Navigation Skills */}
            <Card className="p-6 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
              <RocketOutlined className="text-4xl text-purple-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Advanced Navigation Skills</h3>
              <p className="text-gray-700 mb-6">
                Enhance your maritime career with advanced techniques in navigation and charting.
              </p>
              <Link to="www.webitya.com" target="_blank">
              <Button type="link" className="text-purple-500">Learn More</Button></Link>
            </Card>

            {/* Card 3: Leadership at Sea */}
            <Card className="p-6 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
              <BulbOutlined className="text-4xl text-purple-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Leadership at Sea</h3>
              <p className="text-gray-700 mb-6">
                Develop critical leadership and decision-making skills for high-ranking maritime roles.
              </p>
              <Link to="www.webitya.com" target="_blank">
              <Button type="link" className="text-purple-500">Learn More</Button></Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingHeroSection;
