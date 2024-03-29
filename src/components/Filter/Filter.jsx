import React from "react";
import { Dropdown } from "../../components/CheckForm/CheckForm";
import { useDispatch } from "react-redux";
import { setSelectedFilter } from "../../redux/Nannies/nanniesSlice";
import { FilterContainer, FilterTitle } from "./Filter.styled";

const Filter = () => {
  const defaultFilter = "Show all";
  const dispatch = useDispatch();
  const options = [
    "A to Z",
    "Z to A",
    "Less than 10$",
    "Greater than 10$",
    "Popular",
    "Not popular",
    "Show all",
  ];

  const handleFilterChange = (selectedFilter) => {
    dispatch(setSelectedFilter(selectedFilter));
  };

  return (
    <FilterContainer>
      <FilterTitle>Filters</FilterTitle>
      <Dropdown defaultOption={defaultFilter} onSelect={handleFilterChange}>
        {options.map((option) => {
          return (
            <span key={option} value={option}>
              {option}
            </span>
          );
        })}
      </Dropdown>
    </FilterContainer>
  );
};
export default Filter;
