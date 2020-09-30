import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";
import Forecast from "./Forecast";
import TempUnit from "./TempUnit";
import CurrentDate from "./CurrentDate";
import DefaultCity from "./DefaultCity";

import "./SearchEngine.css";

export default function SearchEngine(props) {
  let [city, setCity] = useState(null);
  let [weather, setWeather] = useState("");
  let [submitted, setSubmitted] = useState(false);
  function displayCityTemp(response) {
    console.log(response.data);
    setSubmitted(true);
    setWeather({
      cityName: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: response.data.dt * 1000,
      description: response.data.weather[0].description,
    });
  }
  function showCity(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(displayCityTemp);
  }
  let apiKey = "a65dcb5eff2739b507931b36f4d9c30c";
  let unit = "metric";

  function changeCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form className="Search" onSubmit={showCity}>
      <input
        type="Search"
        placeholder="Enter a city..."
        className="searchBox"
        onChange={changeCity}
      />
      <input type="submit" value="SEARCH" className="button" />
    </form>
  );
  if (submitted) {
    return (
      <div className="SearchEngine">
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
          <TempUnit temperature={weather.temperature} />
        </h3>
        <ul className="weatherDetails">
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/hr</li>
        </ul>
        <div className="row">
          <div className="col-2">
            <Forecast forecastCity={city} index={0} />
          </div>
          <div className="col-2">
            <Forecast forecastCity={city} index={1} />
          </div>
          <div className="col-2">
            <Forecast forecastCity={city} index={2} />
          </div>
          <div className="col-2">
            <Forecast forecastCity={city} index={3} />
          </div>
          <div className="col-2">
            <Forecast forecastCity={city} index={4} />
          </div>
          <div className="col-2">
            <Forecast forecastCity={city} index={5} />
          </div>
        </div>
        {form}
      </div>
    );
  } else {
    return (
      <div>
        <DefaultCity city="Ulaanbaatar" />
        {form}
      </div>
    );
  }
}
