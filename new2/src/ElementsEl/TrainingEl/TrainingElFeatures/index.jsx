import React from 'react';
import { Typography, Card, Col, Row } from 'antd';
import {
  DesktopOutlined,
  HeatMapOutlined,
  HomeOutlined,
  LaptopOutlined,
  ReadOutlined,
  ProjectOutlined,
  AudioOutlined,
  AppstoreOutlined,
  UserSwitchOutlined,
  CoffeeOutlined,
  SafetyOutlined
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const TrainingElFeatures = () => {
  // Array of facilities with their respective icons and descriptions
  const facilities = [
    {
      title: "Air-conditioned Classrooms",
      description: "Equipped with smart boards and ship models in each classroom.",
      icon: <DesktopOutlined />
    },
    {
      title: "Steering and Ship Simulators",
      description: "Hands-on experience with realistic simulators.",
      icon: <HeatMapOutlined />
    },
    {
      title: "Air-conditioned Auditorium",
      description: "Seating capacity for more than 300 people.",
      icon: <HomeOutlined />
    },
    {
      title: "Air-conditioned Library",
      description: "Stocked with nautical publications.",
      icon: <ReadOutlined />
    },
    {
      title: "Internet-enabled Desktops",
      description: "Provided for online training sessions.",
      icon: <LaptopOutlined />
    },
    {
      title: "Computer Lab",
      description: "40 laptops available for online training.",
      icon: <ProjectOutlined />
    },
    {
      title: "Modern Workshop",
      description: "Practical training with advanced tools.",
      icon: <UserSwitchOutlined />
    },
    {
      title: "Training Restaurant",
      description: "Training workstations and gallery for catering courses.",
      icon: <CoffeeOutlined />
    },
    {
      title: "Overhead Projectors",
      description: "Facilitates Computer Based Training (CBT).",
      icon: <AppstoreOutlined />
    },
    {
      title: "Swimming Pool",
      description: "Large pool (85x65x11 ft) for water-related exercises.",
      icon: <SafetyOutlined />
    },
  ];

  return (
    <div className="training-features-section bg-gradient-to-b from-blue-100 to-blue-50 py-10">
      <div className="container mx-auto px-6 lg:px-16">
        <Title level={2} className="text-4xl font-bold text-center text-blue-800 mb-8">
          Training Facilities
        </Title>
        <Paragraph className="text-center text-lg text-gray-700 mb-12">
          Our campus is fully equipped with state-of-the-art facilities to provide the best learning experience.
        </Paragraph>
        
        {/* Feature cards grid */}
        <Row gutter={[24, 24]}>
          {facilities.map((facility, index) => (
            <Col xs={24} sm={12} lg={8} key={index}>
              <Card
                hoverable
                className="feature-card text-center p-6 shadow-lg rounded-lg h-full"
                bordered={false}
                style={{ minHeight: '300px' }} // Ensures all cards have the same height
              >
                <div className="icon text-blue-600 text-4xl mb-4">{facility.icon}</div>
                <Title level={3} className="text-xl font-semibold text-blue-800 mb-2">
                  {facility.title}
                </Title>
                <Paragraph className="text-gray-600">{facility.description}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default TrainingElFeatures;
