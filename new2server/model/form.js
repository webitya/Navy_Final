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
    },
    emailId: {
        type: String,
        required: true,
    }
});

const gradeSchema = new mongoose.Schema({
    university: { type: String },
    yearOfPassing: {
        type: String,
    },
    percentage: {
        type: String,
    }
});

const educationalParticularsSchema = new mongoose.Schema({
    ten: { type: gradeSchema },
    twelve: { type: gradeSchema },
    iti: { type: gradeSchema }
});

const formSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        default :"Seaman"
    },
    name: { type: String, required: true },
    caste: { type: String, required: false },
    fatherName: { type: String, required: true },
    fatherOccupation: { type: String },

    presentAddress: { type: addressSchema, required: true },
    permanentAddress: { type: addressSchema, required: false },

    educationalParticulars: { type: educationalParticularsSchema },

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
    visibleIdentificationMark: { type: String, required: true },
    state: {
        type: String,
        enum: ['pending', 'approved'],
        default: 'pending'
    },
    photo: {
        type: String,
        default: "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
    },
    tenCertificate: {
        type: String
    },
    twelveCertificate: {
        type: String
    },
    itiCertificate: {
        type: String
    },
    additionalCertificates: {
        type: String,
    }
}, { timestamps: true });

export const ApplicationForm = mongoose.model("ApplicationForm", formSchema);
