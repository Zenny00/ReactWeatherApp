import { fetchWeatherApi } from "openmeteo";

/**
 *  File containing utility functions for sending weather queries to the open-meteo API 
 */

export async function getWeather(url, params) {
	// Send request to the OpenMeteo API
	const responses = await fetchWeatherApi(url, params);
  const response = responses[0];
  
  // Hourly data
  const hourly = response.hourly()!;

  // Utility function for setting up time ranges
  const range = function(start: number, stop: number, step: number) {
    return Array.from({ length: (stop - start) / step }, (_, index) => start + index * step);
  }

  // Time variables
  const utcOffsetInSeconds = response.utcOffsetSeconds();

  // Associate the data points with the timestamps
  const weatherDataPoints = {
    hourly: {
      time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
        (time) => new Date((time + utcOffsetInSeconds) * 1000)
      ),
      temperature2m: hourly.variables(0)!.valuesArray()!,
    },
  };

  return weatherDataPoints;
}
