import React from "react";
import { BookOutlined, CompassOutlined, TeamOutlined } from "@ant-design/icons";

const ExpertiseSection = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-900">
          Our Expertise
        </h2>

        {/* Grid for Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Comprehensive Training */}
          <div className="bg-white p-8 shadow-md rounded-lg">
            <BookOutlined className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Comprehensive Training</h3>
            <p className="text-gray-700">
              We provide in-depth training that covers all aspects of maritime skills, ensuring that you are ready for the challenges of a career at sea.
            </p>
          </div>

          {/* Card 2: Career Guidance */}
          <div className="bg-white p-8 shadow-md rounded-lg">
            <CompassOutlined className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Career Guidance</h3>
            <p className="text-gray-700">
              Our expert team offers personalized career guidance to help you navigate the best opportunities in the Merchant Navy.
            </p>
          </div>

          {/* Card 3: Global Recruitment */}
          <div className="bg-white p-8 shadow-md rounded-lg">
            <TeamOutlined className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Global Recruitment</h3>
            <p className="text-gray-700">
              We connect skilled professionals with global merchant fleets, ensuring excellent career prospects for our trainees.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;
