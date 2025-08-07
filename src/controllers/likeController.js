import User from '../models/userModel.js';
import {
  addCommentService,
  getAllCommentsService,
  getFollowersService,
  getFollowingService,
  toggleBookmarkService,
  toggleFollowService,
  toggleLikeService
} from '../services/likeService.js';

export const toggleLike = async (req, res) => {
  try {
    const { postId } = req.params;
    const userId = req.user._id;
    // console.log('userId', userId);
    // console.log('postId', postId);

    const result = await toggleLikeService(postId, userId);
    res.status(200).json({ success: true, ...result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const addComment = async (req, res) => {
  try {
    const { postId } = req.params;
    const userId = req.user._id;
    const { text } = req.body;

    const comment = await addCommentService(postId, userId, text);
    res.status(201).json({ success: true, comment });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getAllComments = async (req, res) => {
  try {
    const { postId } = req.params;

    const comments = await getAllCommentsService(postId);

    res.status(200).json({ success: true, comments });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

export const toggleBookmark = async (req, res) => {
  try {
    const { postId } = req.params;
    const userId = req.user._id;

    const result = await toggleBookmarkService(postId, userId);
    res.status(200).json({ success: true, ...result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};



// Toggle follow/unfollow
export const toggleFollow = async (req, res) => {
  try {
    const targetUserId = req.params.userId;
    const currentUserId = req.user._id;

    const result = await toggleFollowService(targetUserId, currentUserId);
    res.status(200).json({ success: true, ...result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get all followers of a user
export const getFollowers = async (req, res) => {
  try {
    const userId = req.params.userId;

    const followers = await getFollowersService(userId);
    res.status(200).json({ success: true, followers });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get all followings of a user
export const getFollowings = async (req, res) => {
  try {
    const userId = req.params.userId;

    const followings = await getFollowingService(userId);
    res.status(200).json({ success: true, followings });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
