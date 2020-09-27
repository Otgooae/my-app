import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

export default function (props) {
  return (
    <div className="Forecast">
      <div className="hourInterval">
        <h1>Mon</h1>
        <ReactAnimatedWeather
          icon={"RAIN"}
          color="white"
          size={150}
          animate={true}
        />
        <h3>30/15</h3>
      </div>
    </div>
  );
}
