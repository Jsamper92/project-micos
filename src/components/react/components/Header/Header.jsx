import React, { useEffect, useState } from "react";
import MenuMobile from "../Menu-hamburger/menuMobile";

export default function Header(props) {
  let [showMenu, setShowMenu] = useState(false);

  let [line, setLine] = useState(null);

  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

  let slides = [
    {
      color: '#009ACB',
      title: 'INICIO',
    },
    {
      color: '#6ACA50',
      title: 'SERVICIOS',
    },
    {
      color: '#ECBE1F',
      title: 'INSTALACIONES',
    },
    {
      color: 'red',
      title: 'CONTACTO',
    }
  ]

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
      case 'line-3':
        return 'red';
      default:
        return '#009ACB';
    }
  }

  const getId = target => document.getElementById(target);

  const scrollTo = (element) => {
    let top;
    switch (element) {
      case 'INICIO':
        top = getId('welcome-section').offsetTop;
        window.scroll({ top: top - 100, behavior: 'smooth' });
        break;
      case 'INSTALACIONES':
        top = getId('instalations-section').offsetTop;
        window.scroll({ top: top - 100, behavior: 'smooth' });
        break;
      case 'CONTACTO':
        top = getId('location-section').offsetTop;
        window.scroll({ top: top - 130, behavior: 'smooth' });
        break;
      case 'SERVICIOS':
        top = getId('services-section').offsetTop;
        window.scroll({ top: top - 130, behavior: 'smooth' });
        break;
      default:
        break;
    }
  }

  const setAnimationScroll = (target, className, px) => {
    document.addEventListener("scroll", (_) => {
      if (window.scrollY >= px) {
        target.classList.add(className);
      } else {
        target.classList.remove(className);
      }
    });
  };

  const scaleHeader = () => {
    const header = document.querySelector(".c-header");
    const overlay = document.querySelector(".overlay");

    setAnimationScroll(overlay,'overlay--white', 599);
    setAnimationScroll(header,'scale-header-on',599);
  }




  const setUnderline = (props) => {
    const text = props.target.textContent;
    scrollTo(text);
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
    <React.Fragment>
      <span className="overlay"></span>
      <header className={`c-header ${showMenu ? 'active' : null}`}>
        <figure className="c-header__figure">
          <img src={'/images/micos_logo.svg'} alt="" className="c-header__img" />
        </figure>
        <nav className="c-header__nav">
          <ul className={`c-header__list ${showMenu ? "active" : ""}`}>
            {slides.map((item, index) => {
              return (
                <li
                  tabIndex={index}
                  key={index}
                  id={`line-${index}`}
                  className="c-header__item"
                  onClick={(e) => setUnderline(e)}
                >
                  {item.title}
                  <span style={{ backgroundColor: setColorUnderline(`line-${index}`) }}></span>
                </li>
              );
            })}
          </ul>

          {isDesktop && <span
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
          />}

          <MenuMobile openMenu={openMenu} />
        </nav>
      </header>
    </React.Fragment>
  );
}
