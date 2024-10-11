import React, { useState, useEffect } from 'react';
import './Presentation.css';
import img1 from '../assets/photos/12123PvMICDS-34.jpg';
import img2 from '../assets/photos/22424_DistrictChamps-69.jpg';
import img3 from '../assets/photos/82024_PvJ-15.jpg';
import img4 from '../assets/photos/22424_DistrictChamps-08.jpg'
import img5 from '../assets/photos/2224PvS-21.jpg';
import img6 from '../assets/photos/12023_MonkNight_06.jpg';
import img7 from '../assets/photos/11124PvN-06.jpg';
import img8 from '../assets/photos/11124PvN-18.jpg';
import img9 from '../assets/photos/41024PvLN-23.jpg';
import annotation from '../components/Annotations.json';

// Image array with annotations
const images = [
  { src: img1, alt: annotation.images.img1.name, annotation: annotation.images.img1.annotation, link: annotation.images.img1.link },
  { src: img2, alt: annotation.images.img2.name, annotation: annotation.images.img2.annotation, link: annotation.images.img2.link },
  { src: img3, alt: annotation.images.img3.name, annotation: annotation.images.img3.annotation, link: annotation.images.img3.link },
  { src: img4, alt: annotation.images.img4.name, annotation: annotation.images.img4.annotation, link: annotation.images.img4.link },
  { src: img5, alt: annotation.images.img5.name, annotation: annotation.images.img5.annotation, link: annotation.images.img5.link },
  { src: img6, alt: annotation.images.img6.name, annotation: annotation.images.img6.annotation, link: annotation.images.img6.link },
  { src: img7, alt: annotation.images.img7.name, annotation: annotation.images.img7.annotation, link: annotation.images.img7.link },
  { src: img8, alt: annotation.images.img8.name, annotation: annotation.images.img8.annotation, link: annotation.images.img8.link },
  { src: img9, alt: annotation.images.img9.name, annotation: annotation.images.img9.annotation, link: annotation.images.img9.link },
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
