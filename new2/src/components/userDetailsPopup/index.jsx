import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useClickAway } from "@uidotdev/usehooks";
import { Image } from 'antd';

export const UserDetailPopup = ({ user, onClose }) => {
    const ref = useClickAway(() => onClose());

    const generateUserPDF = () => {
        const doc = new jsPDF();
        const userInfo = [
            ["Name", user.name],
            ["Category", user.category],
            ["Caste", user.caste],
            ["Father's Name", user.fatherName],
            ["Father's Occupation", user.fatherOccupation],
            ["Present Address", `${user.presentAddress.vill}, ${user.presentAddress.post}, ${user.presentAddress.ps}, ${user.presentAddress.pincode}`],
            ["Permanent Address", `${user.permanentAddress.vill}, ${user.permanentAddress.post}, ${user.permanentAddress.ps}, ${user.permanentAddress.pincode}`],
            ["DOB", new Date(user.dob).toLocaleDateString()],
            ["Nationality", user.nationality],
            ["Marital Status", user.maritalStatus],
            ["Visible Identification Mark", user.visibleIdentificationMark],
            ["Email", user.presentAddress.emailId],
            ["Mobile", user.presentAddress.mob1]
        ];

        doc.text('User Details', 14, 16);
        doc.autoTable({ head: [["Field", "Value"]], body: userInfo, startY: 30 });

        const certificates = [
            ["10th Certificate", user.tenCertificates],
            ["12th Certificate", user.twelveCertificates],
            ["ITI Certificate", user.itiCertificates],
            ["Additional Document", user.additionalDocument]
        ];

        let yPos = doc.autoTable.previous.finalY + 20;
        const pageHeight = doc.internal.pageSize.height;

        certificates.forEach(([title, url]) => {
            if (url) {
                if (yPos + 60 > pageHeight) {
                    doc.addPage();
                    yPos = 20;
                }
                doc.text(title, 14, yPos);
                yPos += 10;
                doc.addImage(url, 'JPEG', 14, yPos, 80, 60);
                yPos += 70;
            }
        });

        doc.text(`Generated on: ${new Date().toLocaleString()}`, 14, yPos + 20);
        doc.save(`${user.name}_details.pdf`);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000] overflow-auto">
            <div ref={ref} className="bg-white max-w-lg w-full max-h-[90vh] p-6 rounded-md shadow-lg overflow-y-auto">
                <h2 className="text-center text-2xl font-semibold mb-4">User Details</h2>
                <ul className="space-y-2">
                    <li><strong>Name:</strong> {user.name}</li>
                    <li><strong>Category:</strong> {user.category}</li>
                    <li><strong>Caste:</strong> {user.caste}</li>
                    <li><strong>Father's Name:</strong> {user.fatherName}</li>
                    <li><strong>Father's Occupation:</strong> {user.fatherOccupation}</li>
                    <li><strong>Present Address:</strong> {`${user.presentAddress.vill}, ${user.presentAddress.post}, ${user.presentAddress.ps}, ${user.presentAddress.pincode}`}</li>
                    <li><strong>DOB:</strong> {new Date(user.dob).toLocaleDateString()}</li>
                    <li><strong>Nationality:</strong> {user.nationality}</li>
                    <li><strong>Marital Status:</strong> {user.maritalStatus}</li>
                    <li><strong>Visible Identification Mark:</strong> {user.visibleIdentificationMark}</li>
                    <li><strong>Email:</strong> {user.presentAddress.emailId}</li>
                    <li><strong>Mobile:</strong> {user.presentAddress.mob1}</li>
                </ul>

                {/* Display Educational Certificates */}
                <div className="mt-6">
                    <h3 className="font-semibold mb-2">Educational Certificates:</h3>
                    <ul className="space-y-4">
                        {user.tenCertificates && (
                            <li className="flex items-center space-x-3">
                                <Image src={user.tenCertificates} alt="10th Certificate" className="h-20 w-20 object-cover rounded-lg border" />
                                <span>10th Certificate</span>
                            </li>
                        )}
                        {user.twelveCertificates && (
                            <li className="flex items-center space-x-3">
                                <Image src={user.twelveCertificates} alt="12th Certificate" className="h-20 w-20 object-cover rounded-lg border" />
                                <span>12th Certificate</span>
                            </li>
                        )}
                        {user.itiCertificates && (
                            <li className="flex items-center space-x-3">
                                <Image src={user.itiCertificates} alt="ITI Certificate" className="h-20 w-20 object-cover rounded-lg border" />
                                <span>ITI Certificate</span>
                            </li>
                        )}
                        {user.additionalDocument && (
                            <li className="flex items-center space-x-3">
                                <Image src={user.additionalDocument} alt="Additional Document" className="h-20 w-20 object-cover rounded-lg border" />
                                <span>Additional Document</span>
                            </li>
                        )}
                    </ul>
                </div>

                <div className="flex gap-4 justify-center mt-6">
                    <button className="bg-blue-600 px-4 py-2 rounded-md text-white hover:bg-blue-700" onClick={generateUserPDF}>
                        Print PDF
                    </button>
                    <button className="bg-gray-600 px-4 py-2 rounded-md text-white hover:bg-gray-700" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};
