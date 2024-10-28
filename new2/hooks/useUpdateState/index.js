import axios from "axios"
import toast from "react-hot-toast"


export const useUpdateState = async (id, state, setLoading) => {
    setLoading(true)
    try {
        const response = await axios.post('/api/updateState', {
            id,
            state
        }, { useCredentials: true });

        return true;
    } catch (error) {
        toast.error(error?.response?.data?.message || "Server error try again ")
        return null
    } finally {
        setLoading(false)
    }
}