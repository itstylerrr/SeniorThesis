import React, { useState, useEffect } from "react";
import thesisSections from "../assets/thesisData";
import "../styles/Presentation.css";

const Presentation = () => {
  const [sectionIndex, setSectionIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Fade-out effect

      setTimeout(() => {
        setImageIndex((prevImageIndex) => {
          const nextIndex = prevImageIndex + 1;
          if (nextIndex >= thesisSections[sectionIndex].gallery.length) {
            // Move to the next section when gallery ends
            setSectionIndex(
              (prevSectionIndex) =>
                (prevSectionIndex + 1) % thesisSections.length
            );
            return 0; // Reset to first image in new section
          }
          return nextIndex;
        });

        setFade(true); // Fade-in effect
      }, 500); // Duration of fade-out transition
    }, 30000); // Change every 30 seconds

    return () => clearInterval(interval);
  }, [sectionIndex, imageIndex]); // Dependencies ensure updates

  return (
    <div className="presentation-container">
      {/* Left Side: Image */}
      <div className="image-container">
        <img
          src={thesisSections[sectionIndex].gallery[imageIndex]}
          alt={thesisSections[sectionIndex].title}
          className={`fade-transition ${fade ? "fade-in" : "fade-out"}`}
        />
      </div>

      {/* Right Side: Annotation */}
      <div
        className={`text-container fade-transition ${
          fade ? "fade-in" : "fade-out"
        }`}
      >
        <h2 className="section-title">{thesisSections[sectionIndex].title}</h2>
        <p className="annotation-text">
          {thesisSections[sectionIndex].galleryAnnotations[imageIndex]}
        </p>
      </div>
    </div>
  );
};

export default Presentation;
