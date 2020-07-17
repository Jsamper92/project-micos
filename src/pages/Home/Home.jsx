import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import Welcome from '../Welcome/Welcome';
import Installation from '../Installation/Installation';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import PopUp from '../../components/Pop-up/Pop-up';



export default function Home(props) {

    let slides = [
        {
          color: '#009ACB',
          title: 'QUIENES SOMOS',
          content: <Welcome />
        },
        {
          color: '#ECBE1F',
          title: 'INSTALACIONES',
          content: <Installation />
        },
        {
          color: '#6ACA50',
          title: 'SERVICIOS',
          content: <Services />
        },
        {
          color: 'red',
          title: 'CONTACTO',
          content: <Contact />
        }
      ]

    return (
        <div className="c-home">
            <Carousel slides={slides}></Carousel>
            <PopUp/>
        </div>
    )
}