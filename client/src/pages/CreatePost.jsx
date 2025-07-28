import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postService } from '../services/api';

const CreatePost = () => {
  const [form, setForm] = useState({ title: '', content: '', category: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await postService.createPost(form);
      navigate('/');
    } catch (err) {
      setError('Could not create post');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Post</h2>
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
      <textarea name="content" placeholder="Content" value={form.content} onChange={handleChange} />
      <input name="category" placeholder="Category" value={form.category} onChange={handleChange} />
      <button type="submit">Create</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default CreatePost;