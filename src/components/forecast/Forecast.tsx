import { FC } from "react";
import forecast from "./Forecast.module.scss";
import snow from "@icons/snow.svg";
import cloudy from "@icons/cloudy.svg";
import shower_rain from "@icons/shower_rain.svg";
import few_clouds from "@icons/few_clouds.svg";
import thunderstorm from "@icons/thunderstorm.svg";

const Forecast: FC = () => {
  return (
    <>
      <div className={forecast.wrapper}>
        <h2 className={forecast.title}>Today's Weather Forecast...</h2>

        <ul className={forecast.list}>
          <li className={forecast.item}>
            <img src={snow} />
            <div className={forecast.info}>
              <p>06:00</p>
              <span>Snow</span>
            </div>
            <p>19&deg;</p>
          </li>

          <li className={forecast.item}>
            <img src={cloudy} />
            <div className={forecast.info}>
              <p>09:00</p>
              <span>Broken Clouds</span>
            </div>
            <p>19&deg;</p>
          </li>

          <li className={forecast.item}>
            <img src={few_clouds} />
            <div className={forecast.info}>
              <p>12:00</p>
              <span>Few Clouds</span>
            </div>
            <p>19&deg;</p>
          </li>

          <li className={forecast.item}>
            <img src={thunderstorm} />
            <div className={forecast.info}>
              <p>15:00</p>
              <span>Thunderstorm</span>
            </div>
            <p>19&deg;</p>
          </li>

          <li className={forecast.item}>
            <img src={snow} />
            <div className={forecast.info}>
              <p>18:00</p>
              <span>Snow</span>
            </div>
            <p>19&deg;</p>
          </li>

          <li className={forecast.item}>
            <img src={shower_rain} />
            <div className={forecast.info}>
              <p>21:00</p>
              <span>Shower Rain</span>
            </div>
            <p>19&deg;</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Forecast;
