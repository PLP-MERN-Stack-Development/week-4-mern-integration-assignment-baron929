import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { postService } from '../services/api';

const EditPost = () => {
  const { id } = useParams();
  const [form, setForm] = useState({ title: '', content: '', category: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    postService.getPost(id).then(post => setForm(post));
  }, [id]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await postService.updatePost(id, form);
      navigate(`/posts/${id}`);
    } catch (err) {
      setError('Could not update post');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Post</h2>
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
      <textarea name="content" placeholder="Content" value={form.content} onChange={handleChange} />
      <input name="category" placeholder="Category" value={form.category} onChange={handleChange} />
      <button type="submit">Update</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default EditPost;