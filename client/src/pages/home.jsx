import React, { useEffect, useState } from 'react';
import { postService } from '../services/api';
import { Link } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService.getAllPosts().then(setPosts);
  }, []);

  return (
    <div>
      <h2>All Posts</h2>
      {posts.map(post => (
        <div key={post._id}>
          <h3>
            <Link to={`/posts/${post._id}`}>{post.title}</Link>
          </h3>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;