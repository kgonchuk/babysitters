import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentPage,
  selectItemsPerPage,
  selectFilter,
} from "../../redux/selectors";

import { selectNanniesItems } from "../../redux/selectors";
import { nextPage, resetState } from "../../redux/Nannies/nanniesSlice";
import CardItem from "components/CardItem/CardItem";
import { fetchNanny } from "../../redux/Nannies/actions";
import { BtrLoadMore, CardListContainer, InfoBlock } from "./CardList.styled";

const CardList = () => {
  const dispatch = useDispatch();
  const nannies = useSelector(selectNanniesItems);
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

  useEffect(() => {
    dispatch(fetchNanny());
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(resetState());
    };
  }, [dispatch]);

  const filteredNanny = applyFilter(nannies, filter);
  const displayNanny = filteredNanny.slice(0, currentPage * itemsPerPage);
  const visibleItems =
    displayNanny.length < nannies.length && filteredNanny.length !== 0;

  const handleLoadMore = () => {
    dispatch(nextPage());
  };

  return (
    <CardListContainer>
      {displayNanny.length !== 0 ? (
        <ul>
          {displayNanny.map((nanny) => (
            <CardItem key={nanny.id} nanny={nanny} />
          ))}
        </ul>
      ) : (
        <InfoBlock>
          <p>
            We couldn't find any nanny that match your search criteria for "
            <span>{filter}</span>".
          </p>
        </InfoBlock>
      )}
      {visibleItems && (
        <BtrLoadMore onClick={handleLoadMore}>Load More</BtrLoadMore>
      )}
    </CardListContainer>
  );
};
export default CardList;
