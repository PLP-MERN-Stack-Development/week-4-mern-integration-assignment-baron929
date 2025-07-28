import React from 'react';

const Sidebar = ({ children }) => (
  <aside style={{ width: '200px', padding: '1rem', background: '#f4f4f4' }}>
    {children}
  </aside>
);

export default Sidebar;