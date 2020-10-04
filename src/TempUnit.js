import React, { useState } from "react";
import "./TempUnit.css";
export default function TempUnit(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahr(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.temperature * 9) / 5 + 32;
  }
  if (unit === `celsius`) {
    return (
      <div className="TempUnit">
        <span className="Temp">{Math.round(props.temperature)}</span>
        <div className="Units">
          <span>
            {" "}
            °C |{" "}
            <a
              href="/"
              className="FahrenheitTemp"
              onClick={showFahr}
              rel="noopener noreferrer"
            >
              °F
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="TempUnit">
        <span className="Temp">{Math.round(fahrenheit())}</span>
        <div className="Units">
          <span>
            <a
              href="/"
              className="celsius"
              rel="noopener noreferrer"
              onClick={showCelsius}
            >
              °C
            </a>{" "}
            | °F{" "}
          </span>
        </div>
      </div>
    );
  }
}
