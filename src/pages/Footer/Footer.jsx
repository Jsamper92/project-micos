import React from "react";
import "./Footer.scss";

import Pdf from '../../assets/documents/Aviso-Legal.pdf';
import facebook from '../../assets/images/icons/facebook.svg';
import instagram from '../../assets/images/icons/instagram.svg';
import whatsapp from '../../assets/images/icons/whatsapp.svg';

export default function Footer() {
  const literals = [
    {
      text: "QUIERES CONOCERNOS",
      weight: 500,
      list: [
        {
          text: 'No lo dudes, llama o escríbenos por mail para concertar una entrevista y te contaremos con más detalle cómo es nuestra escuela'
        }
      ]
    },
    {
      text: "CONTÁCTANOS",
      weight: 500,
      list: [
        {
          text: '675 733 140'
        },
        {
          text: "info@micosguarderia.es",
        }
      ]
    },
    {
      text: "¿DONDE ESTAMOS?",
      weight: 500,
      list: [
        {
          text: "Calle Bulevar del Alto Tajo 40",
        },
        {
          text: "19005 - Guadalajara",
        }

      ]
    }
  ];

  const icons = [
    {
      icon: facebook,
      title: 'i-facebook',
      href: 'https://es-es.facebook.com/MICOS-Guarder%C3%ADa-451749654903657/'
    },
    {
      icon: instagram,
      title: 'i-instagram',
      href: 'https://www.instagram.com/micos.guarderia'
    },
    {
      icon: whatsapp,
      title: 'i-whatsapp',
      href: 'https://wa.me/34675733140'
    }
  ]

  return (
    <div className="c-footer">
      <div className="c-footer__container">
        {literals.map((literal, index) => (
          <ul className="c-footer__list" key={index}>
            <li
              key={index}
              style={{ fontWeight: literal.weight }}
              className="c-footer__item"
            >
              <span>{literal.text}</span>
              {literal.list.map((element, key) => {
                return (
                  <span key={key}>{element.text}</span>
                )
              })}
            </li>
          </ul>
        ))}
      </div>
      <div className="c-footer__container--link">
        <span>© Micos, Centro de Educación y Ocio Infantil en Guadalajara 2020 </span>
        <a href={Pdf} rel="noopener noreferrer" target="_blank" className="c-footer__link" title="micos">
          | Aviso
          legal, política de privacidad y cookies
        </a>
        {
          icons.map((icon, index) => {
            return (
              <a href={icon.href} target="blank" key={index} className="c-footer__socials">
                <img src={icon.icon} alt={icon.title} className="c-footer__img" />
              </a>
            )
          })
        }
      </div>
    </div>
  );
}
