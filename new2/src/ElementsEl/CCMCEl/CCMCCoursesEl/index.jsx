import React from 'react';
import { Card, Row, Col } from 'antd';
import { BookOutlined } from '@ant-design/icons';

const coursesData = [
  { title: 'STCW Courses', description: 'Essential safety training for maritime professionals.' },
  { title: 'BST Courses', description: 'Basic Safety Training to ensure safety on board.' },
  { title: 'STSDSD Course', description: 'Shipboard Safety and Fire-fighting procedures.' },
  { title: 'BTOCTO Course', description: 'Training for ship operations and management.' },
  { title: 'LGTF Course', description: 'Training for Lifeboat and General Fire Safety.' },
  { title: 'Crowd Management Course', description: 'Handling and managing crowd emergencies effectively.' },
];

const CoursesSection = () => {
  return (
    <section className="p-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">Training Courses</h2>
      <Row gutter={16}>
        {coursesData.map((course, index) => (
          <Col xs={24} sm={12} md={8} key={index} className="mb-4">
            <Card
              title={<span className="flex items-center"><BookOutlined className="text-blue-500 mr-2" /> {course.title}</span>}
              bordered={false}
              className="shadow-md"
            >
              <p>{course.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default CoursesSection;
