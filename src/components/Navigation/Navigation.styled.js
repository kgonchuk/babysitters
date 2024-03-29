import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { baseTheme } from "../../styles/theme";

export const Nav = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 20px;
    margin-right: 92px;
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 40px;
    margin-right: 92px;
    align-items: center;
  }
`;
export const NavLinkStyle = styled(NavLink)`
  font-size: 16px;
  font-weight: 400;
  color: ${baseTheme.background.white};
  line-height: 1.25;
  letter-spacing: -0.16px;
  transition: ${baseTheme.transition};
  &.active {
    &::after {
      content: "";
      display: block;
      width: 8px;
      height: 8px;
      border-radius: 100%;
      background-color: ${baseTheme.background.white};
      /* margin: 4px auto; */
      transform: translateX(-50%);
      margin-top: 4px;
      margin-left: 30px;
    }
  }
  @media screen and (min-width: 768px) {
    &.active {
      &::after {
        /* content: "";
        display: block;
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background-color: ${baseTheme.background.white}; */
        margin: 4px auto;
        /* transform: translateX(-50%); */
      }
    }
  }
`;
export const Home = styled.li`
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    /* margin-bottom: 20px; */
  }
`;
export const Catalog = styled.li`
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    /* margin-bottom: 20px; */
  }
`;
export const Favorite = styled.li`
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`;
