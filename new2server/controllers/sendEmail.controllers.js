import nodemailer from 'nodemailer';

export const sendEmail = async (req, res) => {
    const { to, subject, text, html } = req.body;


    if (!to || !subject || !text) {
        return res.status(400).json({ success: false, error: 'All fields are required' });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });

    const mailOptions = {
        from: `webitya <${process.env.EMAIL}>`,
        to: 'indianmarksline@gmail.com',
        subject,
        text,
        html,
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ success: false, error: error.message });
    }
};
