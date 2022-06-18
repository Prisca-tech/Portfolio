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

const saveDetails = () => {
  const setDetails = {
   FirstName: firstName.value,
   LastName: lastName.value,  
   emailaddress: emailAddress.value,
   messages: message.value,
  };

  localStorage.setItem('storeDetails', JSON.stringify(setDetails));
};
const getStoredDetails = () => {
  const getDetails = JSON.parse(localStorage.getItem('storeDetails'));
   firstName.value = getDetails.FirstName;
   lastName.value = getDetails.LastName;
   emailAddress.value = getDetails.emailaddress;
   message.value = getDetails.messages;
  };

  if (!localStorage.getItem('savedData')) {
    const savedData = { firstName: '', lastName: '', email: '', messages: '' };
    localStorage.setItem('savedData', JSON.stringify(savedData));
  } else {
    getStoredDetails();
  }
  
  form.addEventListener('change', saveDetails);
