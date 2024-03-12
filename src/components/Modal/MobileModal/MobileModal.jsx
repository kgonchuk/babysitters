import AuthNav from "components/AuthNav/AuthNav";
import UserNav from "components/UserNav/UserNav";
import {
  CloseBtn,
  MobileContainer,
  MobileOverlay,
  MobileWrap,
} from "./MobileModal.styled";
import Navigation from "components/Navigation/Navigation";
import { useEffect, useState } from "react";
import close from "../../../assets/img/sprite.svg";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase/firebase";

const MobileModal = ({ handleModalToggle }) => {
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

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
  return (
    <MobileOverlay onClick={handleBackdropClick}>
      <MobileContainer>
        <CloseBtn onClick={handleModalToggle}>
          <svg width={16} height={16}>
            <use href={`${close}#icon-close`} />
          </svg>
        </CloseBtn>
        <MobileWrap>
          <Navigation />
          {authUser ? <UserNav /> : <AuthNav />}
        </MobileWrap>
      </MobileContainer>
    </MobileOverlay>
  );
};
export default MobileModal;
