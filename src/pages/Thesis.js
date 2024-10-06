import React, { useState } from 'react';
import './Thesis.css';
import img1 from '../assets/photos/12123PvMICDS-34.jpg';
import img2 from '../assets/photos/22424_DistrictChamps-69.jpg';
import img3 from '../assets/photos/82024_PvJ-15.jpg';
import annotation from '../components/Annotations.json';



const Thesis = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalImageSrc, setModalImageSrc] = useState('');
    const [annotationText, setAnnotationText] = useState('');
  
    const images = [
        { src: img1, alt: annotation.images.img1.name, annotation: annotation.images.img1.annotation },
      { src: img2, alt: annotation.images.img2.name, annotation: annotation.images.img2.annotation },
      { src: img3, alt: annotation.images.img3.name, annotation: annotation.images.img3.annotation },
      // Add more images here...
    ];
  
    const openModal = (image) => {
      setModalVisible(true);
      setModalImageSrc(image.src);
      setAnnotationText(image.annotation);
    };
  
    const closeModal = () => {
      setModalVisible(false);
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
          <div id="image-modal" className="modal">
            <span className="close" onClick={closeModal}>&times;</span>
            <img className="modal-content" id="modal-image" src={modalImageSrc} alt="Enlarged" />
            <div id="image-annotation" className="annotation-text">{annotationText}</div>
          </div>
        )}
      </div>
    );
};

export default Thesis;
