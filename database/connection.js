import 'dotenv/config';
import pkg from 'pg';
const { Pool } = pkg;
// eslint-disable-next-line no-undef
const { DB_HOST, DB_USER, DB_PASSWORD } = process.env;

export const pool = new Pool({
	host: DB_HOST,
	user: DB_USER,
	password: DB_PASSWORD,
	database: 'likeme',
	port: 5432,
	allowExitOnIdle: true,
});

try {
	await pool.query('SELECT NOW()');
	console.log('🐘 Database connected');
} catch (error) {
	console.log(error);
}
