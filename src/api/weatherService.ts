import HTTP_CLIENT from "./core";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

const getCurrentWeather = (coordinates: { lat: number; lon: number }) => {
  const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  return HTTP_CLIENT(endpoint);
};

const getWeatherForecast = (coordinates: { lat: number; lon: number }) => {
  const endponint = `/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  return HTTP_CLIENT(endponint);
};

export default { getCurrentWeather, getWeatherForecast };
