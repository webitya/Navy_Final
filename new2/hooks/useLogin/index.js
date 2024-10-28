import axios from "axios";
import toast from "react-hot-toast";

export const useLogin = async (data, setUser) => {
    try {
        console.log(data)
        const response = await axios.post('/api/auth/login', data, {
            withCredentials: true
        });
        setUser(response.data.data)
        return true
    } catch (error) {
        console.error('Error logging in:', error);
        setUser(null)
        toast.error(error?.response?.data?.message)
        return false
    }
}