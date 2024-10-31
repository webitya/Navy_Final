import React from 'react';
import { ClockCircleOutlined, IdcardOutlined, HomeOutlined, ContainerOutlined, BookOutlined, ProfileOutlined, CompassOutlined } from '@ant-design/icons';

const CourseDetails = () => {
  return (
    <section className="py-16 px-4 bg-gray-100 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">What We Provide</h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Duration */}
          <div className="flex items-start space-x-4">
            <ClockCircleOutlined className="text-blue-900 text-3xl" />
            <div>
              <h3 className="font-bold text-lg">Duration</h3>
              <p>6 Months</p>
            </div>
          </div>
          
          {/* INDOS Number & CDC */}
          <div className="flex items-start space-x-4">
            <IdcardOutlined className="text-blue-900 text-3xl" />
            <div>
              <h3 className="font-bold text-lg">INDOS Number & Indian CDC</h3>
              <p>Get your unique identification and career credentials.</p>
            </div>
          </div>

          {/* Ship Visit */}
          <div className="flex items-start space-x-4">
            <CompassOutlined className="text-blue-900 text-3xl" />
            <div>
              <h3 className="font-bold text-lg">Ship Visit</h3>
              <p>Experience real-time ship operations and systems.</p>
            </div>
          </div>

          {/* Hostel Stay */}
          <div className="flex items-start space-x-4">
            <HomeOutlined className="text-blue-900 text-3xl" />
            <div>
              <h3 className="font-bold text-lg">Hostel Stay</h3>
              <p>6 months of hostel accommodation included.</p>
            </div>
          </div>

          {/* Meals */}
          <div className="flex items-start space-x-4">
            <ContainerOutlined className="text-blue-900 text-3xl" />
            <div>
              <h3 className="font-bold text-lg">3 Free Meals Daily</h3>
              <p>Nutritious meals provided every day.</p>
            </div>
          </div>

          {/* STCW & Training Courses */}
          <div className="flex items-start space-x-4">
            <ProfileOutlined className="text-blue-900 text-3xl" />
            <div>
              <h3 className="font-bold text-lg">Comprehensive Training</h3>
              <p>STCW, BST, STSDSD, BTOCTO, and LGTF courses included.</p>
            </div>
          </div>
          
          {/* Books and Study Material */}
          <div className="flex items-start space-x-4">
            <BookOutlined className="text-blue-900 text-3xl" />
            <div>
              <h3 className="font-bold text-lg">Books & Materials</h3>
              <p>Receive all essential books and test papers for your course.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
