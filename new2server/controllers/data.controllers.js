import { Banner } from "../model/banner.js";

export const getBanner = async (req, res) => {
    try {

        const banners = await Banner.find();
        if (!banners) {
            return res.status(404)
                .json(
                    {
                        message: 'No banners found',
                        data: null
                    }
                )
        }
        return res.status(200).json({
            message: 'Banners fetched successfully',
            data: banners,
        });
    } catch (error) {
        console.error('Error fetching banners:', error);
        res.status(500).json({ error: 'Failed to fetch banners' });
    }
}

export const updateBanner = async (req, res) => {
    try {
        const { imageUri, id } = req.body;

        const banner = await Banner.findByIdAndUpdate(id, { imageUri }, { new: true });
        if (!banner) {
            return res.status(404)
                .json(
                    {
                        message: 'Banner not found',
                        data: null
                    }
                )
        }
        return res.status(200).json({
            message: 'Banner updated successfully',
            data: banner,
        });
    } catch (error) {
        console.error('Error updating banner:', error);
        res.status(500).json({ error: 'Failed to update banner' });
    }
}