const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("mobile-a-links");
const logo = document.getElementById("logo");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
  logo.style.display = "none";
  hamburger.style.display = "none";
});
