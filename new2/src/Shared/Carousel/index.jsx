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
            <h1 className="carousel-title">Explore the Depths of Maritime Excellence</h1>
            <Link to="/form">
              <Button type="primary" size="large" className="carousel-button">Enroll Now</Button>
            </Link>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-slide slide-2">
          <div className="carousel-overlay">
            <h1 className="carousel-title">Navigate Your Career to New Horizons</h1>
            <Link to="/form">
              <Button type="primary" size="large" className="carousel-button">Learn More</Button>
            </Link>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-slide slide-3">
          <div className="carousel-overlay">
            <h1 className="carousel-title">Join a Global Fleet of Professionals</h1>
            <Link to="/form">
              <Button type="primary" size="large" className="carousel-button">Contact Us</Button>
            </Link>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="carousel-slide slide-4">
          <div className="carousel-overlay">
            <h1 className="carousel-title">Chart Your Path with Our Expertise</h1>
            <Link to="/form">
              <Button type="primary" size="large" className="carousel-button">Start Today</Button>
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
