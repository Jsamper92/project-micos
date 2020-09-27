import React, { useState, useEffect } from 'react'
import { useTransition, animated } from 'react-spring'
import "./Carousel.scss";
import Pagination from "../Pagination/Pagination";

function Carousel(props) {
  const [index, setCurrentIndex] = useState(0)
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' }
  })

  let slides = props.slides;
  const setIndex = index => {
    setCurrentIndex(parseInt(index));
  }

  const pages = [
    ({ style }) => <animated.div  style={{ ...style }}>{slides[0].content}</animated.div>,
    ({ style }) => <animated.div style={{ ...style }}>{slides[1].content}</animated.div>,
    ({ style }) => <animated.div style={{ ...style }}>{slides[2].content}</animated.div>,
  ]

  useEffect(() => {
    const nextSlide = () => {
      setCurrentIndex(state => (state + 1) % slides.length)
    };

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return (_) => clearInterval(interval);
  }, [index]);

  return (
    <div id="welcome-section" className="simple-trans-main">
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item]
        return <Page key={key} style={props} />
      })}
      <Pagination slides={slides} currentIndex={index} setIndex={setIndex}></Pagination>
    </div>
  );
}

export default Carousel;


