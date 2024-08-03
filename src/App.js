import logo from './logo.svg';
import './App.css';
import WeatherContainer from './WeatherContainer.js';
import ForecastSelector from './ForecastSelector.js';

function App() {
  return (
    <div>
      <ForecastSelector/>
      <WeatherContainer
        num_days={1}
      />
    </div>
  );
}

export default App;
