import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { dbConnect } from './db/index.js';
import cookieParser from 'cookie-parser';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = ['http://localhost:5173', 'https://merchant-bay.vercel.app','https://www.indianmarksline.in'];

app.use(
    cors({
        origin: (origin, callback) => {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
    })
);

app.options('*', cors());

app.use(express.json());
app.use(cookieParser())
await dbConnect();

import formRouter from './router/form.router.js'
import authRouter from './router/auth.router.js'
import dataRouter from './router/data.route.js'
import emailRouter from './router/email.route.js'

app.use('/api', formRouter)
app.use('/api/email', emailRouter)
app.use('/api/auth', authRouter)
app.use('/api/data', dataRouter)

app.get('/', (req, res) => {
    res.send('The App API is running...');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
