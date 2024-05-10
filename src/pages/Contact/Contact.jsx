import React from 'react';
import background from '../../assets/images/Contacto.png';
import './Contact.scss';
import Title from '../../components/Title/Title';

export default function Contact() {
    const title = {
        title: 'CONTACTO',
        subtitle: ['675 733 140', 'info@micosguarderia.es', 'Calle Bulevar del Alto Tajo 40', '19005 - Guadalajara'
        ]
    };
    return (
        <div id="welcome-section" className="c-welcome" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
            <Title title={title} />
        </div>
    )
}