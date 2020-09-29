import React, { useState } from "react";

export default function TempUnit(props) {
  return (
    <div className="TempUnit">
      <h2>{props.temperature}</h2>
      <div className="Units">
        <a href="/" className="celsius">
          °C
        </a>{" "}
        |
        <a href="/" className="FahrenheitTemp">
          F
        </a>
      </div>
    </div>
  );
}
