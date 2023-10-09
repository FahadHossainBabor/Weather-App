const apikey = "8ba306e410f652634c0b676d16d53211";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const inputField = document.getElementById("input-field");
const searchField = document.getElementById("search-btn");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);
  if (response.status === 404) {
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.weather').style.display = 'none';
  } else {
    const data = await response.json();

    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp);
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed;

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "./Images/clouds.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "./Images/rain.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "./Images/clear.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "./Images/snow.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "./Images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "./Images/mist.png";
    } else if (data.weather[0].main == "Haze") {
      weatherIcon.src = "./Images/haze.png";
    } else {
      // Handle other weather conditions or set a default image
      weatherIcon.src = "./Images/default.webp";
    }

    document.querySelector('.weather').style.display = 'block';
    document.querySelector('.error').style.display = 'none';
  }
}

searchField.addEventListener("click", () => {
  checkWeather(inputField.value);
});
