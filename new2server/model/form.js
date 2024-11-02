import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    vill: { type: String, required: true },
    post: { type: String, required: true },
    ps: { type: String, required: true },
    pincode: {
        type: String,
        required: true,
    },
    mob1: {
        type: String,
        required: true,
        validate: {
            validator: (value) => /^\d{10}$/.test(value), // Ensure it's a 10-digit mobile number
            message: "Invalid mobile number"
        }
    },
    emailId: {
        type: String,
        required: false, // Email is optional
        validate: {
            validator: (value) => !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), // Optional and valid email format
            message: "Invalid email address"
        }
    }
});

const gradeSchema = new mongoose.Schema({
    university: { type: String, required: false }, // Optional as per Zod schema
    yearOfPassing: { type: String, required: false }, // Optional as per Zod schema
    percentage: { type: String, required: false }, // Optional as per Zod schema
});

const educationalParticularsSchema = new mongoose.Schema({
    ten: { type: gradeSchema, required: true }, // Required as per Zod schema
    twelve: { type: gradeSchema, required: false }, // Optional as per Zod schema
    iti: { type: gradeSchema, required: false }, // Optional as per Zod schema
});

const formSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        default: "Seaman"
    },
    name: { type: String, required: true },
    caste: { type: String, required: false },
    fatherName: { type: String, required: true },
    fatherOccupation: { type: String, required: false },
    presentAddress: { type: addressSchema, required: true },
    permanentAddress: { type: addressSchema, required: false },

    educationalParticulars: { type: educationalParticularsSchema, required: true },

    nationality: { type: String, required: true },
    maritalStatus: {
        type: String,
        required: true,
        enum: ["married", "unmarried"]
    },
    dob: {
        type: Date,
        required: true,
        validate: {
            validator: (value) => !isNaN(Date.parse(value)),
            message: "Invalid date format"
        }
    },
    visibleIdentificationMark: { type: String, required: false },
    state: {
        type: String,
        enum: ['pending', 'approved'],
        default: 'pending'
    },
    photo: {
        type: String,
        default: "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
    },
    tenCertificates: { type: String },
    twelveCertificates: { type: String },
    itiCertificates: { type: String },
    additionalDocument: { type: String },
}, { timestamps: true });

export const ApplicationForm = mongoose.model("ApplicationForm", formSchema);
