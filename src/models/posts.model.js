import { pool } from '../../database/connection.js';

const findAll = async () => {
	const { rows } = await pool.query('SELECT * FROM posts');
	return rows;
};

const create = async (post) => {
	const consulta =
		'INSERT INTO posts (id, titulo, img, descripcion, likes) VALUES (DEFAULT, $1, $2, $3, 0) RETURNING *';
	const valores = [post.titulo, post.url, post.descripcion];
	const result = await pool.query(consulta, valores);
	return result.rows[0];
};

const remove = async (id) => {
	const query = 'DELETE FROM posts WHERE id = $1 RETURNING *';
	const { rows } = await pool.query(query, [id]);
	return rows[0];
};

/* const update = async (id) => {
	const query = 'UPDATE posts SET done = NOT done WHERE id = $1 RETURNING *';
	const { rows } = await pool.query(query, [id]);
	return rows[0];
}; */

export const postsModel = {
	findAll,
	create,
	remove,
	// update,
};
