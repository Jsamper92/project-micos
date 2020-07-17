import React, { useEffect } from 'react';
import './Pop-up.scss';

import whatsapp from '../../assets/images/icons/whatsapp_popup.svg';

export default function PopUp() {


    const apperancePopUp = () => {
        const header = document.querySelector('.c-popup');
        document.addEventListener('scroll', () => {
          if (window.scrollY >= 10) {
            header.classList.add('appereance');
          } else {
            header.classList.remove('appereance');
          }
        });
      }

      useEffect(() => {
        apperancePopUp();
      }, [])

    return (
        <a className='c-popup' href='https://wa.me/34675733140' target="blank">
            <img src={whatsapp} alt='icon-whatsapp' className='c-popup__img' />
        </a>
    )
}