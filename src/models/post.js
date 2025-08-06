import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, 'Post content is required']
  },
  imageUrl: {
    type: String, // Cloudinary URL
    required: false
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: { type: Date, default: Date.now },

  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  bookmarkes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],

  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      text: {
        type: String,
        required: [true, 'Comment text is required']
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

const Post = mongoose.model('Post', postSchema);

export default Post;
