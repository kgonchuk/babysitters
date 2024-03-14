import { useState } from "react";
import {
  ArrowButton,
  ArrowDown,
  ArrowUp,
  FilterContainer,
  FilterItem,
  FilterList,
  FilterTitle,
} from "./Filter.styled";
import arrowUp from "../../assets/img/sprite.svg";
import arrowDown from "../../assets/img/sprite.svg";
const options = [
  "A to Z",
  "Z to A",
  "Less then 10$",
  "Greate then 10$",
  "Popular",
  "Not popular",
  "Show all",
];
const Filter = ({ onFilterChange }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [option, setOption] = useState(options[0]);

  const handleOptionSelect = (selectedOption) => {
    console.log(selectedOption);
    setOption(selectedOption);
    setDropdownOpen(false);

    onFilterChange(selectedOption);
  };

  return (
    <FilterContainer>
      <FilterTitle>Filters</FilterTitle>
      <ArrowButton onClick={() => setDropdownOpen(!isDropdownOpen)}>
        {option}{" "}
        {isDropdownOpen ? (
          <ArrowUp>
            <svg width={20} height={20}>
              <use href={`${arrowUp}#chevron-up`} />
            </svg>
          </ArrowUp>
        ) : (
          <ArrowDown>
            <svg width={20} height={20}>
              <use href={`${arrowDown}#chevron-down`} />
            </svg>
          </ArrowDown>
        )}
      </ArrowButton>
      <FilterList $isOpen={isDropdownOpen}>
        {options.map((option, index) => (
          <FilterItem key={index} onClick={() => handleOptionSelect(option)}>
            {option}
          </FilterItem>
        ))}
      </FilterList>
    </FilterContainer>
  );
};

export default Filter;
