import React, { useState, useEffect } from 'react';
import './Presentation.css';
import img1 from '../assets/photos/12123PvMICDS-34.jpg';
import img2 from '../assets/photos/22424_DistrictChamps-69.jpg';
import img3 from '../assets/photos/82024_PvJ-15.jpg';
import img4 from '../assets/photos/22424_DistrictChamps-08.jpg'
import annotation from '../components/Annotations.json';

// Image array with annotations
const images = [
  { src: img1, alt: annotation.images.img1.name, annotation: annotation.images.img1.annotation, link: annotation.images.img1.link },
  { src: img2, alt: annotation.images.img2.name, annotation: annotation.images.img2.annotation, link: annotation.images.img2.link },
  { src: img3, alt: annotation.images.img3.name, annotation: annotation.images.img3.annotation, link: annotation.images.img3.link },
  { src: img4, alt: annotation.images.img4.name, annotation: annotation.images.img4.annotation },
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
      <div className='overlay' />
      {/* Image container with auto-scaling */}
      <div className="image-container">
        <img src={currentImage.src} alt={`Slide ${currentIndex + 1}`} className={`presentation-image ${fadeClass}`} />
      </div>

      {/* Annotations for each image */}
      <div className="annotation-container">
        <h2>{currentImage.alt}</h2>
        <p>{currentImage.annotation}</p>
        <a href={currentImage.link} title='Visit the album!' target='_blank' rel="noreferrer noopener">
          Click here to visit the album!
        </a>
      </div>
    </div>
  );
};

export default Presentation;
