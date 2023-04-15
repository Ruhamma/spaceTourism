const hamburger = document.querySelector(".nav-toggle");
console.log(hamburger);
hamburger.addEventListener("click", () => {
  document.getElementById("navigation").style.transform = "translateX(0)";
});
