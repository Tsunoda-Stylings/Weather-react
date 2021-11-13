import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import Time from "./Time";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.city);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "c6f8ef4575250284954db9f4dfa7a996";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="weather-app">
          <div className="Weather">
            <header>The Weather Forecast in</header>
            <h1>{weatherData.city}</h1>
            <p class="time">
              <Time date={weatherData.date} />
            </p>
            <div className="container">
              <h2>
                <div className="row">
                  <div className="col-6">
                    <ul>
                      <li class="weekday">
                        <FormattedDate date={weatherData.date} />
                      </li>
                      <li class="humidity">
                        Humidity: {weatherData.humidity}%
                      </li>
                      <li class="wind">Wind Speed: {weatherData.wind}km/h</li>
                      <li class="text-capitalize description">
                        {weatherData.description}
                      </li>
                    </ul>
                  </div>
                  <div className="col-2">
                    <img
                      src={weatherData.icon}
                      alt={weatherData.description}
                      class="icon"
                      id="icon"
                    ></img>
                  </div>
                  <div className="col-1">
                    <main class="current">
                      {Math.round(weatherData.temperature)}℃
                    </main>
                  </div>
                </div>
              </h2>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="search-form mb-3">
          <div className="d-flex justify-content-center">
            <input
              type="search"
              className="search"
              id="searchInput"
              placeholder="Enter your city"
              autoComplete="off"
              autoFocus="on"
              onChange={handleCityChange}
            />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
        </form>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
