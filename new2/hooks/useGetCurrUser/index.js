import toast from "react-hot-toast";
import axios from "axios";

export const useGetCurrUser = async (setUser) => {
    try {
        const token = localStorage.getItem('token');

        const response = await axios.get(`${import.meta.env.VITE_URI}/api/auth/getCurrUser`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            withCredentials: true
        });

        setUser(response.data.data);
        return true;
    } catch (error) {
        return false;
    }
};
