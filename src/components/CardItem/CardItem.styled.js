import styled from "styled-components";
import { baseTheme } from "styles/theme";

export const CarItemContainer = styled.div`
  background-color: ${baseTheme.background.white};
  border-radius: 24px;
  width: 100%;
  padding: 18px;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    /* width: 1184px; */
    display: flex;
    margin-bottom: 32px;
    padding: 24px;
  }
  @media screen and (min-width: 1440px) {
    width: 1184px;
    margin: 0 auto;
  }
`;

export const CardWrap = styled.div`
  position: relative;
  box-sizing: border-box;
  max-width: 1184px;
  align-items: center;
  border-radius: 24px;
  background: rgb(251, 251, 251);
`;
export const TopBlock = styled.div`
  margin-bottom: 12px;
  span {
    color: ${baseTheme.colors.primaryText};
  }
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
  }
`;
export const WrapImg = styled.div`
  margin: 0 auto;
  position: relative;
  padding: 12px;
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  border: 2px solid rgba(84, 190, 150, 0.2);
  border-radius: 30px;
  align-self: flex-start;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
    /* margin-right: 24px; */
    margin: 0 24px 0 0;
  }
`;

export const Photo = styled.img`
  width: 76px;
  border-radius: 15px;
  height: 76px;
  @media screen and (min-width: 768px) {
    width: 96px;
    height: 96px;
  }
`;
export const OnlineIcon = styled.img`
  position: absolute;
  top: 3px;
  left: 92px;
  width: 14px;
  border-radius: 15px;
  height: 14px;
`;

export const CardInfoName = styled.div`
  p {
    font-size: 12px;
    margin-bottom: 8px;
    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }

  span {
    font-size: 16px;

    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
  }
  @media screen and (min-width: 768px) {
  }
`;

export const CardInfoBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    /* display: flex;
    align-items: center; */
    margin-top: 0;
  }
`;

export const InfoList = styled.ul`
  display: flex;
  align-items: center;
`;
export const InfoItem = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;
  &::before {
    content: "";
    display: block;
    height: 16px;
    width: 1px;
    background-color: rgba(17, 16, 28, 0.2);
    margin: 0 4px;
  }
  &:first-child::before {
    content: none;
  }
  & :last-child::after {
    content: none;
  }
  @media screen and (min-width: 768px) {
    &::before {
      margin: 0 16px;
    }
  }
`;
export const InfoItemText = styled.p`
  font-size: 12px;
  color: ${baseTheme.colors.primaryText};
  span {
    color: #38cd3e;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const CardCharacter = styled.div``;
export const CharacterList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
  span {
    color: ${baseTheme.colors.primaryText};
  }
`;
export const SpanAge = styled.span`
  text-decoration-line: underline;
  color: ${baseTheme.colors.primaryText};
`;
export const CaracterItem = styled.li`
  font-size: 12px;
  background-color: ${baseTheme.background.gray};
  border-radius: 24px;
  padding: 8px 16px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const CardDescription = styled.div`
  margin-bottom: 48px;
`;

export const Text = styled.p`
  font-weight: 400;
  color: ${baseTheme.colors.secondaryText};
  margin-bottom: 14px;
`;

export const BtnLike = styled.button`
  background-color: transparent;
  /* width: 10px;
  height: 10px; */
  padding: 0;
  img {
    width: 12px;
    height: 12px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    margin-left: 50px;
    img {
      width: 26px;
      height: 26px;
    }
  }
`;

export const ReadMoreBtn = styled.button`
  font-weight: 500;
  text-decoration-line: underline;
  background-color: transparent;
  padding: 0;
  color: ${baseTheme.colors.primaryText};
`;
export const InfoBlock = styled.div``;
export const InfoItemReview = styled.li`
  /* display: flex; */
`;
export const InfoSpan = styled.span`
  width: 44px;
  height: 44px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  background-color: ${baseTheme.colors.secondaryText};
  margin-right: 12px;
`;
export const InfoReviewName = styled.p`
  margin-bottom: 4px;
`;
export const InfoRatingBlock = styled.div`
  display: flex;
  img {
    margin-right: 8px;
  }
`;
export const InfoBlockReviewer = styled.div``;
export const InfoRating = styled.p``;
export const InfoComment = styled.p`
  margin-bottom: 25px;
`;
export const InfoBlockContainer = styled.div`
  display: flex;
  margin-bottom: 18px;
`;
export const BtnAppointment = styled.button`
  box-sizing: border-box;
  padding: 14px 28px;
  font-size: 16px;
  margin-top: 62px;
  letter-spacing: -0.01em;
  text-decoration: none;
  border-radius: 30px;
  display: flex;
  flex-wrap: nowrap;
  height: 48px;
  width: 215px;
  align-items: center;
  background-color: ${baseTheme.background.main};
  transition: box-shadow 0.3s ease;
  color: ${baseTheme.background.white};
  cursor: pointer;

  &:hover {
    background-color: ${baseTheme.background.secondaryMain};
  }
`;
