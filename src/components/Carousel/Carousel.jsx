import React, { useState, useEffect } from 'react';
import './Carousel.scss';
function Carousel() {

    let [currentIndex, setCurrentIndex] = useState(0);

    let slides = [
        {
            color: 'red'
        },
        {
            color: 'yellow'
        },
        {
            color: 'black'
        },
    ]

    const nextSlide = () => {
        const lastIndex = slides.length - 1;
        const resetIndex = currentIndex === lastIndex;
        const index = resetIndex ? 0 : currentIndex + 1;
        setCurrentIndex(index);
    }

    const Pointers = () => {
        return (
            <p className="c-pointers">Soy los steps del carousel</p>
        )
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

    // setInterval(nextSlide,1000);
    return (
        <div className="c-carousel">
            {
                slides.map((elem, index) => {
                    return (
                        <div id={'id-'+index}  className={`c-carousel__slide  ${ currentIndex === index ? 'active':''}`} key={index} style={{backgroundColor:elem.color}}>
                        </div>
                    )
                })
            }
            <Pointers></Pointers>
        </div>
    )
}


export default Carousel;

