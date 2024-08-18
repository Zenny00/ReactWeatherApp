import logo from "../search.png";
import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({query, setQuery}) => {
  return (
    <div className="SearchBar">
      <img src={logo} alt="magnifying glass" height={16} width={16} /> 
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
