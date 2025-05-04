import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [temp, setTemp] = useState("27°C");
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Delhi");
  const [descrip, setDescrip] = useState("Clear Sky");
  const [humidity, setHumidity] = useState(45);
  const [wind, setWind] = useState(10);

  const data = new Date();
  const fulldate = data.toLocaleDateString();
  // api key**********************************
  const apiKey = "9a0b0d6e80266bb1518f27344bbd9e66";

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
    {weatherData && (<>
      <div className="weather-app">
        <h1 className="container_date">{fulldate}</h1>

        <h1>Weather in {weatherData.name} </h1>
        <div className="weather-info">
          <img
            src="https://openweathermap.org/img/wn/01d.png"
            alt="Sunny icon"
          />
          <div className="temp">{weatherData.main.temp}</div>
          <div className="description">{descrip}</div>
          <div className="details">
            <p>Humidity: {humidity}%</p>
            <p>Wind: {wind} km/h</p>
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

          <button
            className="btn"
            type="submit"
            // onClick={calcBmi}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
