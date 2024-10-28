import React from 'react';
import { useNavigate } from 'react-router-dom';

export const SubmissionSuccess = () => {
    const navigate = useNavigate();

    const handleBackToForm = () => {
        navigate('/');
    };

    return (
        <div className="h-screen flex items-center justify-center bg-green-100">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h1 className="text-3xl font-bold text-green-600 mb-4">
                    Form Submitted Successfully!
                </h1>
                <p className="text-gray-700 mb-8">
                    Thank you for submitting your information. We will process your request soon.
                </p>
                <button
                    onClick={handleBackToForm}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition">
                    Back to home
                </button>
            </div>
        </div>
    );
};

export default SubmissionSuccess;
