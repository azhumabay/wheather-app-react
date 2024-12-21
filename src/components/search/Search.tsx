import { FC, useState } from "react";
import styles from "./Search.module.scss";
import magnifier from "@assets/icons/magnifier.svg";
import { useAppDispatch } from "@store";
import {
  fetchCoordinates,
  fetchForecast,
  fetchWeather,
} from "@slices/weatherSlice";

const Search: FC = () => {
  const [input, setInput] = useState("");

  const dispatch = useAppDispatch();

  const setInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const fetchCity = async () => {
    if (!input.trim()) return;

    try {
      const result = await dispatch(fetchCoordinates(input)).unwrap();
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

    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) {
      fetchCity();
    }
  };

  return (
    <>
      <div className={styles.wrapper}>
        <input
          placeholder="Search Location"
          className={styles.input}
          value={input}
          onChange={setInputHandler}
          onKeyDown={handleKeyDown}
        />
        <img src={magnifier} className={styles.magnifier} onClick={fetchCity} />
      </div>
    </>
  );
};

export default Search;
