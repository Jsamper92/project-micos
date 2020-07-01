import React from 'react';
import MediaQuery from 'react-responsive';
import MenuMobile from '../Menu-hamburger/menuMobile';
import logo from '../../assets/images/micos_logo.svg'


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
                <img src={logo} alt="" className="c-header__img" /> 
            </figure>
            <nav className="c-header__nav">
                <ul className="c-header__list">
                    <li className="c-header__item"></li>
                </ul>
                <MediaQuery maxDeviceWidth={768}>
                    <MenuMobile openMenu={openMenu} />

                    <ul className={`c-header__list ${showMenu ? 'active' : ''}`}>
                        <li className="c-header__item">fdffd</li>
                    </ul>

                </MediaQuery>
            </nav>
        </header>
    )
}