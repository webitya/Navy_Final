import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useClickAway } from "@uidotdev/usehooks";

export const UserDetailPopup = ({ user, onClose }) => {
    const ref = useClickAway(() => onClose());

    const generateUserPDF = () => {
        const doc = new jsPDF();
        const userInfo = [
            ["Field", "Value"],
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
            ["Mobile", user.presentAddress.mob1],
            ["profilePhotoUri", user.photo],
            ["tenCertificate", user.tenCertificate],
            ["twelveCertificate", user.twelveCertificate],
            ["itiCertificate", user.itiCertificate],
            ["additionalCertificates", user.additionalCertificates],
        ];

        doc.text('User Details', 14, 16);
        doc.autoTable({ head: [["Field", "Value"]], body: userInfo, startY: 30 });

        doc.text('Educational Certificates:', 14, doc.autoTable.previous.finalY + 10);
        const certificates = [
            ["10th Certificate", user.tenCertificate],
            ["12th Certificate", user.twelveCertificate],
            ["ITI Certificate", user.itiCertificate],
            ["Additional Certificates", user.additionalCertificates]
        ];

        let yPos = doc.autoTable.previous.finalY + 20;
        const pageHeight = doc.internal.pageSize.height;

        certificates.forEach((cert, index) => {
            if (cert[1]) {
                if (yPos + 60 > pageHeight) {
                    doc.addPage();
                    yPos = 20;
                }

                doc.text(cert[0], 14, yPos);
                yPos += 10;

                doc.addImage(cert[1], 'PNG', 14, yPos, 80, 60);
                yPos += 70;
            }
        });

        doc.text(`Generated on: ${new Date().toLocaleString()}`, 14, doc.autoTable.previous.finalY + 60);
        doc.save(`${user.name}_details.pdf`);
    };




    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]">
            <div ref={ref} className="bg-white p-4 rounded-md">
                <h2 className="text-center font-semibold">User Details</h2>
                <ul>
                    <li><strong>Name:</strong> {user.name}</li>
                    <li><strong>Category:</strong> {user.category}</li>
                    <li><strong>Caste:</strong> {user.caste}</li>
                    <li><strong>Father's Name:</strong> {user.fatherName}</li>
                    <li><strong>Father's Occupation:</strong> {user.fatherOccupation}</li>
                    <li><strong>Present Address:</strong> {user.presentAddress.vill}, {user.presentAddress.post}, {user.presentAddress.ps}, {user.presentAddress.pincode}</li>
                    <li><strong>DOB:</strong> {new Date(user.dob).toLocaleDateString()}</li>
                    <li><strong>Nationality:</strong> {user.nationality}</li>
                    <li><strong>Marital Status:</strong> {user.maritalStatus}</li>
                    <li><strong>Visible Identification Mark:</strong> {user.visibleIdentificationMark}</li>
                    <li><strong>Email:</strong> {user.presentAddress.emailId}</li>
                    <li><strong>Mobile:</strong> {user.presentAddress.mob1}</li>
                </ul>
                {/* <img src={user} alt="" /> */}

                {/* Educational Certificates Display */}
                <div className="mt-4">
                    <h3 className="font-semibold">Educational Certificates:</h3>
                    <ul>
                        {user.tenCertificate && (
                            <li className="flex items-center mb-2">
                                <img src={user.tenCertificate} alt="10th Certificate" className="h-16 w-16 object-cover rounded border mr-2" />
                                <span>10th Certificate</span>
                            </li>
                        )}
                        {user.twelveCertificate && (
                            <li className="flex items-center mb-2">
                                <img src={user.twelveCertificate} alt="12th Certificate" className="h-16 w-16 object-cover rounded border mr-2" />
                                <span>12th Certificate</span>
                            </li>
                        )}
                        {user.itiCertificate && (
                            <li className="flex items-center mb-2">
                                <img src={user.itiCertificate} alt="ITI Certificate" className="h-16 w-16 object-cover rounded border mr-2" />
                                <span>ITI Certificate</span>
                            </li>
                        )}
                        {user.additionalCertificates && (
                            <li className="flex items-center mb-2">
                                <img src={user.additionalCertificates} alt="Additional Certificates" className="h-16 w-16 object-cover rounded border mr-2" />
                                <span>Additional Certificates</span>
                            </li>
                        )}
                    </ul>
                </div>

                <div className="flex gap-2 justify-center mt-4">
                    <button className="bg-blue-600 px-2 py-1 rounded-sm text-white" onClick={generateUserPDF}>
                        Download PDF
                    </button>
                    <button className="bg-gray-600 px-2 py-1 rounded-sm text-white" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};
