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

const workSection = [
  {
    image: '',
    articleTitle: 'Multi-Post Stories Gain+Glory',
    languages: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
  },

  {
    image: '',
    articleTitle: 'Multi-Post Stories Gain+Glory',
    languages: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
  },

  {
    image: '',
    articleTitle: 'Multi-Post Stories Gain+Glory',
    languages: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
  },

  {
    image: '',
    articleTitle: 'Multi-Post Stories  Gain+Glory',
    languages: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
  },

  {
    image: '',
    articleTitle: 'Multi-Post Stories  Gain+Glory',
    languages: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
  },

  {
    image: '',
    articleTitle: 'Multi-Post Stories  Gain+Glory',
    languages: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
  }
];
// const sectionT = document.getElementById('works-intro');
// const artcle1Title = document.querySelector('.project-description');
// workSection.forEach((item) => {
//   const sectionH2 = document.createElement('h2');
//   const sectionH2Text = document.createTextNode(
//     `${workSection[0].sectionTitle}`
//   );
//   sectionH2.appendChild(sectionH2Text);
//   sectionT.appendChild(sectionH2);

//   const imgS = document.createElement('IMG');
//   imgS.setAttribute('src', `${workSection[0].image.src}`);
//   imgS.setAttribute('alt', `${workSection[0].image.alt}`);
//   document.getElementById('works-intro').appendChild(imgS);

//   const ArticleOneH4 = document.createElement('h4');
//   const ArticleOneH4Text = document.createTextNode(
//     `${workSection[0].articleTitle}`
//   );
//   console.log(workSection[0].articleTitle);
//   ArticleOneH4.appendChild(ArticleOneH4Text);
//   artcle1Title.appendChild(ArticleOneH4);
// });
 const sectionC = document.querySelector('.project-image');
 const sectionH4 = document.createTextNode