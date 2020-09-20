import React, { useState, useEffect } from "react";
import "./Carousel.scss";
import Pagination from "../Pagination/Pagination";

function Carousel(props) {
  let [currentIndex, setCurrentIndex] = useState(0);
  let slides = props.slides;
  const setIndex = index => {
    setCurrentIndex(parseInt(index));
  }

  useEffect(() => {
    const nextSlide = () => {
      const lastIndex = slides.length - 1;
      const resetIndex = currentIndex === lastIndex;
      const index = resetIndex ? 0 : currentIndex + 1;
      setCurrentIndex(index);
    };

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return (_) => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="c-carousel">
      {slides.map((elem, index) => {
        return (
          <div
            id={index}
            className={`c-carousel__slide  ${
              currentIndex === index  ? "active" : ""
              }`}
            key={index}
          >
            {elem.content}
          </div>
        );
      })} 
      <Pagination slides={slides} currentIndex={currentIndex} setIndex={setIndex}></Pagination>
    </div>
  );
}

export default Carousel;
