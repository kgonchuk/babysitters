import styled from "styled-components";
import { baseTheme } from "styles/theme";

export const CardListContainer = styled.div`
  padding: 0 20px 20px;
  @media screen and (min-width: 768px) {
    padding: 0 45px 20px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0 128px 30px;
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
export const SelectWrap = styled.div`
  margin-bottom: 32px;
  width: 226px;
`;

export const Label = styled.label`
  gap: 8px;
  display: flex;
  flex-direction: column;
  color: rgb(138, 138, 137);

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0%;
  outline: none;
`;

export const Select = styled.select`
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 10px;
  width: 100%;
  height: 40px;
  background: ${baseTheme.background.main};
  color: ${baseTheme.background.white};

  & option:checked {
    cursor: pointer;
    color: ${baseTheme.colors.primaryText};

    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 0%;
  }

  & option {
    cursor: pointer;
    color: gray;

    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0%;
    border-radius: 14px;
  }

  @media (min-width: 768px) {
    padding: 10px 18px;
    border-radius: 14px;
    width: 226px;
    height: 48px;

    & option:checked {
      font-size: 18px;
      font-weight: 500;
    }

    & option {
      font-size: 18px;

      border-radius: 14px;
    }
    & select option {
      border-radius: 14px;
    }
  }
`;
export const InfoBlock = styled.div`
  margin: 0 auto;
  span {
    color: ${baseTheme.background.main};
  }
`;
