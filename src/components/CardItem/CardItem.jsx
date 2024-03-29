import { useEffect, useState } from "react";
import {
  AboutText,
  AdditionalInfoWrapper,
  BtnAppointment,
  CaracterItem,
  CardCharacter,
  CharacterList,
  Container,
  ContainerInfo,
  ContainerTitle,
  FeaturesSpan,
  FeaturesText,
  HeartIcon,
  Img,
  InfoBlock,
  InfoBlockContainer,
  InfoBlockReviewer,
  InfoComment,
  InfoItemReview,
  InfoRating,
  InfoRatingBlock,
  InfoReviewName,
  InfoSpan,
  Item,
  Local,
  Name,
  NameText,
  OnlineIcon,
  PriceRating,
  PriceSpan,
  PriceText,
  Rating,
  RatingText,
  ReadMoreBtn,
  SpanAge,
  Star,
  WrapImg,
} from "components/CardItem/CardItem.styled";
import iconOnline from "../../assets/img/eclips.svg";
import locationIcon from "../../assets/img/map-pin.svg";
import ratingIcon from "../../assets/img/star.svg";
import ModalWindow from "components/Modal/ModalWindow/ModalWindow";
import ModalAppointment from "components/Modal/ModalAppointment/ModalAppointment";

import sprite from "../../assets/img/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/selectors";
import {
  addFavorites,
  clearFavorites,
  deleteFavorites,
} from "../../redux/favoriteSlice";

import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";

const CardItem = ({ nanny }) => {
  const [ageInYears, setAgeInYears] = useState(0);
  const [isMoreInfo, setMoreInfo] = useState(false);
  const [isAppModalOpen, setAppModalOpen] = useState(false);

  const dispatch = useDispatch();
  const [modalIsOpenNotAuth, setModalIsOpenNotAuth] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(clearFavorites());
    }
  }, [dispatch, isLoggedIn]);

  const openModalNotAuth = () => {
    setModalIsOpenNotAuth(true);
  };

  const isFavorite = useSelector((state) =>
    state.favorites.favoritesNannies.some(
      (favorite) => favorite.name === nanny.name
    )
  );
  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(deleteFavorites(nanny));
    } else {
      if (isLoggedIn) {
        dispatch(addFavorites(nanny));
      } else {
        openModalNotAuth();
      }
    }
  };

  useEffect(() => {
    const today = new Date();
    const birthday = new Date(nanny.birthday);
    const ageSec = today - birthday;
    const ageYear = Math.floor(ageSec / (365.25 * 24 * 60 * 60 * 1000));
    setAgeInYears(ageYear);
  }, [nanny]);

  const handleMoreInfo = () => {
    setMoreInfo((prevSetMoreInfo) => !prevSetMoreInfo);
  };

  const firstLetter = (review) => {
    return review ? review[0].toUpperCase() : "";
  };
  const handleModalOpen = () => {
    setAppModalOpen((state) => !state);
  };
  return (
    <>
      <Item>
        <WrapImg>
          <Img src={nanny.avatar_url} alt="name" height={96} width={96} />{" "}
          <OnlineIcon src={iconOnline} alt="online-icon" />
        </WrapImg>
        <ContainerInfo>
          <ContainerTitle>
            <p>Nanny</p>
            <PriceRating>
              <Local>
                <Star src={locationIcon} alt="location" />
                <RatingText>{nanny.location}</RatingText>
              </Local>
              <svg width="16" height="16" style={{ fill: "#FFC531" }}>
                <use href={`${sprite}#star`} />
              </svg>
              <RatingText>Rating: {nanny.rating}</RatingText>
              <PriceText>
                Price / hour: <PriceSpan>${nanny.price_per_hour}</PriceSpan>
              </PriceText>
              <HeartIcon>
                {isFavorite ? (
                  <FaHeart
                    style={{
                      corsor: "pointer",
                      color: "#103931",
                    }}
                    size="26px"
                    onClick={toggleFavorite}
                  />
                ) : (
                  <FaRegHeart
                    style={{
                      corsor: "pointer",
                      color: "black",
                    }}
                    size="26px"
                    onClick={toggleFavorite}
                  />
                )}
              </HeartIcon>
            </PriceRating>
          </ContainerTitle>
          <NameText>{nanny.name}</NameText>{" "}
          <CardCharacter>
            <CharacterList>
              <CaracterItem>
                Age: <SpanAge>{ageInYears}</SpanAge>
              </CaracterItem>
              <CaracterItem>
                Experience: <span>{nanny.experience}</span>
              </CaracterItem>
              <CaracterItem>
                Kids age: <span>{nanny.kids_age}</span>
              </CaracterItem>
              <CaracterItem>
                Characters: <span>{nanny.characters.join(", ")}</span>
              </CaracterItem>
              <CaracterItem>
                Education: <span>{nanny.education}</span>
              </CaracterItem>
            </CharacterList>
          </CardCharacter>
          <AboutText>{nanny.about}</AboutText>{" "}
          {isMoreInfo ? (
            <>
              <ul>
                {nanny.reviews.map((review, index) => (
                  <InfoItemReview key={index}>
                    <InfoBlockContainer>
                      <InfoBlock>
                        <InfoSpan>{firstLetter(review.reviewer)}</InfoSpan>
                      </InfoBlock>
                      <InfoBlockReviewer>
                        <InfoReviewName>{review.reviewer}</InfoReviewName>
                        <InfoRatingBlock>
                          <img src={ratingIcon} alt="rating-icon" />
                          <InfoRating>{review.rating}.0</InfoRating>
                        </InfoRatingBlock>
                      </InfoBlockReviewer>
                    </InfoBlockContainer>
                    <InfoComment>{review.comment}</InfoComment>
                  </InfoItemReview>
                ))}
              </ul>
              <BtnAppointment type="button" onClick={handleModalOpen}>
                Make an appointment
              </BtnAppointment>
            </>
          ) : (
            <ReadMoreBtn onClick={handleMoreInfo}>Read more</ReadMoreBtn>
          )}
        </ContainerInfo>
      </Item>
    </>
  );
};
export default CardItem;
