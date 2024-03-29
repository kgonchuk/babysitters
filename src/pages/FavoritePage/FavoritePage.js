import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "../../redux/selectors";
import { resetPageFavorites } from "../../redux/favoriteSlice";
import { useEffect, useState } from "react";
import { ContainerFavorites } from "./FavoritePage.styled";
import Filter from "components/Filter/Filter";
import Favorites from "components/Favorites/Favorites";
import Header from "components/Header/Header";
import { Circles } from "react-loader-spinner";

export const FavoritePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [filterOption, setFilterOption] = useState("Show all");

  const changeFilterHandler = (chosenOption) => {
    setFilterOption(chosenOption);
  };

  useEffect(() => {
    dispatch(resetPageFavorites());
  }, [dispatch]);

  return (
    <ContainerFavorites>
      <Header BGColor />

      {isLoading && !error && (
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
      {error && <p>Something went wrong!</p>}
      <Filter onFilterChange={changeFilterHandler} />
      <Favorites filterOption={filterOption} />
    </ContainerFavorites>
  );
};
