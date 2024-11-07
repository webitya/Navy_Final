import React, { useRef, useState } from 'react';
import { Form, Input, Button, Typography, Space, Spin } from 'antd';
import { PhoneOutlined, MailOutlined, FacebookOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined, LinkedinOutlined } from '@ant-design/icons';
import emailjs from 'emailjs-com';
import './ContactUs2.css'; // Optional for extra styling

const { Title, Paragraph } = Typography;

const ContactUs = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (values) => {
    setLoading(true);
    emailjs
      .send(
        'service_ciapk4f',
        'template_uja31yo',
        values,
        '5NtDHYu0cYKI2fbyX'
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          formRef.current.resetFields();
          setLoading(false);
        },
        (error) => {
          alert(`Error sending message: ${error.text}`);
          setLoading(false);
        }
      );
  };

  return (
    <div className="contact-us-container bg-gradient-to-b from-blue-100 to-blue-100 py-10 lg:py-10">
      <div className="container mx-auto px-6 lg:px-16">
      <Title className="text-5xl font-extrabold text-center text-[#0A1F44] mb-6">
  We’d Love to Hear From You!
</Title>
<Paragraph className="text-lg text-center text-[#1B3A70] mb-10">
  Whether you have questions, feedback, or just want to say hello, feel free to reach out!
</Paragraph>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="contact-form bg-white p-8 rounded-lg shadow-lg">
            <Title level={2} className="text-3xl font-bold text-blue-500 mb-4">Drop Us a Message</Title>
            <Form ref={formRef} layout="vertical" onFinish={sendEmail}>
              <Form.Item name="name" label="Your Name" rules={[{ required: true, message: 'Please input your name!' }]}>
                <Input placeholder="Enter your name" />
              </Form.Item>
              <Form.Item name="email" label="Your Email" rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}>
                <Input placeholder="Enter your email" prefix={<MailOutlined />} />
              </Form.Item>
              <Form.Item name="phone" label="Your Phone" rules={[{ required: true, message: 'Please input your phone number!' }]}>
                <Input placeholder="Enter your phone number" prefix={<PhoneOutlined />} />
              </Form.Item>
              <Form.Item name="message" label="Your Message" rules={[{ required: true, message: 'Please input your message!' }]}>
                <Input.TextArea rows={4} placeholder="Enter your message" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit w-full" disabled={loading}>
                  {loading ? <Spin /> : 'Send Message'}
                </Button>
              </Form.Item>
            </Form>
          </div>

          {/* Contact Information */}
          <div className="contact-info bg-white p-8 rounded-lg shadow-lg">
            <Title level={2} className="text-3xl font-bold text-blue-500 mb-4">Contact Information</Title>
            <Paragraph className="text-lg text-gray-700 mb-2">
              📞 <strong>Phone:</strong> +91 7766039446
            </Paragraph>
            <Paragraph className="text-lg text-gray-700 mb-2">
              ✉️ <strong>Email:</strong>  indianmarksline@gmail.com
            </Paragraph>

            {/* Social Media Links */}
            <Space className="social-media flex space-x-4 mt-6">
              <a href="https://www.facebook.com/profile.php?id=61567740908857" target="_blank" rel="noopener noreferrer" className="social-icon text-blue-500 hover:text-blue-700 transition-colors">
                <FacebookOutlined style={{ fontSize: '24px' }} />
              </a>
              <a href="https://www.instagram.com/indianmarksline.in/" target="_blank" rel="noopener noreferrer" className="social-icon text-blue-500 hover:text-blue-700 transition-colors">
                <InstagramOutlined style={{ fontSize: '24px' }} />
              </a>
              <a href="https://x.com/indianmarksline" target="_blank" rel="noopener noreferrer" className="social-icon text-blue-500 hover:text-blue-700 transition-colors">
                <TwitterOutlined style={{ fontSize: '24px' }} />
              </a>
              <a href="https://www.youtube.com/@INDIANMARKSLINE" target="_blank" rel="noopener noreferrer" className="social-icon text-blue-500 hover:text-blue-700 transition-colors">
                <YoutubeOutlined style={{ fontSize: '24px' }} />
              </a>
              <a href="https://www.linkedin.com/in/indian-marksline/" target="_blank" rel="noopener noreferrer" className="social-icon text-blue-500 hover:text-blue-700 transition-colors">
                <LinkedinOutlined style={{ fontSize: '24px' }} />
              </a>
            </Space>

            {/* Logo and Additional Image */}
            <div className="mt-6 flex flex-col items-center">
              <img src="./logo1.svg" alt="Merchant Navy Logo" width="200" className="mb-4" />
              <img src="./t1.webp" alt="Merchant Navy Image" width="350" />
            </div>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="google-map bg-white rounded-lg shadow-lg mt-10">
          <Title level={2} className="text-3xl font-bold text-blue-500 mb-4 text-center">Find Us Here!</Title>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3659.546430397639!2d85.46555337532754!3d23.47681987885798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDI4JzM2LjYiTiA4NcKwMjgnMDUuMyJF!5e0!3m2!1sbn!2sin!4v1729413740646!5m2!1sbn!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
