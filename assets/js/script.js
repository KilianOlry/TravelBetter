let btn = document.getElementById("validation");

btn.addEventListener("click", (event) => {
  event.preventDefault();

  let cityName = document.getElementById("cityName").value;

  callOPenWeather(cityName);
  callUnsplash(cityName);
});

function callOPenWeather(cityName) {
  const ApiKey = "";
  call = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${ApiKey}`;
  fetch(call)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => alert("Erreur : " + error));
}

function callUnsplash(cityName) {
  apiKeyUnsplash = "";
  call = `https://api.unsplash.com/search/photos?page=1&query=${cityName}&client_id=${apiKeyUnsplash}`
  fetch(call)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
        test(data.results[0].urls.small);
    })
    .catch((error) => alert("Erreur : " + error));
}

function test(data) {
  let img = document.getElementById("img");
  img.setAttribute("src", data);
}
