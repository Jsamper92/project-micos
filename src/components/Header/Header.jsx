import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import MenuMobile from "../Menu-hamburger/menuMobile";
import logo from "../../assets/images/micos_logo.svg";

import "./Header.scss";
import { useState } from "react";

export default function Header(props) {
  let [showMenu, setShowMenu] = useState(false);

  let [line, setLine] = useState(null);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const openMenu = (state) => {
    setShowMenu(state);
  };

  const setColorUnderline = item => {
    switch (item) {
      case 'line-0':
        return '#009ACB'
      case 'line-1':
        return '#8FB816'
      case 'line-2':
        return '#ECBE1F';
      default:
        return '#009ACB';
    }
  }

  const scaleHeader = () => {
    const header = document.querySelector(".c-header");
    document.addEventListener("scroll", (_) => {
      if (window.scrollY >= 100) {
        header.classList.add("scale-header-on");
      } else {
        header.classList.remove("scale-header-on");
      }
    });
  }


  const setUnderline = (props) => {
    const element = document.getElementById(props.target.id);
    const underline = {
      color: setColorUnderline(props.target.id),
      left: element.getBoundingClientRect().left,
      width: element.offsetWidth,
    };

    setLine(underline);
  };
  useEffect(() => {
    const element = document.getElementById("line-0");
    setLine({
      color: setColorUnderline('line-0'),
      left: element.getBoundingClientRect().left,
      width: element.offsetWidth,
    });

    scaleHeader();
  }, []);

  return (
    <header className={`c-header ${showMenu ? 'active' : null}`}>
      <figure className="c-header__figure">
        <img src={logo} alt="" className="c-header__img" />
      </figure>
      <nav className="c-header__nav">
        <ul className={`c-header__list ${showMenu ? "active" : ""}`}>
          {props.slides.map((item, index) => {
            return (
              <li
                key={index}
                id={`line-${index}`}
                className="c-header__item"
                onClick={!isTabletOrMobile ? (e) => setUnderline(e) : null}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
        <span
            className="c-header__line"
            style={
              line
                ? {
                  backgroundColor: line.color,
                  width: line.width,
                  left: line.left,
                }
                : null
            }
          />
        <MenuMobile openMenu={openMenu} />
      </nav>
    </header>
  );
}
