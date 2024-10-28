export const sendEmail = async ({ to, subject, text, html }) => {
    try {
        // Dynamically import nodemailer to avoid compatibility issues
        const nodemailer = (await import('nodemailer')).default;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: import.meta.env.VITE_EMAIL,
                pass: import.meta.env.VITE_PASSWORD,
            },
        });

        const mailOptions = {
            from: `from webitya.com <${import.meta.env.VITE_EMAIL}>`,
            to,
            subject,
            text,
            html,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: %s', info.messageId);

        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, error: error.message };
    }
};
