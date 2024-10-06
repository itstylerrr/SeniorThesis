import React, { useState, useEffect } from 'react';
import './Presentation.css';
import img1 from '../assets/photos/12123PvMICDS-34.jpg';
import img2 from '../assets/photos/22424_DistrictChamps-69.jpg';
import img3 from '../assets/photos/82024_PvJ-15.jpg';
import annotation from '../components/Annotations.json';

const images = [
    { src: img1, alt: annotation.images.img1.name, annotation: annotation.images.img1.annotation },
  { src: img2, alt: annotation.images.img2.name, annotation: annotation.images.img2.annotation },
  { src: img3, alt: annotation.images.img3.name, annotation: annotation.images.img3.annotation },
  // Add more images as needed
];

const Presentation = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeClass, setFadeClass] = useState('fade-in');
  
    // Automatically switch images every 7 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setFadeClass(''); // Remove fade class before switching
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          setFadeClass('fade-in'); // Add fade class after switching
        }, 100); // Delay to reset the fade
      }, 10000);
  
      return () => clearInterval(interval);
    }, []);
  
    const currentImage = images[currentIndex];
  
    return (
      <div className="presentation-container">
        <div className="image-container">
          <img src={currentImage.src} alt={`Slide ${currentIndex + 1}`} className={`presentation-image ${fadeClass}`} />
        </div>
        <div className="annotation-container">
          <h2>{currentImage.alt}</h2>
          <p>{currentImage.annotation}</p>
        </div>
      </div>
    );
  };
  
  export default Presentation;