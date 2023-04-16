const hamburger = document.querySelector(".nav-toggle");
const nav = document.querySelector("#navigation");
hamburger.addEventListener("click", () => {
  nav.classList.toggle("t-zero");
  if (nav.classList.contains("t-zero")) {
    hamburger.style.backgroundImage =
      '  url("../../img/shared/icon-close.svg")';
  }else{
     hamburger.style.backgroundImage =
       '  url("../../img/shared/icon-hamburger.svg")';
  }
});
