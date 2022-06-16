const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('desktop-nav');
const logo = document.getElementById('logo');
const icon = document.getElementById('icon');
const about = document.getElementById('about');
const contact = document.getElementById('contact');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');
  logo.style.display = 'none';
  hamburger.style.display = 'none';
});

icon.addEventListener('click', () => {
  menu.classList.remove('show');
  logo.style.display = 'block';
  hamburger.style.display = 'block';
});

about.addEventListener('click', () => {
  menu.classList.remove('show');
  logo.style.display = 'block';
  hamburger.style.display = 'block';
});

contact.addEventListener('click', () => {
  menu.classList.remove('show');
  logo.style.display = 'block';
  hamburger.style.display = 'block';
});

const form = document.getElementById("personal-info");
const target = document.getElementById('form-valid')

const myRegex = /[A-Z]/;
form.addEventListener("submit", function (event) {
  const email = form.elements["email"];
  const errorMessage = ''
  const emailAddress = email.value;
if(myRegex.test(emailAddress === true)){
  event.preventDefault();
  errorMessage = "Please ensure that email is in lowercase letters"
  target.innerHTML = errorMessage
}
  
});