import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './CallToActionSection.css';
import {  CompassOutlined } from '@ant-design/icons';

const CallToActionSection = () => {
  return (
    <div className="cta-section">
      <div className="cta-content">
        <h2 className="cta-title">
          <CompassOutlined style={{ marginRight: 8 }} />
          Ready to Set Sail on Your New Career?
        </h2>
        <p className="cta-description">
          Enroll in one of our comprehensive maritime training programs and gain
          the skills needed for success at sea. Join a global fleet of skilled seafarers.
        </p>
        <Link to="/register">
          <Button type="primary" size="large" className="cta-button">
            Enroll Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CallToActionSection;
