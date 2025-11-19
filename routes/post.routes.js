import { postsController } from '../src/controllers/posts.controller.js';
import { Router } from 'express';

const router = Router();

// GET /posts/:id
router.get("/", postsController.getAll);

// POST /posts
router.post("/", postsController.addPost);

// PUT /posts/:id
// router.put("/:id", updateElement);

// DELETE /elements/:id
router.delete("/:id", postsController.removePost);

export default router;