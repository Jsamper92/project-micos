import React from "react";

export default function Modal(props) {
  const closeModal = (state) => {
    return props.closeModal(state);
  };

  return (
    <div className="c-modal">
      <div
        className="overlay"
        style={{ height: "100vh" }}
        onClick={() => closeModal(false)}
      ></div>
      <div
        className="c-modal__content"
        style={
          props.height
            ? {
                height: props.height,
              }
            : null
        }
      >
        <button className="c-modal__close" onClick={() => closeModal(false)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <figure className="c-modal__figure">
          {props.children && props.children}
          {props.currentImage && (
            <img src={props.currentImage} alt="" className="c-modal__figure" />
          )}
        </figure>
      </div>
    </div>
  );
}
