import Post from "../models/post.js";

export const toggleLikeService = async (postId, userId) => {
  const post = await Post.findById(postId);
  if (!post) throw new Error("Post not found");

  const alreadyLiked = post.likes.includes(userId);

  if (alreadyLiked) {
    post.likes.pull(userId); // for unlike
  } else {
    post.likes.push(userId); // like post
  }

  await post.save();
  return { liked: !alreadyLiked };
};


export const addCommentService = async (postId, userId, text) => {
  const post = await Post.findById(postId);
  if (!post) throw new Error("Post not found");

  const comment = {
    user: userId,
    text,
  };

  post.comments.push(comment);
  await post.save();

  return post.comments[post.comments.length - 1]; // latest comment
};
