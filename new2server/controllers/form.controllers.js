import { ApplicationForm } from '../model/form.js';
import { generatePDF } from '../utils/generatePdf.js';
import { sendEmailWithAttachment } from '../utils/sendEmailWithAttachment.js';


export const addFormData = async (req, res) => {
    try {
        const formData = new ApplicationForm(req.body);
        const savedData = await formData.save();

        const pdfStream = await generatePDF(formData);

        await sendEmailWithAttachment(pdfStream);

        res.status(201).json({ message: 'Form data saved and email sent!' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to save form data or send email' });
    }
};

export const getFormData = async (req, res) => {
    try {
        const formData = await ApplicationForm.find().sort({ createdAt: -1 });

        if (!formData || formData.length === 0) {
            return res.status(404).json({
                message: 'No data found',
                data: null
            });
        }

        return res.status(200).json({
            message: 'Form data fetched successfully',
            data: formData
        });

    } catch (error) {
        console.error('Error fetching form data:', error);
        res.status(500).json({ error: 'Failed to fetch form data' });
    }
};

export const getQueryData = async (req, res) => {
    let { type } = req.query;

    if (!type) {
        return res.status(400).json({ message: 'Type parameter is required.' });
    }

    // Define the grouping format based on the type
    let groupBy;
    if (type === 'yearly') {
        groupBy = "%Y"; // Group by year
    } else if (type === 'monthly') {
        groupBy = "%Y-%m"; // Group by month
    }

    try {
        // MongoDB aggregation pipeline
        const pipeline = [
            {
                $group: {
                    _id: {
                        $dateToString: {
                            format: groupBy,
                            date: "$createdAt" // Assuming createdAt is your timestamp field
                        }
                    },
                    count: { $sum: 1 } // Count the number of submissions
                }
            },
            {
                $sort: { _id: 1 } // Sort by year/month ascending
            }
        ];

        const stats = await ApplicationForm.aggregate(pipeline);

        if (!stats || stats.length === 0) {
            return res.status(404).json({
                message: 'No data found',
                data: null
            });
        }

        return res.status(200).json({
            message: 'Form data fetched successfully',
            data: stats
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateState = async (req, res) => {
    const { id, state } = req.body;

    if (!id || !state) {
        return res.status(400).json({ message: 'Id and state parameters are required.' });
    }

    try {
        if (state === 'rejected') {
            const updatedData = await ApplicationForm.findByIdAndDelete(id)
            if (!updatedData) {
                return res.status(404).json({ message: 'Data not found.' });
            }
        }
        else {
            const updatedData = await ApplicationForm.findByIdAndUpdate(id, { state }, { new: true });
            if (!updatedData) {
                return res.status(404).json({ message: 'Data not found.' });
            }
        }

        return res.status(200).json({ message: 'Data updated successfully.' });
    } catch (error) {
        console.error('Error updating data:', error);
        return res.status(500).json({ message: 'Failed to update data.' });
    }
}