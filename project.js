const project = [
  //  card one
  {
    image: "./Image/Container/Snapshoot Portfolio.svg",
    articleTitle: "Multi-Post Stories",
    languages: ["Ruby on rails", "CSS", "JavaScript", "HTML"],
    seeProject: "See Project",
    Links: [
      "codekit",
      "Github",
      "Javascript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry",
    dskHeading: "Keeping track of hundreds of components",
    liveLink: "https://github.com/Prisca-tech/Portfolio",
    sourceLink: "https://github.com/Prisca-tech",
  },

  //  card two
  {
    image: "./Image/Snapshoot Portfolio (1).svg",
    articleTitle: "Multi-Post Stories",
    languages: ["Ruby on rails", "CSS", "JavaScript", "HTML"],
    seeProject: "See Project",
    Links: [
      "codekit",
      "Github",
      "Javascript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry",
    title: "Keeping track of hundreds of components",
    liveLink: "https://github.com/Prisca-tech/Portfolio",
    sourceLink: "https://github.com/Prisca-tech",
  },

  //  card three
  {
    image: "./Image/Snapshoot Portfolio (1).svg",
    articleTitle: "Multi-Post Stories",
    languages: ["Ruby on rails", "CSS", "JavaScript", "HTML"],
    seeProject: "See Project",
    Links: [
      "codekit",
      "Github",
      "Javascript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    title: "Keeping track of hundreds of components",
    liveLink: "https://github.com/Prisca-tech/Portfolio",
    sourceLink: "https://github.com/Prisca-tech",
  },

  //  card four
  {
    image: "./Image/Container/Snapshoot Portfolio.svg",
    articleTitle: "Multi-Post Stories",
    languages: ["Ruby on rails", "CSS", "JavaScript", "HTML"],
    seeProject: "See Project",
    Links: [
      "codekit",
      "Github",
      "Javascript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry",
    title: "Keeping track of hundreds of components",
    liveLink: "https://github.com/Prisca-tech/Portfolio",
    sourceLink: "https://github.com/Prisca-tech",
  },

  //  card five
  {
    image: "./Image/Snapshoot Portfolio (1).svg",
    articleTitle: "Multi-Post Stories",
    languages: ["Ruby on rails", "CSS", "JavaScript", "HTML"],
    seeProject: "See Project",
    Links: [
      "codekit",
      "Github",
      "Javascript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry",
    title: "Keeping track of hundreds of components",
    liveLink: "https://github.com/Prisca-tech/Portfolio",
    sourceLink: "https://github.com/Prisca-tech",
  },

  //  card six
  {
    image: "./Image/Container/Snapshoot Portfolio.svg",
    articleTitle: "Multi-Post Stories",
    languages: ["Ruby on rails", "CSS", "JavaScript", "HTML"],
    seeProject: "See Project",
    Links: [
      "codekit",
      "Github",
      "Javascript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry",
    title: "Keeping track of hundreds of components",
    liveLink: "https://github.com/Prisca-tech/Portfolio",
    sourceLink: "https://github.com/Prisca-tech",
  },
];

const projectContainer = document.getElementById("project-container");
const projectCards = project
  .map(
    (card) =>
      `<div class="projects">
    <div class="project-image"></div>
    <div class="project-description">
      <h4>
        ${card.articleTitle} <br />
        Gain+Glory
      </h4>
      <ul class="languages">
        ${card.languages.map((technology) => `<li>${technology}</li>`).join("")}
      </ul>
      <button type="button">${card.seeProject}</button>
    </div>
  </div>`
  )
  .join("");

projectContainer.innerHTML += projectCards;

// modal section

const modal = project.map(() => {
  `<div class="project-card-bg">
    <div class="project-card">
      <button type="button" class="close-project"><i class="fa-solid fa-xmark"></i></button>
      <div class="project-thumbnail">
        <img src="${card.image}" alt=""/>
      </div>
      <div class="project-info">
        <div class="heading-tools">
          <h4 class="project-card-heading">${card.title}</h4>
          <ul class="flex-list">
           ${card.technologies
             .map((technology) => `<li>${technology}</li>`)
             .join("")}
          </ul>
        </div>
        <div class="project-buttons">
          <a  class="button project-button" href="${card.liveLink}">See Live
            <img src="./resource/see-live-icon.svg" alt=""/>
          </a>
          <a class="button project-button" href="${card.sourceLink}">See Source
            <img src="./resource/github_icon.svg" alt=""/>
          </a>
      </div>
      </div>
      <p class="project-description">${card.description}</p>
    </div>
  </div>`;
});
const btn = Array.from(document.querySelectorAll(".project-button"));

const email = form.elements["email"];
let emailAddress = email.value;

function showMessage(input, message, type) {
  const msg = input.parentNode.querySelector(".form-button");
  msg.innerText = message;
  input.className = type ? "success" : "error";
  return type;
}
function showError(input, message) {
  return showMessage(input, message, false);
}
function showSuccess(input) {
  return showMessage(input, "", true);
}
function hasValue(input, message) {
  if (input.value.trim() === "") {
    return showError(input, message);
  }
  return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
  // check if the value is not empty
  if (!hasValue(input, requiredMsg)) {
    return false;
  }
  // validate email format
  const myRegex = /[A-Z]/;

  const email = input.value.trim();
  if (myRegex.test(email)) {
    return showError(input, invalidMsg);
  }
  return true;
}
const form = document.getElementById("personal-info");
const EMAIL_INVALID = "Please enter a correct email address format";
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // validate the form
  let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
  let emailValid = validateEmail(
    form.elements["email"],
    EMAIL_REQUIRED,
    EMAIL_INVALID
  );
  // if valid, submit the form.
  if (nameValid && emailValid) {
    form.submit();
  }
});