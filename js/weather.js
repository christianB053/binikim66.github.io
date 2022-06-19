const API_KEY = "5954c82343e137b098970a1b4b20ed57";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = data.name;
      city.innerText = data.weather[0].main;
    });
}

function onGeoError() {
  alert("Can't find you, No Weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
