import React from "react";
import { CheckCircleOutlined, TrophyOutlined, SolutionOutlined } from "@ant-design/icons";

const WhyChooseUsSection = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:space-x-12">
        {/* Left Side - Feature Image */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img 
            src="/c4.jpg" 
            alt="Why Choose Us" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Reasons List */}
        <div className="md:w-1/2">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
            Why Choose Us?
          </h2>

          {/* Reason 1 */}
          <div className="flex items-start mb-6">
            <CheckCircleOutlined className="text-3xl text-blue-600 mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Proven Track Record</h3>
              <p className="text-gray-700">
                With years of experience in Merchant Navy training, we have successfully trained thousands of professionals who now work in global fleets.
              </p>
            </div>
          </div>

          {/* Reason 2 */}
          <div className="flex items-start mb-6">
            <TrophyOutlined className="text-3xl text-blue-600 mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Award-Winning Training Programs</h3>
              <p className="text-gray-700">
                Our training programs are recognized internationally for their excellence in maritime education and skill development.
              </p>
            </div>
          </div>

          {/* Reason 3 */}
          <div className="flex items-start">
            <SolutionOutlined className="text-3xl text-blue-600 mr-4" />
            <div>
              <h3 className="text-xl font-semibold">End-to-End Recruitment Solutions</h3>
              <p className="text-gray-700">
                We provide complete recruitment services, from training to placement, ensuring a smooth transition into a maritime career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
