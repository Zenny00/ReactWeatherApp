import { getWeather } from './weather_api/weather_api.ts';
import { useState, useEffect } from "react";
import WeatherTile from './WeatherTile.js';

export default function WeatherContainer() {
  const [weatherData, setWeatherData] = useState([]);
  const [weatherTiles, setWeatherTiles] = useState([]);

  const params = {
	  "latitude": 39.057992,
	  "longitude": -76.970448,
	  "hourly": "temperature_2m",
	  "timezone": "America/New_York",
    "temperature_unit": "fahrenheit",
  };
  const url =	"https://api.open-meteo.com/v1/forecast"; 

  useEffect(() => {
    async function fetchWeatherData() {
      const response = await getWeather(url, params);
      setWeatherData(response);     
    }
    fetchWeatherData();
    }, []);
   
  useEffect(() => {
    const weatherTiles = [];
    const hourlyData = weatherData?.hourly;
    console.log(hourlyData);
    for (var i = 0; i < hourlyData?.time?.length; i++) {
      weatherTiles.push(
        <WeatherTile 
          time={hourlyData.time[i].toISOString()}
          temperature={hourlyData.temperature2m[i]}
        />
      );
    }
    setWeatherTiles(weatherTiles);
  }, [weatherData]);
   
  return (
    <div className="weatherContainer">
      {weatherTiles}
    </div>
  );
}

