import logo from '../search.png';
import { useState } from "react";

export default function SearchBar(props) {
  const [query, setQuery] = useState([]);

  return (
    <div style={{
      padding: "12px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      width: "300px",
      display: "flex",
      justifyContent: "start",
      gap: "0.5em",
      alignItems: "center",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)"
    }}>
      <img src={logo} alt="magnifying glass" height={16} width={16} /> 
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "100%",
          border: "none",
          zIndex: "1"
        }}
      />
    </div>
  );
}
