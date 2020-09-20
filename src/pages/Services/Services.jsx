import React from "react";
import "./Services.scss";
import ServicesBlock from '../../components/Services-block/servicesBlock';
import contactPersonal from '../../assets/images/trato-personalizado.png';
import ourServices from '../../assets/images/nuestros-servicios.png';
import needs from '../../assets/images/necesidades.png';
export default function Services() {
  const services = [
    {
      alternate: false,
      title: '¡Nos adaptamos a',
      span: 'tus necesidades!',
      content: 'En Micos, abrimos todo el año y siempre tratamos de adaptarnos a tus necesidades. Tenemos un horario diario muy amplio con posibilidad de ampliarlo si la demanda de las familias lo requieren. Sabemos que es muy difícil conciliar vida familiar y profesional, por lo que nuestro compromiso es el de tratar siempre de ayudar a los padres de cualquier manera.',
      img: needs
    },
    {
      alternate: true,
      title: 'Servicios',
      span: 'que ofrecemos',
      content: 'Somos una Escuela pequeña, lo que nos permite poder dar a las familias un trato totalmente personalizado y muy familiar.',
      img: ourServices
    },
    {
      alternate: false,
      title: 'Trato personalizado',
      span: 'en un entorno familiar y seguro',
      content: 'Buscamos que el entorno Familia / Escuela sea único, de forma que trasmitamos a nuestros niños los mismos valores y educación tanto en casa como en la Escuela.',
      img: contactPersonal
    }
  ]

  return (
    <div className="c-services" id="services-section">
      <p className="c-services__title">SERVICIOS</p>
      <ServicesBlock id={1} appereance={400} item={services[0]} />
      <ServicesBlock id={2} appereance={700} item={services[1]} />
      <ServicesBlock id={3} appereance={1100} item={services[2]} />
    </div>
  );
}