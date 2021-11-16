import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [forecastReady, setForecastReady] = useState(false);
  let [data, setData] = useState(null);

  function handleResponse(response) {
    setData(response.data.daily);
    setForecastReady(true);
  }

  if (forecastReady) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={data[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "c6f8ef4575250284954db9f4dfa7a996";
    let longitude = props.coord.lon;
    let latitude = props.coord.lat;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiURL).then(handleResponse);

    return null;
  }
}
