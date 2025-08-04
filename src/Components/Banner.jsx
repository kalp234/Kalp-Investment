import React, { useState, useEffect } from "react";
import "../App.css";
import C1 from "../images/lic.webp";
import C2 from "../images/LIC-1.png";
import C3 from "../images/LIC-5.png";
import C4 from "../images/C4.webp";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [C1, C2, C3, C4];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, slides.length]);

  return (
    <div className="relative w-full md:pt-[5.4rem] pt-[5rem] " name="Home">
      <div className="relative h-[26rem] overflow-hidden rounded-sm md:h-[85vh]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`fade-slide ${currentIndex === index ? "active" : ""}`}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full  h-full "
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 md:left-4 z-30 transform -translate-y-1/2 md:bg-blue-600 bg-blue-500 opacity-90 md:opacity-100 md:p-[1.25rem] p-[0.8rem] rounded-full text-white md:font-bold"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-1 md:right-4 z-30 transform -translate-y-1/2 md:bg-blue-600 bg-blue-500 opacity-90 md:opacity-100 md:p-[1.25rem] p-[0.8rem] rounded-full text-white md:font-bold"
      >
        ❯
      </button>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3 ">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-700" : "bg-white"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
