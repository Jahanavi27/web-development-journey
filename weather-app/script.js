async function getWeather() {

    let city =
        document.getElementById("cityInput").value;

    if (city === "") {

        alert("Please enter a city name");
        return;

    }

    // Replace with your API Key
    const apiKey = "f0ab0399ee1d10c13698a6c832f8df8b";

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        document.getElementById("weatherResult").innerHTML =
            "<p>Loading weather...</p>";

        const response =
            await fetch(url);

        const data =
            await response.json();

        if (data.cod != 200) {

            document.getElementById("weatherResult").innerHTML =
                "<p>City not found ❌</p>";

            return;

        }

        document.getElementById("weatherResult").innerHTML =
        `
        <h2>${data.name}</h2>

        <p>
            🌡 Temperature:
            ${data.main.temp}°C
        </p>

        <p>
            💧 Humidity:
            ${data.main.humidity}%
        </p>

        <p>
            ☁ Weather:
            ${data.weather[0].description}
        </p>

        <p>
            🌬 Wind Speed:
            ${data.wind.speed} m/s
        </p>
        `;

    }
    catch (error) {

        document.getElementById("weatherResult").innerHTML =
            "<p>Error fetching weather data ❌</p>";

        console.log(error);

    }

}