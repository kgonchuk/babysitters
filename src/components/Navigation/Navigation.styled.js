import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { baseTheme } from "../../styles/theme";

export const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-right: 92px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 40px;
    margin-right: 92px;
  }
`;
export const NavLinkStyle = styled(NavLink)`
  font-size: 16px;
  font-weight: 400;
  color: ${baseTheme.background.white};
  line-height: 1.25;
  letter-spacing: -0.01em;
  transition: ${baseTheme.transition};

  &.active {
    &::after {
      content: "";
      display: block;
      width: 8px;
      height: 8px;
      border-radius: 100%;
      background-color: ${baseTheme.background.white};

      transform: translateX(-50%);
      margin-top: 4px;
      margin-left: 30px;
    }
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;
