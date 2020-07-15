import React, { useState, useEffect } from "react";
import "./Carousel.scss";
import Pagination from "../Pagination/Pagination";
import Welcome from "../../pages/Welcome/Welcome";
function Carousel(props) {
  let [currentIndex, setCurrentIndex] = useState(0);
  let slides = props.slides;

  let slidess = [
    {
      color: 'brown',
      background: 'gray',
      content: <Welcome/>
    },
    {
      color: 'gray',
      background: 'grey',
      content: 'vista 2'
    },
    {
      color: 'orange',
      background: 'orange',
      content: 'no tengo contenido'
    },
  ]

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
  }, [currentIndex, slides.length]);

  return (
    <div className="c-carousel">
      {slides.map((elem, index) => {
        return (
          <div
            id={index}
            className={`c-carousel__slide  ${
              currentIndex === index ? "active" : ""
              }`}
            key={index}
          >
            {elem.content}
          </div>
        );
      })}
      <Pagination slides={slidess} currentIndex={currentIndex} setIndex={setIndex}></Pagination>
    </div>
  );
}

export default Carousel;
