import axios from "axios";
import toast from "react-hot-toast";

export const useLogin = async (data, setUser) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_URI}/api/auth/login`, data, {
            withCredentials: true
        });
        setUser(response.data.data)
        console.log(response.data.data);

        localStorage.setItem('token', response.data.data.token)
        return true
    } catch (error) {
        setUser(null)
        toast.error(error?.response?.data?.message || "please try again later")
        return false
    }
}