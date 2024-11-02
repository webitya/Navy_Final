'use client'

import { CloudinaryImage } from "@cloudinary/url-gen";
import { scale } from "@cloudinary/url-gen/actions/resize";
import { quality, format } from "@cloudinary/url-gen/actions/delivery";

export const useUploadImage = async (file, flag = true) => {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", import.meta.env.VITE_PUBLIC_UPLOAD_PRESET);

    try {
        // Step 1: Upload the image to Cloudinary
        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_PUBLIC_CLOUD_NAME}/image/upload`,
            {
                method: "POST",
                body: formData,
            }
        );

        const data = await response.json();

        if (data.secure_url) {
            if (!flag) {
                return data.secure_url;
            }

            // Step 2: Transform the uploaded image using the Cloudinary SDK
            const image = new CloudinaryImage(data.public_id, {
                cloudName: import.meta.env.VITE_PUBLIC_CLOUD_NAME,
            });

            // Apply transformations
            const transformedImageUrl = image
                .resize(scale().width(1000))   // Resize to 1000px width
                .delivery(quality("auto"))    // Set quality automatically
                .delivery(format("auto"))     // Set format automatically
                .toURL();

            return transformedImageUrl;
        } else {
            console.error("Error uploading image:", data);
            return null;
        }
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
};
