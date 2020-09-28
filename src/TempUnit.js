import React, { useState } from "react";

export default function TempUnit(props) {
  const [temperature, setTemperature] = useState(null);
  function setCelsiusTemp(event) {
    event.preventDefault();
    setTemperature(Math.round(props.temperature));
  }
  function setFahrenheitTemp(event) {
    event.preventDefault();
    setTemperature(Math.round((props.temperature * 9) / 5 + 32));
  }
  return (
    <div className="TempUnit">
      {temperature}
      <a href="/" className="celsiusTemp" onClick={setCelsiusTemp}>
        °C
      </a>{" "}
      |{" "}
      <a href="/" className="FahrenheitTemp" onClick={setFahrenheitTemp}>
        F
      </a>
    </div>
  );
}
