import {
  addCommentService,
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

export const toggleFollow = async (req, res) => {
  try {
    const { userId } = req.params; // ID of user to follow/unfollow
    const currentUserId = req.user._id;

    const result = await toggleFollowService(userId, currentUserId);
    res.status(200).json({ success: true, ...result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
