import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();
  const [happiness, setHappiness] = useState(50); // Initial happiness level

  const handleMouseMove = (e) => {
    const button = document.querySelector(".back-button");
    if (!button) return;

    const buttonRect = button.getBoundingClientRect();
    const buttonX = buttonRect.left + buttonRect.width / 2;
    const buttonY = buttonRect.top + buttonRect.height / 2;

    // Calculate the distance between the cursor and the button
    const distance = Math.sqrt(
      Math.pow(e.clientX - buttonX, 2) + Math.pow(e.clientY - buttonY, 2)
    );

    // Normalize happiness based on distance (closer = happier, farther = sadder)
    const maxDistance = Math.sqrt(
      window.innerWidth ** 2 + window.innerHeight ** 2
    );
    const newHappiness = Math.max(
      0,
      Math.min(100, 100 - (distance / maxDistance) * 100)
    );

    setHappiness(newHappiness);
  };

  return (
    <div className="not-found-container" onMouseMove={handleMouseMove}>
      {/* Animated Dynamic Face */}
      <div className="face">
        <div className="eye left-eye"></div>
        <div className="eye right-eye"></div>
        <div
          className="mouth"
          style={{
            borderRadius: `${100 - happiness}% ${100 - happiness}% 50% 50%`,
            transform: `translateY(${(happiness - 50) / 10}px)`,
          }}
        ></div>
      </div>

      {/* 404 Text */}
      <h1 className="error-title">404</h1>
      <p className="error-message">
        Oops! The page you're looking for doesn't exist.
      </p>

      {/* Animated Button */}
      <button className="back-button" onClick={() => navigate("/")}>
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;
