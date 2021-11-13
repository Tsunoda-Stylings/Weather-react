import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="Shibukawa" />

        <p className="info mt-3">
          This page was built and coded by&nbsp;
          <a
            href="https://www.linkedin.com/in/jasmine-tsunoda89/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jasmine Tsunoda
          </a>
          &nbsp;using&nbsp;
          <a
            href="https://github.com/Tsunoda-Stylings/Weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-Source Code
          </a>{" "}
          and{" "}
          <a
            href="https://tsunodastylings-reactweatherproject.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
          .
        </p>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
