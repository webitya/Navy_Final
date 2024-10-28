import axios from 'axios';
import toast from 'react-hot-toast';

export const sendEmail = async (emailDetails, setLoading) => {
    setLoading(true);
    try {
        const response = await axios.post(`${import.meta.env.VITE_URI}/api/email/sendEmail`, emailDetails);
        if (response.data.success) {
            toast.success('Email sent successfully!');
            return response.data;
        } else {
            toast.error('Failed to send email: ' + response.data.error);
            return null;
        }
    } catch (error) {
        console.error('Failed to send email:', error);
        toast.error('Failed to send email: ' + (error.response?.data?.error || 'Server error'));
        return null;
    } finally {
        setLoading(false);
    }
};

export default sendEmail;
