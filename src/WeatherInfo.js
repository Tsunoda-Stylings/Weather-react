import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <p className="time"></p>
      <h2>
        <div className="row">
          <div className="col-6">
            <ul>
              <li class="weekday">
                <FormattedDate date={props.data.date} />
              </li>
              <li class="humidity">Humidity: {props.data.humidity}%</li>
              <li class="wind">
                Wind Speed: {Math.round(props.data.wind)} km/h
              </li>
              <li class="text-capitalize description">
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
