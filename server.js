import express from 'express';
import cors from 'cors';
import 'dotenv/config';
const PORT = process.env.PORT || 3000;

import postsRouter from './routes/post.routes.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/posts', postsRouter);

app.listen(
	PORT,
	console.log(`🟢 Server is running on http://localhost:${PORT}`)
);
