import logo from "../search.png";
import { useState } from "react";
import "./SearchBar.css";

export default function SearchBar(props) {
  const [query, setQuery] = useState([]);

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
}
