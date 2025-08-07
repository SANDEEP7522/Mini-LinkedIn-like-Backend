import express from 'express';

import {
  addComment,
  getAllComments,
  toggleBookmark,
  toggleFollow,
  toggleLike
} from '../controllers/likeController.js';
import { isAuthenticated } from '../middlewares/auth.js';
const router = express.Router();

router.patch('/like/:postId', isAuthenticated, toggleLike);
router.post('/comment/:postId', isAuthenticated, addComment);
router.get("/comments/:postId", getAllComments);
router.patch('/bookmark/:postId', isAuthenticated, toggleBookmark);
router.patch('/follow/:userId', isAuthenticated, toggleFollow);

export default router;
