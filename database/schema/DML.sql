SELECT * from posts;
INSERT INTO posts (titulo, img, descripcion, likes) VALUES ('Sample Title', 'http://example.com/image.jpg', 'Sample description', 0);
UPDATE posts SET likes = likes + 1 WHERE id = 1;
DELETE FROM posts WHERE id = 1;