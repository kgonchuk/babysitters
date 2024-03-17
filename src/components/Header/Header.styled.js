import styled, { css } from "styled-components";
import { baseTheme } from "../../styles/theme";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  ${(props) => {
    if (props.$BGColor) {
      return css`
        background-color: ${baseTheme.background.main};
      `;
    }
    return css`
      position: absolute;
      z-index: 10;
      top: 32px;
      left: 0;
      background-color: transparent;
      border-bottom: 1px solid var(--color-button-border);
    `;
  }}
  margin: 0 auto;
  width: 100%;
  /* max-width: 320px; */
`;
export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 15px;
  color: ${baseTheme.background.white};
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-height: 88px;
    padding: 20px 96px;
  }
  @media screen and (min-width: 1440px) {
    padding: 20px 96px;
  }
`;

export const HeaderRightSide = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
  }
`;
export const LogoNav = styled(NavLink)`
  font-size: 18px;

  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
`;

export const BurgerBtn = styled.div`
  display: flex;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const UserDiv = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;
