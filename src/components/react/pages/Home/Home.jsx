import React, { useEffect, useRef, useState } from "react";
import Carousel from "../../components/Carousel/Carousel";
import Welcome from "../Welcome/Welcome";
import Installation from "../Installation/Installation";
import Contact from "../Contact/Contact";
import PopUp from "../../components/Pop-up/Pop-up";
import Installations from "../Installation/Installations";
import Location from "../Location/Location";
import Services from "../Services/Services";
import Modal from "../../components/Modal/Modal";
export default function Home(props) {
  let slides = [
    {
      color: "#009ACB",
      title: "INICIO",
      content: <Welcome />,
    },
    {
      color: "#ECBE1F",
      title: "INSTALACIONES",
      content: <Installation />,
    },
    {
      color: "red",
      title: "CONTACTO",
      content: <Contact />,
    },
  ];

  const [openModalPromotion, setOpenModalPromotion] = useState(false);
  const timeoutref = useRef(null);
  useEffect(() => {
    timeoutref.current = setTimeout(() => {
      setOpenModalPromotion(true);
    }, 2000);

    return () => {
      clearTimeout(timeoutref.current);
    };
  }, []);

  return (
    <div className="c-home" style={{background: 'white'}}>
      {openModalPromotion && (
        <Modal
          height={"80%"}
          currentImage={"/images/promocion.png"}
          closeModal={() => {
            setOpenModalPromotion(false);
          }}
        >
          <div className="button-section">
            <button
              onClick={() => {
                window.open(
                  "https://maps.app.goo.gl/tqghYim5uUuB5kqJ8",
                  "_blank"
                );
              }}
            >
              Dirección
            </button>
            <a
              href="https://wa.me/34675733140"
              target="blank"
            >
              <button>Contáctanos</button>
            </a>
          </div>
        </Modal>
      )}
      <Carousel slides={slides}></Carousel>
      <Services />
      <Installations />
      <Location />
      <PopUp />
    </div>
  );
}
