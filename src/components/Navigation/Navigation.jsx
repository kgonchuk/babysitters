import { NavLink } from "react-router-dom";
import { Nav } from "./Navigation.styled";

const Navigation = () => {
  return (
    <Nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/nannies">Nannies</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/favorite">Favorites</NavLink>
        </li>
      </ul>
    </Nav>
  );
};
export default Navigation;
