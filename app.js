const API_KEY = "ef9db5b0c2f04274ae4210353230207";
const currLocation = document.getElementById("location-name");
const weatherIcon = document.getElementById("weather-icon");
const tempFarenheit = document.getElementById("temp-farenheit");
const tempCelsius = document.getElementById("temp-celsius");

function getWeather() {
  fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=la`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
      currLocation.textContent = `${res.location.name}, ${res.location.region}`;
      weatherIcon.src = res.current.condition.icon;
      tempFarenheit.textContent = res.current.temp_f;
      tempCelsius.textContent = res.current.temp_c;
    })
    .catch((err) => {
      console.log(err);
    });
}

getWeather();
