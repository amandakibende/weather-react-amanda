import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import PreviewForecast from "./PreviewForecast";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function DisplayForecast(response) {
    setLoaded(true);
    setForecast(response.data);
  }

  if (loaded) {
    return (
      <div className="weather-forecast row">
        <PreviewForecast data={forecast.list[0]} />
        <PreviewForecast data={forecast.list[1]} />
        <PreviewForecast data={forecast.list[2]} />
        <PreviewForecast data={forecast.list[3]} />
        <PreviewForecast data={forecast.list[4]} />
        <PreviewForecast data={forecast.list[5]} />
      </div>
    );
  } else {
    let key = "b8ff265fd38bbab1d6be0d9dd9df4fc7";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.data}&appid=${key}&units=metric`;
    axios.get(url).then(DisplayForecast);

    return null;
  }
}
