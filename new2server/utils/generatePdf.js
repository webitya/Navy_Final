import { jsPDF } from 'jspdf';
import { Buffer } from 'buffer'; // Use buffer from 'buffer' in Node.js

export const generatePDF = async (user) => {
    try {
        const doc = new jsPDF();

        // Helper function to safely access nested properties
        const getValue = (value, fallback = 'N/A') =>
            value !== undefined && value !== null ? value.toString() : fallback;

        // User information table with safe value extraction
        const userInfo = [
            ["Field", "Value"],
            ["Name", getValue(user?.name)],
            ["Category", getValue(user?.category)],
            ["Caste", getValue(user?.caste)],
            ["Father's Name", getValue(user?.fatherName)],
            ["Father's Occupation", getValue(user?.fatherOccupation)],
            [
                "Present Address",
                getValue(
                    `${user?.presentAddress?.vill}, ${user?.presentAddress?.post}, ${user?.presentAddress?.ps}, ${user?.presentAddress?.pincode}`
                )
            ],
            [
                "Permanent Address",
                getValue(
                    `${user?.permanentAddress?.vill}, ${user?.permanentAddress?.post}, ${user?.permanentAddress?.ps}, ${user?.permanentAddress?.pincode}`
                )
            ],
            ["DOB", getValue(new Date(user?.dob).toLocaleDateString())],
            ["Nationality", getValue(user?.nationality)],
            ["Marital Status", getValue(user?.maritalStatus)],
            ["Visible Identification Mark", getValue(user?.visibleIdentificationMark)],
            ["Email", getValue(user?.presentAddress?.emailId)],
            ["Mobile", getValue(user?.presentAddress?.mob1)],
            ["Profile Photo URI", getValue(user?.photo)],
            ["10th Certificate", getValue(user?.tenCertificate)],
            ["12th Certificate", getValue(user?.twelveCertificate)],
            ["ITI Certificate", getValue(user?.itiCertificate)],
            ["Additional Certificates", getValue(user?.additionalCertificates)],
        ];

        // Add a title and spacing
        doc.setFontSize(18);
        doc.text('User Information', 14, 15);

        doc.setFontSize(12);
        doc.text('Details:', 14, 25);

        // Positioning for table rows
        let startX = 14;
        let startY = 30;

        // Print the table row-by-row
        userInfo.forEach(([field, value], index) => {
            doc.text(field, startX, startY + index * 10); // Left column
            doc.text(value, startX + 80, startY + index * 10); // Right column
        });

        // Generate and return the PDF buffer
        const pdfArrayBuffer = doc.output('arraybuffer');
        const pdfBuffer = Buffer.from(pdfArrayBuffer);

        return pdfBuffer;
    } catch (error) {
        console.error('Error generating PDF:', error);
        throw new Error('Failed to generate PDF. Please try again.');
    }
};
