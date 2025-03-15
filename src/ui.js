export function updateWeatherUI(data) {
  const weatherContainer = document.getElementById('weather');
  const hourlyContainer = document.getElementById("hourly");
  const dailyContainer = document.getElementById("daily");

  if (!data) {
    weather.innerHTML = `<p>City not found</p>`;
    return;
  }
  const today = data.days[0];
  const iconUrl = ` https://raw.githubusercontent.com/visualcrossing/WeatherIcons/58c79610addf3d4d91471abbb95b05e96fb43019/SVG/1st%20Set%20-%20Color/${today.icon}.svg`;

  //curent weather
  weatherContainer.innerHTML = `
    <h2>${data.resolvedAddress}</h2>
    <img src="${iconUrl}" class="weather-icon" alt="${data.days[0].conditions}">  
    <p>Temperature: ${((data.days[0].temp - 32) * 5 / 9).toPrecision(2)}°C</p>
    <p>Weather: ${data.days[0].description}</p>
  `;

  const currentHour = new Date().getHours();
  const upcomingHours = today.hours.filter(hour =>{
    const hourtime = parseInt(hour.datetime.split(":")[0],10);
    return hourtime >= currentHour
  });

  hourlyContainer.innerHTML = `<h3>Hourly-forecast</h3><div class = 'hourly-forecast'></div>`;
  const hourlyForecastDiv = document.querySelector(".hourly-forecast");
  upcomingHours.slice(0, 6).forEach(hour => {
    const hourIconUrl = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/58c79610addf3d4d91471abbb95b05e96fb43019/SVG/1st%20Set%20-%20Color/${hour.icon}.svg`;
    const time = new Date(`2025-01-01T${hour.datetime}`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    hourlyForecastDiv.innerHTML += `
      <div class="hour">
        <p>${time}</p>
        <img src="${hourIconUrl}" class="hourly-icon" alt="${hour.conditions}">
        <p>${((hour.temp - 32) * 5 / 9).toFixed(1)}°C</p>
      </div>
    `;
  });

  // **Daily Forecast**
  dailyContainer.innerHTML = `<h3>Daily Forecast</h3><div class="daily-forecast"></div>`;
  const dailyForecastDiv = document.querySelector(".daily-forecast");

  data.days.slice(0, 7).forEach(day => { // Show next 5 days
    const dayIconUrl = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/58c79610addf3d4d91471abbb95b05e96fb43019/SVG/1st%20Set%20-%20Color/${day.icon}.svg`;
    const date = new Date(day.datetime).toLocaleDateString('en-US', { weekday: 'short' });

    dailyForecastDiv.innerHTML += `
      <div class="day">
        <p>${date}</p>
        <img src="${dayIconUrl}" class="daily-icon" alt="${day.conditions}">
        <p>${((day.temp - 32) * 5 / 9).toFixed(1)}°C</p>
      </div>
    `;
  });

}