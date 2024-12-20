import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../slices/weatherSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
