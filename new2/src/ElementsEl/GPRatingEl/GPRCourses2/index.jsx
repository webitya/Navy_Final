import React from 'react';
import {
  CalendarOutlined,
  IdcardOutlined,
  SafetyCertificateOutlined,
  BookOutlined,
  LaptopOutlined,
  ReadOutlined,
} from '@ant-design/icons';

const CourseDetails2 = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800">
      <div className="mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">GP Rating Course Details</h2>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Course Benefits */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col justify-between min-h-full transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <div>
              <h3 className="text-3xl font-semibold text-blue-900 mb-6">Why Choose Our GP Rating Course?</h3>
              <p className="text-lg text-gray-700 mb-4">
                This comprehensive six-month course is crafted for aspiring seafarers, providing rigorous training and real-life exposure to the Merchant Navy. Our curriculum focuses on essential skills and industry requirements, ensuring that you embark on your maritime career fully prepared.
              </p>
              <ul className="text-lg text-gray-700 mb-8 space-y-3">
                <li>🔹 <b>Experienced Trainers:</b> Learn from industry veterans with extensive knowledge in maritime studies.</li>
                <li>🔹 <b>Modern Infrastructure:</b> Gain hands-on experience in our state-of-the-art facilities, equipped with advanced simulators and training tools.</li>
                <li>🔹 <b>Physical Fitness Training:</b> Develop the necessary physical and mental resilience required for a successful career at sea.</li>
                <li>🔹 <b>Soft Skills & Leadership Development:</b> Enhance your communication, teamwork, and leadership abilities to excel in diverse environments.</li>
                <li>🔹 <b>Placement Assistance:</b> Benefit from our partnerships with leading shipping companies for potential career opportunities.</li>
              </ul>
            </div>
            <button className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:bg-blue-800 transition duration-300 ease-in-out transform hover:-translate-y-1">
              Apply Now
            </button>
          </div>

          {/* Right Column - Course Offerings */}
          <div className="bg-white p-8 rounded-lg shadow-lg min-h-full transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <div className="space-y-6">
              {[
                { icon: <CalendarOutlined />, title: 'Duration: 6 Months', description: 'Intensive six-month training program with on-campus facilities.' },
                { icon: <IdcardOutlined />, title: 'Indian CDC & INDOS Number', description: 'Get certified with essential documentation for your career at sea.' },
                { icon: <SafetyCertificateOutlined />, title: 'STCW Courses', description: 'Complete basic STCW and other safety courses essential for onboard safety.' },
                { icon: <BookOutlined />, title: 'E-Learning & E-Assessment', description: 'Access online study material and assessments for better learning outcomes.' },
                { icon: <LaptopOutlined />, title: 'Computer Lab Access', description: '24/7 computer lab access for practical skill development.' },
                { icon: <ReadOutlined />, title: 'Career Guidance & Mock Interviews', description: 'Receive expert advice and interview practice to ensure a successful placement.' },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 shadow-md transition duration-300 hover:scale-105 hover:shadow-lg">
                  <div className="text-3xl text-blue-700">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-xl text-blue-900">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails2;
