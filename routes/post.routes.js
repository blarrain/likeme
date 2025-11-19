import { postsController } from '../src/controllers/posts.controller.js';
import { Router } from 'express';

const router = Router();

// GET /posts/:id
router.get("/", postsController.getAll);

// POST /posts
router.post("/", postsController.addPost);

// PUT /posts/like/:id
router.put("/like/:id", postsController.likePost);

// DELETE /posts/:id
router.delete("/:id", postsController.removePost);

export default router;