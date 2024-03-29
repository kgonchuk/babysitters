import styled from "styled-components";
import { baseTheme } from "styles/theme";

export const WrapImg = styled.div`
  margin: 0 auto;
  position: relative;
  padding: 5px;
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
    margin: 0 24px 0 0;
    padding: 12px;
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
export const CaracterItem = styled.li`
  font-size: 12px;
  background-color: ${baseTheme.background.gray};
  border-radius: 24px;
  padding: 8px 16px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
export const OnlineIcon = styled.img`
  position: absolute;
  top: 3px;
  left: 81px;
  width: 14px;
  border-radius: 15px;
  height: 14px;
  @media screen and (min-width: 768px) {
    left: 92px;
  }
`;
export const SpanAge = styled.span`
  text-decoration-line: underline;
  color: ${baseTheme.colors.primaryText};
`;
export const BtnLike = styled.button`
  background-color: transparent;

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
  display: flex;
`;
export const InfoBlock = styled.div``;
export const InfoItemReview = styled.li`
  display: flex;
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
  margin-top: 48px;
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

// =========================================
export const Item = styled.li`
  position: relative;
  display: flex;
  width: 100%;

  border-radius: 24px;
  padding: 1.5rem;
  background-color: ${baseTheme.background.white};
  margin-bottom: 32px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (min-width: 768px) {
    max-width: 1184px;
    min-width: 320px;
  }
`;

export const HeartIcon = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
`;

export const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
  width: 120px;
  min-width: 120px;
  height: 120px;
  border-radius: 30px;
  border: 2px solid ${baseTheme.colors.borderColor};
`;

export const Img = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 15px;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 87.78%;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* margin-bottom: 24px; */
  margin-right: 40px;
  font-size: 10px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-weight: 500;
  line-height: 1.5;
  font-size: 10px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const NameText = styled.h3`
  color: ${baseTheme.colors.primaryText};
  font-size: 1.5em;
  margin-bottom: 24px;
`;
export const Local = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  line-height: 1.5em;
  &::after {
    content: "";
    display: block;
    height: 16px;
    width: 1px;
    background-color: rgba(17, 16, 28, 0.2);
    margin: 0 0 0 12px;
  }

  @media screen and (min-width: 768px) {
    &::before {
      margin: 0 16px;
    }
  }
`;
export const PriceRating = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  height: 24px;
  @media screen and (max-width: 780px) {
    height: auto;
  }
`;

export const Rating = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  &::after {
    content: "";
    display: block;
    height: 16px;
    width: 1px;
    background-color: rgba(17, 16, 28, 0.2);
    margin: 0 0 0 12px;
  }

  @media screen and (min-width: 768px) {
    &::before {
      margin: 0 16px;
    }
  }
`;

export const Star = styled.img`
  display: flex;
  width: 16px;
  height: 16px;
`;

export const RatingText = styled.p`
  display: flex;
  white-space: nowrap;
  color: ${baseTheme.colors.primaryText};
  font-weight: 500;
  line-height: 1.5;
`;

export const PriceText = styled.p`
  display: flex;
  white-space: nowrap;
  color: ${baseTheme.colors.primaryText};
  font-weight: 500;
  line-height: 1.5;
`;

export const PriceSpan = styled.span`
  font-weight: 600;
  color: #38cd3e;
  margin-left: 4px;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 8px;
`;

export const FeaturesText = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-size: 10px;
  line-height: 1.5;
  background-color: ${baseTheme.background.gray};
  border-radius: 24px;
  padding: 8px 16px;
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const FeaturesSpan = styled.span`
  display: flex;
  color: ${baseTheme.colors.primaryText};
`;

export const AboutText = styled.p`
  font-weight: 400;
  line-height: 1.2;
  color: ${baseTheme.colors.secondaryText};
  margin-top: 24px;
  margin-bottom: 14px;
  text-align: left;
`;

export const BtnReadMore = styled.button`
  cursor: pointer;
  display: flex;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${baseTheme.colors.primaryText};
  color: ${baseTheme.colors.primaryText};
  height: 24px;
  width: 82px;
  font-weight: 500;
  line-height: 1.5;
`;

export const BtnMakeAppointment = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 227px;
  height: 48px;
  border-radius: 30px;
  border: none;
  background-color: ${baseTheme.background.main};
  color: ${baseTheme.background.white};
  font-weight: 500;
  line-height: 1.2;
  margin-top: 24px;
  &:hover {
    background-color: "#36A379";
  }
`;

export const NotAuthMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: none;
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 1.5;
  color: #d81f21;
`;
export const AdditionalInfoWrapper = styled.div`
  font-size: 10px;
  @media screen and (min-width: 768px) {
    width: 783px;
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    font-size: 12px;
  }
  @media screen and (min-width: 1440px) {
    width: 783px;
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    font-size: 16px;
  }
`;
