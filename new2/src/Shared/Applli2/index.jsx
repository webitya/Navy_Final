'use client'

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ApplicationForm2 = () => {
    const [isPermanentAddressSame, setIsPermanentAddressSame] = useState(false);
    const [formData, setFormData] = useState({
        category: '',
        name: '',
        caste: '',
        fatherName: '',
        fatherOccupation: '',
        presentAddress: '',
        permanentAddress: '',
        email: '',
        // add other fields here...
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCopyAddress = () => {
        setFormData({ ...formData, permanentAddress: formData.presentAddress });
        setIsPermanentAddressSame(true);
    };

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.send('your_service_id', 'your_template_id', formData, 'your_user_id')
            .then((result) => {
                alert('Form submitted successfully!');
            })
            .catch((error) => {
                console.error('Error sending form:', error);
                alert('Failed to send form.');
            });
    };

    return (
        <div className="container mx-auto py-5">
            <form onSubmit={sendEmail} className="w-full mx-auto p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center mb-4">INDIAN MARKSLINE</h2>

                <div className="mb-5">
                    <label className="block mb-1">Choose Category</label>
                    <select name="category" onChange={handleInputChange} value={formData.category} className="border rounded-lg p-2 w-full mb-2">
                        <option value="seaman">Seaman</option>
                        <option value="fitterElectrician">Fitter Electrician</option>
                        <option value="deckcadet">Deck Cadet</option>
                        <option value="engine_rating">Engine Rating</option>
                        <option value="cookAsstt">Cook Assistant (6 Months)</option>
                        <option value="gpRating">G.P Rating (6 Months)</option>
                    </select>
                </div>

                <div className="mb-5">
                    <label className="block mb-1">Name as per your certificate</label>
                    <input type="text" name="name" onChange={handleInputChange} value={formData.name} className="border rounded-lg p-2 w-full" />
                </div>

                <div className="mb-5">
                    <label className="block mb-1">Caste</label>
                    <select name="caste" onChange={handleInputChange} value={formData.caste} className="border rounded-lg p-2 w-full">
                        <option value="">Select Caste</option>
                        <option value="general">General</option>
                        <option value="obc">OBC</option>
                        <option value="sc">SC</option>
                        <option value="st">ST</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="mb-5">
                    <label className="block mb-1">Father's Name</label>
                    <input type="text" name="fatherName" onChange={handleInputChange} value={formData.fatherName} className="border rounded-lg p-2 w-full" />
                </div>

                <div className="mb-5">
                    <label className="block mb-1">Father's Occupation</label>
                    <input type="text" name="fatherOccupation" onChange={handleInputChange} value={formData.fatherOccupation} className="border rounded-lg p-2 w-full" />
                </div>

                <div className="mb-4">
                    <h3 className="font-semibold mb-2">Present Address</h3>
                    <input type="text" name="presentAddress" onChange={handleInputChange} value={formData.presentAddress} className="border rounded-lg p-2 w-full mb-4" />
                    <button type="button" onClick={handleCopyAddress} className="mb-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                        Same as Present
                    </button>
                </div>

                <div className="mb-4">
                    <h3 className="font-semibold mb-2">Permanent Address</h3>
                    <input type="text" name="permanentAddress" onChange={handleInputChange} value={formData.permanentAddress} className="border rounded-lg p-2 w-full" />
                </div>

                <div className="mb-5">
                    <label className="block mb-1">Email</label>
                    <input type="email" name="email" onChange={handleInputChange} value={formData.email} className="border rounded-lg p-2 w-full" />
                </div>

                {/* Additional fields can be added similarly */}

                <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ApplicationForm2;
