import React from 'react';
import { Card, Col, Row, Button } from 'antd';
import { Link } from 'react-router-dom';
import './VacanciesSection.css'; // Import the CSS for styling

const TrainingVacanciesSection = () => {
  const trainingPrograms = [
    {
      title: 'Deck Cadet Training',
      description: 'Prepare for a career at sea as a Deck Cadet. Get hands-on training and theoretical knowledge to excel in your maritime career.',
      imgSrc: '/c5.jpeg', // Add your image path
    },
    {
      title: 'Engineering Training',
      description: 'Join our Engineering Training program to learn the technical skills needed to operate and maintain ships.',
      imgSrc: '/c4.jpg', // Add your image path
    },
    {
      title: 'GME Training Program',
      description: 'Get ready for the Graduate Marine Engineering program with our comprehensive training curriculum.',
      imgSrc: '/c4.jpeg', // Add your image path
    },
  ];

  const vacancies = [
    {
      title: 'Deck Cadet',
      description: 'Looking for enthusiastic candidates for the Deck Cadet position.',
      imgSrc: '/c3.jpg', // Add your image path
    },
    {
      title: 'Marine Engineer',
      description: 'Hiring skilled Marine Engineers for various ships and vessels.',
      imgSrc: '/c3.jpeg', // Add your image path
    },
    {
      title: 'Electrical Officer',
      description: 'Seeking qualified Electrical Officers for immediate placement.',
      imgSrc: '/c2.jpg', // Add your image path
    },
  ];

  return (
    <div className="training-vacancies-section">
      {/* Navy Training Programs Section */}
      <h2 className="section-title">Navy Training Programs</h2>
      <Row gutter={[16, 16]} justify="center" className="training-programs">
        {trainingPrograms.map((program, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              hoverable
              cover={<img alt={program.title} src={program.imgSrc} className="card-image" />}
              className="training-card"
            >
              <Card.Meta title={program.title} description={program.description} />
              <Link to="/register">
                <Button type="primary" className="more-info-button">Learn More</Button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Current Job Vacancies Section */}
      <h2 className="section-title">Current Job Vacancies</h2>
      <Row gutter={[16, 16]} justify="center" className="vacancies">
        {vacancies.map((vacancy, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              hoverable
              cover={<img alt={vacancy.title} src={vacancy.imgSrc} className="card-image" />}
              className="vacancy-card"
            >
              <Card.Meta title={vacancy.title} description={vacancy.description} />
              <Link to="/register">
                <Button type="primary" className="more-info-button">View Details</Button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TrainingVacanciesSection;
