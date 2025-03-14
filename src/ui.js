export function updateWeatherUI(data) {
    const weatherContainer = document.getElementById('weather');
    if (!data) {
        weather.innerHTML = `<p>City not found</p>`;
        return;
    }

    const iconUrl = ` https://raw.githubusercontent.com/visualcrossing/WeatherIcons/58c79610addf3d4d91471abbb95b05e96fb43019/SVG/1st%20Set%20-%20Color/${data.days[0].icon}.svg`;

    weatherContainer.innerHTML = `
    <h2>${data.resolvedAddress}</h2>
    <p>Temperature: ${((data.days[0].temp - 32) * 5 / 9).toPrecision(2)}°C</p>
    <img src="${iconUrl}" class="weather-icon" alt="${data.days[0].conditions}">
    <p>Weather: ${data.days[0].description}</p>
  `;
}