import { FC } from "react";
import styles from "./Details.module.css";
import Search from "@components/search/Search";

const Details: FC = () => {
  return (
    <>
      <div className={styles.container}>
        <Search />
        <h2 className={styles.title}>Weather Details...</h2>
      </div>
    </>
  );
};

export default Details;
