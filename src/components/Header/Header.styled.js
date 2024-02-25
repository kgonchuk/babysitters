import styled, { css } from "styled-components";
import { baseTheme } from "../../styles/theme";

export const HeaderContainer = styled.header`
  /* position: absolute;
  z-index: 10;
  top: 32px;
  left: 0;
  background-color: transparent;
  width: 100%;
  margin-top: 0;
  margin-right: auto; */
  ${(props) => {
    if (props.$homepage) {
      return css`
        position: absolute;
        z-index: 10;
        top: 32px;
        left: 0;
        background-color: transparent;
        /* border-bottom: 1px solid var(--color-button-border); */
        width: 100%;
        margin-top: 0;
        margin-right: auto;
      `;
    }
    return css`
      background-color: ${baseTheme.background.main};
    `;
  }}
  NavLink {
    color: ${baseTheme.background.white};
    font-size: 24px;
    line-height: 1.17;
    letter-spacing: -0.48px;
    width: 252px;
  }
`;
export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 88px;
  padding: 20px 96px;
  color: ${baseTheme.background.white};
  /* background-color: ${baseTheme.background.main}; */
`;

export const HeaderRightSide = styled.div`
  display: flex;
  align-items: center;
`;
