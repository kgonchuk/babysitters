import { useEffect, useState } from "react";
import { Nav, NavLinkStyle } from "./Navigation.styled";
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
      <NavLinkStyle to="/">Home</NavLinkStyle>

      <NavLinkStyle to="/nannies">Nannies</NavLinkStyle>

      {authUser && <NavLinkStyle to="/favorite">Favorites</NavLinkStyle>}
    </Nav>
  );
};
export default Navigation;
