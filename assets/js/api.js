let btn = document.getElementById("validation");

btn.addEventListener("click", (event) => {
  event.preventDefault();

  let cityName = document.getElementById("cityName").value;
  callOpenWeather(cityName);
  // callUnsplash(cityName);
});

function callOpenWeather(cityName) {
  const ApiKey = "";
  call = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=fr&appid=${ApiKey}`;
  fetch(call)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
      showResults(data);
    })
    .catch((error) => alert("Erreur : " + error));
}

function showResults(data){
    let container = document.getElementById('thirdSection');
    container.style.display = "flex";
    container.innerHTML = `
      <article>
          <h4>${data.name}<h4>
          <p>${data.main.humidity}</p>
          <p>${data.weather[0].description}</p>
          <p>${data.main.feels_like}</p>
          <img src= "http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="${data.weather[0].description}">
      </article>
    `
  }

// function callUnsplash(cityName) {
//   apiKeyUnsplash = "";
//   call = `https://api.unsplash.com/search/photos?page=1&query=${cityName}&client_id=${apiKeyUnsplash}`;
//   fetch(call)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       test(data.results[0].urls.small);
//     })
//     .catch((error) => alert("Erreur : " + error));
// }

// function test(data) {
//   let img = document.getElementById("img");
//   img.setAttribute("src", data);
// }