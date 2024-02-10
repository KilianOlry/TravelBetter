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

const Site = class {
  constructor() {
    this.el = document.getElementById("root");
  }

  renderHeader() {
    return `
    <header>
      <h1 class="title__section">Onygo</h1>
    </header>
    `;
  }

  renderFirstSection() {
    return `
    <section class="presentation container">
      <div class="presentation__details">
          <h2 class="presentation__details__title">Envie de décompresser</h2>
          <p class="presentation__details__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ut
              similique, sequi omnis quaerat hic minus molestiae eius, accusamus reiciendis dignissimos explicabo
              officia quae minima velit veniam praesentium perspiciatis aspernatur vitae nam itaque dolorem!
              Doloribus.</p>
          <a href="#form" class="presentation__details__link">destination
              <i class="ri-arrow-down-line"></i>
          </a>
      </div>

      <aside class="presentation__image">

      </aside>
    </section>
    `;
  }

  renderSecondSection() {
    return `
    <section class="form-container" id="form">
      <h2 class="title__section">votre destination</h2>
      <h3 class="title__section">Veuillez saisir la ville de destination</h3>
      <form action="">
          <div class="form__city">
              <input type="text" id="cityName" placeholder="ville de destination ?">
          </div>
          <button type="submit" id="validation">valider</button>
      </form>
      <div class="form-container__pictures" id="picturesCity">
        ${this.callPicturesrandom()}
      </div>
    </section>
    `;
  }

  callPicturesrandom(){
    const apiKey = '';
    let call = `https://api.unsplash.com/photos/random/?query=city&orientation=landscape&count=8&client_id=${apiKey}`;
    fetch(call)
    .then((response) => response.json())
    .then((data) => {
      this.renderPicturesRandom(data);
    })
    .catch((error) => alert("Erreur : " + error));
  }

  renderPicturesRandom(data){
    let container = document.getElementById('picturesCity');
    data.forEach(item => {
      container.innerHTML += `
        <article class= "pictureRandomCity" style="background-image: url(${item.urls.small});">
          <p>${item.location.city}</p>
        </article>
      `
      return container;
    });
  }

  run() {
    this.el.innerHTML = this.renderHeader();
    this.el.innerHTML += this.renderFirstSection();
    this.el.innerHTML += this.renderSecondSection();
  }


};

let render = new Site();
render.run();

let btn = document.getElementById("validation");

btn.addEventListener("click", (event) => {
  event.preventDefault();

  let cityName = document.getElementById("cityName").value;

  callOpenWeather(cityName);
  // callUnsplash(cityName);
});

function callOpenWeather(cityName) {
  const ApiKey = "";
  call = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${ApiKey}`;
  fetch(call)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => alert("Erreur : " + error));
}
