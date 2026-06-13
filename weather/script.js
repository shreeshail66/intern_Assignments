const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherCard = document.getElementById("weatherCard");

// OpenWeatherMap API Key
const apiKey = "api key";

async function getWeather(city) {

    weatherCard.innerHTML = "<p>Loading...</p>";

    try {

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        const data = await response.json();

        console.log(data);

        if (!response.ok) {
            throw new Error(data.message);
        }

        const cityName = data.name;
        const country = data.sys.country;
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const description = data.weather[0].description;

        weatherCard.innerHTML = `
            <h2>${cityName}, ${country}</h2>
            <p class="weather-info">🌡 Temperature: ${temperature} °C</p>
            <p class="weather-info">💧 Humidity: ${humidity}%</p>
            <p class="weather-info">🌬 Wind Speed: ${windSpeed} m/s</p>
            <p class="weather-info">☁ Condition: ${description}</p>
        `;

    } catch (error) {

        weatherCard.innerHTML = `
            <p style="color:red;">
                Error: ${error.message}
            </p>
        `;
    }
}

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    getWeather(city);
});

cityInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchBtn.click();
    }
});