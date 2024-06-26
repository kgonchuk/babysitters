import styled from "styled-components";
import { baseTheme } from "../../styles/theme";

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
export const UserData = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  color: ${baseTheme.background.white};
`;
export const Button = styled.button`
  width: 124px;
  height: 48px;
  background-color: inherit;
  border: 1px solid ${baseTheme.colors.borderColor};
  border-radius: 30px;
  font-size: 16px;
  color: ${baseTheme.background.white};
  margin-right: 8px;
  margin-left: 8px;
  transition:${baseTheme.transition}
  &:hover {
    background-color: ${baseTheme.background.main};
    border: 1px solid ${baseTheme.background.main};
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;
export const UserWrap = styled.div`
  display: flex;
  align-items: center;
`;
