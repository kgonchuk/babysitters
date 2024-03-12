import styled from "styled-components";
import { baseTheme } from "../../styles/theme";
export const AuthContainer = styled.div``;
export const LoginBtn = styled.button`
  width: 124px;
  height: 48px;
  background-color: inherit;
  border: 1px solid ${baseTheme.colors.borderColor};
  border-radius: 30px;
  font-size: 16px;
  color: ${baseTheme.background.white};
  margin-right: 8px;
  transition: ${baseTheme.transition};
  &:hover {
    background-color: ${baseTheme.background.main};
    color: ${baseTheme.background.white};
    border: 1px solid ${baseTheme.background.main};
  }
`;

export const RegisterBtn = styled.button`
  width: 168px;
  height: 48px;
  background-color: ${baseTheme.background.main};
  border-radius: 30px;
  font-size: 16px;
  color: ${baseTheme.background.white};
  transition: ${baseTheme.transition};
  &:hover {
    background-color: ${baseTheme.background.white};
    color: ${baseTheme.background.main};
  }
`;
