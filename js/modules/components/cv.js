import { bgArea, languageSelect }  from '../utils/variables.js';
import { datas, pages } from '../utils/variables.js';
import { printArea } from '../utils/variables.js';

import { renderTopElementContents } from './top.js';
import { renderContactData, renderEducationData, renderLanguageData, renderVisaStatus } from './sidebar.js';
import { renderAboutMeData, renderSkillData, renderExperienceData } from './main.js';
import { renderGithubProjects } from './project.js';
import { renderFooter } from './footer.js';

window.addEventListener('DOMContentLoaded', displayAlldata);
languageSelect.addEventListener('change', displayAlldata);

async function displayAlldata() {
    const data = selectLanguage();
    await fetchAndRenderData(data);
    adjustPrintAreaContents();
}

function fetchAndRenderData(data) {
    return fetch(data)
        .then(response => response.json())
        .then(data => {
            mapData(data);
            renderAllData();
        });
}

function selectLanguage() {
    const selectedLanguage = languageSelect.value;
    return  selectedLanguage === 'de' ? 'data/data-de.json' : 'data/data-en.json';
}

function mapData(data) {
    datas.name = JSON.parse(JSON.stringify(data.name));
    datas.position = JSON.parse(JSON.stringify(data.position));
    datas.photo = JSON.parse(JSON.stringify(data.photo));
    datas.contactData = JSON.parse(JSON.stringify(data.contact));
    datas.languageTitle = JSON.parse(JSON.stringify(data.languageTitle));
    datas.languageData = JSON.parse(JSON.stringify(data.languages));
    datas.educationTitle = JSON.parse(JSON.stringify(data.educationTitle));
    datas.educationData = JSON.parse(JSON.stringify(data.education));
    datas.visaTitle = JSON.parse(JSON.stringify(data.visaTitle));
    datas.visa = JSON.parse(JSON.stringify(data.visa));
    datas.aboutMeTitle = JSON.parse(JSON.stringify(data.aboutMeTitle));
    datas.aboutMe = JSON.parse(JSON.stringify(data.aboutMe));
    datas.skillsTitle = JSON.parse(JSON.stringify(data.skillsTitle));
    datas.skills = JSON.parse(JSON.stringify(data.skills));
    datas.experienceTitle = JSON.parse(JSON.stringify(data.experienceTitle));
    datas.experienceData = JSON.parse(JSON.stringify(data.experiences));
    datas.githubProjectsTitle = JSON.parse(JSON.stringify(data.githubTitle));
    datas.githubProjects = JSON.parse(JSON.stringify(data.githubProject));
}

function renderAllData() {
    renderTopElementContents();
    renderContactData();
    renderEducationData();
    renderLanguageData();
    renderVisaStatus();
    renderAboutMeData();
    renderSkillData();
    renderExperienceData();
    renderGithubProjects();
    renderFooter();
}


function adjustPrintAreaContents() {
    pages.counter = 1;
    let totalPageHeight = 0;
    const pageHeight = 1240;
    const contentElements = document.querySelectorAll('.content-element');

    for(let i = 0; i < contentElements.length; i++) {
        totalPageHeight += contentElements[i].offsetHeight;
        if(totalPageHeight > pages.height) {
            const marginTop = pageHeight - totalPageHeight;
            renderFooter(contentElements[i]);
            addMarginTop(contentElements[i], marginTop);
            pages.counter++;
            console.log(pages.counter);
            console.log(totalPageHeight);
            totalPageHeight = 0;  
            printArea.style.height = `${pages.counter * pages.printAreaHeight}px`;
        }
    }
}

function addMarginTop(element, margin) {
    const div = document.createElement('div');
    div.classList.add('page-top-margin');
    div.style.marginTop = `${margin}px`;
    element.parentNode.insertBefore(div, element);
}


window.onbeforeprint = function changeBackgroundHeight() {
    bgArea.style.height = `${pages.counter * pages.printAreaHeight}px`;
}