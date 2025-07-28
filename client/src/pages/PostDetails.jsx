import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { postService } from '../services/api';

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    postService.getPost(id).then(setPost);
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h2>{post.title}</h2>
      <img src={post.featuredImage} alt={post.title} width={300} />
      <p>{post.content}</p>
      <p>Author: {post.author?.username}</p>
      {/* Comments and comment form can go here */}
    </div>
  );
};

export default PostDetails;