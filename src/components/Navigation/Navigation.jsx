import { useEffect, useState } from "react";
import {
  Catalog,
  Favorite,
  Home,
  Nav,
  NavLinkStyle,
} from "./Navigation.styled";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";


const Navigation = () => {
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
  return (
    <Nav>
      <Home>
        <NavLinkStyle to="/">Home</NavLinkStyle>
      </Home>
      <Catalog>
        <NavLinkStyle to="/nannies">Nannies</NavLinkStyle>
      </Catalog>
      {authUser && (
        <Favorite>
          <NavLinkStyle to="/favorite">Favorites</NavLinkStyle>
        </Favorite>
      )}
    </Nav>
  );
};
export default Navigation;
