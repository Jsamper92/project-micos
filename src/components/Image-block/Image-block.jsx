import React, { useState } from 'react';
import './Image-block.scss';

export default function ImageBlock(props) {
    const { image, text, id } = props.installation;
    const [active, setActive] = useState(false);

    const onMouse = state => setActive(state);

    const updatePosition = index => {

        const translate = percentage => {
            return `translate(${percentage}%, 42px)`
        }
        switch (index) {
            case 7:
                return translate(80);
            case 8:
                return translate(60);
            case 9:
                return translate(15);
            case 10:
                return translate(30);
            case 11:
                return translate(80);
            default:
                break;
        }
    };

    const returnImage = image => {
        return props.openImage(image);
    };

    return (
        <div className={`c-image ${active ? 'active' : ''}`} onClick={() => returnImage(image)} onMouseEnter={() => onMouse(true)} onMouseLeave={() => onMouse(false)}>
            <figure className="c-image__figure">
                <img src={image} alt={`'instalacion-${props.key}'`} className="c-image__img" />
            </figure>
            <div className="c-image__container">
                <p className="c-image__text" style={{ transform: active ? updatePosition(id) : null }}>{text}</p>
            </div>
        </div>
    )
}