import Filter from "components/Filter/Filter";
import Header from "../../components/Header/Header";
import { useState } from "react";
import Favorites from "components/Favorites/Favorites";

const FavoritePage = () => {
  const [filterOption, setFilterOption] = useState("Show all");
  const handleFilterChange = (selectedOption) => {
    setFilterOption(selectedOption);
  };
  return (
    <>
      <Header BGColor />
      <Filter onFilterChange={handleFilterChange} />
      <Favorites filterOption={filterOption} />
    </>
  );
};
export default FavoritePage;
