import { FC } from "react";
import forecast from "./Forecast.module.scss";
import snow from "@icons/snow.svg";
import cloudy from "@icons/cloudy.svg";
import mist from "@icons/mist.svg";
import shower_rain from "@icons/shower_rain.svg";
import clear_sky from "@icons/clear_sky.svg";
import rain from "@icons/rain.svg";
import thunderstorm from "@icons/thunderstorm.svg";
import { useSelector } from "react-redux";
import { RootState } from "@store";

const Forecast: FC = () => {
  const forecastList = useSelector(
    (state: RootState) => state.weather.forecast
  );

  const weatherIcons: Record<string, string> = {
    Snow: snow,
    Clouds: cloudy,
    Drizzle: shower_rain,
    Mist: mist,
    Atmosphere: mist,
    Rain: rain,
    Thunderstorm: thunderstorm,
    Clear: clear_sky,
  };

  return (
    <>
      <div className={forecast.wrapper}>
        <h2 className={forecast.title}>Today's Weather Forecast...</h2>

        <ul className={forecast.list}>
          {forecastList &&
            forecastList.map(({ id, time, temp, main, description }) => (
              <li className={forecast.item} key={id}>
                <img src={weatherIcons[main]} alt={main} />
                <div className={forecast.info}>
                  <p>{time}</p>
                  <span>{description}</span>
                </div>
                <p>{`${Math.round(temp)}°`}</p>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Forecast;
