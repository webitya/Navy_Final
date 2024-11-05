import React, { useRef } from 'react';
import { Carousel, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './CarouselEl.css';

const CarouselEl = () => {
  const carouselRef = useRef(null);

  const next = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const prev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  return (
    <div className="carousel-container">
      <Carousel
        ref={carouselRef}
        autoplay
        autoplaySpeed={2000}
        dotPosition="bottom"
        effect="scrollx"
      >
        {/* Slide 1 */}
        <div className="carousel-slide slide-1">
          <div className="carousel-overlay">
            <h1 className="carousel-title">Join the Course: Cook Assistant - 6 Months</h1>
            <Link to="/form">
              <Button type="primary" size="large" className="carousel-button">Join the Course</Button>
            </Link>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-slide slide-2">
          <div className="carousel-overlay">
            <h1 className="carousel-title">Enroll the Course: GP Rating - 6 Months</h1>
            <Link to="/form">
              <Button type="primary" size="large" className="carousel-button">Enroll the Course</Button>
            </Link>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-slide slide-3">
          <div className="carousel-overlay">
            <h1 className="carousel-title">Free Apply: Deck Cadet, Fitter, Electrician</h1>
            <Link to="/form">
              <Button type="primary" size="large" className="carousel-button">Free Apply</Button>
            </Link>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="carousel-slide slide-4">
          <div className="carousel-overlay">
            <h1 className="carousel-title">Seaman & Deck Cadet Programs</h1>
            <Link to="/form">
              <Button type="primary" size="large" className="carousel-button">Enroll Now</Button>
            </Link>
          </div>
        </div>
      </Carousel>

      {/* Navigation Buttons */}
      <Button className="arrow left-arrow" onClick={prev}>
        <LeftOutlined style={{ fontSize: '28px' }} />
      </Button>
      <Button className="arrow right-arrow" onClick={next}>
        <RightOutlined style={{ fontSize: '28px' }} />
      </Button>
    </div>
  );
};

export default CarouselEl;
