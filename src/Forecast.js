import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

export default function (props) {
  const [forecast, setForecast] = useState("");
  function displayForecast(response) {
    let forecastIndex = response.data.list[props.index];
    setForecast({
      time: forecastIndex.forecast.dt * 1000,
      maxTemp: Math.round(forecastIndex.forecast.main.temp_max),
      minTemp: Math.round(forecastIndex.forecast.main.temp_min),
    });
  }
  let apiKey = `c518c03770222f903df8ad86b5e217d8`;
  let unit = `metric`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.forecastCity}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(displayForecast);
  return (
    <div className="Forecast">
      <div className="hourInterval">
        <div class="col-2">
          <h3 class="day">{forecast.time}</h3>
          <ReactAnimatedWeather
            icon="RAIN"
            color="white"
            size={150}
            animate={true}
          />
          <div class="temp">
            <strong>{forecast.maxTemp}°C</strong>
            {forecast.minTemp}°C
          </div>
        </div>
      </div>
    </div>
  );
}
