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

const myRegex = /[A-Z]/;
const form = document.getElementById('personal-info');
form.addEventListener('submit', (event) => {
  const { email } = form.elements;
  const emailAddress = email.value;
  const errM = document.querySelector('#form-valid');
  if (myRegex.test(emailAddress) === true) {
    event.preventDefault();
    const message = 'Email field should only have <strong>lowercase</strong> letters';
    errM.innerHTML = message;
  }
});

const firstName = document.querySelector('#fname');
const lastName = document.querySelector('#Last-name');
const emailAddress = document.querySelector('#email');
const message = document.querySelector('#message');

firstName.value = localStorage.getItem('FirstName');
lastName.value = localStorage.getItem('LastName');
emailAddress.value = localStorage.getItem('emailAddress');
message.value = localStorage.getItem('message');

const formDetails = {
  firstName: firstName.value,
  lastName: lastName.value,
  emailAddress: emailAddress.value,
  message: message.value,
};
console.log(formDetails)
localStorage.setItem('formDetails', formDetails);

firstName.addEventListener('change', (event) => {
  const firstNameValue = event.target.value;
  console.log(firstNameValue)
  localStorage.setItem('FirstName', firstNameValue);
});

lastName.addEventListener('change', (event) => {
  const lastNameValue = event.target.value;
  localStorage.setItem('LastName', lastNameValue);
});

emailAddress.addEventListener('change', (event) => {
  emailAddress.value = event.target.value;
  const emailAddressValue = emailAddress.value;
  localStorage.setItem('emailAddress', emailAddressValue);
});

message.addEventListener('change', (event) => {
  const messageValue = event.target.value;
  localStorage.setItem('message', messageValue);
});
