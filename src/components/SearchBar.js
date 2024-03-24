import React from "react";
import searchIcon from "../assets/icons/search-icon.svg";
const SearchBar = () => {
  return (
    <div className="search-box">
      <img src={searchIcon} alt="" className="search-icon" />
      <p>Search</p>
    </div>
  );
};

export default SearchBar;
