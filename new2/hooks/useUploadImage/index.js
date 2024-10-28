export const useUploadImage = async (file, flag = true) => {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", import.meta.env.VITE_PUBLIC_UPLOAD_PRESET);

    try {
        const response = await fetch(
            `https:/api.cloudinary.com/v1_1/${import.meta.env.VITE_PUBLIC_CLOUD_NAME}/image/upload`,
            {
                method: "POST",
                body: formData,
            }
        );

        const data = await response.json();

        if (data.secure_url) {
            if (!flag) {
                return data.secure_url
            }
            const transformedImageUrl = data.secure_url.replace(
                "/upload/",
                `/upload/c_fill,w_1200,h_400/`
            );
            return transformedImageUrl;
        } else {
            console.error("Error uploading image:", data);
            return null;
        }
    } catch (error) {
        return null;
    }
};