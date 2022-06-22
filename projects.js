const project = [
  //  card one
  {
      image: './Image/Snapshoot Portfolio (3).svg',
      articleTitle: 'Multi-Post Stories',
      languages: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
      seeProject: 'See Project',
      Links: ['codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry",
      title: 'Keeping track of hundreds of components',
      liveLink: 'https://github.com/Prisca-tech/Portfolio',
      sourceLink: 'https://github.com/Prisca-tech'
  },
  
  //  card two
  {
      image: './Image/Container/Snapshoot Portfolio.svg',
      articleTitle: 'Multi-Post Stories',
      languages: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
      seeProject: 'See Project',
      Links: ['codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry",
      title: 'Keeping track of hundreds of components',
      liveLink: 'https://github.com/Prisca-tech/Portfolio',
      sourceLink: 'https://github.com/Prisca-tech'
  },
  
  //  card three
  {
      image: './Image/Snapshoot Portfolio (3).svg',
      articleTitle: 'Multi-Post Stories',
      languages: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
      seeProject: 'See Project',
      Links: ['codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      title: 'Keeping track of hundreds of components',
      liveLink: 'https://github.com/Prisca-tech/Portfolio',
      sourceLink: 'https://github.com/Prisca-tech'
  },
  
  //  card four
  {
      image: './Image/Container/Snapshoot Portfolio.svg',
      articleTitle: 'Multi-Post Stories',
      languages: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
      seeProject: 'See Project',
      Links: ['codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry",
      title: 'Keeping track of hundreds of components',
      liveLink: 'https://github.com/Prisca-tech/Portfolio',
      sourceLink: 'https://github.com/Prisca-tech'
  },
  
  //  card five
  {
      image: './Image/Snapshoot Portfolio (3).svg',
      articleTitle: 'Multi-Post Stories',
      languages: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
      seeProject: 'See Project',
      Links: ['codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry",
      title: 'Keeping track of hundreds of components',
      liveLink: 'https://github.com/Prisca-tech/Portfolio',
      sourceLink: 'https://github.com/Prisca-tech'
  },
  
  //  card six
  {
      image: './Image/Container/Snapshoot Portfolio.svg',
      articleTitle: 'Multi-Post Stories',
      languages: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
      seeProject: 'See Project',
      Links: ['codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry",
      title: 'Keeping track of hundreds of components',
      liveLink: 'https://github.com/Prisca-tech/Portfolio',
      sourceLink: 'https://github.com/Prisca-tech'
  }
  ];
  
  const projectContainer = document.getElementById('project-container')
  
  const projectCards = project.map((card)=>
    // const projects = document.createElement('div')
      `<div class="projects">
      <div class="project-image"></div>
      <div class="project-description">
        <h4>
          ${card.articleTitle} <br />
          Gain+Glory
        </h4>
        <ul class="languages">
          ${card.languages.map((technology) => `<li>${technology}</li>`).join('')}
        </ul>
        <button type="button" class="button modal-button" id="modal-btn">See Project</button>
        </div>
    </div>`
  ).join('');
  
  projectContainer.innerHTML += projectCards
  
  const cardModal = project.map((card) => ` <div class="project-card-bg">
      <div class="project-card">
        <button type="button" class="close-project"><i class="fa-solid fa-xmark"></i></button>
        <div class="project-thumbnail">
          <img src="${card.image}" alt="">
        </div>
        <div class="project-info">
          <div class="heading-tools">
            <h4 class="project-card-heading">${card.title}</h4>
            <ul class="flex-list">
             ${card.Links.map((technology) => `<li>${technology}</li>`).join('')}
            </ul>
          </div>
        </div>
        <p class="project-description">${card.description}</p>
        <div class="project-buttons">
            <a  class="button project-button" href="${card.liveLink}">See Live
              <img src="./Image/live-icon.svg" alt="">
            </a>
            <a class="button project-button" href="${card.sourceLink}">See Source
            <i class="fa-brands fa-github"></i>
            </a>
        </div>
      </div>
    </div>`);
  
  
  const buttons = Array.from(document.querySelectorAll('.modal-button'));
  const modalDiv = document.querySelector('.modal-div');
  
  function closeProject() {
    const closeBtn = document.querySelector('.close-project');
    const modalContainer = document.querySelector('.project-card-bg');
    closeBtn.addEventListener('click', () => {
      modalContainer.remove();
    });
  }
  // ===check for Each button and show its relative Modal===//
  for (let i = 0; i < buttons.length; i += 1) {
    if (i % 2 === 0) {
      buttons[i].addEventListener('click', () => {
        modalDiv.innerHTML += cardModal[i];
        closeProject();
      });
    } else {
      buttons[i].addEventListener('click', () => {
        modalDiv.innerHTML += cardModal[i];
        closeProject();
      });
    }
  }
  
  
  