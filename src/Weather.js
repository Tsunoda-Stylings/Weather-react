import React from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  return (
    <div class="container">
      <div class="weather-app">
        <div class="Weather">
          <header>The Weather Forecast in</header>
          <h1>{props.city}</h1>
          <p class="time">{props.time}</p>
          <div class="container">
            <h2>
              <div class="row">
                <div class="col-6">
                  <ul>
                    <li class="weekday">Today is {props.weekday}</li>
                    <li class="humidity">Humidity: {props.humidity}%</li>
                    <li class="wind">Wind Speed: {props.wind}km/h</li>
                    <li class="description">{props.description}</li>
                  </ul>
                </div>
                <div class="col-2">
                  <img
                    src="https://openweathermap.org/img/wn/10d@2x.png"
                    alt="Cloudy"
                    class="icon"
                    id="icon"
                  ></img>
                </div>
                <div class="col-1">
                  <main class="current">{props.actualDegree}℃</main>
                </div>
              </div>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
