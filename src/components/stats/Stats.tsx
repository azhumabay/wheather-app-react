import { FC } from "react";
import stats from "./Stats.module.scss";
import temp_max from "@icons/temp_max.svg";
import temp_min from "@icons/temp_min.svg";
import humadity from "@icons/humadity.svg";
import cloudy from "@icons/cloudy.svg";
import wind from "@icons/wind.svg";

const Stats: FC = () => {
  return (
    <div className={stats.wrapper}>
      <h2 className={stats.info}>thunderstorm with light drizzle</h2>
      <ul className={stats.ul}>
        <li>
          <p>Temp max</p>
          <div>
            <p>19&deg;</p>
            <img src={temp_max} />
          </div>
        </li>
        <li>
          <p>Temp min</p>
          <div>
            <p>15&deg;</p>
            <img src={temp_min} />
          </div>
        </li>
        <li>
          <p>Humadity</p>
          <div>
            <p>58%</p>
            <img src={humadity} />
          </div>
        </li>
        <li>
          <p>Cloudy</p>
          <div>
            <p>86%</p>
            <img src={cloudy} />
          </div>
        </li>
        <li>
          <p>Wind</p>
          <div>
            <p>5km/h</p>
            <img src={wind} />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Stats;
