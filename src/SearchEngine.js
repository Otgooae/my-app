import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";
import Forecast from "./Forecast"
export default function SearchEngine(props) {
  let [city, setCity] = useState(props.city);
  let [weather, setWeather] = useState({
    cityName: props.city,
    temperature: props.temperature,
  });
  function displayCityTemp(response) {
    console.log(response.data);
    setWeather({
      cityName: response.data.name,
      temperature: response.data.main.temp,
    });
  }
  function showCity(event) {
    event.preventDefault();
    let apiKey = "a65dcb5eff2739b507931b36f4d9c30c";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&unit=${unit}`;
    axios.get(apiUrl).then(displayCityTemp);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="SearchEngine">
      <h1 className="cityName">{weather.cityName}</h1>
      <ReactAnimatedWeather
        icon={props.icon}
        color="white"
        size={150}
        animate={true}
      />
      <h3 className="currentTemp">{weather.temperature}</h3>
      <ul className="weatherDetails">
        <li>humidity:</li>
        <li>wind:</li>
      </ul>
      <Forecast />
      <form className="Search" onSubmit={showCity}>
        <input type="Search" onChange={changeCity} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
