import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { dbConnect } from './db/index.js';
import cookieParser from 'cookie-parser';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: "*",
        credentials: true,
    })
)
app.use(express.json());
app.use(cookieParser())
await dbConnect();

import formRouter from './router/form.router.js'
import authRouter from './router/auth.router.js'
import dataRouter from './router/data.route.js'

app.use('/api', formRouter)
app.use('/api/auth', authRouter)
app.use('/api/data', dataRouter)

app.get('/', (req, res) => {
    res.send('The App API is running...');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
