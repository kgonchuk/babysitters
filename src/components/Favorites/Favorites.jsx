import CardItem from "components/CardItem/CardItem";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useCallback, useEffect, useState } from "react";
import { BtrLoadMore, CardListContainer } from "./Favorite.styled";

const Favorites = ({ filterOption }) => {
  const [favoriteCards, setFavoriteCards] = useState([]);
  const [visibleFavoriteCards, setVisibleFavoriteCards] = useState(1);

  const fetchData = useCallback(() => {
    try {
      const userId = auth.currentUser?.uid;
      if (userId) {
        const storedFavorites =
          JSON.parse(localStorage.getItem(`favorites-${userId}`)) || [];
        setFavoriteCards(storedFavorites);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchData();
      }
    });

    return () => unsubscribe();
  }, [fetchData]);

  const applyFilter = (nannyArray, option) => {
    switch (option) {
      case "A to Z":
        return nannyArray.slice().sort((a, b) => a.name.localeCompare(b.name));
      case "Z to A":
        return nannyArray.sort((a, b) => b.name.localeCompare(a.name));
      case "Less than 10$":
        return nannyArray.filter((nanny) => nanny.price_per_hour <= 10);
      case "Greater than 10$":
        return nannyArray.filter((nanny) => nanny.price_per_hour >= 10);
      case "Popular":
        return nannyArray.sort((a, b) => b.rating - a.rating);
      case "Not popular":
        return nannyArray.sort((a, b) => a.rating - b.rating);
      case "Show all":
        return nannyArray;
      default:
        return nannyArray;
    }
  };

  const filteredFavoriteCards = applyFilter(favoriteCards, filterOption);

  const handleLoadMore = () => {
    const remainingCards =
      filteredFavoriteCards.length - visibleFavoriteCards * 3;
    const newVisibleCards = Math.min(3, remainingCards);
    setVisibleFavoriteCards(
      (prevVisibleFavoriteCards) => prevVisibleFavoriteCards + newVisibleCards
    );
  };

  return (
    <CardListContainer>
      {filteredFavoriteCards.length === 0 ? (
        <div>
          <p>No favorites yet. You can choose it in catalog.</p>
        </div>
      ) : (
        <div>
          {filteredFavoriteCards
            .slice(0, visibleFavoriteCards * 3)
            .map((favoriteCard, index) => (
              <CardItem key={index} nanny={favoriteCard} />
            ))}
          {filteredFavoriteCards.length > visibleFavoriteCards * 3 && (
            <BtrLoadMore onClick={handleLoadMore}>Load more</BtrLoadMore>
          )}
        </div>
      )}
    </CardListContainer>
  );
};

//комент чек
export default Favorites;
