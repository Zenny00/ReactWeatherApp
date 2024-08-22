import logo from "../search.png";
import spinner from "../search_bar_spinner.gif";
import { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({query, setQuery, isLoading}) {
  return (
    <div className="SearchBar">
      <img src={logo} alt="magnifying glass" height={16} width={16} /> 
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {isLoading && <img src={spinner} alt="loading indicator" height={16} width={16} />
}    </div>
  );
}
