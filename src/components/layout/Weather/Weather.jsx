import React, { useState } from "react"
import "./Weather.css"

const Weather = (props) => {
    const [weather] = useState({})
    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
    
        return `${day} ${date} ${month} ${year}`
      }

    return (
    <>
      {typeof weather.main != "undefined" ? (
        <div>
          <div className="location-box">
            <div className="location">
              {weather.name}, {weather.sys.country}
            </div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-info my-4">
            <div className="col-12 col-md-3 temp mb-3 mb-md-0 rounded mr-4">
              {weather.main.temp}°c
            </div>
            <div className="col-12 col-md-3  mb-4 moisture rounded">
              {weather.main.humidity}%
            </div>
            <div className="weather">
              {weather.weather[0].main}
              <br />
              <span className="text-default">
                ({weather.weather[0].description})
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-default">Data not found! Please try again.</div>
      )}
    </>
  )
}

export default Weather