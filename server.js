import express from 'express';
import cors from 'cors';
import 'dotenv/config';
const PORT = process.env.PORT

import { postsModel } from './models/posts.model.js';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/posts', async (req, res) => {
	try {
		const posts = await postsModel.findAll();
		return res.json(posts);
	} catch (error) {
		console.log(`⛔ 
			${error}`);
		return res.status(500).json({ error: 'Internal server error' });
	}
});

app.post('/posts', async (req, res) => {
	try {
		const { titulo, url, descripcion } = req.body;
		const newPost = { titulo, url, descripcion };
		const post = await postsModel.create(newPost);
		return res.status(201).json({ message: `"${post.titulo}" agregado`, post });
		// return res.json(post);
	} catch (error) {
		console.log(`⛔ ${error}`);
		return res.status(500).json({ error: 'Internal server error' });
	}
});

app.listen(
	PORT,
	console.log(`🟢 Server is running on http://localhost:${PORT}`)
);
