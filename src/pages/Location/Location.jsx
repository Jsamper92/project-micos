/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import './Location.scss';

export default function Location(props) {
    return (
        <div className="c-location">
            <iframe
                className="c-location__iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.6066962327923!2d-3.1472123852191944!3d40.63855487933993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd43abaedbc59ee5%3A0x84057af6ee77ece0!2sMicos%20Guarder%C3%ADa!5e0!3m2!1ses!2ses!4v1591472762039!5m2!1ses!2ses"
                frameborder="0"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
            ></iframe>
        </div>
    )
}