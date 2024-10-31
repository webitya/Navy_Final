import React, { useState } from 'react';
import { Modal, Row, Col, Image } from 'antd';

const images = [
  { src: '/c.jpeg', alt: 'Image 1' },
  { src: '/c1.jpeg', alt: 'Image 2' },
  { src: '/c1.jpg', alt: 'Image 3' },
  { src: '/c2.jpeg', alt: 'Image 4' },
  { src: '/c3.jpg', alt: 'Image 5' },
  { src: '/c5.jpeg', alt: 'Image 6' },
  // Add more images as needed
];

const GalleryHeroEl = () => {
  const [visible, setVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const showModal = (src) => {
    setSelectedImage(src);
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div className="p-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">Gallery</h2>
      <Row gutter={16}>
        {images.map((image, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index} className="mb-4">
            <div
              style={{
                height: '300px', // Set a fixed height for the card
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                cursor: 'pointer',
              }}
              onClick={() => showModal(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                style={{
                  maxHeight: '100%', // Maintain aspect ratio
                  maxWidth: '100%',
                  objectFit: 'cover', // Cover the card area
                }}
              />
            </div>
          </Col>
        ))}
      </Row>

      <Modal
        visible={visible}
        footer={null}
        onCancel={handleCancel}
        centered
        width="80%"
        style={{ top: 20 }}
      >
        <Image
          src={selectedImage}
          alt="Selected Image"
          style={{ width: '100%', height: 'auto' }}
        />
      </Modal>
    </div>
  );
};

export default GalleryHeroEl;
