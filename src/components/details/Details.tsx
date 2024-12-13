import { FC } from "react";
import styles from "./Details.module.css";
import Search from "@components/search/Search";
import Stats from "@components/stats/Stats";

const Details: FC = () => {
  return (
    <>
      <div className={styles.container}>
        <Search />
        <h2 className={styles.title}>Weather Details...</h2>
        <Stats />
        <div className={styles.divider}></div>
      </div>
    </>
  );
};

export default Details;
