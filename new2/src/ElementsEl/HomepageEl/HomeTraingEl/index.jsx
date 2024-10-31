import React from 'react';
import { Card, Row, Col } from 'antd';
import './TrainingProgramsSection.css';

const TrainingProgramsSection = () => {
  const trainingPrograms = [
    {
      title: 'Deck Cadet Training',
      description: 'Prepare for a successful career on the seas with our comprehensive deck cadet training program.',
      imgSrc: '/c.jpeg',
    },
    {
      title: 'Engineering Training',
      description: 'Hands-on training in marine engineering, equipping you with the skills needed for the industry.',
      imgSrc: '/c1.jpeg',
    },
    {
      title: 'Safety and Survival',
      description: 'Learn essential safety protocols and survival techniques for emergency situations at sea.',
      imgSrc: '/c1.jpg',
    },
    {
      title: 'GMDSS Training',
      description: 'Become proficient in Global Maritime Distress and Safety System operations.',
      imgSrc: '/c2.jpeg',
    },
    {
      title: 'Navigation and Seamanship',
      description: 'Master navigation techniques and seamanship skills required for safe maritime operations.',
      imgSrc: '/c2.jpg',
    },
    {
      title: 'Marine Communications',
      description: 'Understand communication systems used in the maritime industry to ensure safety and efficiency.',
      imgSrc: '/c2.png',
    },
  ];

  return (
    <div className="training-programs-section">
      <h2 className="section-title">Our Navy Training Programs</h2>
      <Row gutter={[16, 24]} justify="center">
        {trainingPrograms.map((program, index) => (
          <Col
            key={index}
            xs={24} sm={12} md={8} // Responsive column span
            className="program-col"
          >
            <Card
              hoverable
              className="program-card"
              cover={<div className="card-image-wrapper"><img alt={program.title} src={program.imgSrc} className="program-image" /></div>}
            >
              <Card.Meta title={program.title} description={program.description} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TrainingProgramsSection;
