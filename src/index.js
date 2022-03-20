//dates
function timeDisplay() {
  let today = new Date();
  let currentDay = today.getDay();
  let currentHours = today.getHours();
  let currentMinutes = today.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  if (currentMinutes < 10) {
    return `${days[currentDay]} ${currentHours}:0${currentMinutes}`;
  } else {
    return `${days[currentDay]} ${currentHours}:${currentMinutes}`;
  }
}
let todayDisplay = document.querySelector(".todayInfo");
todayDisplay.innerHTML = timeDisplay();
// cel or Far
function fahrenheit(event) {
  event.preventDefault();
  let currentTmp = document.querySelector("#currentTmpDisplay");
  currentTmp.innerHTML = 72;
}

let fahrenheitDisplay = document.querySelector("#fahrenheitTmp");
fahrenheitDisplay.addEventListener("click", fahrenheit);

//input
function submitForm(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input");
  retrievePosition(city.value);
}
let signUpForm = document.querySelector("#CityLookUp");
signUpForm.addEventListener("submit", submitForm);

//api
function retrievePosition(city) {
  let apiKey = "9fcea006200cbfdcbad380c282e76781";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}
function showWeather(response) {
  let h1 = document.querySelector("h1");
  let tempElem = document.querySelector("#currentTmpDisplay");
  let temperature = Math.round(response.data.main.temp);
  h1.innerHTML = `${response.data.name}`;
  tempElem.innerHTML = temperature;
}

navigator.geolocation.getCurrentPosition(retrievePosition);
