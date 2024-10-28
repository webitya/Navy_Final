import toast from "react-hot-toast";
import axios from "axios";

export const useGetCurrUser = async (setUser) => {
    try {
        const response = await axios.get('/api/auth/getCurrUser', {
            withCredentials: true
        });
        setUser(response.data.data)
        return true
    } catch (error) {
        return false
    }
} 