import React, { useState } from 'react';
import { Card, Row, Col, Button, Modal, Alert } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { FormOutlined, SolutionOutlined, FieldTimeOutlined, EyeOutlined, SafetyCertificateOutlined, IdcardOutlined, CheckCircleOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import './TrainingProgramsSection.css';

const TrainingProgramsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  const handleConfirm = () => {
    closeModal();
    navigate('/form'); // Redirect to /form
  };

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
              
              <div className="apply-now-btn-wrapper">
                <Button type="primary" className="apply-now-btn" block onClick={openModal}>Apply Now Free <FormOutlined /></Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for Apply Now Free */}
      <Modal
        open={isModalOpen}
        onCancel={closeModal}
        footer={[
          <Button key="cancel" onClick={closeModal} className="modal-cancel">Cancel</Button>,
          <Button key="confirm" onClick={handleConfirm} className="modal-confirm">Apply Now</Button>
        ]}
        className="merchant-navy-modal"
      >
        <h2 className="modal-title">Commerce & Arts Students Can Join Merchant Navy</h2>
        <p className="modal-text">
          Become an <strong className="highlight-text">#Officer</strong> in the Merchant Navy! Here are the requirements:
        </p>
        
        <div className="modal-rules">
          <div className="rule">
            <SolutionOutlined className="rule-icon" />
            <span className="rule-text">10th Pass with ≥ 40% marks</span>
          </div>
          <div className="rule">
            <FieldTimeOutlined className="rule-icon" />
            <span className="rule-text">Age Limit: 18-25</span>
          </div>
          <div className="rule">
            <EyeOutlined className="rule-icon" />
            <span className="rule-text">Eye Sight: 6/6</span>
          </div>
          <div className="rule">
            <SafetyCertificateOutlined className="rule-icon" />
            <span className="rule-text">Medically Fit</span>
          </div>
          <div className="rule">
            <IdcardOutlined className="rule-icon" />
            <span className="rule-text">Valid Aadhar Card</span>
          </div>
        </div>

        <p className="modal-course">
          <CheckCircleOutlined className="course-icon" /> Indian Marksline offers a <strong>6 Months G.P. Rating Course</strong> for students who wish to join the engine or deck crew.
        </p>

        <Alert
          message="Important"
          description="Please upload only JPG, JPEG, and PNG images."
          type="warning"
          icon={<ExclamationCircleOutlined />}
          showIcon
          className="upload-instruction"
        />
      </Modal>
    </div>
  );
};

export default TrainingProgramsSection;
