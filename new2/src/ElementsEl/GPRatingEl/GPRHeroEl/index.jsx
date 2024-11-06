import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Modal, Button, Alert } from 'antd';
import { FormOutlined, SolutionOutlined, FieldTimeOutlined, EyeOutlined, SafetyCertificateOutlined, IdcardOutlined, CheckCircleOutlined, ExclamationCircleOutlined } from "@ant-design/icons";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  const handleConfirm = () => {
    closeModal();
    navigate('/form');
  };

  return (
    <section className="bg-gradient-to-br from-blue-800 to-blue-600 text-white flex flex-col md:flex-row items-center py-16 px-4 md:px-10">
      {/* Left Side Content */}
      <div className="flex-1 mb-8 md:mb-0 md:pr-8">
        <h1 className="text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">Launch Your Career in the Merchant Navy</h1>
        <p className="text-lg mb-6">
          Our GP Rating program offers comprehensive training and dedicated placement support to ensure your successful journey at sea.
        </p>
        
        <button onClick={openModal} className="bg-yellow-400 text-blue-900 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300">
          Apply Now <FormOutlined />
        </button>
      </div>

      {/* Right Side Image */}
      <div className="flex-1 flex justify-center md:justify-end">
        <img
          src="/i14.webp"
          alt="Merchant Navy Training"
          className="w-full md:w-3/4 lg:w-3/4 xl:w-1/2 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 h-auto"
        />
      </div>

      {/* Modal for Apply Now */}
      <Modal
        open={isModalOpen}
        onCancel={closeModal}
        footer={[
          <Button key="cancel" onClick={closeModal} className="modal-cancel">Cancel</Button>,
          <Button key="confirm" onClick={handleConfirm} className="modal-confirm">Confirm</Button>
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
            <span className="rule-text">Valid Passport</span>
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
    </section>
  );
};

export default HeroSection;
