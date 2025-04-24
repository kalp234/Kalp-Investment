import React, { useState } from 'react';
import "../App.css";
import C1 from '../images/C1.webp';
import C2 from '../images/C2.webp';
import C3 from '../images/C3.webp';
import C4 from '../images/C4.webp';

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [C1, C2, C3, C4];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full md:pt-[5.4rem] pt-[5rem]" name="Home">
      <div className="relative h-[26rem] overflow-hidden rounded-sm md:h-[85vh]">
      
        {currentIndex === 0 && (
          <div className="relative w-full h-full">
            <img src={C1} className="block w-full h-full object-cover" alt="Slide 1" />
            <div className="absolute inset-0 bg-white/50"></div>
            <div className="absolute inset-0 flex items-center justify-center text-center p-6 left-8">
              <h1 className="text-2xl md:text-5xl font-bold text-blue-950 leading-tight md:leading-snug text-left">
                Protect Your Family’s <br />
                Future With <br />
                Affordable Term Life <br />
                Insurance.
              </h1>
            </div>
          </div>
        )}

      
        {currentIndex === 1 && (
          <div className="relative w-full h-full">
            <img src={C2} className="block w-full h-full object-cover" alt="Slide 2" />
            <div className="absolute inset-0 bg-white/50"></div>
            <div className="absolute inset-0 flex items-center justify-center text-center p-6 left-8">
              <h1 className="text-2xl md:text-5xl font-bold text-blue-950 leading-tight md:leading-snug text-left">
                Secure Your Loved <br /> Ones With <br /> Reliable Insurance Plans.
              </h1>
            </div>
          </div>
        )}

      
        {currentIndex === 2 && (
          <div className="relative w-full h-full">
            <img src={C3} className="block w-full h-full object-cover" alt="Slide 3" />
            <div className="absolute inset-0 bg-white/50"></div>
            <div className="absolute inset-0 flex items-center justify-center text-center p-6 left-8">
              <h1 className="text-2xl md:text-5xl font-bold text-blue-950 leading-tight md:leading-snug text-left gap-4">
                Plan Today,<br/> Secure Tomorrow <br /> With Affordable Coverage.
              </h1>
            </div>
          </div>
        )}

        
        {currentIndex === 3 && (
          <div className="relative w-full h-full">
            <img src={C4} className="block w-full h-full object-cover" alt="Slide 4" />
            <div className="absolute inset-0 bg-white/50"></div>
            <div className="absolute inset-0 flex items-center justify-center text-center p-6 left-8">
              <h1 className="text-2xl md:text-5xl font-bold text-blue-950 leading-tight md:leading-snug text-left">
                Your Family’s <br/>Protection <br /> Starts With <br/>The Right Plan.
              </h1>
            </div>
          </div>
        )}
      </div>

    
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 md:left-4 z-30 transform -translate-y-1/2 md:bg-blue-400 bg-blue-500 opacity-90 md:opacity-100 md:p-[1.25rem] p-[0.6rem] rounded-full text-white md:font-bold"
      >
        ❮
      </button>

  
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-1 md:right-4 z-30 transform -translate-y-1/2 md:bg-blue-400 bg-blue-500 opacity-90 md:opacity-100 md:p-[1.25rem] p-[0.6rem] rounded-full text-white md:font-bold"
      >
        ❯
      </button>

          
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-white'}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
