import React from 'react';
import { EnvironmentOutlined, MedicineBoxOutlined, SafetyOutlined, WifiOutlined, HomeOutlined, FireOutlined, RestOutlined, SmileOutlined, CoffeeOutlined } from '@ant-design/icons';

const Facilities = () => {
  return (
    <section className="py-16 px-4 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Facilities</h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Largest Waterbody Mock-up */}
          <div className="flex items-start space-x-4">
            <EnvironmentOutlined className="text-blue-900 text-3xl" />
            <div>
              <h3 className="font-bold text-lg">Largest Waterbody Mock-up</h3>
              <p>Experience real-life water safety and handling scenarios.</p>
            </div>
          </div>

          {/* Qualified Faculty */}
          <div className="flex items-start space-x-4">
            <MedicineBoxOutlined className="text-blue-900 text-3xl" />
            <div>
              <h3 className="font-bold text-lg">Qualified Faculty</h3>
              <p>Learn from certified and experienced professionals.</p>
            </div>
          </div>

          {/* 24x7 Medical Facility */}
          <div className="flex items-start space-x-4">
            <SafetyOutlined className="text-blue-900 text-3xl" />
            <div>
              <h3 className="font-bold text-lg">24x7 Medical Facility</h3>
              <p>Health services available round-the-clock for safety.</p>
            </div>
          </div>

          {/* Free Wi-Fi Facility */}
          <div className="flex items-start space-x-4">
            <WifiOutlined className="text-blue-900 text-3xl" />
            <div>
              <h3 className="font-bold text-lg">Free Wi-Fi Facility</h3>
              <p>Stay connected with high-speed internet access across campus.</p>
            </div>
          </div>

          {/* AC and Cooler Rooms */}
          <div className="flex items-start space-x-4">
            <HomeOutlined className="text-blue-900 text-3xl" />
            <div>
              <h3 className="font-bold text-lg">AC and Cooler Rooms</h3>
              <p>Comfortable, climate-controlled rooms for better living.</p>
            </div>
          </div>

          {/* AC Dining Halls */}
          <div className="flex items-start space-x-4">
            <FireOutlined className="text-blue-900 text-3xl" />
            <div>
              <h3 className="font-bold text-lg">AC Dining Halls</h3>
              <p>Enjoy meals in a cool, relaxing environment.</p>
            </div>
          </div>

          {/* Centralized Mess */}
          <div className="flex items-start space-x-4">
            <CoffeeOutlined className="text-blue-900 text-3xl" />
            <div>
              <h3 className="font-bold text-lg">Centralized Well-Furnished Mess</h3>
              <p>High-quality dining facilities and nutritious meals.</p>
            </div>
          </div>

          {/* Recreation Room */}
          <div className="flex items-start space-x-4">
            <RestOutlined className="text-blue-900 text-3xl" />
            <div>
              <h3 className="font-bold text-lg">Recreation Room</h3>
              <p>Unwind with entertainment and relaxation facilities.</p>
            </div>
          </div>

          {/* Sports Facilities */}
          <div className="flex items-start space-x-4">
            <SmileOutlined className="text-blue-900 text-3xl" />
            <div>
              <h3 className="font-bold text-lg">Sports Facilities</h3>
              <p>Outdoor areas for badminton, basketball, and more.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
