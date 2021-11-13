import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2>
        <div className="row">
          <div className="col-6">
            <ul>
              <li class="weekday">
                <FormattedDate date={props.data.date} />
              </li>
              <li class="humidity">Humidity: {props.data.humidity}%</li>
              <li class="wind">Wind Speed: {props.data.wind}km/h</li>
              <li class="text-capitalize description">
                {props.data.description}
              </li>
            </ul>
          </div>
          <div className="col-2">
            <WeatherIcon code={props.data.icon} />
          </div>
          <div className="col-1">
            <main class="current">{Math.round(props.data.temperature)}℃</main>
          </div>
        </div>
      </h2>
    </div>
  );
}
