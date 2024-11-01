import axios from "axios";
import toast from "react-hot-toast";


export const useLogout = async (setUser) => {
    try {
        const token = localStorage.getItem('token'); // Retrieve token from localStorage

        const response = await axios.post(`${import.meta.env.VITE_URI}/api/auth/logout`, {}, {
            headers: {
                'Authorization': `Bearer ${token}`, // Include token in Authorization header
                'Content-Type': 'application/json'
            },
            withCredentials: true
        });

        localStorage.clear();
        setUser(null);
        toast.success('Logged out successfully');
        return true;
    } catch (error) {
        console.error('Error logging out:', error);
        toast.error('Error logging out');
        return false;
    }
};