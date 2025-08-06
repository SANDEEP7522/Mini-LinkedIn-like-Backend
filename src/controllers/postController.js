import {
  createPostService,
  getAllPostsService,
  getPostByIdService,
  updatePostByIdService
} from '../services/postService.js';

export const createPost = async (req, res) => {
  try {
    const { content } = req.body;
    const imageUrl = req.file?.path; // Cloudinary returns this
    const author = req.user._id;

    const post = await createPostService({ content, imageUrl, author });
    res.status(201).json(post);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Post creation failed', error: err.message });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const posts = await getAllPostsService();
    res.status(200).json(posts);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Failed to fetch posts', error: err.message });
  }
};

export const getPostById = async (req, res) => {
  try {
    const post = await getPostByIdService(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.status(200).json(post);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Failed to fetch post', error: err.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { content } = req.body;
    const post = await updatePostByIdService(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    post.content = content;
    await post.save();
    res.status(200).json(post);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Failed to update post', error: err.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const post = await getPostByIdService(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    await post.remove();
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Failed to delete post', error: err.message });
  }
};
