import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather
        city="Shibukawa"
        time="1:00"
        weekday="Thursday"
        humidity="60"
        wind="2"
        description="Cloudy"
        actualDegree="29"
      />

      <form className="search-form mb-3">
        <div className="d-flex justify-content-center">
          <input
            type="search"
            className="search"
            id="searchInput"
            placeholder="Enter your city"
            autoComplete="off"
            autoFocus="on"
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
      <div className="row justify-content-evenly">
        <div className="col-3">
          <span
            id="celsius"
            button
            type="button"
            className="btn btn-secondary btn-lg"
          >
            °C
          </span>
        </div>
        <div className="col-5">
          <button
            type="button"
            className="btn btn-success"
            id="current-location-button"
          >
            CURRENT LOCATION
          </button>
        </div>
        <div className="col-3">
          <span
            id="fahrenheit"
            type="button"
            className="btn btn-warning btn-lg"
          >
            °F
          </span>
        </div>
      </div>
      <p className="info">
        This page was built and coded by
        <a
          href="https://www.linkedin.com/in/jasmine-tsunoda89/"
          target="_blank"
          rel="noreferrer"
        >
          Jasmine Tsunoda
        </a>
        using
        <a
          href="https://github.com/Tsunoda-Stylings/Weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-Source Code
        </a>
        .
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
