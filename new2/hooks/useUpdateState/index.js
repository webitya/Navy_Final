import axios from "axios";
import toast from "react-hot-toast";

export const useUpdateState = async (id, state, setLoading) => {
    setLoading(true);
    const token = localStorage.getItem('token'); // Retrieve token from localStorage

    try {
        const response = await axios.post(
            `${import.meta.env.VITE_URI}/api/updateState`,
            { id, state },
            {
                headers: {
                    'Authorization': `Bearer ${token}`, // Include token in Authorization header
                    'Content-Type': 'application/json'  // Optional: set content type
                },
                withCredentials: true
            }
        );

        return true;
    } catch (error) {
        toast.error(error?.response?.data?.message || "Server error, try again.");
        return null;
    } finally {
        setLoading(false);
    }
};
