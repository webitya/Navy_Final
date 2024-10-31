import React, { useEffect, useState, useRef } from "react";
import { Carousel, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";
import { useAppContext } from "../../../../context";
import { useGetBanner } from "../../../../hooks/useGetBanner";
import "./HomeToCar.css";

const HomeCarouselEl = () => {
  const { user } = useAppContext();
  const [banner, setBanner] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    const fetchBanner = async () => {
      await useGetBanner(setBanner);
    };
    fetchBanner();
  }, []);

  const next = () => carouselRef.current?.next();
  const prev = () => carouselRef.current?.prev();

  return (
    <div className="carousel-container">
      <Carousel
        ref={carouselRef}
        autoplay
        autoplaySpeed={3000}
        dotPosition="bottom"
        effect="fade"
      >
        {banner.map((slide) => (
          <div key={slide._id} className="carousel-slide">
            <div
              className="slide-content"
              style={{
                backgroundImage: `url(${slide.imageUri})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                
              }}
            ></div>
          </div>
        ))}
      </Carousel>

      {/* Custom Navigation Arrows */}
      <Button className="arrow left-arrow" onClick={prev}>
        <LeftOutlined />
      </Button>
      <Button className="arrow right-arrow" onClick={next}>
        <RightOutlined />
      </Button>
    </div>
  );
};

export default HomeCarouselEl;
