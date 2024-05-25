import React from 'react';

import Title from '../../components/Title/Title';

export default function Welcome() {

    const title = {
        title: 'BIENVENIDOS',
        subtitle: ['Tu escuela ACOGEDORA Y FAMILIAR']
    }
    return (
        <div className="c-welcome" style={{backgroundImage: `url(/images/Bienvenido.png)`, backgroundSize: 'cover'}}>
            <Title title={title}/>
        </div>
    )
}