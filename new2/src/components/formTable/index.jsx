import React, { useState } from 'react';
import { useUpdateState } from '../../../hooks/useUpdateState';
import { Loader } from '../loader';

export const FormTable = ({ forms, onViewDetails, setForms }) => {

    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(forms.length / itemsPerPage);
    const paginatedForms = forms.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (page) => setCurrentPage(page);

    const handleUpdateClick = async (formId, action) => {
        console.log(`Form ID: ${formId}, Action: ${action}`);
        const response = await useUpdateState(formId, action, setLoading);
        if (response) {
            if (action == 'rejected') {
                const updatedForms = forms.filter(form => form._id !== formId)
                setForms(updatedForms)
            }
            else {
                const updatedForms = forms.map((form) =>
                    form._id === formId ? { ...form, state: action } : form
                );
                setForms(updatedForms);
            }

        }
    };
    console.log(forms);

    if (loading) {
        return (
            <Loader />
        )
    }

    return (
        <div className="overflow-scroll min-w-[600px]">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                    <tr className="bg-blue-600 text-white">
                        <th className="py-3 px-5 text-left text-sm font-semibold">Name</th>
                        <th className="py-3 px-5 text-left text-sm font-semibold">Category</th>
                        <th className="py-3 px-5 text-left text-sm font-semibold">Date Created</th>
                        <th className="py-3 px-5 text-left text-sm font-semibold">State</th>
                        <th className="py-3 px-5 text-left text-sm font-semibold">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedForms.map((form) => (
                        <tr key={form._id} className="border-b hover:bg-gray-100">
                            <td className="py-3 px-5 text-sm">{form.name}</td>
                            <td className="py-3 px-5 text-sm">{form.category}</td>
                            <td className="py-3 px-5 text-sm">{new Date(form.createdAt).toLocaleDateString()}</td>
                            <td className={`py-3 px-5 text-sm`}>
                                <button className={`block w-fulltext-left px-4 py-2 hover:bg-gray-100 ${form.state === 'pending' ? 'bg-yellow-300' : 'bg-green-500'} `} > {form.state} </button>
                            </td>
                            <td className="py-3 px-5 text-sm space-x-2 flex items-center">
                                {/* Update Options */}
                                <div className="relative w-fit">
                                    {/* <button className="bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700 transition">
                                        Update
                                    </button> */}
                                    <div className=" flex gap-1 mt-1 justify-center right-0 w-40  border rounded group-hover:block">
                                        {form.state === "pending" && (
                                            <>
                                                <button
                                                    onClick={() => handleUpdateClick(form._id, 'approved')}
                                                    className="block w-full bg-green-500 text-left px-4 py-2 hover:bg-gray-100"
                                                >
                                                    Approve
                                                </button>
                                                <button
                                                    onClick={() => handleUpdateClick(form._id, 'rejected')}
                                                    className="block bg-red-500 w-full text-left px-4 py-2 hover:bg-gray-100"
                                                >
                                                    Reject
                                                </button>
                                            </>
                                        )}
                                        {form.state === 'approved' && (
                                            <button
                                                onClick={() => handleUpdateClick(form._id, 'rejected')}
                                                className="block bg-red-500 w-full text-center px-4 py-2 hover:bg-gray-100"
                                            >
                                                Reject
                                            </button>
                                        )}
                                    </div>
                                </div>

                                <button
                                    onClick={() => onViewDetails(form)}
                                    className="bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700 transition"
                                >
                                    View Details
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex justify-center mt-4 space-x-2">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div >
    );
};
