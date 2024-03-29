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
export const FilterTitle = styled.label`
  font-size: 14px;
  color: ${baseTheme.colors.grayText};
  margin-bottom: 8px;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.15;
  color: ${baseTheme.colors.grayText};
`;
