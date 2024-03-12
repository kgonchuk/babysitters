import styled from "styled-components";
import heroImg from "../../assets/img/Hero1.jpg";
import { NavLink } from "react-router-dom";
import { baseTheme } from "../../styles/theme";

export const Section = styled.section`
  width: 100%;
  @media screen and (min-width: 768px) {
    padding: 32px;
  }
`;

export const Wrap = styled.div`
  position: relative;
  /* max-width: 1376px; */

  @media screen and (min-width: 768px) {
    display: flex;
    min-height: 736px;
  }
`;

export const TextContainer = styled.div`
  background-color: ${baseTheme.background.main};
  border-radius: 30px;
  padding-top: 30px;
  @media screen and (min-width: 768px) {
    width: 50%;
    border-radius: 30px 0 0 30px;
    padding-top: 0;
  }
`;
export const Content = styled.div`
  color: ${baseTheme.background.white};

  margin-left: 32px;
  margin-top: 125px;
  min-height: 300px;
  @media screen and (min-width: 768px) {
    margin-left: 64px;
    margin-top: 251px;
    max-width: 517px;
    line-height: 1;
    letter-spacing: -2.1px;
  }
`;
export const ImageContainer = styled.div`
  background-image: url(${heroImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 30px;
  width: 100%;
  height: 300px;
  min-height: 300px;
  @media screen and (min-width: 768px) {
    width: 50%;
    height: 100%;
    border-radius: 0 30px 30px 0;
    min-height: 736px;
  }
`;
export const Title = styled.h1`
  font-size: 25px;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 70px;
    margin-bottom: 28px;
  }
`;
export const Text = styled.p`
  font-weight: 400;
  font-size: 10px;
  margin-bottom: 32px;
  padding-top: 30px;
  @media screen and (min-width: 768px) {
    font-size: 28px;
    margin-bottom: 64px;
  }
`;
export const StartBtn = styled(NavLink)``;
export const Button = styled.button`
  font-size: 10px;
  width: 120px;
  height: 40px;
  border-radius: 30px;
  border: 1px solid ${baseTheme.colors.borderColor};
  background-color: inherit;
  color: ${baseTheme.background.white};

  fill: currentColor;
  span {
    margin-left: 8px;
  }
  transition: ${baseTheme.transition};
  &:hover {
    background-color: ${baseTheme.background.white};
    color: ${baseTheme.background.main};
    svg {
      width: 12px;
      height: 12px;
      fill: ${baseTheme.background.main};
      transform: rotate(53deg);
    }
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
    width: 230px;
    height: 60px;
    & svg {
      width: 18px;
      height: 18px;
    }
  }
`;
export const ImageBlock = styled.div`
  position: absolute;
  right: 50px;
  bottom: 50px;
  display: flex;
  gap: 16px;
  padding: 16px;
  border-radius: 20px;
  background-color: ${baseTheme.background.white};
  color: ${baseTheme.background.secondaryText};
  & .right-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 27px;
    height: 27px;
    border-radius: 13px;
    background-color: ${baseTheme.background.main};
    @media screen and (min-width: 768px) {
      width: 54px;
      height: 54px;
    }
    & svg {
      width: 15px;
      height: 15px;
      background-color: ${baseTheme.background.main};
      @media screen and (min-width: 768px) {
        width: 30px;
        height: 30px;
      }
    }
  }
  @media screen and (min-width: 768px) {
    padding: 32px;
  }
`;
export const ImageText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  color: ${baseTheme.background.secondaryText};
  & .text {
    font-family: "HelveticaNeue-400";
    font-size: 12px;
    font-weight: 400;
    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }
  & .count {
    font-family: "HelveticaNeue-500";
    font-size: 16px;
    font-weight: 700;
    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
  }
`;
export const Svg = styled.svg``;
export const Span = styled.span``;
