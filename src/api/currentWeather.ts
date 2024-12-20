import HTTP_CLIENT from "./core";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

const fetchCurrentWeather = (coordinates: { lat: number; lon: number }) => {
  const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  return HTTP_CLIENT(endpoint);
};

export default { fetchCurrentWeather };
