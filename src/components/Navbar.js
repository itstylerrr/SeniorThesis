import React, { useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/tjw_logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      {/* Hamburger Icon */}
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Fullscreen Menu */}
      <div className={`menu-overlay ${isOpen ? "open" : ""}`}>
        {/* Logo */}
        <div className={`menu-logo ${isOpen ? "animate" : ""}`}>
          <img src={logo} alt="Logo" />
        </div>

        {/* Menu Items */}
        <ul className="menu-items">
          <li onClick={toggleMenu}>
            <a href="/">Home</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="/thesis">Thesis</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="/about">About</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
