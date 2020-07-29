import React from 'react';
import { mock } from '../../mocks/installation';
import ImageBlock from '../../components/Image-block/Image-block';



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
    ]
    return (
        <div className="c-installations">
            {
                images.map((image, index) => {
                    return (
                        <span key={index}>
                            <ImageBlock installation={image}/>
                        </span>
                    )
                })
            }
        </div>
    )
}