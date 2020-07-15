import React from 'react';
import background from '../../assets/images/Contacto.png';
import './Contact.scss';

export default function Contact() {
    return (
        <div className="c-welcome" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
            <h1 className="title">Contacto</h1>
            <p className="subtitle">datos</p>
        </div>
    )
}