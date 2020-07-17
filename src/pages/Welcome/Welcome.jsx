import React from 'react';
import background from '../../assets/images/Bienvenido.png';
import './Welcome.scss';
import Title from '../../components/Title/Title';

export default function Welcome() {

    const title = {
        title: 'BIENVENIDOS',
        subtitle: ['Tu escuela ACOGEDORA Y FAMILIAR']
    }
    return (
        <div className="c-welcome" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
            <Title title={title}/>
        </div>
    )
}