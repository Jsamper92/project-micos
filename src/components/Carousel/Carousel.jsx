import React, { useState, useEffect } from 'react';
import './Carousel.scss';
import Pagination from '../Pagination/Pagination';
function Carousel(props) {

    let [currentIndex, setCurrentIndex] = useState(0);
    let slides = props.slides;


 

    const nextSlide = () => {
        const lastIndex = slides.length - 1;
        const resetIndex = currentIndex === lastIndex;
        const index = resetIndex ? 0 : currentIndex + 1;
        setCurrentIndex(index);
    }

    useEffect(
        () => {
            const interval = setInterval(_ => {
                nextSlide();
            }, 3000);
            return _ => clearInterval(interval);
        },
        [currentIndex]
    );

    return (
        <div className="c-carousel">
            {
                slides.map((elem, index) => {
                    return (
                        <div id={'id-' + index} className={`c-carousel__slide  ${currentIndex === index ? 'active' : ''}`} key={index} style={{ backgroundColor: elem.color }}>
                        </div>
                    )
                })
            }
            <Pagination slides={slides} currentIndex={currentIndex}></Pagination>
        </div>
    )
}


export default Carousel;

