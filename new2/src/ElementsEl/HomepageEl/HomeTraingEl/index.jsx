import React from 'react';
import { Card, Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import './TrainingProgramsSection.css';

const TrainingProgramsSection = () => {
  const trainingPrograms = [
    {
      title: 'Seaman Training',
      description: 'Learn the fundamental skills required for a seaman role, including navigation and deck operations.',
      imgSrc: '/i11.webp',
    },
    {
      title: 'Fitter Electrician Program',
      description: 'Comprehensive training on marine electrical systems and fittings, tailored for electricians in the maritime industry.',
      imgSrc: '/t2.webp',
    },
    {
      title: 'Deck Cadet Training',
      description: 'Prepare for a successful career on the seas with our comprehensive deck cadet training program.',
      imgSrc: '/i12.webp',
    },
    {
      title: 'Engine Rating Program',
      description: 'Gain essential skills in engine room operations, maintenance, and safety protocols for engine ratings.',
      imgSrc: '/t4.webp',
    },
    {
      title: 'Cook Assistant Training (6 Months)',
      description: 'Develop culinary skills for the maritime industry, focusing on food safety and meal preparation at sea.',
      imgSrc: '/i21.webp',
    },
    {
      title: 'G.P Rating Training (6 Months)',
      description: 'Get a complete foundation in general purpose (G.P) rating, including basic deck and engine duties.',
      imgSrc: '/i23.webp',
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
              
                <Link to="/form">
                <div className="apply-now-btn-wrapper">
                  <Button type="primary" className="apply-now-btn" block>Apply Now Free</Button>
                  </div>
                </Link>
              
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TrainingProgramsSection;
