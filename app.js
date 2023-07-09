const API_KEY = "ef9db5b0c2f04274ae4210353230207";

function getWeather() {
  fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=la`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

getWeather();
