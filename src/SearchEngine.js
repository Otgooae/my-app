import React, { useState } from "react";
import axios from "axios";
import DefaultCity from "./DefaultCity";
import "./SearchEngine.css";

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
    <form className="Search" onSubmit={showCity}>
      <div className="row">
        <div className="col-9">
          <input
            type="Search"
            placeholder="Enter a city..."
            className="searchBox"
            className="form-control"
            onChange={changeCity}
          />
        </div>
        <div className="col-3">
          <input type="submit" value="SEARCH" className="btn btn-primary" />
        </div>
      </div>
    </form>
  );
  if (weather.submitted) {
    return (
      <div>
        <DefaultCity data={weather} />
        {form}
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
