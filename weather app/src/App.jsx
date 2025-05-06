import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [temp, setTemp] = useState("27°C");
  const [weatherData, setWeatherData] = useState(false);
  const [city, setCity] = useState("Delhi");
  const [descrip, setDescrip] = useState("Clear Sky");
  const [humidity, setHumidity] = useState(45);
  const [wind, setWind] = useState(10);

  const data = new Date();
  const fulldate = data.toLocaleDateString();
  // api key**********************************
  const apiKey = "9769b4424fd6da836ec9c6f9e4d787ec";

  const fetchWatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      console.log(city);
      const data = await response.json();
      setWeatherData(data);
      console.log(data);
    } catch (error) {
      console.log("Error fetching weather data:", error);
    }
  };

  function handelInputChange(e) {
    setCity(e.target.value);
  }
  // handesubmit function ***************************
  function handleSubmit(e) {
    e.preventDefault();
    fetchWatherData();
  }
  useEffect(() => {
    fetchWatherData();
  }, []);

  return (
    <>
      {weatherData.main ? (
        <div className="weather-app">
          <h1 className="container_date">{fulldate}</h1>
          <h1>Weather in {weatherData.name}</h1>
          <div className="weather-info">
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
              alt={`${weatherData.weather[0].description} icon`}
            />
            <div className="temp">
              {(weatherData.main.temp - 273.15).toFixed(2)}°C
            </div>
            <div className="description">{weatherData.weather[0].main}</div>
            <div className="details">
              <p>Humidity: {weatherData.main.humidity}%</p>
              <p>Wind: {weatherData.wind.speed} km/h</p>
            </div>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Enter your City"
                onChange={handelInputChange}
              />
            </div>
            <button className="btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      ) : (
        <h1 className="not-found">City not found</h1>
      )}
    </>
  );
}
export default App;
