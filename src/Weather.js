import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
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
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    setCity("");
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "c6f8ef4575250284954db9f4dfa7a996";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="weather-app">
          <div className="Weather">
            <header>The Weather Forecast in</header>
            <h1>{weatherData.city}</h1>
            <small class="player">
              <iframe
                src="https://open.spotify.com/embed/playlist/6ouFe7c2VyLtHUcq3uIguP?theme=0"
                width="30%"
                height="80"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
                title="jsx-a11y/iframe-has-title"
              ></iframe>
            </small>
            <div className="container">
              <WeatherInfo data={weatherData} />
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="search-form mb-3">
          <div className="d-flex justify-content-center">
            <input
              type="search"
              className="search"
              placeholder="Enter your city"
              autoComplete="off"
              autoFocus="on"
              onChange={handleCityChange}
              value={city}
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
