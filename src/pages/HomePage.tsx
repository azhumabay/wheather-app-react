import { FC, useEffect } from "react";
import Styles from "./HomePage.module.scss";
import { Details, Info, Search } from "@components";
import { useAppDispatch } from "@store";
import {
  fetchCoordinates,
  fetchForecast,
  fetchWeather,
} from "@slices/weatherSlice";

const HomePage: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await dispatch(fetchCoordinates("Astana")).unwrap();
        const { lat, lon } = result[0];

        if (lat !== null && lon !== null) {
          dispatch(fetchWeather({ lat, lon }));
          dispatch(fetchForecast({ lat, lon }));
        } else {
          console.error("Coordinates are null.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={Styles.container}>
      <Search />
      <Info />
      <Details />
    </div>
  );
};

export default HomePage;
