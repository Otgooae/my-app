import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";
import Forecast from "./Forecast";
import TempUnit from "./TempUnit";
import CurrentDate from "./CurrentDate";
import "./DefaultCity.css";
export default function DefaultCity(props) {
  const [weather, setWeather] = useState("");
  function defaultCityTemp(response) {
    setWeather({
      cityName: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: response.data.dt * 1000,
      description: response.data.weather[0].description,
    });
  }
  if (props.city !== false) {
    let apiKey = "a65dcb5eff2739b507931b36f4d9c30c";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(defaultCityTemp);
    return (
      <div className="DefaultCity">
        <h1 className="cityName">{weather.cityName}</h1>
        <h2>
          <CurrentDate date={weather.date} />
        </h2>
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="white"
          size={150}
          animate={true}
        />
        <div className="description">
          <small>{weather.description}</small>
        </div>
        <h3 className="currentTemp">
          {weather.temperature}
          <TempUnit temperature={weather.temperature} />
        </h3>
        <ul className="weatherDetails">
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/hr</li>
        </ul>
        <div className="row">
          <div className="col-2">
            <Forecast forecastCity={props.city} index={0} />
          </div>
          <div className="col-2">
            <Forecast forecastCity={props.city} index={1} />
          </div>
          <div className="col-2">
            <Forecast forecastCity={props.city} index={2} />
          </div>
          <div className="col-2">
            <Forecast forecastCity={props.city} index={3} />
          </div>
          <div className="col-2">
            <Forecast forecastCity={props.city} index={4} />
          </div>
          <div className="col-2">
            <Forecast forecastCity={props.city} index={5} />
          </div>
        </div>
      </div>
    );
  }
}
