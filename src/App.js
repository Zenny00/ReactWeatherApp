import { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import WeatherContainer from './WeatherContainer.js';
import ForecastSelector from './ForecastSelector.js';
import SearchBar from './search_bar/SearchBar.js';

function App() {
  const [num_days, setNumDays] = useState(undefined);

  return (
    <div>
      <SearchBar />
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
