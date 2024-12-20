import HTTP_CLIENT from "./core";
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

const getCoordinates = (cityName: string) => {
  const endpoint = `geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`;
  return HTTP_CLIENT(endpoint);
};

export default { getCoordinates };
