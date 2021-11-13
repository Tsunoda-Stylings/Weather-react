import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let year = props.date.getFullYear();
  let day = days[props.date.getDay()];
  let month = months[props.date.getMonth()];
  let date = props.date.getDate();

  return (
    <div>
     Today is {day}, {month} {date}, {year}
    </div>
  );
}
