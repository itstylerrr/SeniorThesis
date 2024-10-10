import React, { useState } from 'react';
import './Thesis.css';
import img1 from '../assets/photos/12123PvMICDS-34.jpg';
import img2 from '../assets/photos/22424_DistrictChamps-69.jpg';
import img3 from '../assets/photos/82024_PvJ-15.jpg';
import img4 from '../assets/photos/22424_DistrictChamps-08.jpg';
import img5 from '../assets/photos/2224PvS-21.jpg';
import annotation from '../components/Annotations.json';

const Thesis = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');
  const [annotationText, setAnnotationText] = useState('');
  const [isModalOpening, setIsModalOpening] = useState(false); // New state for opening animation

  const images = [
    { src: img1, alt: annotation.images.img1.name, annotation: annotation.images.img1.annotation },
    { src: img2, alt: annotation.images.img2.name, annotation: annotation.images.img2.annotation },
    { src: img3, alt: annotation.images.img3.name, annotation: annotation.images.img3.annotation },
    { src: img4, alt: annotation.images.img4.name, annotation: annotation.images.img4.annotation },
    { src: img5, alt: annotation.images.img5.name, annotation: annotation.images.img5.annotation },
  ];

  const openModal = (image) => {
    setModalImageSrc(image.src);
    setAnnotationText(image.annotation);
    setModalVisible(true);
    setIsModalOpening(true); // Trigger the opening animation
  };

  const closeModal = () => {
    setIsModalOpening(false); // First, start the closing animation
    setTimeout(() => setModalVisible(false), 300); // Delay hiding to allow the close animation
  };

  return (
    <div className="gallery-container">
      <div className="overlay"></div>
      {/* Grid of images */}
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-item" onClick={() => openModal(image)}>
            <img src={image.src} alt={`${image.alt}`} className="gallery-image" />
          </div>
        ))}
      </div>

      {/* Modal for enlarging images */}
      {modalVisible && (
        <div
          id="image-modal"
          className={`modal ${isModalOpening ? 'modal-open' : 'modal-close'}`} // Apply the open/close class
        >
          <span className="close" onClick={closeModal}>&times;</span>
          <img className="modal-content" id="modal-image" src={modalImageSrc} alt="Enlarged" />
          <div id="image-annotation" className="annotation-text">{annotationText}</div>
        </div>
      )}
    </div>
  );
};

export default Thesis;
