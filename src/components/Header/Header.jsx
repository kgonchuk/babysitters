import { NavLink } from "react-router-dom";

// import UserNav from "../../components/UserNav/UserNav";
import Navigation from "../Navigation/Navigation";
import { HeaderContainer, HeaderRightSide, HeaderWrap } from "./Header.styled";
import AuthNav from "../../components/AuthNav/AuthNav";

const Header = ({ homepage }) => {
  return (
    <HeaderContainer homepage={homepage}>
      <HeaderWrap>
        <NavLink to="/">Nanny.Services</NavLink>
        <HeaderRightSide>
          <Navigation />
          {/* <UserNav /> */}
          <AuthNav />
        </HeaderRightSide>
      </HeaderWrap>
    </HeaderContainer>
  );
};
export default Header;
