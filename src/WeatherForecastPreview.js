import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastPreview.css";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }
  function temperature() {
    return Math.round(props.data.main.temp);
  }
  return (
    <div className="WeatherForecastPreview">
      <div className="col">{hours()}</div>
      <div className="col">
        <WeatherIcon icon={props.data.weather[0].icon} />
      </div>
      <div className="col">{temperature()}°C</div>
    </div>
  );
}
