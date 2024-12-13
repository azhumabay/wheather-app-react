import { FC } from "react";
import Styles from "./HomePage.module.css";
import { Details, Info } from "@components";

const HomePage: FC = () => {
  return (
    <div className={Styles.container}>
      <Info />
      <Details />
    </div>
  );
};

export default HomePage;
