import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Thesis from './pages/Thesis';
import Presentation from './pages/Presentation';
import Spinner from './components/Spinner';  // Import the Spinner component

const App = () => {
  const [loading, setLoading] = useState(true);  // Start with loading
  const location = useLocation();

  // Show spinner for 1 second after page change
  useEffect(() => {
    setLoading(true);

    // Simulate loading duration (e.g., 1 second)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);  // Adjust the timeout as needed

    // Clean up the timeout
    return () => clearTimeout(timeout);
  }, [location]);  // Run this whenever location (page) changes

  return (
    <>
      {/* Show the loading spinner when transitioning */}
      {loading && <Spinner />}

      {/* Main content */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thesis" element={<Thesis />} />
        <Route path="/presentation" element={<Presentation />} />
      </Routes>
    </>
  );
};

export default App;
