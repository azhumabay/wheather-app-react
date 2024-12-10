import { FC } from "react";
import Styles from "./HomePage.module.css";
import { Details } from "@components";

const HomePage: FC = () => {
  return (
    <div className={Styles.container}>
      <Details />
    </div>
  );
};

export default HomePage;
