import "./styles.css";
import { getWeather } from "./api";
import { updateWeatherUI } from "./ui";

document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("search");
  const cityInput = document.getElementById("city");
  const weatherBox = document.getElementById("weather");
  const weatherContainer = document.querySelector(".weather-container")

  searchButton.addEventListener("click", async () => {
    weatherContainer.style.display = "flex";
    const city = cityInput.value.trim().replace(/\s+/g, '');
    console.log("City",city);
    if (city) {
      weatherBox.innerHTML = "<p>Loading...</p>"; // Show loading text
      const data = await getWeather(city);
      updateWeatherUI(data);
    }
  });
});
