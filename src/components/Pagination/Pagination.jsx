import React from "react";
import "./Pagination.scss";
export default function Pagination(props) {
  let slides = props.slides;
  let currentIndex = props.currentIndex;


  const setIndex = (index) => {
    props.setIndex(index);
  };
  return (
    <ul className="c-pagination">
      {slides.map((elem, index) => {
        return (
          <li key={index} id={index} className={`c-pagination__item`} onClick={e => setIndex(e.target.id)}>
            <span
              style={{ backgroundColor: elem.color }}
              className={`c-pagination__line ${
                currentIndex === index ? "active" : ""
              }`}
            ></span>
          </li>
        );
      })}
    </ul>
  );
}
