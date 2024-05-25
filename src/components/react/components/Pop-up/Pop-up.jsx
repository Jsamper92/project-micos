import React, { useEffect, useState } from 'react';



export default function PopUp() {

    let [animation, setAnimation] = useState(null);

    const apperancePopUp = () => {
        const header = document.querySelector('.c-popup');
        document.addEventListener('scroll', () => {
          if (window.scrollY >= 10) {
            header.classList.add('appereance');
            setAnimation(true);
          } else {
            header.classList.remove('appereance');
          }
        });
      }

      


      useEffect(() => {
        apperancePopUp();
      }, [])

    return (
        <a className={`c-popup ${animation === true ? 'effect': ''}`} href='https://wa.me/34675733140' target="blank">
            <img src={'/images/icons/whatsapp_popup.svg'} alt='icon-whatsapp' className='c-popup__img' />
        </a>
    )
}