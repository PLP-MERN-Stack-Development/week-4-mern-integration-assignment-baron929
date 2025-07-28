import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link> |{' '}
    <Link to="/create">Create Post</Link> |{' '}
    <Link to="/categories">Categories</Link> |{' '}
    <Link to="/login">Login</Link>
  </nav>
);

export default Navbar;