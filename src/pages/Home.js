import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import "../styles/Home.css";

const categories = [
  { title: "DETERMINATION", image: "/images/determination.jpg" },
  { title: "EXCITEMENT", image: "/images/excitement.jpg" },
  { title: "TEAMWORK", image: "/images/teamwork.jpg" },
  { title: "VICTORY & DEFEAT", image: "/images/victory-defeat.jpg" },
  { title: "FAVORITES", image: "/images/favorites.jpg" },
];

const Home = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSwiperChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="home-slider">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => handleSwiperChange(swiper)}
        onInit={(swiper) => handleSwiperChange(swiper)} // To set initial state
        className="home-swiper"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index} className="home-slide">
            <div
              className="home-slide-image"
              style={{ backgroundImage: `url(${category.image})` }}
            >
              <h2 className="home-slide-title">{category.title}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons */}
      <div
        className={`custom-prev ${isBeginning ? "disabled" : ""}`}
      ></div>
      <div
        className={`custom-next ${isEnd ? "disabled" : ""}`}
      ></div>
    </div>
  );
};

export default Home;
