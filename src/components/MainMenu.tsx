import React from 'react';
import { Link } from 'react-router-dom';

const MainMenu = () => (
  <div>
    <Link to="/">Home</Link> <Link to="/chapter1">Chapter 1</Link>
  </div>
);

export default MainMenu;
