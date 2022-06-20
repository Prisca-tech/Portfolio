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