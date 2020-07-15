import React from 'react';
import background from '../../assets/images/Bienvenido.png';
import './Welcome.scss';

export default function Welcome() {
    return (
        <div className="c-welcome" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
            <h1 className="title">BIENVENIDOS!!</h1>
            <p className="subtitle">Tu escuela ACOGEDORA Y FAMILIAR</p>
        </div>
    )
}