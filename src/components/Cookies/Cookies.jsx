import React, { useState, useEffect } from "react";
import './Cookies.scss';

export default function Cookies() {

    let [cookies, setCookies] = useState({
        className: '',
        accept: false
    });

    const acceptCookies = () => {
        sessionStorage.setItem('cookies', true);
        cookies = {
            className: 'c-cookies--accept',
            accept: false
        }
        setCookies(cookies);
    }

    
    let getCookies = window.sessionStorage.getItem('cookies')

    console.log(getCookies === 'true');
    return (        
            <div className={`c-cookies ${cookies.className}`}>
                <p className="c-cookies__text">
                    Este sitio web utiliza cookies para que usted tenga la mejor experiencia
                    de usuario. Si continúa navegando está dando su consentimiento para la
                    aceptación de las mencionadas cookies
            </p>
                <button className={"c-cookies__button"} onClick={acceptCookies}>Aceptar</button>
            </div>
    );
}
