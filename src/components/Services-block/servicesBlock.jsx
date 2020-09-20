import React, { useEffect }  from 'react';
import './servicesBlock.scss';

export default function ServicesBlock(props) {

    const {alternate,title, span, content, img} = props.item;
    const apperancePopUp = () => {
        const target = document.getElementById(`c-services-${props.id}`);

          document.addEventListener('scroll', () => {
          if (window.scrollY >= props.appereance) {
            target.classList.add('appereance');
          }
        });  
      }

      useEffect(() => {
        apperancePopUp();
      })
    return (
        <div id={`c-services-${props.id}`} className={`c-services-block ${alternate === true ? 'alternate': ''}`}>
            <div className={`c-services-block__text`}>
                <h2 className="c-services-block__title">
                    {title}
                    <span className="c-services-block__postitle">
                        {span}
                    </span>
                </h2>
                <p className="c-services-block__content">
                    {content}
                </p>
            </div>
            <figure className="c-services-block__figure">
                <img src={img} alt="" className="c-services-block__img" />
            </figure>
        </div>
    )
}