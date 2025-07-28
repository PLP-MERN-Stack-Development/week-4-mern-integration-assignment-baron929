/components/CommentList.jsx
import React from 'react';

const CommentList = ({ comments }) => (
  <ul>
    {comments.map(comment => (
      <li key={comment._id}>
        <strong>{comment.author?.username || 'Anonymous'}:</strong> {comment.text}
      </li>
    ))}
  </ul>
);

export default CommentList;