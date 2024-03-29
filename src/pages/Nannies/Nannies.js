// import Filter from "../../components/Filter/Filter";
// import Header from "../../components/Header/Header";
// import CardList from "../../components/CardList/CardList";
// import { useState } from "react";
// import { ContainerNannies } from "./Nannies.styled";

// const NanniesPage = () => {
//   const [filterOption, setFilterOption] = useState("Show all");
//   const handleFilterChange = (selectedOption) => {
//     setFilterOption(selectedOption);
//   };

//   return (
//     <ContainerNannies>
//       <Header BGColor />
//       <Filter onFilterChange={handleFilterChange} />
//       <CardList filterOption={filterOption} />
//     </ContainerNannies>
//   );
// };
// export default NanniesPage;

import React, { useState } from "react";

import Filter from "components/Filter/Filter";

import { ContainerNannies } from "./Nannies.styled";
import Header from "components/Header/Header";
import CardList from "components/CardList/CardList";

const NanniesPage = () => {
  const [filterOption, setFilterOption] = useState("Show all");

  const changeFilterHandler = (chosenOption) => {
    setFilterOption(chosenOption);
  };

  return (
    <ContainerNannies>
      <Header BGColor />
      <Filter onFilterChange={changeFilterHandler} />
      <CardList filterOption={filterOption} />
    </ContainerNannies>
  );
};

export default NanniesPage;
