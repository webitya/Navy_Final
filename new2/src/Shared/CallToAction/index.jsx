import React, { useState } from 'react';
import { Button, Modal, Alert } from 'antd';
import { useNavigate } from 'react-router-dom';
import { 
  CompassOutlined, SolutionOutlined, FieldTimeOutlined, EyeOutlined, 
  SafetyCertificateOutlined, IdcardOutlined, CheckCircleOutlined, 
  ExclamationCircleOutlined 
} from '@ant-design/icons';
import './CallToActionSection.css';

const CallToActionSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleConfirm = () => {
    closeModal();
    navigate('/form');
  };

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

        <Button type="primary" size="large" className="cta-button" onClick={openModal}>
          Apply Now Free
        </Button>
      </div>

      {/* Modal for Apply Now */}
      <Modal
        open={isModalOpen}
        onCancel={closeModal}
        footer={[
          <Button key="cancel" onClick={closeModal}>Cancel</Button>,
          <Button key="confirm" onClick={handleConfirm} type="primary">Confirm</Button>
        ]}
      >
        <h2 className="ant-modal-title">Commerce & Arts Students Can Join Merchant Navy</h2>
        <p>Become an <strong>#Officer</strong> in the Merchant Navy! Here are the requirements:</p>

        <div className="modal-requirements">
          <div><SolutionOutlined /> 10th Pass with ≥ 40% marks</div>
          <div><FieldTimeOutlined /> Age Limit: 18-25</div>
          <div><EyeOutlined /> Eye Sight: 6/6</div>
          <div><SafetyCertificateOutlined /> Medically Fit</div>
          <div><IdcardOutlined /> Valid Passport</div>
        </div>

        <p><CheckCircleOutlined /> Indian Marksline offers a <strong>6 Months G.P. Rating Course</strong> for students who wish to join the engine or deck crew.</p>

        <Alert
          message="Important"
          description="Please upload only JPG, JPEG, and PNG images."
          type="warning"
          icon={<ExclamationCircleOutlined />}
          showIcon
          className="modal-alert"
        />
      </Modal>
    </div>
  );
};

export default CallToActionSection;
