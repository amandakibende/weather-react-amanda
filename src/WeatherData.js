import React from "react";
import GetDate from "./GetDate";
import AnimatedIcon from "./AnimatedIcon";
import ConverUnit from "./ConvertUnit";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          {" "}
          <GetDate date={props.data.date} />
        </li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <AnimatedIcon code={props.data.icon} />
              <ConverUnit celsius={props.data.temperature} />
            </div>

            <div className="col"></div>
          </div>
        </div>

        <div className="col-6">
          <ul>
            <li>Description: {props.data.description}</li>
            <li>Humidity: {Math.round(props.data.humidity)} %</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
