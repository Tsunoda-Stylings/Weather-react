import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather
          city="Shibukawa"
          time="1:00"
          weekday="Thursday"
          humidity="60"
          wind="2"
          description="Cloudy"
          actualDegree="29"
        />
        
        <p className="info">
          This page was built and coded by&nbsp;
          <a
            href="https://www.linkedin.com/in/jasmine-tsunoda89/"
            target="_blank"
            rel="noreferrer"
          >
            &nbsp;Jasmine Tsunoda
          </a>
          &nbsp;using&nbsp;
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
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
