
import toast from "react-hot-toast";
import axios from "axios";

export const useSubmitFormData = async (data, setLoading) => {
    try {
        setLoading(true)
        const response = await axios.post('/api/setformdata', data, {
            withCredentials: true
        });
        toast.success('form submitted successfully')
        return true
    } catch (error) {
        console.error('Error submitting form:', error);
        toast.error('Error submitting form:');
        return false
    } finally {
        setLoading(false)
    }
}