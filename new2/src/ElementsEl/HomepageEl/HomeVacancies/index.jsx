import React from 'react';
import { Card, Col, Row, Button } from 'antd';
import { Link } from 'react-router-dom';
import './VacanciesSection.css';

const TrainingVacanciesSection = () => {
  const vacancies = [
    {
      title: 'Deck Cadet',
      description: 'Looking for enthusiastic candidates for the Deck Cadet position.',
      imgSrc: '/c3.jpg',
    },
    {
      title: 'Marine Engineer',
      description: 'Hiring skilled Marine Engineers for various ships and vessels.',
      imgSrc: '/c3.jpeg',
    },
    {
      title: 'Electrical Officer',
      description: 'Seeking qualified Electrical Officers for immediate placement.',
      imgSrc: '/c2.jpg',
    },
  ];

  return (
    <div className="training-vacancies-section">
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
              <Link to="/contact-us">
                <Button type="primary" block className="more-info-button">View Details</Button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TrainingVacanciesSection;
