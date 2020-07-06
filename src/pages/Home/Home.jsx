import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import Location from '../Location/Location';


export default function Home(props) {
    return (
        <div className="c-home">
            <Carousel slides={props.slides}></Carousel>
            <Location/>
        </div>
    )
}