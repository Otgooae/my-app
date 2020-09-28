import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";
import Forecast from "./Forecast";
import TempUnit from "./TempUnit";
import CurrentDate from "./CurrentDate";

export default function SearchEngine(props) {
  let [city, setCity] = useState(props.city);
  let [weather, setWeather] = useState("");
  function displayCityTemp(response) {
    console.log(response.data);
    setWeather({
      cityName: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: response.data.dt * 1000,
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
      <input type="Search" placeholder="Enter a city" onChange={changeCity} />
      <input type="submit" value="Search" />
    </form>
  );
  if (city) {
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
        <h3 className="currentTemp">
          <TempUnit temperature={weather.temperature} />
        </h3>
        <ul className="weatherDetails">
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/hr</li>
        </ul>
        <Forecast forecastCity={city} />
        {form}
      </div>
    );
  } else {
    return (
      <div>
        <h1>We don't have data for {city}....</h1>
        {form}
      </div>
    );
  }
}
