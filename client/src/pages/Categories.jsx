import React, { useEffect, useState } from 'react';
import { categoryService } from '../services/api';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    categoryService.getAllCategories().then(setCategories);
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const newCategory = await categoryService.createCategory({ name });
      setCategories([...categories, newCategory]);
      setName('');
    } catch (err) {
      setError('Could not create category');
    }
  };

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map(cat => (
          <li key={cat._id}>{cat.name}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="New category"
        />
        <button type="submit">Add Category</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Categories;