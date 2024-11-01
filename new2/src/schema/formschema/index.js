import { z } from 'zod';

const mobileRegex = /^\d{10}$/;

const addressSchema = z.object({
    vill: z.string().nonempty("enter village here"),
    post: z.string().nonempty("Post is required"),
    ps: z.string().nonempty("Police Station is required"),
    pincode: z.string()
        .nonempty("Enter Your Pincode "),
    mob1: z.string()
        .regex(mobileRegex, "invalid mobile number")
        .nonempty("Mobile number is required"),
    emailId: z.string()
        .email("Invalid email address")
        .optional()
});

const optionalAddressSchema = addressSchema.partial();

const gradeSchema = z.object({
    university: z.string().optional(),
    yearOfPassing: z.string()
        .optional(),
    percentage: z.string()
        .optional(),
});

const educationalParticularsSchema = z.object({
    ten: gradeSchema,
    twelve: gradeSchema.optional(),
    iti: gradeSchema.optional(),
});

export const formSchema = z.object({
    category: z.string(),
    name: z.string().nonempty("Enter Your Name is"),
    caste: z.string().optional(),
    fatherName: z.string().nonempty("Enter Your Father's Name"),
    fatherOccupation: z.string().optional(),
    presentAddress: addressSchema,
    permanentAddress: optionalAddressSchema,
    educationalParticulars: educationalParticularsSchema,
    nationality: z.string().nonempty("Enter your Nationality"),
    maritalStatus: z.enum(["married", "unmarried"]),
    dob: z.string()
        .nonempty("Date of Birth is required")
        .refine((val) => !isNaN(Date.parse(val)), {
            message: "Invalid date format",
        }),
    visibleIdentificationMark: z.string()
        .optional(),
    additionalDocument: z.string(),
    tenCertificates: z.string(),
    twelveCertificates: z.string(),
    itiCertificates: z.string(),
    photo: z.string(),
});