import React from 'react';
import { mock } from '../../mocks/installation';
import ImageBlock from '../../components/Image-block/Image-block';
import Modal from '../../components/Modal/Modal';
import { useState } from 'react';



export default function Installations() {

    const images = [
        {
            image: mock[1],
            text: 'AULA 1/2 AÑOS',
            id: 0
        },
        {
            image: mock[2],
            text: 'AULA 1/2 AÑOS',
            id: 1
        },
        {
            image: mock[3],
            text: 'AULA 1/2 AÑOS',
            id: 2
        },
        {
            image: mock[5],
            text: 'AULA 1/2 AÑOS',
            id: 3
        },
        {
            image: mock[6],
            text: 'AULA 1/2 AÑOS',
            id: 4
        },
        {
            image: mock[7],
            text: 'AULA 0/1 AÑOS',
            id: 5
        },
        {
            image: mock[8],
            text: 'AULA 0/1 AÑOS',
            id: 6
        },
        {
            image: mock[9],
            text: 'COCINA',
            id: 7
        },
        {
            image: mock[10],
            text: 'COMEDOR',
            id: 8
        },
        {
            image: mock[12],
            text: 'PARQUE INFANTIL',
            id: 9
        },
        {
            image: mock[13],
            text: 'BAÑOS AULAS',
            id: 10
        },
        {
            image: mock[14],
            text: 'EDIFICIO',
            id: 11
        }
    ];

    const [currentImage, setCurrentImage] = useState(null);
    const [activeModal, setActiveModal] = useState(false);

    const closeModal = state => setActiveModal(state);

    const openImage = image => {
        setCurrentImage(image);
        currentImage !== undefined ? setActiveModal(true) : setActiveModal(false);
    };

    return (
        <React.Fragment>

            <div className="c-installations">
                <p className="c-installations__title">INSTALACIONES</p>
                <div className="c-installations__images">
                    {
                        images.map((image, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <ImageBlock installation={image} openImage={openImage} />
                                </React.Fragment>
                            )
                        })
                    }
                </div>
            </div>
            {
                activeModal ? <Modal currentImage={currentImage} closeModal={closeModal} /> : null
            }

        </React.Fragment>
    )
}