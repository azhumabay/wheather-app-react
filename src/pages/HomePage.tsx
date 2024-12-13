import { FC } from "react";
import Styles from "./HomePage.module.scss";
import { Details, Info, Search } from "@components";

const HomePage: FC = () => {
  return (
    <div className={Styles.container}>
      <Search/>
      <Info />
      <Details />
    </div>
  );
};

export default HomePage;
