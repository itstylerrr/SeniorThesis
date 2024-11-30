import React, { useState } from "react";
import thesisSections from "../assets/thesisData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "../styles/Thesis.css";

const Thesis = () => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (annotation) => {
    setModalContent(annotation);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="thesis-container">
      {thesisSections.map((section, index) => (
        <div className="thesis-section" key={index}>
          {/* Main Image with Floating Button */}
          <div className="main-image-container">
            <img
              src={section.mainImage}
              alt={section.title}
              className="main-image"
            />
            <button
              className="floating-button"
              onClick={() => openModal(section.annotation)}
            >
              📝
            </button>
          </div>

          {/* Section Title */}
          <h2 className="section-title">{section.title}</h2>

          {/* Gallery Slider */}
          <Swiper
            navigation={true}
            spaceBetween={10}
            slidesPerView={3}
            modules={[Navigation]}
            className="gallery-slider"
          >
            {section.gallery.map((image, imgIndex) => (
              <SwiperSlide key={imgIndex}>
                <img
                  src={image}
                  alt={`${section.title} ${imgIndex + 1}`}
                  className="gallery-image"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}

      {/* Modal */}
      {modalContent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <p>{modalContent}</p>
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Thesis;
