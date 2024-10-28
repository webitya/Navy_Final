import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';

const PDFGenerator = () => {
    const pdfRef = useRef();

    const handleDownloadPDF = () => {
        const element = pdfRef.current;

        const options = {
            margin: 10,
            filename: 'generated-document.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        };

        html2pdf().set(options).from(element).save();
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-3xl p-8 bg-white shadow-lg rounded-lg">
                <div ref={pdfRef} className="pdf-content">
                    <h1 className="text-2xl font-bold mb-4">PDF Content</h1>
                    <p className="text-lg mb-2">
                        This is the content that will be included in the generated PDF.
                    </p>
                    <p>
                        You can customize this component to include any content you want,
                        such as tables, charts, or text.
                    </p>
                </div>

                <button
                    onClick={handleDownloadPDF}
                    className="mt-6 w-full px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md"
                >
                    Download as PDF
                </button>
            </div>
        </div>
    );
};

export default PDFGenerator;
