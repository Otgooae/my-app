import React from "react";

export default function TempUnit(props) {
  return (
    <div className="TempUnit">
      <h2>{props.temperature}</h2>
      <div className="Units">
        <a href="/" className="celsius" rel="noopener noreferrer">
          °C
        </a>{" "}
        |
        <a href="/" className="FahrenheitTemp" rel="noopener noreferrer">
          F
        </a>
      </div>
    </div>
  );
}
