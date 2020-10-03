import React, { useState } from "react";
import Forecast from "./Forecast";
import TempUnit from "./TempUnit";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import "./DefaultCity.css";
export default function DefaultCity(props) {
  let weather = props.data;
  return (
    <div className="DefaultCity">
      <h1 className="cityName">{weather.cityName}</h1>
      <h2>
        <CurrentDate date={weather.date} />
      </h2>
      <WeatherIcon icon={weather.icon}/>
      <div className="description">
        <small className="text-capitalize">{weather.description}</small>
      </div>
      <div className="row">
        <div className="col-6">
          <h3 className="currentTemp">
            <TempUnit temperature={weather.temperature} />
          </h3>
        </div>
        <div className="col-6">
          <ul className="weatherDetails">
            <li>Humidity: {weather.humidity}%</li>
            <li>Wind: {weather.wind}km/hr</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <Forecast forecastCity={props.city} time="12:00" index={0} />
        </div>
        <div className="col-2">
          <Forecast forecastCity={props.city} time="12:00" index={1} />
        </div>
        <div className="col-2">
          <Forecast forecastCity={props.city} time="12:00" index={2} />
        </div>
        <div className="col-2">
          <Forecast forecastCity={props.city} time="12:00" index={3} />
        </div>
        <div className="col-2">
          <Forecast forecastCity={props.city} time="12:00" index={4} />
        </div>
        <div className="col-2">
          <Forecast forecastCity={props.city} time="12:00" index={5} />
        </div>
      </div>
    </div>
  );
}
