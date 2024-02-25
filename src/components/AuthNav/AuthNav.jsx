import { useState } from "react";
import { AuthContainer, LoginBtn, RegisterBtn } from "./AuthNav.styled";
import LogIn from "../Modal/LogIn/LogIn";
import ModalWindow from "../Modal/ModalWindow/ModalWindow";
import Register from "../Modal/Register/Register";

const AuthNav = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleLoginOpen = () => {
    setIsLoginModalOpen((state) => !state);
  };

  const handleRegisterOpen = () => {
    setIsRegisterModalOpen((state) => !state);
  };

  return (
    <>
      <AuthContainer>
        <LoginBtn type="button" onClick={handleLoginOpen}>
          Log In
        </LoginBtn>
        <RegisterBtn to="register" onClick={handleRegisterOpen}>
          Register
        </RegisterBtn>
      </AuthContainer>
      {isLoginModalOpen && (
        <ModalWindow handleModalToggle={handleLoginOpen}>
          <LogIn />
        </ModalWindow>
      )}
      {isRegisterModalOpen && (
        <ModalWindow handleModalToggle={handleRegisterOpen}>
          <Register />
        </ModalWindow>
      )}
    </>
  );
};
export default AuthNav;
