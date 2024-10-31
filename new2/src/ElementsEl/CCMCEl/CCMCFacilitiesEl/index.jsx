import React from 'react';
import { Card, Row, Col } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

const facilitiesData = [
  { title: 'INDOS Number & Indian CDC', description: 'Get your unique identification and career credentials.' },
  { title: 'Ship Visit', description: 'Experience real-time ship operations and systems.' },
  { title: 'Hostel Stay', description: '6 months of hostel accommodation included.' },
  { title: '3 Free Meals Daily', description: 'Nutritious meals provided every day.' },
  { title: 'Comprehensive Training', description: 'STCW, BST, STSDSD, BTOCTO, and LGTF courses included.' },
  { title: 'Books & Materials', description: 'Receive all essential books and test papers for your course.' },
  { title: '24x7 Medical Facility', description: 'Access to medical care at any time.' },
  { title: 'Modern Infrastructure', description: 'Experience the best facilities during training.' },
  { title: 'Recreation Room', description: 'Enjoy leisure activities during your downtime.' } // New facility added here
];

const FacilitiesSection = () => {
  return (
    <section className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Our Facilities</h2>
      <Row gutter={16}>
        {facilitiesData.map((facility, index) => (
          <Col xs={24} sm={12} md={8} key={index} className="mb-4">
            <Card
              title={<span className="flex items-center"><CheckCircleOutlined className="text-green-500 mr-2" /> {facility.title}</span>}
              bordered={false}
              className="shadow-md"
            >
              <p>{facility.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default FacilitiesSection;
