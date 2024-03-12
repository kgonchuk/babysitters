import styled, { css } from "styled-components";
import { baseTheme } from "../../../styles/theme";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${baseTheme.background.overlay};
  z-index: 1200;
`;
export const Modal = styled.div`
  position: relative;
  width: 310px;
  max-height: 100%;
  background-color: ${baseTheme.background.white};
  border-radius: 30px;
  padding: 32px;

  @media screen and (min-width: 768px) {
    padding: 64px;
    ${(props) => {
      if (props.$AppWidth) {
        return css`
          width: 500px;
        `;
      }
      return css`
        width: 566px;
      `;
    }}
  }
  @media screen and (min-width: 1440px) {
    padding: 64px;
    ${(props) => {
      if (props.$AppWidth) {
        return css`
          width: 600px;
        `;
      }
      return css`
        width: 566px;
      `;
    }}
  }
`;
export const CloseBtn = styled.button`
  svg {
    width: 16px;
    height: 16px;
    background-color: inherit;
    position: absolute;
    top: 28px;
    right: 28px;
  }
`;
