import { useState } from "react";
import React, { useState } from "react";

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
    (props.temperature * 9) / 5 + 32;
  }
  if (unit === `celsius`) {
    return (
      <div className="TempUnit">
        <h2>{Math.round(props.temperature)}</h2>
        <div className="Units">
          <span>
            °C |
            <a
              href="/"
              className="FahrenheitTemp"
              onClick={showFahr}
              rel="noopener noreferrer"
            >
              F
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="TempUnit">
        <h2>{Math.round(fahrenheit())}</h2>
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
            | F{" "}
          </span>
        </div>
      </div>
    );
  }
}
