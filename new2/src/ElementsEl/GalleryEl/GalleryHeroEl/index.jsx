import React, { useState } from 'react';
import { Modal, Row, Col, Image } from 'antd';
import "./GalleryHeroEl.css";

const images = [
  { src: '/i18.webp', alt: 'Indian MarksLine' },
  { src: '/i19.webp', alt: 'Indian MarksLine' },
  { src: '/i20.webp', alt: 'Indian MarksLine' },
  { src: '/i21.webp', alt: 'Indian MarksLine' },
  { src: '/i22.webp', alt: 'Indian MarksLine' },
  { src: '/i23.webp', alt: 'Indian MarksLine' },
  { src: '/i1.webp', alt: 'Indian MarksLine' },
  { src: '/i3.webp', alt: 'Indian MarksLine' },
  { src: '/i4.webp', alt: 'Indian MarksLine' },
  { src: '/i5.webp', alt: 'Indian MarksLine' },
  { src: '/i6.webp', alt: 'Indian MarksLine' },
  { src: '/i7.webp', alt: 'Indian MarksLine' },
  { src: '/i8.webp', alt: 'Indian MarksLine' },
  { src: '/i9.webp', alt: 'Indian MarksLine' },
  { src: '/i10.webp', alt: 'Indian MarksLine' },
  { src: '/i10.webp', alt: 'Indian MarksLine' },
  { src: '/i12.webp', alt: 'Indian MarksLine' },
  { src: '/i13.webp', alt: 'Indian MarksLine' },
  { src: '/i14.webp', alt: 'Indian MarksLine' },
  { src: '/i15.webp', alt: 'Indian MarksLine' },
  { src: '/i16.webp', alt: 'Indian MarksLine' },
  { src: '/i17.webp', alt: 'Indian MarksLine' },
 


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
    <div className="py-5 px-5 bg-white">
      <h2 className="text-3xl font-bold text-center mb-1">Gallery</h2>
      <Row gutter={16}>
        {images.map((image, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index} className="mb-4">
            <div
              style={{
                height: '230px',
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
                preview={false}
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'cover',
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
        className="custom-modal"
      >
        <Image
          src={selectedImage}
          alt="Selected Image"
          preview={false} // Disable preview on hover
          style={{ width: '100%', height: 'auto' }}
        />
      </Modal>
    </div>
  );
};

export default GalleryHeroEl;
