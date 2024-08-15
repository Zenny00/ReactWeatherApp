import logo from '../search.png';
import { useState } form "react";

export default function SearchBar(props) {
  const [query, setQuery] = useState([]);

  return (
    <div>
      <img src={logo} alt="magnifying glass" height={16} width={16} /> 
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
