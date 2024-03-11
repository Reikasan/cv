export const bgArea = document.querySelector('.bg-area');
export const printArea = document.querySelector('.printArea');
export const languageSelect = document.querySelector('select#language');
// export const contentElements = document.querySelectorAll('.content-element');

export const nameEl = document.querySelector('#name .name');
export const positionEl = document.querySelector('#name .position');
export const photoEl = document.querySelector('.top #photo img');

// Contact
const contactArea = document.querySelector('.sidebar__content.contact');
export const emailEl = contactArea.querySelector('.mail a');
export const portfolioEl = contactArea.querySelector('.portfolio a');
export const githubEl = contactArea.querySelector('.github a');
export const linkedinEl = contactArea.querySelector('.linkedin a');
export const addressEl = contactArea.querySelector('.address td:nth-child(2)');
export const phoneEl = contactArea.querySelector('.phone');
export const phoneElTd = contactArea.querySelector('.phone td:nth-child(2)');

// Education
const educationArea = document.querySelector('.sidebar__content.education');
export const educationAreaTitle = educationArea.querySelector('.title');
export const educationAreaWrapper = educationArea.querySelector('.wrapper');

// Languages
export const languagesArea = document.querySelector('.sidebar__content.languages');
export const languagesAreaTitle = languagesArea.querySelector('.title');
export const languagesTableBody = languagesArea.querySelector('tbody');

// Visa
const visaEl = document.querySelector('.sidebar__content.visa');
export const visaAreaTitle = visaEl.querySelector('.title');
export const visaStatusEl = visaEl.querySelector('p');

// About Me
const aboutMeArea = document.querySelector('.main__content.about');
export const aboutMeAreaTitle = aboutMeArea.querySelector('.title');
export const aboutMeParagraph = aboutMeArea.querySelector('p');

// Skills
const skillsArea = document.querySelector('.main__content.skills');
export const skillsAreaTitle = skillsArea.querySelector('.title');
export const skillTableBody = skillsArea.querySelector('tbody');

// Experience
const experienceArea = document.querySelector('.main__content.experience');
export const experienceAreaWrapper = experienceArea.querySelector('.wrapper');
export const experienceAreaTitle = experienceArea.querySelector('.title');

// Data
export let datas = {
    name: '',
    position: '',
    photo: '',
    contactData: {},
    visa: '',
    aboutMeTitle: '',
    aboutMe: '',
    skillTitle: '',
    skills: {},
    languageTitle: '',
    languageData: {},
    educationTitle: '',
    educationData: {},
    experienceTitle: '',
    experienceData: {},
    githubProjects: {},
    githubProjectsTitle: '',
};

// Pages
export let pages = {
    printAreaHeight: 1120,
    height: 1050,
    counter: 1,
}

// Project
export const githubProjectArea = document.querySelector('.github-projects');
export const githubProjectTitle = githubProjectArea.querySelector('.title');
export const githubProjectWrapper = githubProjectArea.querySelector('.wrapper');