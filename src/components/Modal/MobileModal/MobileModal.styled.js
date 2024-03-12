import styled from "styled-components";
import { baseTheme } from "styles/theme";

export const MobileContainer = styled.div`
  position: fixed;
  top: 8px;
  right: 0;
  width: 300px;
  height: 752px;
  border-radius: 24px;
  background-color: ${baseTheme.background.overlay};
  z-index: 1200;
  background: ${baseTheme.background.main};
  padding: 60px;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
`;
export const MobileWrap = styled.div``;
export const CloseBtn = styled.button`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 24px;
  right: 28px;
  background-color: inherit;
  svg {
  }
`;
export const MobileOverlay = styled.div`
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
