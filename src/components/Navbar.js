import React, { useState } from 'react';
import './Navbar.css'; // You'll style this component here.
import logo from '../assets/logos/tjw_logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo"><img src={logo} alt='tjw_logo' height={40}/></div>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <a href="/">Home</a>
        <a href="/thesis">Thesis</a>
        <a href="/presentation">Presentation</a>
      </div>
    </nav>
  );
};

export default Navbar;
