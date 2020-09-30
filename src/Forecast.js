import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

export default function (props) {
  const [forecast, setForecast] = useState("");
  const [loaded, setLoaded] = useState(false);
  function displayForecast(response) {
    setLoaded(true);
    setForecast({
      maxTemp: Math.round(
        response.data.list[props.index].forecast.main.temp_max
      ),
      minTemp: Math.round(response.data.list[props.index].main.temp_min),
    });
  }
  let apiKey = `c518c03770222f903df8ad86b5e217d8`;
  let unit = `metric`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.forecastCity}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(displayForecast);
  if (loaded === false) {
    return (
      <div className="Forecast">
        <div className="hourInterval">
          <div class="col-2">
            <h3 class="day">{props.time}</h3>
            <ReactAnimatedWeather
              icon="RAIN"
              color="white"
              size={50}
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
}
