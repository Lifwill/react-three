import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Chapter1 from './pages/Chapter1';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chapter1" element={<Chapter1 />} />
    </Routes>
  );
}

export default App;
