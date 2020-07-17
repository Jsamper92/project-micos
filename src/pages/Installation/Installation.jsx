import React from 'react';
import background from '../../assets/images/Instalaciones.png';
import './Installation.scss';
import Title from '../../components/Title/Title';

export default function Installation() {

    const title = {
        title: 'INSTALACIONES',
        subtitle: ['6 Aulas', 'Jardín privado', 'Calefacción', 'Suelo radiante', 'Aire acondicionado', 'Puertas pivotantes']
    };


    return (
        <div className="c-welcome" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
            <Title title={title} />
        </div>
    )
}