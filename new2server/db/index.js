import mongoose from "mongoose";

const MAX_RETRIES = 5;
const INITIAL_DELAY = 2000;
const TIMEOUT = 10000;

const connectWithRetry = async (retries = 0) => {
    try {

        await Promise.race([
            mongoose.connect(process.env.MONGODB_URI || '', {
            }),
            new Promise((_, reject) =>
                setTimeout(() => reject(new Error("Connection timed out")), TIMEOUT)
            ),
        ]);

        console.log('MongoDB connected successfully!');
    } catch (error) {
        if (retries >= MAX_RETRIES) {
            console.error('Max retries reached. Exiting...');
            process.exit(1);
        }

        const delay = INITIAL_DELAY * Math.pow(2, retries);
        setTimeout(() => connectWithRetry(retries + 1), delay);
    }
};

export const dbConnect = () => connectWithRetry();
