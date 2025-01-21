import { FC } from "react";
import info from "./Info.module.scss";
import cloudy from "@icons/cloudy.svg";
import mist from "@icons/mist.svg";
import rain from "@icons/rain.svg";
import thunderstorm from "@icons/thunderstorm.svg";
import clear from "@icons/clear_sky.svg";
import drizzle from "@icons/shower_rain.svg";
import snow from "@icons/snow.svg";
import { useSelector } from "react-redux";
import { RootState } from "@store";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const Info: FC = () => {
  let date;
  const { name, temp, main, dt } = useSelector(
    (state: RootState) => state.weather.data
  );

  if (dt !== null) {
    const result = new Date(dt * 1000);

    const hours = result.getHours().toString().padStart(2, "0");
    const minutes = result.getMinutes().toString().padStart(2, "0");

    const dayOfWeek = daysOfWeek[result.getDay()];
    const day = result.getDate();
    const month = months[result.getMonth()];
    const year = result.getFullYear().toString();

    date = `${hours}:${minutes} - ${dayOfWeek}, ${day} ${month} ' ${year}`;
  }

  const weatherIcons: Record<string, string> = {
    Snow: snow,
    Clouds: cloudy,
    Drizzle: drizzle,
    Mist: mist,
    Atmosphere: mist,
    Rain: rain,
    Thunderstorm: thunderstorm,
    Clear: clear,
    Smoke: mist
  };

  return (
    <div className={info.wrapper}>
      <h1>{temp && `${Math.round(temp)}°`}</h1>
      <div className={info.text}>
        <h2>{name}</h2>
        <p>{date && date}</p>
      </div>
      {main && <img src={weatherIcons[main]} alt={main} />}
    </div>
  );
};

export default Info;
