// components/Spinner.js
import React from 'react';
import './Spinner.css'; // CSS file for spinner styles
import logo from '../assets/logos/tjw_logo.png';

const Spinner = () => {
  return (
    <div className="spinner-overlay">
      <div className="spinner-container">
        {/* Replace this with your logo */}
        <img src={logo} alt="Logo" className="spinner-logo" />
      </div>
    </div>
  );
};

export default Spinner;