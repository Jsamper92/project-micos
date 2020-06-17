import React from 'react';
import './Pagination.scss';
export default function Pagination(props) {

    let slides = props.slides;
    let currentIndex = props.currentIndex;
    return (
        <ul className="c-pagination">
            {
                slides.map((elem,index) => {
                    return (
                        <li key={index} className={`c-pagination__item ${currentIndex === index ? 'active': 'null'}`} ></li>
                    )
                })
            }
            
        </ul>
    )
}