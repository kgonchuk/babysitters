import { createPortal } from "react-dom";
import { Modal, Overlay, CloseBtn } from "./ModalWindow.styled";

import { useEffect } from "react";
import close from "../../../assets/img/sprite.svg";

const modalRoot = document.querySelector("#modal-root");

const ModalWindow = ({ children, handleModalToggle, AppWidth }) => {
  useEffect(() => {
    const body = document.body;
    body.style.overflow = "hidden";
    return () => {
      body.style.overflow = "visible";
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        handleModalToggle();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleModalToggle]);

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      handleModalToggle();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <Modal $AppWidth={AppWidth}>
        <CloseBtn onClick={handleModalToggle}>
          <svg>
            <use href={`${close}#icon-close`} />
          </svg>
        </CloseBtn>
        {children}
      </Modal>
    </Overlay>,
    modalRoot
  );
};
export default ModalWindow;
