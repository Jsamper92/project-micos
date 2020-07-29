import React from 'react';
import './Modal.scss';

export default function Modal(props) {

    const closeModal = state => {
        return props.closeModal(state)
    };

    return (

        <React.Fragment>
            <div className="c-modal">
                <button className="c-modal__close" onClick={() => closeModal(false)}>
                    x
                </button>
                <figure className="c-modal__figure">
                    <img src={props.currentImage} alt="" className="c-modal__figure" />
                </figure>
            </div>
            <div className="overlay"></div>
        </React.Fragment>
    )
}