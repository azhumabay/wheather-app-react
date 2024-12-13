import { FC } from "react";
import styles from "./Details.module.css";
import Search from "@components/search/Search";
import Stats from "@components/stats/Stats";
import Forecast from "@components/forecast/Forecast";

const Details: FC = () => {
  return (
    <>
      <div className={styles.container}>
        <Search />
        <h2 className={styles.title}>Weather Details...</h2>
        <Stats />
        <div className={styles.divider}></div>
        <Forecast />
      </div>
    </>
  );
};

export default Details;
