import React, { useState } from "react";
import "./Cookies.scss";

export default function Cookies() {

    let [className,setClassName] = useState(false);

    const acceptCookies = () => {
        setClassName(true);
        
        setTimeout(() => {
            sessionStorage.setItem("cookies", true);
        }, 1200);
    };


    let getCookies = window.sessionStorage.getItem("cookies");

    return (
        getCookies === 'false' ?
            <div className={`c-cookies ${className ? 'c-cookies--accept' : ''}`}>
                <p className="c-cookies__text">
                    Este sitio web utiliza cookies para que usted tenga la mejor experiencia
                    de usuario. Si continúa navegando está dando su consentimiento para la
                    aceptación de las mencionadas cookies
                </p>
                <button className={"c-cookies__button"} onClick={acceptCookies}>
                    Aceptar
            </button>
            </div>
            : null
  )
}
