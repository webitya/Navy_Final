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
    <section className="bg-gradient-to-br from-blue-800 to-blue-600 text-white flex flex-col md:flex-row items-center py-20 px-6 md:px-16 lg:px-24">
      {/* Left Side Content */}
      <div className="flex-1 mb-10 md:mb-0 md:pr-10 lg:pr-16 xl:pr-20">
        <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">Launch Your Career in the Merchant Navy</h1>
        <p className="text-lg lg:text-xl mb-8 max-w-lg">
          Our GP Rating program offers comprehensive training and dedicated placement support to ensure your successful journey at sea.
        </p>
        
        <button onClick={openModal} className="bg-yellow-400 text-blue-900 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300">
          Apply Now <FormOutlined />
        </button>
      </div>

      {/* Right Side Image */}
      <div className="flex-1 flex justify-center md:justify-end">
        <img
          src="/i14.webp"
          alt="Merchant Navy Training"
          className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 rounded-lg shadow-2xl transform transition duration-300 hover:scale-105 h-auto"
        />
      </div>

      {/* Modal for Apply Now */}
      <Modal
        open={isModalOpen}
        onCancel={closeModal}
        footer={[
          <Button key="cancel" onClick={closeModal} className="modal-cancel">Cancel</Button>,
          <Button key="confirm" onClick={handleConfirm} className="modal-confirm">Apply Now</Button>
        ]}
        className="merchant-navy-modal"
      >
        <h2 className="modal-title text-2xl font-bold mb-4">Commerce & Arts Students Can Join Merchant Navy</h2>
        <p className="modal-text text-base mb-4">
          Become an <strong className="highlight-text">#Officer</strong> in the Merchant Navy! Here are the requirements:
        </p>
        
        <div className="modal-rules space-y-4">
          <div className="rule flex items-center">
            <SolutionOutlined className="text-yellow-400 text-xl mr-3" />
            <span className="rule-text text-gray-200">10th Pass with ≥ 40% marks</span>
          </div>
          <div className="rule flex items-center">
            <FieldTimeOutlined className="text-yellow-400 text-xl mr-3" />
            <span className="rule-text text-gray-200">Age Limit: 18-25</span>
          </div>
          <div className="rule flex items-center">
            <EyeOutlined className="text-yellow-400 text-xl mr-3" />
            <span className="rule-text text-gray-200">Eye Sight: 6/6</span>
          </div>
          <div className="rule flex items-center">
            <SafetyCertificateOutlined className="text-yellow-400 text-xl mr-3" />
            <span className="rule-text text-gray-200">Medically Fit</span>
          </div>
          <div className="rule flex items-center">
            <IdcardOutlined className="text-yellow-400 text-xl mr-3" />
            <span className="rule-text text-gray-200">Valid Aadhar Card</span>
          </div>
        </div>

        <p className="modal-course text-base mt-6 flex items-center">
          <CheckCircleOutlined className="text-green-500 text-2xl mr-3" />
          Indian Marksline offers a <strong>6 Months G.P. Rating Course</strong> for students who wish to join the engine or deck crew.
        </p>

        <Alert
          message="Important"
          description="Please upload only JPG, JPEG, and PNG images."
          type="warning"
          icon={<ExclamationCircleOutlined />}
          showIcon
          className="upload-instruction mt-6"
        />
      </Modal>
    </section>
  );
};

export default HeroSection;
