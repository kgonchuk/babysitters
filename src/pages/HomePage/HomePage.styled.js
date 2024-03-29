import styled from "styled-components";
import heroImg from "../../assets/img/Hero1.jpg";
import { baseTheme } from "../../styles/theme";

export const Section = styled.section`
  width: 100%;
  @media screen and (min-width: 768px) {
    padding: 32px;
  }
`;

export const Wrap = styled.div`
  position: relative;

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
    margin-left: 50px;
    margin-top: 235px;
    max-width: 417px;
    line-height: 1;
    letter-spacing: -2.1px;
  }
  @media screen and (min-width: 1440px) {
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
    font-size: 50px;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1440px) {
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
    font-size: 20px;
    margin-bottom: 48px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 28px;
    margin-bottom: 64px;
  }
`;

export const Button = styled.button`
  border: 1px solid rgba(251, 251, 251, 0.4);
  border-radius: 30px;
  padding: 18px 50px;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.01em;
  background-color: transparent;
  color: ${baseTheme.background.white};
  &:hover {
    transition: all 0.3s;
    background-color: #fbfbfb;
    color: ${baseTheme.background.main};
    svg {
      transition: transform 0.3s;
      transform: rotate(53deg);
      fill: ${baseTheme.background.main};
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
    font-size: 12px;
    color: ${baseTheme.colors.secondaryText};
    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }
  & .count {
    font-family: "HelveticaNeue-500";
    font-size: 16px;
    font-weight: 700;
    color: ${baseTheme.colors.primaryText};
    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
  }
`;
export const Svg = styled.svg`
  fill: ${baseTheme.background.white};
  width: 18px;
  height: 18px;
  margin-left: 18px;
`;
export const Span = styled.span``;
