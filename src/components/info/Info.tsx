import { FC } from "react";
import info from "./Info.module.scss";
import cloudy from "@icons/cloudy.svg";

const Info: FC = () => {
  return (
    <div className={info.wrapper}>
      <h1>16&deg;</h1>
      <div className={info.text}>
        <h2>London</h2>
        <p>06:09 - Monday, 9 Sep'23</p>
      </div>
      <img src={cloudy} alt="cloudy" />
    </div>
  );
};

export default Info;
