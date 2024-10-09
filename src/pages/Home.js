import React, { useEffect } from 'react';
import './Home.css';

const images = [
  '../assets/photos/111323PvC-66.jpg',
  '../assets/photos/12123PvMICDS-34.jpg',
  '../assets/photos/22424_DistrictChamps-69.jpg',
  '../assets/photos/82024_PvJ-15.jpg',
  '../assets/photos/91424_PvLUSO-02.jpg',
  // Add all other image paths here
];

const Home = () => {

  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="home">
      <div className="overlay"></div>
      <div className="content">
        <h1>Tyler Witkowski - Senior Thesis</h1>
        <p><em>Capturing emotion in photography</em></p>
      </div>
    </div>
  );
};

export default Home;
