import React from 'react';
import background from '../../assets/images/Instalaciones.png';
import './Installation.scss';

export default function Installation() {
    return (
        <div className="c-welcome" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
            <h1 className="title">INSTALACIONES</h1>
            <p className="subtitle">6 Aulas, Sala usos multiple, Jardín privado, Calefacción, suelo radiante, Aire acondicionado, Puertas pivotantes...</p>
        </div>
    )
}