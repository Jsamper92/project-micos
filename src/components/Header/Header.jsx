import React from 'react';
import MediaQuery from 'react-responsive';
import MenuMobile from '../Menu-hamburger/menuMobile';

import './Header.scss'
import { useState } from 'react';

export default function Header(props) {

    let [showMenu, setShowMenu] = useState(false);
    const openMenu = state => {
        setShowMenu(state);
        
    }
    return (
        <header className="c-header">
            <figure className="c-header__figure">
                {/* <img src="" alt="" className="c-header__img" /> */}
                soy el logo
            </figure>
            <nav className="c-header__nav">
                <ul className="c-header__list">
                    <li className="c-header__item"></li>
                </ul>
                <MediaQuery maxDeviceWidth={768}>
                    <MenuMobile openMenu={openMenu} />
                    {
                        showMenu ?
                            <ul className="c-header__list">
                                <li className="c-header__item">fdffd</li>
                            </ul>
                            :
                            null
                    }
                </MediaQuery>
            </nav>
        </header>
    )
}