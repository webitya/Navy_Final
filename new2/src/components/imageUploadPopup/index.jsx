import React, { useState } from 'react';
import { useUpdateBanner } from '../../../hooks/useUpdateBanner';

export const ImageUploadPopup = ({ isOpen, onClose, onUpdate, id }) => {
    const [file, setFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setImagePreview(URL.createObjectURL(selectedFile));
        }
    };

    const handleUpdate = async () => {
        if (file) {
            // Call the onUpdate function with the selected file
            await useUpdateBanner(file, id)
            onUpdate(file);
            setFile(null); // Clear the file input after uploading
            setImagePreview(null); // Clear the image preview
            onClose(); // Close the popup
        } else {
            alert("Please select a file to upload.");
        }
    };

    return (
        isOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50  w-screen bg-black bg-opacity-50">
                <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 w-screen sm:w-11/12 md:w-1/3 lg:w-1/4 overflow-hidden shadow-lg">
                    <h2 className="text-lg font-semibold mb-4">Update Image</h2>
                    {imagePreview && (
                        <img className='h-48 w-full object-cover rounded-md mb-4' src={imagePreview} alt="Selected preview" />
                    )}
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="mb-4 w-full text-sm"
                    />
                    <div className="flex justify-end">
                        <button
                            onClick={handleUpdate}
                            className="bg-green-500 text-white rounded-md px-4 py-2 mr-2 hover:bg-green-600 transition duration-300"
                        >
                            Update
                        </button>
                        <button
                            onClick={onClose}
                            className="bg-gray-300 text-black rounded-md px-4 py-2 hover:bg-gray-400 transition duration-300"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        )
    );
};
