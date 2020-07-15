import React from 'react';
import background from '../../assets/images/Servicios.png';
import './Services.scss';

export default function Services() {
    return (
        <div className="c-welcome" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
            <h1 className="title">SERVICIOS</h1>
            <p className="subtitle">Desayunos, Comidas, Meriendas, Actividades...</p>
        </div>
    )
}