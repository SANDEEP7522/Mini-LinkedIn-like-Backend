import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String, // Cloudinary URL
      required: true
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

export default Post;