import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Thesis from './pages/Thesis';
import Presentation from './pages/Presentation';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thesis" element={<Thesis />} />
        <Route path="/presentation" element={<Presentation />} />
      </Routes>
    </div>
  );
};

export default App;
