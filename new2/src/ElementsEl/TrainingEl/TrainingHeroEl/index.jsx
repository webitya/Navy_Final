import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

const TrainingHeroSection = () => {
  const images = ["/i13.webp", "/i14.webp", "/i15.webp", "/i16.webp", "/i17.webp"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="relative">
      {/* Hero Section with Background Image */}
      <div
        className="h-[90vh] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          backgroundAttachment: "fixed", // Parallax effect (optional)
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Become a Leader in the Merchant Navy
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-8">
            Enroll in our comprehensive training programs and take the first step toward a rewarding maritime career.
          </p>
          <Link to="/form">
            <Button
              type="primary"
              size="large"
              className="bg-purple-700 text-white font-semibold hover:bg-purple-800"
            >
              Explore Our Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrainingHeroSection;
