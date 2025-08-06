import Post from '../models/post.js';

export const createPostService = async ({ content, imageUrl, author }) => {
  return await Post.create({ content, imageUrl, author });
};

export const getAllPostsService = async () => {
  return await Post.find()
    .populate('author', 'name email')
    .sort({ createdAt: -1 });
};

export const getPostByIdService = async (postId) => {
  return await Post.findById(postId).populate('author', 'name email');
};

export const updatePostByIdService = async (postId, data) => {
  return await Post.findByIdAndUpdate(postId, data, { new: true });
};

export const deletePostByIdService = async (postId) => {
  return await Post.findByIdAndDelete(postId);
};
