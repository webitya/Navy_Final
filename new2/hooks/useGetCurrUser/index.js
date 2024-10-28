import toast from "react-hot-toast";
import axios from "axios";

export const useGetCurrUser = async (setUser) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_URI}/api/auth/getCurrUser`, {
            withCredentials: true
        });
        setUser(response.data.data)
        return true
    } catch (error) {
        return false
    }
} 