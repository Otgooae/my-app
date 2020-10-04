import React, { useState } from "react";
import axios from "axios";
import SearchedCity from "./SearchedCity";
import WeatherForecast from "./WeatherForecast";
import "./SearchEngine.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function SearchEngine(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weather, setWeather] = useState({ submitted: false });
  function displayCityTemp(response) {
    console.log(response.data);
    setWeather({
      cityName: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      submitted: true,
    });
  }
  function search() {
    let apiKey = "a65dcb5eff2739b507931b36f4d9c30c";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(displayCityTemp);
  }
  function showCity(event) {
    event.preventDefault();
    search();
  }

  function changeCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form className="row" onSubmit={showCity}>
      <div className="col-9">
        <input
          type="Search"
          placeholder="Enter a city..."
          className="form-control"
          onChange={changeCity}
          autoFocus="on"
        />
      </div>
      <div className="col-3">
        <button type="submit" className="btn btn-dark w-100">
          SEARCH
        </button>
      </div>
    </form>
  );
  if (weather.submitted) {
    return (
      <div className="SearchEngine">
        <SearchedCity data={weather} />
        <WeatherForecast city={weather.cityName} />
        {form}
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
