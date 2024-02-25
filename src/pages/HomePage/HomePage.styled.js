import styled from "styled-components";
import heroImg from "../../assets/img/Hero1.jpg";
import { NavLink } from "react-router-dom";
import { baseTheme } from "../../styles/theme";

export const Section = styled.section`
  padding: 32px;
  width: 100%;
`;

export const Wrap = styled.div`
  display: flex;
  position: relative;
  /* max-width: 1376px; */
  min-height: 736px;
`;

export const TextContainer = styled.div`
  width: 50%;
  background-color: ${baseTheme.background.main};
  border-bottom-left-radius: 30px;
  border-top-left-radius: 30px;
`;
export const Content = styled.div`
  color: ${baseTheme.background.white};
  margin-top: 251px;
  max-width: 517px;
  margin-left: 64px;
  line-height: 1;
  letter-spacing: -2.1px;
`;
export const ImageContainer = styled.div`
  width: 50%;
  background-image: url(${heroImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0 30px 30px 0;
`;
export const Title = styled.h1`
  font-size: 70px;

  margin-bottom: 28px;
`;
export const Text = styled.p`
  font-weight: 400;
  font-size: 28px;
  margin-bottom: 64px;
`;
export const StartBtn = styled(NavLink)``;
export const Button = styled.button`
  width: 230px;
  height: 60px;
  border-radius: 30px;
  border: 1px solid ${baseTheme.colors.borderColor};
  background-color: inherit;
  color: ${baseTheme.background.white};
  font-size: 20px;
  span {
    margin-left: 8px;
  }
`;
export const ImageBlock = styled.div`
  position: absolute;
  right: 50px;
  bottom: 50px;
  display: flex;
  gap: 16px;
  padding: 32px;
  border-radius: 20px;
  background-color: ${baseTheme.background.white};
  color: ${baseTheme.background.secondaryText};
  & .red-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 54px;
    height: 54px;
    border-radius: 13px;
    background-color: ${baseTheme.background.main};
    & svg {
      width: 30px;
      height: 30px;
    }
  }
`;
export const ImageText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  color: ${baseTheme.background.secondaryText};
  & .text {
    font-family: "HelveticaNeue-400";
    font-size: 16px;
    font-weight: 400;
  }
  & .count {
    font-family: "HelveticaNeue-500";
    font-size: 24px;
    font-weight: 700;
  }
`;
export const Svg = styled.svg`
  fill: ${baseTheme.background.white};
`;
