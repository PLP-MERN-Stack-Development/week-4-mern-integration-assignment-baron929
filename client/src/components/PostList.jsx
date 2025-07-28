import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li key={post._id}>
        <Link to={`/posts/${post._id}`}>{post.title}</Link>
        <span> by {post.author?.username || 'Unknown'}</span>
      </li>
    ))}
  </ul>
);

export default PostList;