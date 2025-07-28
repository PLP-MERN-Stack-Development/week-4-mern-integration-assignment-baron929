const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Add comment
router.post('/', commentController.addComment);
// Delete comment
router.delete('/:id', commentController.deleteComment);

module.exports = router;