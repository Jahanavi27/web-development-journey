import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const apiKey = "f0ab0399ee1d10c13698a6c832f8df8b";

  const getWeather = async () => {
    if (city === "") return;

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const data = await response.json();

    setWeather(data);
  };

  return (
    <div className="container">
      <div className="weather-card">
        <h1>Weather App</h1>

        <input
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button onClick={getWeather}>Search</button>

        {weather && weather.main && (
          <div className="weather-info">
            <h2>{weather.name}</h2>

            <p>
              Temperature: {weather.main.temp}°C
            </p>

            <p>
              Weather: {weather.weather[0].main}
            </p>

            <p>
              Humidity: {weather.main.humidity}%
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;