import "./styles.css";
import { getWeather } from "./api";
import { updateWeatherUI } from "./ui";

document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("search");
  const cityInput = document.getElementById("city");

  searchButton.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (city) {
      const data = await getWeather(city);
      updateWeatherUI(data);
    }
  });
});
