import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useEffect, useState } from "react";
import {
  BtnAppointment,
  BtnLike,
  CarItemContainer,
  CaracterItem,
  CardCharacter,
  CardDescription,
  CardInfoBlock,
  CardInfoName,
  CardWrap,
  CharacterList,
  InfoBlock,
  InfoBlockContainer,
  InfoBlockReviewer,
  InfoComment,
  InfoItem,
  InfoItemReview,
  InfoItemText,
  InfoList,
  InfoRating,
  InfoRatingBlock,
  InfoReviewName,
  InfoSpan,
  OnlineIcon,
  Photo,
  ReadMoreBtn,
  SpanAge,
  Text,
  TopBlock,
  WrapImg,
} from "components/CardItem/CardItem.styled";
import iconOnline from "../../assets/img/eclips.svg";
import locationIcon from "../../assets/img/map-pin.svg";
import ratingIcon from "../../assets/img/Star 2.svg";
import heartIcon from "../../assets/img/heart.svg";
import heartChooseIcon from "../../assets/img/heart-choose.svg";
import { date } from "yup";
import ModalWindow from "components/Modal/ModalWindow/ModalWindow";
import ModalAppointment from "components/Modal/ModalAppointment/ModalAppointment";
import Notiflix from "notiflix";

const CardItem = ({ nanny }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [ageInYears, setAgeInYears] = useState(0);
  const [isMoreInfo, setMoreInfo] = useState(false);
  const [isAppModalOpen, setAppModalOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const userId = user?.uid;
      const storedFavorites =
        JSON.parse(localStorage.getItem(`favorites-${userId}`)) || [];
      setIsLiked(
        storedFavorites.some((fav) => fav.avatar_url === nanny.avatar_url)
      );
    });

    return () => unsubscribe();
  }, [nanny.avatar_url]);

  useEffect(() => {
    const userId = auth.currentUser?.uid;
    if (userId) {
      try {
        const userPreferences = JSON.parse(localStorage.getItem(userId)) || {};
        userPreferences.favorites = userPreferences.favorites || [];

        if (isLiked) {
          userPreferences.favorites.push(nanny.avatar_url);
        } else {
          userPreferences.favorites = userPreferences.favorites.filter(
            (id) => id !== nanny.avatar_url
          );
        }

        localStorage.setItem(userId, JSON.stringify(userPreferences));
      } catch (error) {
        console.error("Error writing to localStorage:", error);
      }
    }
  }, [isLiked, nanny.avatar_url]);

  useEffect(() => {
    const today = new Date();
    const birthday = new Date(nanny.birthday);
    const ageSec = today - birthday;
    const ageYear = Math.floor(ageSec / (365.25 * 24 * 60 * 60 * 1000));
    setAgeInYears(ageYear);
  }, [nanny]);

  const handlerClickLike = () => {
    const userId = auth.currentUser?.uid;
    if (userId) {
      const newIsFavorite = !isLiked;
      setIsLiked(newIsFavorite);

      const storedFavorites =
        JSON.parse(localStorage.getItem(`favorites-${userId}`)) || [];

      if (newIsFavorite) {
        localStorage.setItem(
          `favorites-${userId}`,
          JSON.stringify([...storedFavorites, nanny])
        );
      } else {
        const updatedFavorites = storedFavorites.filter(
          (fav) => fav.avatar_url !== nanny.avatar_url
        );
        localStorage.setItem(
          `favorites-${userId}`,
          JSON.stringify(updatedFavorites)
        );
      }
    } else {
      Notiflix.Notify.warning("Please log in to use this functionality.");
      console.error("Error: User not logged in.");
    }
  };
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
      <CarItemContainer>
        <WrapImg>
          <Photo src={nanny.avatar_url} alt="nannies_photo" />
          <OnlineIcon src={iconOnline} alt="online-icon" />
        </WrapImg>
        <CardWrap>
          <TopBlock>
            <CardInfoName>
              <p>Nanny</p>

              <span>{nanny.name}</span>
            </CardInfoName>
            <CardInfoBlock>
              <InfoList>
                <InfoItem>
                  <img src={locationIcon} alt="location-icon" />
                  <InfoItemText>{nanny.location}</InfoItemText>
                </InfoItem>
                <InfoItem>
                  <img src={ratingIcon} alt="rating-icon" />
                  <InfoItemText>Rating:{nanny.rating}</InfoItemText>
                </InfoItem>
                <InfoItem>
                  <InfoItemText>
                    Price / 1 hour: <span>{nanny.price_per_hour}$</span>
                  </InfoItemText>
                </InfoItem>
              </InfoList>{" "}
              <BtnLike type="button" onClick={handlerClickLike}>
                {isLiked ? (
                  <img src={heartChooseIcon} alt="" />
                ) : (
                  <img src={heartIcon} alt="" />
                )}
              </BtnLike>
            </CardInfoBlock>
          </TopBlock>
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
          <CardDescription>
            <Text>{nanny.about}</Text>
          </CardDescription>

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
        </CardWrap>
        {isAppModalOpen && (
          <ModalWindow handleModalToggle={handleModalOpen} AppWidth>
            <ModalAppointment
              nanny={nanny}
              handleModalToggle={handleModalOpen}
            />
          </ModalWindow>
        )}
      </CarItemContainer>
    </>
  );
};
export default CardItem;
