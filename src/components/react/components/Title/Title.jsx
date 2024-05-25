import React from 'react';

export default function Title(props) {
    const {title, subtitle} = props.title;
    return (
        <div className="c-title">
            <h1 className="c-title__main">{title}</h1>
            {subtitle.map((text,key) => {
                return (
                    <p key={key} className="c-title__subtitle">{text}</p>
                )
            })}
        </div>
    )
}