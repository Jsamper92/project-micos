import React from "react";
import "./Services.scss";
import menuJulio from '../../assets/documents/Ninos_julio.pdf';
import bebeJulio from '../../assets/documents/Bebes_julio.pdf';

export default function Services() {

  const link = [
    {
      text: 'ENERO',
      link: ''
    },
    {
      text: 'FEBRERO',
      link: ''
    },
    {
      text: 'MARZO',
      link: ''
    },
    {
      text: 'ABRIL',
      link: ''
    },
    {
      text: 'MAYO',
      link: ''
    },
    {
      text: 'JUNIO',
      link: ''
    },
    {
      text: 'JULIO',
      link: ''
    },
    {
      text: 'AGOSTO',
      link: ''
    },
    {
      text: 'SEPTIEMBRE',
      link: ''
    },
    {
      text: 'OCTUBRE',
      link: ''
    },
    {
      text: 'NOVIEMBRE',
      link: ''
    },
    {
      text: 'DICIEMBRE',
      link: ''
    },
  ];

  return (
    <div className="c-services" id="services-section">
      <p className="c-services__title">SERVICIOS</p>
      <div className="c-services__container--text">
        <p className="c-services__text">
          Los menús son elaborados por una empresa de catering bajo unos
          estrictos criterios sanitarios y dietéticos. De todas las comidas
          elaboradas en nuestra cocina se guarda muestras durante 48 horas para
          tenerlas a disposición de Sanidad u otros organismos competentes.
        </p>
        <p className="c-services__text">
          La hora de la comida no sólo es el acto de comer, les enseñamos el
          manejo de los utensilios y se estrechan los lazos comunicativos entre
          los niños ya que a lo largo de su vida se convertirá en un acto social
          agradable y distendido.
        </p>
      </div>
      <div className="c-services__container--menu">
        {
          link.map((elem, index) => {
            return (
              <a key={index} href={bebeJulio} onClick={ () => window.open(menuJulio)} target="blank" className="c-services__link">
                <i>
                  <Icon />
                </i>
                {elem.text}
              </a>
            )
          })
        }
      </div>
    </div>
  );
}


export function Icon() {
  return (
    <svg id="Solid" height="25" viewBox="0 0 512 512" width="25" xmlns="http://www.w3.org/2000/svg">
      <path d="m128.219 184h-48.438l-7.768 287.221a23.631 23.631 0 0 0 6.714 17.34 24.32 24.32 0 0 0 17.63 7.439h15.286a24.32 24.32 0 0 0 17.63-7.439 23.6 23.6 0 0 0 6.715-17.292z" />
      <path d="m136 16a8 8 0 0 0 -8 8v80h-16v-80a8 8 0 0 0 -16 0v80h-16v-80a8 8 0 0 0 -16 0v112.446a40.2 40.2 0 0 0 4.223 17.889l6.833 13.665h57.888l6.833-13.665a40.2 40.2 0 0 0 4.223-17.889v-112.446a8 8 0 0 0 -8-8z" />
      <path d="m224 232h48v-208a8 8 0 0 0 -8-8c-16.054 0-29.774 11.161-40.78 33.172-7.954 15.908-14.707 37.875-20.071 65.292-9.012 46.059-11.059 91.286-11.142 93.188a8 8 0 0 0 6.053 8.109l25.94 6.485z" />
      <path d="m272.281 248h-48.562l-7.706 223.221a23.631 23.631 0 0 0 6.714 17.34 24.32 24.32 0 0 0 17.63 7.439h15.286a24.32 24.32 0 0 0 17.63-7.439 23.636 23.636 0 0 0 6.713-17.353z" /><path d="m408.534 203.079a63.619 63.619 0 0 1 -49.068 0l-7.453 268.142a23.631 23.631 0 0 0 6.714 17.34 24.32 24.32 0 0 0 17.63 7.439h15.286a24.32 24.32 0 0 0 17.63-7.439 23.606 23.606 0 0 0 6.715-17.3z" />
      <ellipse cx="384" cy="104" rx="64" ry="88" />
    </svg>
  )
}