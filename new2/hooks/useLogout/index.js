import axios from "axios";
import toast from "react-hot-toast";

export const useLogout = async (setUser) => {
    try {
        const response = await axios.post('/api/auth/logout', {}, {
            withCredentials: true
        });
        setUser(null)
        toast.success('Logged out successfully')
        return true
    } catch (error) {
        console.error('Error logging out:', error);
        toast.error('Error logging out:');
        return false
    }
}