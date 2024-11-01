import axios from "axios";
import toast from "react-hot-toast";
import { useUploadImage } from "../useUploadImage";


export const useUpdateBanner = async (file, id) => {
    try {

        const imageUri = await useUploadImage(file);


        if (!imageUri) {
            throw new Error("Failed to upload image. Please try again.");
        }
        const token = localStorage.getItem('token');
        const response = await axios.post(
            `${import.meta.env.VITE_URI}/api/data/updateBanner`,
            {
                imageUri,
                id,
            },
            {
                headers: {
                    'Authorization': `Bearer ${token}`, // Include token in Authorization header
                    'Content-Type': 'application/json'   // Optional: specify content type
                },
                withCredentials: true
            }
        );
        return response.data.data;
    } catch (error) {
        console.error("Banner Update Error:", error);

        toast.error(
            error?.data?.response?.message || "Server Error: Please try again later."
        );
        return null;
    }
};