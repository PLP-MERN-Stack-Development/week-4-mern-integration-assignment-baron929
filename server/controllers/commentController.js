const Comment = require('../models/Comment');
const Post = require('../models/Post');

// Add comment
exports.addComment = async (req, res) => {
  try {
    const { postId, author, text } = req.body;
    const comment = new Comment({ post: postId, author, text });
    await comment.save();

    // Optionally, add comment to post's comments array
    await Post.findByIdAndUpdate(postId, { $push: { comments: comment._id } });

    res.status(201).json(comment);
  } catch (err) {
    res.status(400).json({ error: 'Could not add comment' });
  }
};

// Delete comment
exports.deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (!comment) return res.status(404).json({ error: 'Comment not found' });
    res.json({ message: 'Comment deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};