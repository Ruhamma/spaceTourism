/*Mobile device menu*/
const hamburger = document.querySelector(".nav-toggle");
const nav = document.querySelector("#navigation");
hamburger.addEventListener("click", () => {
  nav.classList.toggle("t-zero");
  if (nav.classList.contains("t-zero")) {
    hamburger.style.backgroundImage =
      '  url("../../img/shared/icon-close.svg")';
  } else {
    hamburger.style.backgroundImage =
      '  url("../../img/shared/icon-hamburger.svg")';
  }
});

/*Destination page scene change*/
const destinations = document.querySelectorAll(".destinations");
const planetName = document.getElementById("planetName");
const desc = document.getElementById("desc");
const distance = document.getElementById("distance");
const travel = document.getElementById("travel");
const planetImage = document.getElementById("planet-image");
const tabContainer = document.getElementById("tabContainer");

function changeScene(data, i) {
  distance.innerHTML = data.destinations[i].distance;
  planetName.innerHTML = data.destinations[i].name;
  desc.innerHTML = data.destinations[i].description;
  travel.innerHTML = data.destinations[i].travel;
  planetImage.src = data.destinations[i].images.png;
}

for (let i = 0; i < destinations.length; i++) {
  destinations[i].addEventListener("click", () => {
    console.log(tabContainer);
    tabContainer
      .querySelector('[aria-selected="true"]')
      .setAttribute("aria-selected", false);

    destinations[i].setAttribute("aria-selected", true);
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => changeScene(data, i));
  });
}

const crew = document.querySelectorAll(".crews");
const role = document.getElementById("role");
const name = document.getElementById("name");
const bio = document.getElementById("bio");
const crewImage = document.getElementById("crewImage");
const dots = document.getElementById("dots");

console.log(crew);

function changeCrewScene(data, i) {
  name.innerHTML = data.crew[i].name;
  role.innerHTML = data.crew[i].role;
  bio.innerHTML = data.crew[i].bio;
  crewImage.src = data.crew[i].images.png;
}

for (let i = 0; i < crew.length; i++) {
  crew[i].addEventListener("click", () => {
    dots
      .querySelector('[aria-selected="true"]')
      .setAttribute("aria-selected", false);

    crew[i].setAttribute("aria-selected", true);
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => changeCrewScene(data, i));
  });
}

const nmbr = document.querySelectorAll(".nmbr");
const nmbrLink = document.querySelector(".nmbr-link");
const techName = document.getElementById("techName");
const techDesc = document.getElementById("techDesc");
const vehicleImage = document.getElementById("vehicle-image");

function changeNmbrScene(data, i) {
  techName.innerHTML = data.technology[i].name;
  techDesc.innerHTML = data.technology[i].description;
  vehicleImage.src = data.technology[i].images.portrait;
  console.log(vehicleImage.src);
}


for (let i = 0; i < nmbr.length; i++) {
  nmbr[i].addEventListener("click", () => {
    nmbrLink
      .querySelector('[aria-selected="true"]')
      .setAttribute("aria-selected", false);

    nmbr[i].setAttribute("aria-selected", true);
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => changeNmbrScene(data, i));
  });
}
