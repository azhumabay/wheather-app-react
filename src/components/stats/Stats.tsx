import { FC } from "react";
import stats from "./Stats.module.scss";
import temp_max_icon from "@icons/temp_max.svg";
import temp_min_icon from "@icons/temp_min.svg";
import humidityIcon from "@icons/humadity.svg";
import cloudy from "@icons/cloudy.svg";
import wind from "@icons/wind.svg";
import { useSelector } from "react-redux";
import { RootState } from "@store";

const Stats: FC = () => {
  const { temp_max, temp_min, humidity, windSpeed, clouds } = useSelector(
    (state: RootState) => state.weather.data
  );

  return (
    <div className={stats.wrapper}>
      <h2 className={stats.info}>thunderstorm with light drizzle</h2>
      <ul className={stats.ul}>
        <li>
          <p>Temp max</p>
          <div>
            <p>{temp_max && `${temp_max}°`}</p>
            <img src={temp_max_icon} />
          </div>
        </li>
        <li>
          <p>Temp min</p>
          <div>
            <p>{temp_min && `${temp_min}°`}</p>
            <img src={temp_min_icon} />
          </div>
        </li>
        <li>
          <p>Humidity</p>
          <div>
            <p>{humidity && `${humidity}%`}</p>
            <img src={humidityIcon} />
          </div>
        </li>
        <li>
          <p>Cloudy</p>
          <div>
            <p>{clouds}%</p>
            <img src={cloudy} />
          </div>
        </li>
        <li>
          <p>Wind</p>
          <div>
            <p>{windSpeed && `${windSpeed} m/s`}</p>
            <img src={wind} />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Stats;
