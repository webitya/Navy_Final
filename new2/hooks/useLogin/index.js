import axios from "axios";
import toast from "react-hot-toast";

export const useLogin = async (data, setUser) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_URI}/api/auth/login`, data, {
            withCredentials: true
        });
        setUser(response.data.data)
        return true
    } catch (error) {
        setUser(null)
        toast.error(error?.response?.data?.message)
        return false
    }
}