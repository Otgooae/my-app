import React from "react";

export default function CurrentTime(props) {
  let time = props.date;
  let hours = time.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = time.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div className="Time">
      `${hours}:${minutes}`
    </div>
  );
}
