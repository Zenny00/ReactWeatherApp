import { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import WeatherContainer from './WeatherContainer.js';
import ForecastSelector from './ForecastSelector.js';
import SearchBar from './search_bar/SearchBar.js';
import QueryList from './search_bar/QueryList.js';
import { fetchZipResults } from './search_bar/search_bar.ts';

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [num_days, setNumDays] = useState(undefined);

  useEffect(() => {
    const queryResults = fetchZipResults(query.replace("/\s+/g", " "));
    setResults(queryResults);
  }, [query]);

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery}/>
      <QueryList results={results} query={query} setQuery={setQuery}/>
      <ForecastSelector
        button_function={setNumDays}
      />
      {num_days && <WeatherContainer
        num_days={num_days}
      />}
    </div>
  );
}

export default App;
