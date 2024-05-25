import React from 'react';

import Title from '../../components/Title/Title';

export default function Contact() {
    const title = {
        title: 'CONTACTO',
        subtitle: ['675 733 140', 'info@micosguarderia.es', 'Calle Bulevar del Alto Tajo 40', '19005 - Guadalajara'
        ]
    };
    return (
        <div id="welcome-section" className="c-welcome" style={{ backgroundImage: `url(/images/Contacto.png)`, backgroundSize: 'cover' }}>
            <Title title={title} />
        </div>
    )
}