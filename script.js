const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("desktop-nav");
const logo = document.getElementById("logo");
const icon = document.getElementById("icon");
const about = document.getElementById("about");
const contact = document.getElementById("contact");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
  logo.style.display = "none";
  hamburger.style.display = "none";
});

icon.addEventListener("click", () => {
  menu.classList.remove("show");
  logo.style.display = "block";
  hamburger.style.display = "block";
});

about.addEventListener("click", () => {
  menu.classList.remove("show");
  logo.style.display = "block";
  hamburger.style.display = "block";
});

contact.addEventListener("click", () => {
  menu.classList.remove("show");
  logo.style.display = "block";
  hamburger.style.display = "block";
});

const myRegex = /[A-Z]/;
const form = document.getElementById("personal-info");
form.addEventListener("submit", (event) => {
  const { email } = form.elements;
  const emailAddress = email.value;
  const errM = document.querySelector("#form-valid");
  if (myRegex.test(emailAddress) === true) {
    event.preventDefault();
    const message =
      "Email field should only have <strong>lowercase</strong> letters";
    errM.innerHTML = message;
  }
});
