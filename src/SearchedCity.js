import React, { useState } from "react";
import TempUnit from "./TempUnit";
import CurrentDate from "./CurrentDate";
import CurrentTime from "./CurrentTime";
import WeatherIcon from "./WeatherIcon";
import "./SearchedCity.css";
export default function SearchedCity(props) {
  let weather = props.data;
  return (
    <div className="SearchedCity">
      <h1 className="cityName">{weather.cityName}</h1>
      <h2>
        <CurrentDate date={weather.date} />
        <CurrentTime date={weather.date} />
      </h2>
      <WeatherIcon icon={weather.icon} />
      <div className="description">
        <small className="text-capitalize">{weather.description}</small>
      </div>
      <div className="clearfix">
        <div className="row">
          <div className="col-6">
            <div className="float-center">
              <h3 className="currentTemp">
                <TempUnit temperature={weather.temperature} />
              </h3>
            </div>
          </div>
          <div className="float-left">
            <div className="col-6">
              <ul className="weatherDetails">
                <li>Humidity: {weather.humidity}%</li>
                <li>Wind: {weather.wind}km/hr</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
