import Filter from "components/Filter/Filter";
import Header from "../../components/Header/Header";
import { useState } from "react";
import Favorites from "components/Favorites/Favorites";
import { ContainerCatalog } from "./FavoritePage.styled";

const FavoritePage = () => {
  const [filterOption, setFilterOption] = useState("Show all");
  const handleFilterChange = (selectedOption) => {
    setFilterOption(selectedOption);
  };
  return (
    <>
      <Header BGColor />
      <Filter onFilterChange={handleFilterChange} />
      <Favorites filterOprion={filterOption} />
    </>
  );
};
export default FavoritePage;
