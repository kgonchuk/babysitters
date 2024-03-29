import styled from "styled-components";
import { baseTheme } from "styles/theme";

export const CardListContainer = styled.div`
  padding: 0 20px;
  @media screen and (min-width: 768px) {
    padding: 0 45px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0 128px;
  }
`;
export const BtrLoadMore = styled.button`
  box-sizing: border-box;
  padding: 14px 40px;
  font-size: 16px;
  margin-top: 64px;
  letter-spacing: -0.01em;
  text-decoration: none;
  border-radius: 30px;
  display: flex;
  flex-wrap: nowrap;
  height: 48px;
  width: 159px;
  align-items: center;
  background-color: ${baseTheme.background.main};
  transition: box-shadow 0.3s ease;
  color: ${baseTheme.background.white};
  cursor: pointer;
  margin: 0 auto;
  &:hover {
    background-color: ${baseTheme.background.secondaryMain};
  }
`;
export const TextLink = styled.p`
  color: ${baseTheme.background.main};
  font-size: 20px;
  text-align: center;
  margin-top: 10px;
`;
export const EmptyText = styled.p`
  color: ${baseTheme.background.main};
  font-size: 22px;
  text-align: center;
  margin-top: 10px;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 64px;
`;
