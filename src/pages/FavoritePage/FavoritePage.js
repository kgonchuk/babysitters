import Filter from "components/Filter/Filter";
import Header from "../../components/Header/Header";
import { useState } from "react";
import Favorites from "components/Favorites/Favorites";
import { ContainerFavorites } from "./FavoritePage.styled";

const FavoritePage = () => {
  const [filterOption, setFilterOption] = useState("Show all");
  const handleFilterChange = (selectedOption) => {
    setFilterOption(selectedOption);
  };
  return (
    <ContainerFavorites>
      <Header BGColor />
      <Filter onFilterChange={handleFilterChange} />
      <Favorites filterOption={filterOption} />
    </ContainerFavorites>
  );
};
export default FavoritePage;
