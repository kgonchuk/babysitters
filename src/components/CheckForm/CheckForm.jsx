import React, { useState, useRef, useEffect } from "react";
import {
  ArrowButton,
  ArrowDown,
  FilterItem,
  FilterList,
  ArrowUp,
  DropContainer,
} from "./CheckForm.styled";

import arrowUp from "../../assets/img/sprite.svg";
import arrowDown from "../../assets/img/sprite.svg";

export const Dropdown = ({ defaultOption, onSelect, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const dropdownRef = useRef(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  const handleBackdrop = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const dropdownEsc = ({ code }) => {
      if (code === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", dropdownEsc);
    document.addEventListener("mousedown", handleBackdrop);
    return () => {
      document.removeEventListener("mousedown", handleBackdrop);
      window.removeEventListener("keydown", dropdownEsc);
    };
  }, []);

  useEffect(() => {
    setSelectedOption(defaultOption);
  }, [defaultOption]);

  return (
    <DropContainer ref={dropdownRef}>
      <ArrowButton onClick={() => setIsOpen(!isOpen)}>
        {selectedOption}
        {isOpen ? (
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

      {isOpen && (
        <FilterList>
          {React.Children.map(children, (child) => (
            <FilterItem
              key={child.props.value}
              onClick={() => handleOptionClick(child.props.value)}
            >
              {child}
            </FilterItem>
          ))}
        </FilterList>
      )}
    </DropContainer>
  );
};
