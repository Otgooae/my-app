import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

export default function (props) {
  const [forecast, setForecast] = useState("");
  const [loaded, setLoaded] = useState(true);

  function displayForecast(response) {
    console.log(response.data);
    setLoaded(false);
    setForecast({
      maxTemp: response.data.list[props.index].main.temp_max,
    });
  }
  let apiKey = `c518c03770222f903df8ad86b5e217d8`;
  let unit = `metric`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.forecastCity}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(displayForecast);
  if (loaded !== false) {
    return (
      <div className="Forecast">
        <div className="hourInterval">
          <div className="col-2">
            <h3 className="day">{props.time}</h3>
            <ReactAnimatedWeather
              icon="RAIN"
              color="white"
              size={50}
              animate={true}
            />
            {forecast.maxTemp}
          </div>
        </div>
      </div>
    );
  }
}
