/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';


export default function Location() {

    return (
        <div id="location-section" className="c-location">
            <p className="c-location__title">CONTACTO</p>
            <div className="c-location__container">
                <iframe
                    className="c-location__iframe"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.6066962327923!2d-3.1472123852191944!3d40.63855487933993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd43abaedbc59ee5%3A0x84057af6ee77ece0!2sMicos%20Guarder%C3%ADa!5e0!3m2!1ses!2ses!4v1591472762039!5m2!1ses!2ses"
                    frameBorder="0"
                    allowFullScreen=""
                    aria-hidden="false"
                    style={{ border: 0 }}
                    tabIndex="0"
                    samesite="None"
                ></iframe>
{/*                 <ul className="c-location__list">
                    {
                        items.map((item, index) => {
                            return (
                                <li key={index} className="c-location__item">
                                    <figure className="c-location__figure">
                                        <img src={item.src} alt="" className="c-location__img" />
                                    </figure>
                                    <div className="c-location__container--contact">
                                        {
                                            item.content.map((content, index) => {
                                                return (
                                                    <span key={index}>{content.text}</span>
                                                )
                                            })
                                        }
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul> */}
            </div>
        </div>
    )
}