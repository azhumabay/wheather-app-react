import { createSlice } from "@reduxjs/toolkit";

export type WeatherState = {
  value: number;
};

const initialState: WeatherState = {
  value: 0,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    getWeather: (state) => {
      state.value += 1;
    },
  },
});
