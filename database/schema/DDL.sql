CREATE DATABASE likeme;

\c likeme;

DROP TABLE IF EXISTS posts;

CREATE TABLE posts (id SERIAL, titulo VARCHAR(25), img VARCHAR(1000), descripcion VARCHAR(255), likes INT);