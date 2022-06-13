const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("desktop-nav");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
});
