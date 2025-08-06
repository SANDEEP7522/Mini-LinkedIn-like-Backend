import express from 'express';

import {
  createPost,
  deletePost,
  getAllPosts,
  getPostById,
  updatePost
} from '../controllers/postController.js';
import { isAuthenticated } from '../middlewares/auth.js';
import upload from '../utils/cloudinares/multer.js';

const router = express.Router();

router.post('/create', isAuthenticated, upload.single('image'), createPost);
router.get('/all', getAllPosts);
router.get('/:id', getPostById);
router.put('/:id', isAuthenticated, upload.single('image'), updatePost);
router.delete('/:id', isAuthenticated, deletePost);

export default router;
