import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import SearchEngine from "./SearchEngine";
function App() {
  const [weather, setWeather] = useState("");
  const [date, setDate] = useState(null);
  function showWeather(response) {
    console.log(response.data);
    console.log(response.data.dt * 1000);
    setWeather({
      city: response.data.main.name,
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
    setDate(response.data.dt * 1000);
  }
  let apiKey = "a65dcb5eff2739b507931b36f4d9c30c";
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Ulaanbaatar&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showWeather);
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <SearchEngine
            city={weather.city}
            icon="CLEAR_DAY"
            temperature={weather.temp}
            date={date}
          />
        </header>
      </div>
    </div>
  );
}

export default App;
