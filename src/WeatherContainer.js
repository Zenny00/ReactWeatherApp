import { getWeather } from './weather_api/weather_api.ts';
import { useState, useEffect } from "react";
import WeatherTile from './WeatherTile.js';
import './WeatherContainer.css';

export default function WeatherContainer(props) {
  const [weatherData, setWeatherData] = useState([]);
  const [weatherTiles, setWeatherTiles] = useState([]);

  const params = {
	  latitude: 39.057992,
	  longitude: -76.970448,
	  hourly: "temperature_2m",
	  timezone: "America/New_York",
    temperature_unit: "fahrenheit",
    forecast_days: props.num_days,
    weather_code: true,
  };
  const url =	"https://api.open-meteo.com/v1/forecast"; 

  useEffect(() => {
    async function fetchWeatherData() {
      const response = await getWeather(url, params);
      setWeatherData(response);     
    }
    fetchWeatherData();
  }, [props.num_days]);
   
  useEffect(() => {
    const weatherTiles = [];
    const hourlyData = weatherData?.hourly;

    // Grab timestamp and surface temperature values to display
    for (let i = 0; i < hourlyData?.time?.length; i++) {
      // Format the time string into an easily readable format
      let timestamp = hourlyData.time[i].toLocaleString(
        'default',
        { weekday: "long", month: 'long',  day: "numeric", hour: "2-digit" }
      );

      weatherTiles.push(
        <WeatherTile
          key={ "weather_tile" + i }
          time={ timestamp }
          temperature={ hourlyData.temperature2m[i] }
        />
      );
    }
    setWeatherTiles(weatherTiles);
  }, [weatherData]);
   
  return (
    <div className="WeatherContainer">
      {weatherTiles}
    </div>
  );
}

