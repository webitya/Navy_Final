import mongoose from "mongoose";

// Define the Banner schema with default values for images
const bannerSchema = new mongoose.Schema({
    imageUri: {
        type: String,
        required: true,
        default: "https://res.cloudinary.com/demo/image/upload/c_fill,w_1200,h_400/v1312461204/sample.jpg"
    },
});

// Create the Banner model
export const Banner = mongoose.model("Banner", bannerSchema);
