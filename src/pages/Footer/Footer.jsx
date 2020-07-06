import React from "react";

import logo from "../../assets/images/micos_logo.svg";
import "./Footer.scss";

export default function Footer() {
  const literals = [
    {
      text: "C.E.I Micos",
      weight: 500,
    },
    {
      text: "Calle Bulevar del Alto Tajo 40",
      weight: 500,
    },
    {
      text: "19005 - Guadalajara",
      weight: 500,
    },
    {
      text: "949 298 586",
      weight: 800,
    },
    {
      text: "info@micosguarderia.es",
      weight: 800,
    },
  ];

  return (
    <div className="c-footer">
      <figure className="c-footer__figure">
        <img src={logo} alt="logo micos" className="c-footer__img" />
      </figure>
      <ul className="c-footer__text">
        {literals.map((literal, index) => (
          <li
            key={index}
            style={{ fontWeight: literal.weight }}
            className="c-footer__item"
          >
            {literal.text}
          </li>
        ))}
      </ul>
      <a href="#" className="c-footer__link">
        © Micos, Centro de Educación y Ocio Infantil en Guadalajara 2020 | Aviso
        legal, política de privacidad y cookies
      </a>
    </div>
  );
}