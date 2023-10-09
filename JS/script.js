// API key and URL for OpenWeatherMap
const apikey = "8ba306e410f652634c0b676d16d53211";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

// Get DOM elements by their IDs
const inputField = document.getElementById("input-field");
const searchField = document.getElementById("search-btn");
const weatherIcon = document.querySelector(".weather-icon");

// Function to check the weather for a given city
async function checkWeather(city) {
  // Fetch weather data from the API
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);
  const data = await response.json();
  console.log(data);

  // Update the weather information in the DOM
  document.querySelector(".city").innerText = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp);
  document.querySelector(".humidity").innerHTML = data.main.humidity;
  document.querySelector(".wind").innerHTML = data.wind.speed;

  // Set the weather icon based on the weather condition
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
  } else {
    // Handle other weather conditions or set a default image
    weatherIcon.src = "./Images/default.webp";
  }
}

// Event listener for the search button
searchField.addEventListener("click", () => {
  checkWeather(inputField.value);
});
