import { postsModel } from '../models/posts.model.js';

const getAll = async (req, res) => {
	try {
		const posts = await postsModel.findAll();
		return res.json(posts);
	} catch (error) {
		console.log(`⛔ 
			${error}`);
		return res.status(500).json({ error: 'Internal server error' });
	}
};

const addPost = async (req, res) => {
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
};

const removePost = async (req, res) => {
	const id = req.params.id;
	try {
		const post = await postsModel.remove(id);
		if (!post) {
			console.log(`⛔ No se encontró el post con id ${id});`);
			return res.status(404).json({ error: 'Post no encontrado' });
		}
		return res.json({ message: 'Post eliminado' });
	} catch (error) {
		console.log(`⛔ ${error}`);
		return res.status(500).json({ error: 'Internal server error' });
	}
};

const likePost = async (req, res) => {
    const id = req.params.id;
    try {
        const post = await postsModel.like(id);
        if (!post) {
			return res.status(404).json({ error: 'Post no encontrado' });
		}
        return res.json({ message: 'Se ha agregado 1 like al post' });
    } catch (error) {
        console.log(`⛔ ${error}`);
		return res.status(500).json({ error: 'Internal server error' });
    }
}

export const postsController = { removePost, addPost, getAll, likePost };
