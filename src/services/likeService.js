import Post from '../models/post.js';
import User from '../models/userModel.js';

export const toggleLikeService = async (postId, userId) => {
  const post = await Post.findById(postId);
  // console.log('post', post);

  if (!post) throw new Error('Post not found');

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
  if (!post) throw new Error('Post not found');

  const comment = {
    user: userId,
    text
  };

  post.comments.push(comment);
  await post.save();

  return post.comments[post.comments.length - 1]; // latest comment
};

export const getAllCommentsService = async (postId) => {
  const post = await Post.findById(postId)
    .populate('comments.user', 'name email') // populate user info
    .select('comments');

  if (!post) throw new Error('Post not found');

  return post.comments;
};

export const toggleBookmarkService = async (postId, userId) => {
  const user = await User.findById(userId);
  if (!user) throw new Error('User not found');

  const isBookmarked = user.bookmarks.includes(postId);

  if (isBookmarked) {
    user.bookmarks.pull(postId);
  } else {
    user.bookmarks.push(postId);
  }

  await user.save();
  return { bookmarked: !isBookmarked };
};

export const toggleFollowService = async (targetUserId, currentUserId) => {
  if (targetUserId === currentUserId) throw new Error('Cannot follow yourself');

  const targetUser = await User.findById(targetUserId);
  const currentUser = await User.findById(currentUserId);

  if (!targetUser || !currentUser) throw new Error('User not found');

  const alreadyFollowing = currentUser.followings.includes(targetUserId);

  if (alreadyFollowing) {
    currentUser.followings.pull(targetUserId);
    targetUser.followers.pull(currentUserId);
  } else {
    currentUser.followings.push(targetUserId);
    targetUser.followers.push(currentUserId);
  }

  await currentUser.save();
  await targetUser.save();

  return { followings: !alreadyFollowing };
};

export const getFollowersService = async (userId) => {
  const user = await User.findById(userId).populate("followers", "name email"); // customize fields
  if (!user) throw new Error("User not found");
  return user.followers;
};

export const getFollowingService = async (userId) => {
  const user = await User.findById(userId).populate("following", "name email");
  if (!user) throw new Error("User not found");
  return user.followings;
};