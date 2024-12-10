import { FC } from "react";
import styles from "./Search.module.scss";
import magnifier from "@assets/icons/magnifier.svg";

const Search: FC = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <input placeholder="Search Location" className={styles.input} />
        <img src={magnifier} className={styles.magnifier} />
      </div>
    </>
  );
};

export default Search;
