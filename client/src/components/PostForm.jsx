import React, { useState } from 'react';

const PostForm = ({ initialData = {}, onSubmit }) => {
  const [title, setTitle] = useState(initialData.title || '');
  const [content, setContent] = useState(initialData.content || '');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ title, content });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Content"
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default PostForm;