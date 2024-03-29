import CardItem from "components/CardItem/CardItem";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { nextPage } from "../../redux/Nannies/nanniesSlice";
import {
  selectCurrentPage,
  selectFavoritesNannies,
  selectFilter,
  selectItemsPerPage,
} from "../../redux/selectors";
import {
  BtrLoadMore,
  CardListContainer,
  EmptyText,
  TextLink,
} from "./Favorite.styled";

const Favorites = () => {
  const favorites = useSelector(selectFavoritesNannies);
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);
  const filter = useSelector(selectFilter);

  const applyFilter = (nannies, filter) => {
    switch (filter) {
      case "A to Z":
        return nannies.slice().sort((a, b) => a.name.localeCompare(b.name));
      case "Z to A":
        return nannies.slice().sort((a, b) => b.name.localeCompare(a.name));
      case "Less than 10$":
        return nannies.filter((nanny) => nanny.price_per_hour < 10);
      case "Greater than 10$":
        return nannies.filter((nanny) => nanny.price_per_hour > 10);
      case "Popular":
        return nannies.slice().sort((a, b) => b.rating - a.rating);
      case "Not popular":
        return nannies.slice().sort((a, b) => a.rating - b.rating);
      default:
        return nannies;
    }
  };
  const filteredNanny = applyFilter(favorites, filter);
  const displayNanny = filteredNanny.slice(0, currentPage * itemsPerPage);

  const hasFavorites = favorites.length !== 0;
  const hasFilteredPsychologists = displayNanny.length !== 0;
  const hasDisplayedPsychologists = displayNanny.length !== 0;
  const shouldDisplayNoMatchesMessage =
    !hasDisplayedPsychologists && hasFavorites && !hasFilteredPsychologists;
  const visibleItems =
    displayNanny.length < favorites.length && hasFilteredPsychologists;

  const handleLoadMore = () => {
    dispatch(nextPage());
  };
  return (
    <CardListContainer>
      {shouldDisplayNoMatchesMessage && (
        <div>
          <p>No matches with the current filter.</p>
        </div>
      )}
      {!hasFavorites && (
        <div>
          <EmptyText>Your list of favorite nannies is empty.</EmptyText>
          <TextLink>
            <Link to="/nannies">Explore our nannies</Link> to find someone you'd
            like to add.
          </TextLink>
        </div>
      )}
      {hasDisplayedPsychologists && (
        <ul>
          {displayNanny.map((nanny) => (
            <CardItem key={nanny.id} nanny={nanny} />
          ))}
        </ul>
      )}
      {visibleItems && (
        <BtrLoadMore onClick={handleLoadMore}>Load More</BtrLoadMore>
      )}
    </CardListContainer>
  );
};
export default Favorites;
