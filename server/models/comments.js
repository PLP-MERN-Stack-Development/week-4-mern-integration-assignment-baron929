// filepath: server/models/Comment.js
const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  post:   { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  text:   { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Comment', CommentSchema);