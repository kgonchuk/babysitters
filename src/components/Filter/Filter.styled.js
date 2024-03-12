import styled from "styled-components";
import { baseTheme } from "../../styles/theme";
export const FilterContainer = styled.div`
  position: relative;
  display: inline-block;

  padding: 20px 20px;
  @media screen and (min-width: 768px) {
    padding: 45px 45px;
  }
  @media screen and (min-width: 1440px) {
    padding: 64px 0 32px 128px;
  }
`;
export const FilterTitle = styled.h1`
  font-size: 14px;
  color: ${baseTheme.colors.grayText};
  margin-bottom: 8px;
`;

export const ArrowButton = styled.button`
  color: rgb(251, 251, 251);
  justify-content: space-between;
  display: flex;
  padding: 14px 0px 14px 18px;
  font-weight: 500;
  font-size: 16px;
  align-items: center;
  border-radius: 14px;
  background: ${baseTheme.background.main};
  cursor: pointer;
  width: 226px;
`;
export const ArrowDown = styled.span`
  margin-right: 14px;
`;
export const ArrowUp = styled.span`
  margin-right: 14px;
`;
export const FilterList = styled.ul`
  z-index: 100;
  list-style: none;
  border-radius: 14px;
  color: rgba(25, 26, 21, 0.3);
  box-shadow: 0px 20px 69px 0px rgba(0, 0, 0, 0.07);
  background-color: rgb(255, 255, 255);
  width: 226px;
  height: 244px;
  padding-top: 14px;
  padding-bottom: 18px;
  padding-left: 18px;
  position: absolute;
  top: 85%;

  max-width: 226px;
  overflow-y: auto;
  display: ${(props) => (props.$isOpen ? "block" : "none")};
`;
export const FilterItem = styled.li`
  margin-bottom: 12px;
  color: rgba(25, 26, 21, 0.3);
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    color: rgb(25, 26, 21);
  }
`;
