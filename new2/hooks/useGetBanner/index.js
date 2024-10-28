import axios from "axios"

export const useGetBanner = async (setBanner) => {
    try {
        const response = await axios.get('/api/data/getBanner')
        setBanner(response.data.data)
        return response.data
    } catch (error) {
        return null
    }
}