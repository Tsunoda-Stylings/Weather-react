import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2>
        <div className="row">
          <div className="col-6">
            <ul>
              <li className="weekday">
                <FormattedDate date={props.data.date} />
              </li>
              <li className="humidity">Humidity: {props.data.humidity}%</li>
              <li className="wind">
                Wind Speed: {Math.round(props.data.wind)} km/h
              </li>
              <li className="text-capitalize description">
                {props.data.description}
              </li>
            </ul>
          </div>
          <div className="col-3">
            <WeatherIcon code={props.data.icon} />
          </div>
          <div className="col-3">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </h2>
    </div>
  );
}
