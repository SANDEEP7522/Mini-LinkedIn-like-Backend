import express from 'express';

import {
  createPost,
  deletePost,
  getAllPosts,
  getPostById
} from '../controllers/postController.js';
import { isAuthenticated } from '../middlewares/auth.js';
import upload from '../utils/cloudinares/multer.js';

const router = express.Router();

router.post('/', isAuthenticated, upload.single('image'), createPost);
router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.delete('/:id', isAuthenticated, deletePost);

export default router;
