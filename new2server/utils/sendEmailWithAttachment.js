
import nodemailer from 'nodemailer'


export const sendEmailWithAttachment = async (pdfStream) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });

    const mailOptions = {
        from: `"Webitya" <${process.env.VITE_EMAIL}>`,
        to: 'indianmarksline@gmail.com',
        subject: 'New Application Form Submission',
        text: 'A new form submission has been received. See attached PDF.',
        attachments: [
            {
                filename: 'form-submission.pdf',
                content: pdfStream,
                contentType: 'application/pdf',
            },
        ],
    };

    await transporter.sendMail(mailOptions);
};