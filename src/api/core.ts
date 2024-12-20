import axios from "axios";

const baseURL = "https://api.openweathermap.org/";

const HTTP_CLIENT = axios.create({
  baseURL,
  timeout: 5000,
});

export default HTTP_CLIENT;
