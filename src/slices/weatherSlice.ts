import { currentWeather, geocoding } from "@api";
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
    const response = await currentWeather.fetchCurrentWeather(coordinates);
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
};

type WeatherState = {
  cityName: string;
  coordinates: { lat: number | null; lon: number | null };
  data: Data;
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
  },
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
      console.log(payload.name);
      state.data = {
        name: payload.name,
        temp: payload.main.temp,
        humidity: payload.main.humidity,
        temp_max: payload.main.temp_max,
        temp_min: payload.main.temp_min,
      };
    });
  },
});

export default weatherSlice.reducer;
