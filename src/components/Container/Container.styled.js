import styled from "styled-components";

export const Container = styled.div`
  .container {
    width: 100%;
    margin: 0 auto;
    padding: 0;
  }
  @media screen and (min-width: 375px) {
  .container {
    min-width: 375px;
  }
}

@media screen and (min-width: 768px) {
  .container {
    min-width: 768px;
    padding: 0;
  }
}

@media screen and (min-width: 1184px) {
  .container {
    min-width: 1184px;
    padding: 0px;
  }
`;
