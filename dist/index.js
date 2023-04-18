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
