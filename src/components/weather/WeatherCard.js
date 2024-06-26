import React, { useEffect, useState } from 'react'


const WeatherCard = ({
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,

}) => {

    const [weatherState, setWeatherState] = useState("");

    useEffect(() => {
      if (weathermood) {
        switch (weathermood) {
          case "Clouds":
            setWeatherState("wi-day-cloudy");
            break;
          case "Haze":
            setWeatherState("wi-fog");
            break;
          case "Clear":
            setWeatherState("wi-day-sunny");
            break;
          case "Mist":
            setWeatherState("wi-dust");
            break;
  
          default:
            setWeatherState("wi-day-sunny");
            break;
        }
      }
    }, [weathermood]);

//   converting the seconds into time
let sec = sunset;
// converting the seconds into milliseconds
let date = new Date(sec * 1000);
let timeStr = `${date.getHours()}:${date.getMinutes()}`;

return (
  <>
    {/* Card Section */}
    <article className="widget">
      <div className="weatherIcon">
        <i className={`wi ${weatherState}`}></i>
      </div>
      <div className="weatherInfo">
        <div className="temperature">
          <span>{Math.ceil(temp)}&deg;</span>
        </div>
        <div className="description">
          <div className="weatherCondition">{weathermood}</div>
          <div className="place">
            {name}, {country}
          </div>
        </div>
      </div>

      <div className="date">{new Date().toLocaleString()}</div>

      {/* Our 4Column Section */}
      <div className="extra-temp">
        <div className="temp-info-minmax">
          <div className="two-sided-section">
            <p>
              <i className={"wi wi-sunset"}></i>
            </p>
            <p className="extra-info-leftside">
              {timeStr} <br />
              Sunset
            </p>
          </div>
          <div className="two-sided-section">
            <p>
              <i className={"wi wi-humidity"}></i>
            </p>
            <p className="extra-info-leftside">
              {humidity} %<br />
              Humidity
            </p>
          </div>
        </div>

        <div className="weather-extra-info">
          <div className="two-sided-section">
            <p>
              <i className={"wi wi-rain"}></i>
            </p>
            <p className="extra-info-leftside">
              {pressure} Pa <br />
              Pressure
            </p>
          </div>

          <div className="two-sided-section">
            <p>
              <i className={"wi wi-strong-wind"}></i>
            </p>
            <p className="extra-info-leftside">
              {speed} m/s <br />
              Speed
            </p>
          </div>
        </div>
      </div>
    </article>
  </>
);
};

export default WeatherCard;