import axios from "axios";
import toast from "react-hot-toast";
import { useUploadImage } from "../useUploadImage";


export const useUpdateBanner = async (file, id) => {
    try {
        console.log(id);

        console.log("Starting Banner Update...");

        const imageUri = await useUploadImage(file);

        console.log("Uploaded Image URI:", imageUri);

        if (!imageUri) {
            throw new Error("Failed to upload image. Please try again.");
        }

        const response = await axios.post(
            "/api/data/updateBanner",
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