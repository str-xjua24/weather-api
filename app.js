const API_KEY = "ef9db5b0c2f04274ae4210353230207";
let locationQuery = "";
const searchbarLocation = document.getElementById("searchbar");
const searchBtn = document.getElementById("search-btn");
const currLocation = document.getElementById("location-name");
const conditionText = document.getElementById("condition-text");
const weatherIcon = document.getElementById("weather-icon");
const tempFarenheit = document.getElementById("temp-farenheit");
const tempCelsius = document.getElementById("temp-celsius");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

function getSearchString() {
  if (searchbarLocation.value === "") return;

  locationQuery = searchbarLocation.value;
}

function getWeather() {
  getSearchString();
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${locationQuery}`
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
      currLocation.textContent = `${res.location.name}, ${res.location.region}`;
      conditionText.textContent = res.current.condition.text;
      weatherIcon.src = res.current.condition.icon;
      tempFarenheit.textContent = `${res.current.temp_f} F`;
      tempCelsius.textContent = `${res.current.temp_c} C`;
      humidity.textContent = `${res.current.humidity}%`;
      wind.textContent = `${res.current.wind_kph} KPH`;
    })
    .catch((err) => {
      console.log(err);
    });
}

searchBtn.addEventListener("click", getWeather);
