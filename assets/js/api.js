let btn = document.getElementById("validation");

btn.addEventListener("click", (event) => {
  event.preventDefault();

  let cityName = document.getElementById("cityName").value;
  callOpenWeather(cityName);
  callUnsplash(cityName);
});

function callOpenWeather(cityName) {
  const ApiKey = "";
  call = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=fr&appid=${ApiKey}`;
  fetch(call)
    .then((response) => response.json())
    .then((data) => {
      renderWeatherResults(data);
    })
    .catch((error) => alert("Erreur : " + error));
}

function renderWeatherResults(data){
    let container = document.getElementById('thirdSection');
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.innerHTML = `
    <h2 class="title__section">Vous avez choisi ${data.name}</h2>
      <article class="third__section__card">
          <h4>${data.name}<h4>
          <p>${data.main.humidity} + "%"</p>
          <p>${data.weather[0].description}</p>
          <p>${data.main.feels_like} + "°C"</p>
          <img src= "http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="${data.weather[0].description}">
      </article>
    `
  }

function callUnsplash(cityName) {
  apiKeyUnsplash = "";
  call = `https://api.unsplash.com/search/photos?count=1&query=${cityName}&client_id=${apiKeyUnsplash}`;
  fetch(call)
    .then((response) => response.json())
    .then((data) => {
      test(data.results[0].urls.small);
    })
    .catch((error) => alert("Erreur : " + error));
}

function test(data) {
  let container = document.getElementById('thirdSection');
  container.innerHTML += `
  <img src= "${data}" alt="" width="300px" height="250px">
  `
}