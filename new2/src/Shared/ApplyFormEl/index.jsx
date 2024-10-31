'use client'

import React, { useEffect, useState } from 'react';
import { formSchema } from "../../schema/formschema"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSubmitFormData } from "../../../hooks/addformdata";
import { useNavigate } from "react-router-dom";
import { useUploadImage } from "../../../hooks/useUploadImage"
import { defaultFormValues } from '../../utils/form';
import FooterEl from '../FooterEl';
import NavbarEl2 from '../NavbarEl2';

export const ApplicationForm = () => {
    const navigate = useNavigate();
    const [isPermanentAddressSame, setIsPermanentAddressSame] = useState(false);
    const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: defaultFormValues
    });
    const [profilePic, setProfilePic] = useState(null)
    const [tenCertificate, setTenCertificate] = useState(null)
    const [twelveCertificate, setTwelveCertificate] = useState(null)
    const [itiCertificate, setItiCertificate] = useState(null)
    const [AdditionalCertificates, setAdditionalCertificates] = useState(null)
    const [loading, setLoading] = useState(false)


    const formData = watch();

    // Log validation errors as they occur
    useEffect(() => {
        formSchema.safeParseAsync(formData).then((result) => {
            if (!result.success) {
                console.clear(); // Clear previous logs
                console.log("Validation errors:", result.error.format());
            }
        });
    }, [formData]);

    const onSubmit = async (data) => {
        console.log("Form submitted", data);
        setLoading(true)

        if (profilePic) {
            data.photo = await useUploadImage(profilePic, false)
        }
        if (tenCertificate) {
            data.tenCertificates = await useUploadImage(tenCertificate, false)
        }
        if (itiCertificate) {
            data.itiCertificates = await useUploadImage(itiCertificate, false)
        }
        if (AdditionalCertificates) {
            data.additionalDocument = await useUploadImage(AdditionalCertificates, false)
        }
        if (twelveCertificate) {
            data.twelveCertificates = await useUploadImage(twelveCertificate, false)
        }

        const response = await useSubmitFormData(data, setLoading)
        if (response) {
            reset()
            navigate('/success');
        }
        else {
            // Handle form submission errors
            reset()
        }
    };

    const handleCopyAddress = () => {
        const presentAddress = watch('presentAddress');
        if (presentAddress) {
            setValue('permanentAddress', presentAddress);
            setIsPermanentAddressSame(true);
        }
    };

    const isFieldRequired = (field) => {
        const fieldSchema = formSchema.shape[field];
        return fieldSchema ? !fieldSchema.isOptional() : false;
    };


    return (
        <>
            <NavbarEl2 />
            <div className="container mx-auto py-5">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-center mb-4">INDIAN MARKSLINE</h2>

                    {/* Credentials Section */}
                    <div className="mb-5">
                        <h3 className="font-semibold mb-2">Credentials <span className="text-red-500">{isFieldRequired('category') && '*'}</span></h3>
                        <label className="block mb-1">Choose Category</label>
                        <select {...register('category')} className="border rounded-lg p-2 w-full mb-2">
                            <option value="seaman">Seaman</option>
                            <option value="filler">Filllet</option>
                            <option value="deckgabet">Deckgabet</option>
                            <option value="engine_rating">Engine Rating</option>
                            <option value="cookAsstt">Cook Assistant</option>
                        </select>
                        <span className="text-red-500">{errors.category?.message}</span>
                    </div>

                    {/* Personal Details */}
                    <div className="mb-5">
                        <label className="block mb-1">Name as per your certificate <span className="text-red-500">{isFieldRequired('name') && '*'}</span></label>
                        <input type="text" {...register('name')} className="border rounded-lg p-2 w-full" />
                        <span className="text-red-500">{errors.name?.message}</span>
                    </div>
                    {/* for profile pic  */}
                    <div className='py-4'>
                        <label className="block mb-1">Upload Profile Pic</label>

                        <input
                            type="file"
                            onChange={(e) => setProfilePic(e.target.files?.[0] || null)}
                            className="border rounded-lg p-2 w-full"
                            accept=".jpg,.jpeg,.png"
                        />

                        <span className="text-red-500">
                            {/* {errors.educationalParticulars?.[grade]?.file?.message} */}
                        </span>
                    </div>


                    {['caste', 'fatherName', 'fatherOccupation'].map((field) => (
                        <div className="mb-5" key={field}>
                            <label className="block mb-1">
                                {field.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
                                <span className="text-red-500">{isFieldRequired(field) && '*'}</span>
                            </label>

                            {field === 'caste' ? (
                                <select
                                    {...register(field)}
                                    className="border rounded-lg p-2 w-full"
                                >
                                    <option value="">Select Caste</option>
                                    <option value="general">General</option>
                                    <option value="obc">OBC</option>
                                    <option value="sc">SC</option>
                                    <option value="st">ST</option>
                                    <option value="other">Other</option>
                                </select>
                            ) : (
                                <input
                                    {...register(field)}
                                    className="border rounded-lg p-2 w-full"
                                    type="text"
                                />
                            )}

                            <span className="text-red-500">
                                {errors[field]?.message}
                            </span>
                        </div>
                    ))}


                    {/* Present Address Section */}
                    <div className="mb-4">
                        <h3 className="font-semibold mb-2">Present Address <span className="text-red-500">{isFieldRequired('presentAddress') && '*'}</span></h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { field: 'vill', label: 'Village' },
                                { field: 'post', label: 'Post Office' },
                                { field: 'ps', label: 'Police Station' },
                                { field: 'pincode', label: 'Pincode' },
                                { field: 'mob1', label: 'Mobile Number' },
                                { field: 'emailId', label: 'Email' }
                            ].map(({ field, label }) => (
                                <div key={field}>
                                    <label className="block mb-1">
                                        {label} <span className="text-red-500">{isFieldRequired(`presentAddress.${field}`) && '*'}</span>
                                    </label>
                                    <input {...register(`presentAddress.${field}`)} className="border rounded-lg p-2 w-full" />
                                    <span className="text-red-500">{errors.presentAddress?.[field]?.message}</span>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* Permanent Address Section */}
                    <div className="mb-4">
                        <h3 className="font-semibold mb-2">Permanent Address <span className="text-red-500">{isFieldRequired('permanentAddress') && '*'}</span></h3>
                        <button
                            type="button"
                            onClick={handleCopyAddress}
                            className="mb-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition">
                            Same as Present
                        </button>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { field: 'vill', label: 'Village' },
                                { field: 'post', label: 'Post Office' },
                                { field: 'ps', label: 'Police Station' },
                                { field: 'pincode', label: 'Pincode' },
                                { field: 'mob1', label: 'Mobile Number' },
                                { field: 'emailId', label: 'Email' }
                            ].map(({ field, label }) => (
                                <div key={field}>
                                    <label className="block mb-1">
                                        {label} <span className="text-red-500">{isFieldRequired(`permanentAddress.${field}`) && '*'}</span>
                                    </label>
                                    <input {...register(`permanentAddress.${field}`)} className="border rounded-lg p-2 w-full" />
                                    <span className="text-red-500">{errors.permanentAddress?.[field]?.message}</span>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* Educational Particulars */}
                    <div className="mb-4">
                        <h3 className="font-semibold mb-2">Educational Particulars <span className="text-red-500">{isFieldRequired('educationalParticulars') && '*'}</span></h3>
                        {['Tenth', 'Twelve', 'ITI'].map((grade, index) => (
                            <div key={index} className="mb-4">
                                <h4 className="font-semibold">{`${grade === 'Tenth' ? '10th' : grade === 'Twelve' ? '12th' : 'ITI'} Grade`}</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {['School/College/University', 'yearOfPassing', 'percentage'].map((field) => (
                                        <div key={field}>
                                            <label className="block mb-1">{field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} <span className="text-red-500">{isFieldRequired(`educationalParticulars.${grade}.${field}`) && '*'}</span></label>
                                            <input
                                                type={field === 'percentage' ? 'text' : 'text'} // Keep as text since we handle validation
                                                {...register(`educationalParticulars.${grade}.${field}`)}
                                                className="border rounded-lg p-2 w-full"
                                            />
                                            <span className="text-red-500">{errors.educationalParticulars?.[grade]?.[field]?.message}</span>
                                        </div>
                                    ))}
                                    <div>
                                        <label className="block mb-1">
                                            Upload {grade} Certificate
                                        </label>

                                        <input
                                            type="file"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0]; // Get the selected file
                                                if (!file) return; // If no file selected, do nothing

                                                // Update the corresponding certificate state based on the grade
                                                if (grade === 'ten') setTenCertificate(file);
                                                else if (grade === 'twelve') setTwelveCertificate(file);
                                                else if (grade === 'iti') setItiCertificate(file);
                                            }}
                                            className="border rounded-lg p-2 w-full"
                                            accept=".pdf,.jpg,.jpeg,.png"
                                        />

                                        <span className="text-red-500">
                                            {/* {errors.educationalParticulars?.[grade]?.file?.message} */}
                                        </span>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Information */}
                    <div className="mb-4">
                        <label className="block mb-1">Nationality <span className="text-red-500">{isFieldRequired('nationality') && '*'}</span></label>
                        <input {...register('nationality')} className="border rounded-lg p-2 w-full" />
                        <span className="text-red-500">{errors.nationality?.message}</span>
                    </div>

                    {/* Marital Status */}
                    <div className="mb-4">
                        <h3 className="font-semibold mb-2">Marital Status <span className="text-red-500">{isFieldRequired('maritalStatus') && '*'}</span></h3>
                        {['married', 'unmarried'].map(status => (
                            <label className="inline-flex items-center mr-4" key={status}>
                                <input type="radio" value={status} {...register('maritalStatus')} className="mr-2" />
                                {status.charAt(0).toUpperCase() + status.slice(1)}
                            </label>
                        ))}
                        <span className="text-red-500">{errors.maritalStatus?.message}</span>
                    </div>

                    {/* Date of Birth */}
                    <div className="mb-4">
                        <label className="block mb-1">
                            Date of Birth <span className="text-red-500">{isFieldRequired('dob') && '*'}</span>
                        </label>
                        <input
                            type="date"
                            {...register('dob', { required: true })}
                            className="border rounded-lg p-2 w-full"
                        />
                        <span className="text-red-500">{errors.dob?.message}</span>
                    </div>


                    {/* Visible Identification Mark */}
                    <div className="mb-4">
                        <label className="block mb-1">Visible Identification Mark <span className="text-red-500">{isFieldRequired('visibleIdentificationMark') && '*'}</span></label>
                        <input {...register('visibleIdentificationMark')} className="border rounded-lg p-2 w-full" />
                        <span className="text-red-500">{errors.visibleIdentificationMark?.message}</span>
                    </div>

                    <div>
                        <label className="block mb-1">
                            Upload AadharCard
                        </label>
                        <input
                            type="file"
                            onChange={(e) => {
                                const file = e.target.files?.[0]; // Get the selected file
                                if (file) setAdditionalCertificates(file); // Set the file if selected
                            }}
                            className="border rounded-lg p-2 w-full"
                            accept=".pdf,.jpg,.jpeg,.png"
                        />

                        <span className="text-red-500">
                            {/* {errors.educationalParticulars?.[grade]?.file?.message} */}
                        </span>

                    </div>

                    {/* Submit Button */}
                    <button disabled={loading} type="submit" className="w-full bg-blue-500 my-5 hover:bg-blue-600 text-white p-2 rounded transition"> {loading ? "Loading..." : 'Submit'}  </button>
                </form >
            </div >
            <FooterEl />
        </>
    );
};

export default ApplicationForm;