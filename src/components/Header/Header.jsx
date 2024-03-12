import UserNav from "../../components/UserNav/UserNav";
import Navigation from "../Navigation/Navigation";
import {
  BurgerBtn,
  HeaderContainer,
  HeaderRightSide,
  HeaderWrap,
  LogoNav,
  UserDiv,
} from "./Header.styled";
import AuthNav from "../../components/AuthNav/AuthNav";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";

import MobileModal from "components/Modal/MobileModal/MobileModal";
import { ReactComponent as MenuIcon } from "../../assets/img/menu.svg";

const Header = ({ BGColor }) => {
  const [authUser, setAuthUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleModalToggal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <HeaderContainer $BGColor={BGColor}>
      <HeaderWrap>
        <div>
          <LogoNav to="/">Nanny.Services</LogoNav>
        </div>
        <HeaderRightSide>
          <UserDiv>
            <Navigation />
            {authUser ? <UserNav /> : <AuthNav />}
          </UserDiv>
        </HeaderRightSide>

        <BurgerBtn onClick={handleModalToggal}>
          <MenuIcon width={30} height={30} />
        </BurgerBtn>
      </HeaderWrap>
      {isModalOpen && <MobileModal handleModalToggle={handleModalToggal} />}
    </HeaderContainer>
  );
};
export default Header;
