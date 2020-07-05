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

  const slides = [
    {
      text: "Primer item",
    },
    {
      text: "Segundo item",
    },
    {
      text: "Tercer item",
    },
  ];

  const openMenu = (state) => {
    setShowMenu(state);
  };

  const setUnderline = (props) => {
    const element = document.getElementById(props.target.id);
    const underline = {
      color: "black",
      left: element.getBoundingClientRect().left,
      width: element.offsetWidth,
    };

    setLine(underline);
  };
  useEffect(() => {
    setLine({
      color: "black",
      left: document.getElementById("line-0").getBoundingClientRect().left,
      width: document.getElementById("line-0").offsetWidth,
    });
  }, []);

  return (
    <header className="c-header">
      <figure className="c-header__figure">
        <img src={logo} alt="" className="c-header__img" />
      </figure>
      <nav className="c-header__nav">
        {isTabletOrMobile && <MenuMobile openMenu={openMenu} />}

        <ul className={`c-header__list ${showMenu ? "active" : ""}`}>
          {slides.map((item, index) => {
            return (
              <li
                key={index}
                id={`line-${index}`}
                className="c-header__item"
                onClick={!isTabletOrMobile ? (e) => setUnderline(e) : null}
              >
                {item.text}
              </li>
            );
          })}
        </ul>
        {!isTabletOrMobile && (
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
          ></span>
        )}
      </nav>
    </header>
  );
}
