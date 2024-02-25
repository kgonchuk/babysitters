import styled from "styled-components";
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
  width: 566px;
  max-height: 100%;
  background-color: ${baseTheme.background.white};
  border-radius: 30px;
  padding: 64px;
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
