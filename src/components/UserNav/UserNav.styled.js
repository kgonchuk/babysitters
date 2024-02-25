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
  &:hover {
    background-color: ${baseTheme.background.main};
    border: 1px solid ${baseTheme.background.main};
  }
`;
