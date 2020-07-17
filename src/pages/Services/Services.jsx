import React from 'react';
import background from '../../assets/images/Servicios.png';
import './Services.scss';
import Title from '../../components/Title/Title';

export default function Services() {

    const title = {
        title: 'SERVICIOS',
        subtitle: []
    }
    return (
        <div className="c-welcome" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
            <Title title={title}/>
        </div>
    )
}