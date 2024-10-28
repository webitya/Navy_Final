import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useUpdateBanner } from '../../../hooks/useUpdateBanner'

export const ImageBanner = ({ banner, setBanner }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState({})
    const [imagePreview, setImagePreview] = useState(null)
    const [file, setFile] = useState(null)
    const [loader, setLoader] = useState(false)

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banner.length);
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setImagePreview(URL.createObjectURL(selectedFile));
        }
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? banner.length - 1 : prevIndex - 1
        );
    };

    const handleUpdateImage = (id) => {
        const selected = banner.filter(item => item._id === id)
        setSelectedImage(selected)
        setIsOpen(true)
    };


    const handleUpdate = async () => {
        setLoader(true)
        try {
            if (!file) return;
            const response = await useUpdateBanner(file, selectedImage[0]._id)
            if (response) {
                toast.success("Banner updated successfully")
                setBanner((prev) => prev.map(item => (
                    item._id === selectedImage[0]._id
                        ? { ...item, imageUri: URL.createObjectURL(file) }
                        : item)));

                setIsOpen(false)
                setImagePreview(null)
                setSelectedImage(null)
                setFile(null)
            }
        } catch (error) {

        } finally {
            setLoader(false)
        }

    }


    return (
        <div className="relative w-full h-[400px] overflow-hidden">
            {/* Image Banner */}
            {banner.map((image, index) => (
                <div
                    key={image._id}
                    className={`absolute inset-0 transition-transform p-2 duration-500 ease-in-out ${index === currentIndex ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
                >
                    <img
                        src={image.imageUri}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                        <button
                            onClick={() => handleUpdateImage(image._id)}
                            className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md"
                        >
                            Update Banner
                        </button>
                    </div>
                </div>
            ))}

            {/* Navigation Controls */}
            <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow-lg hover:bg-opacity-100"
            >
                &#9664;
            </button>
            <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow-lg hover:bg-opacity-100"
            >
                &#9654;
            </button>

            {isOpen && (
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
                                disabled={loader}
                                className="bg-green-500 text-white rounded-md px-4 py-2 mr-2 hover:bg-green-600 transition duration-300"
                            >
                                {loader ? 'Loading...' : 'Update'}
                            </button>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="bg-gray-300 text-black rounded-md px-4 py-2 hover:bg-gray-400 transition duration-300"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageBanner;
