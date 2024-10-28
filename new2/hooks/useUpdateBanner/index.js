import axios from "axios";
import toast from "react-hot-toast";
import { useUploadImage } from "../useUploadImage";


export const useUpdateBanner = async (file, id) => {
    try {

        const imageUri = await useUploadImage(file);


        if (!imageUri) {
            throw new Error("Failed to upload image. Please try again.");
        }

        const response = await axios.post(
            `${import.meta.env.VITE_URI}/api/data/updateBanner`,
            {
                imageUri,
                id,
            },
            {
                withCredentials: true,
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