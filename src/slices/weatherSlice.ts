import { weatherService, geocoding } from "@api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCoordinates = createAsyncThunk<Coordinate[], string>(
  "weather/fetchCoordinates",
  async (cityName: string) => {
    const response = await geocoding.getCoordinates(cityName);
    return response.data;
  }
);

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (coordinates: { lat: number; lon: number }) => {
    const response = await weatherService.getCurrentWeather(coordinates);
    return response.data;
  }
);

export const fetchForecast = createAsyncThunk(
  "weather/fetchForecast",
  async (coordinates: { lat: number; lon: number }) => {
    const response = await weatherService.getWeatherForecast(coordinates);
    return response.data;
  }
);

export type Coordinate = {
  name: string;
  local_names: { [key: string]: string };
  lat: number;
  lon: number;
  country: string;
};

type Data = {
  name: string | null;
  temp: number | null;
  humidity: number | null;
  temp_max: number | null;
  temp_min: number | null;
  windSpeed: number | null;
  main: string | null;
  dt: number | null;
  clouds: number | null;
  description: string | null;
};

export type Forecast = {
  id: number;
  time: string;
  temp: number;
  main: string;
  description: string;
};

type WeatherState = {
  cityName: string;
  coordinates: { lat: number | null; lon: number | null };
  data: Data;
  forecast: Forecast[];
};

const initialState: WeatherState = {
  cityName: "",
  coordinates: { lat: null, lon: null },
  data: {
    name: null,
    temp: null,
    humidity: null,
    temp_max: null,
    temp_min: null,
    windSpeed: null,
    main: null,
    dt: null,
    clouds: null,
    description: null,
  },
  forecast: [],
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCoordinates.fulfilled, (state, { payload }) => {
      state.coordinates.lat = payload[0].lat;
      state.coordinates.lon = payload[0].lon;
    });
    builder.addCase(fetchWeather.fulfilled, (state, { payload }) => {
      state.data = {
        name: payload.name,
        temp: Math.round(payload.main.temp),
        humidity: payload.main.humidity,
        temp_max: payload.main.temp_max,
        temp_min: payload.main.temp_min,
        windSpeed: payload.wind.speed,
        main: payload.weather[0].main,
        dt: payload.dt,
        clouds: payload.clouds.all,
        description: payload.weather[0].description,
      };
    });
    builder.addCase(fetchForecast.fulfilled, (state, { payload }) => {
      state.forecast = payload.list
        .filter((_: any, index: number) => index < 5)
        .map((item: any) => ({
          id: item.dt,
          time: item.dt_txt.split(" ")[1].slice(0, 5),
          temp: item.main.temp,
          main: item.weather[0].main,
          description: item.weather[0].description,
        }));
    });
  },
});

export default weatherSlice.reducer;
